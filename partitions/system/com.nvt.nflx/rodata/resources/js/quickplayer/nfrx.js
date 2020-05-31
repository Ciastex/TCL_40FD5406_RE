/**
* @preserve Copyright (c) Microsoft Corporation.  All rights reserved.
* This code is licensed by Microsoft Corporation under the terms
* of the MICROSOFT REACTIVE EXTENSIONS FOR JAVASCRIPT AND .NET LIBRARIES License.
* See http://go.microsoft.com/fwlink/?LinkID=220762.
*/


/*
This file contains two modifications from the original.

1. The exporting of the Rx object.
   This was required for issues running in yuitest; may not be required in Mocha
2. Exposing TimeoutScheduler globally
   Many operators accept a scheduler argument. The built-in Rx.Scheduler.Timeout
   users a hard-coded zero ms delay. I exposed the TimeoutScheduler constructor
   and added the ability to pass an arbitrary delay. Replacing the scheduler
   argument with a delay() operator did yield the same call pattern.
*/

(function (global, _undefined) {
    var root,
        nothing = function () { },
        defaultNow = function () {
            return new Date().getTime();
        },
        defaultComparer = function (a, b) {
            return a === b;
        },
        identity = function (x) {
            return x;
        },
        defaultKeySerializer = function (x) {
            return x.toString();
        },
        hasProp = Object.prototype.hasOwnProperty,
        inherits = function (child, parent) {
            for (var key in parent) {
                if (key !== 'prototype' && hasProp.call(parent, key)) {
                    child[key] = parent[key];
                }
            }
            function ctor() { this.constructor = child; }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor;
            child.base = parent.prototype;
            return child;
        },
        extendObject = function (child, parent) {
            for (var key in parent) {
                if (key !== 'prototype' && hasProp.call(parent, key)) {
                    child[key] = parent[key];
                }
            }
        },
        slice = Array.prototype.slice,
        argumentOutOfRange = 'Argument out of range',
        objectDisposed = 'Object has been disposed';

    root = global.Rx = { Internals: {} };

    // If we are unit testing from within node, 'global' will be module.exports,
    // meaning we need to attach *Timeout functions from the actual global scope. --smcguire
    if (!global.setTimeout && !global.clearTimeout && setTimeout && clearTimeout) {
        global.setTimeout = setTimeout;
        global.clearTimeout = clearTimeout;
    }

    root.VERSION = '2.0.20327';

var customBind = function (thisP, fn) {
    return function () {
        return thisP[fn].apply(thisP, arguments);
    };
}
, _addRef = function (xs, r) {
    return observableCreateWithDisposable(function (observer) {
        return new CompositeDisposable(r.getDisposable(), xs.subscribe(observer));
    });
}
, _combine = function (leftSource, rightSource, combinerSelector) {
    return observableCreateWithDisposable(function (observer) {
        var leftSubscription = new SingleAssignmentDisposable(),
            rightSubscription = new SingleAssignmentDisposable(),
            combiner = combinerSelector(observer, leftSubscription, rightSubscription);
        leftSubscription.disposable(leftSource.materialize().select(function (x) {
            return { switchValue: function (l) { return l(x); } };
        }).subscribe(combiner));
        rightSubscription.disposable(rightSource.materialize().select(function (x) {
            return { switchValue: function (l, r) { return r(x); } };
        }).subscribe(combiner));
        return new CompositeDisposable(leftSubscription, rightSubscription);
    });
};
var arrayAll = function(predicate) {
    var thisp = new Object(this);
    for (var i = 0, len = thisp.length >>> 0; i < len; i++) {
        if (!predicate.call(arguments[1], thisp[i], i, thisp)) {
            return false;
        }
    }
    return true;
}, arrayWhere = function(predicate) {
    var results = [], item, thisp = new Object(this);
    for (var i = 0, len = thisp.length >>> 0; i < len; i++) {
        item = thisp[i];
        if (predicate.call(arguments[1], item, i, thisp)) {
            results.push(item);
        }
    }
    return results;
}, arrayMap = function(selector) {
    var results = [], thisp = new Object(this);
    for (var i = 0, len = thisp.length >>> 0; i < len; i++) {
        results.push(selector.call(arguments[1], thisp[i], i, thisp));
    }
    return results;
};
var argsOrArray = function(args, idx) {
    return args.length === 1 && args[idx] instanceof Array ?
            args[idx] :
            slice.call(args);
}
,List = root.Internals.List = (function () {
    function List(comparer) {
        this.comparer = comparer || defaultComparer;
        this.length = 0;
        this.items = [];
    }
    List.fromArray = function (array, comparer) {
        var l = new List(comparer);
        l.items = array.slice();
        l.length = array.length;
        return l;
    };
    List.prototype.add = function (item) {
        this.items[this.length++] = item;
    };
    List.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.length) {
            throw new Error(argumentOutOfRange);
        }
        this.items.splice(index, 1);
        this.length--;
    };
    List.prototype.indexOf = function (item) {
        for (var i = 0, len = this.items.length; i < len; i++) {
            if (this.comparer(item, this.items[i])) {
                return i;
            }
        }
        return -1;
    };
    List.prototype.remove = function (item) {
        var index = this.indexOf(item);
        if (index === -1) {
            return false;
        }
        this.removeAt(index);
        return true;
    };
    List.prototype.clear = function () {
        this.items = [];
        this.length = 0;
    };
    List.prototype.item = function (index, value) {
        if (index < 0 || index >= count) {
            throw new Error(argumentOutOfRange);
        }
        if (value === _undefined) {
            return this.items[index];
        } else {
            this.items[index] = value;
        }
    };
    List.prototype.toArray = function () {
        return this.items.slice(0);
    };
    List.prototype.contains = function (item) {
        for (var i = 0, len = this.items.length; i < len; i++) {
            if (this.comparer(item, this.items[i])) {
                return true;
            }
        }
        return false;
    };
    return List;
})();
var copyArray = function (sourceArray, sourceIndex, destinationArray, destinationIndex, count) {
    var idx = count;
    while (idx > 0) {
        destinationArray[idx + destinationIndex - 1] = sourceArray[idx + sourceIndex - 1];
        idx--;
    }
},
IndexedItem = (function () {
    function IndexedItem(id, value) {
        this.id = id;
        this.value = value;
    }
    IndexedItem.prototype.compareTo = function (other) {
        var c = this.value.compareTo(other.value);
        if (c === 0) {
            c = this.id - other.id;
        }
        return c;
    };
    return IndexedItem;
})()
, PriorityQueue = (function () {
    function PriorityQueue(capacity) {
        this.items = new Array(capacity);
        this.length = 0;
    }
    PriorityQueue.prototype.isHigherPriority = function (left, right) {
        return this.items[left].compareTo(this.items[right]) < 0;
    };
    PriorityQueue.prototype.percolate = function (index) {
        var parent, temp;
        if (index >= this.length || index < 0) {
            return;
        }
        parent = index - 1 >> 1;
        if (parent < 0 || parent === index) {
            return;
        }
        if (this.isHigherPriority(index, parent)) {
            temp = this.items[index];
            this.items[index] = this.items[parent];
            this.items[parent] = temp;
            this.percolate(parent);
        }
    };
    PriorityQueue.prototype.heapify = function (index) {
        var first, left, right, temp;
        if (index === _undefined) {
            index = 0;
        }
        if (index >= this.length || index < 0) {
            return;
        }
        left = 2 * index + 1;
        right = 2 * index + 2;
        first = index;
        if (left < this.length && this.isHigherPriority(left, first)) {
            first = left;
        }
        if (right < this.length && this.isHigherPriority(right, first)) {
            first = right;
        }
        if (first !== index) {
            temp = this.items[index];
            this.items[index] = this.items[first];
            this.items[first] = temp;
            this.heapify(first);
        }
    };
    PriorityQueue.prototype.peek = function () {
        return this.items[0].value;
    };
    PriorityQueue.prototype.removeAt = function (index) {
        var temp;
        this.items[index] = this.items[--this.length];
        delete this.items[this.length];
        this.heapify();
        if (this.length < this.items.length >> 2) {
            temp = this.items;
            this.items = new Array(this.items.length >> 1);
            copyArray(temp, 0, this.items, 0, this.length);
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        var result = this.peek();
        this.removeAt(0);
        return result;
    };
    PriorityQueue.prototype.enqueue = function (item) {
        var index, temp;
        if (this.length >= this.items.length) {
            temp = this.items;
            this.items = new Array(this.items.length * 2);
            copyArray(temp, 0, this.items, 0, temp.length);
        }
        index = this.length++;
        this.items[index] = new IndexedItem(PriorityQueue.count++, item);
        this.percolate(index);
    };
    PriorityQueue.prototype.remove = function (item) {
        for (var i = 0; i < this.length; i++) {
            if (this.items[i].value === item) {
                this.removeAt(i);
                return true;
            }
        }
        return false;
    };
    PriorityQueue.count = 0;

    return PriorityQueue;
})();

var CompositeDisposable = root.CompositeDisposable = (function () {
    function CompositeDisposable() {
        var args = argsOrArray(arguments, 0);
        this.disposables = List.fromArray(args);
        this.isDisposed = false;
        this.length = this.disposables.length;
    }

    CompositeDisposable.prototype.add = function (item) {
        if (this.isDisposed) {
            item.dispose();
        } else {
            this.disposables.add(item);
            this.length++;
        }
    };
    CompositeDisposable.prototype.remove = function (item) {
        var shouldDispose = false;
        if (!this.isDisposed) {
            shouldDispose = this.disposables.remove(item);
            this.length--;
        }
        if (shouldDispose) {
            item.dispose();
        }
        return shouldDispose;
    };
    CompositeDisposable.prototype.dispose = function () {
        var currentDisposables;
        if (!this.isDisposed) {
            this.isDisposed = true;
            currentDisposables = this.disposables.toArray();
            this.disposables.clear();
            this.length = 0;
        }
        if (currentDisposables) {
            for (var i = 0, len = currentDisposables.length; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    CompositeDisposable.prototype.clear = function () {
        var currentDisposables = this.disposables.toArray();
        this.disposables.clear();
        this.length = 0;
        for (var i = 0, len = currentDisposables.length; i < len; i++) {
            currentDisposables[i].dispose();
        }
    };
    CompositeDisposable.prototype.contains = function (item) {
        return this.disposables.contains(item);
    };
    CompositeDisposable.prototype.toArray = function () {
        return this.disposables.toArray();
    };
    return CompositeDisposable;
})();
var Disposable = root.Disposable = (function () {
    function Disposable(action) {
        this.isDisposed = false;
        this.action = action;
    }

    Disposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.action();
            this.isDisposed = true;
        }
    };

    return Disposable;
})()

, disposableCreate = Disposable.create = function (action) {
    return new Disposable(action);
}
, disposableEmpty = Disposable.empty = new Disposable(function () { });
var SingleAssignmentDisposable = root.SingleAssignmentDisposable = (function () {
    function SingleAssignmentDisposable() {
        this.isDisposed = false;
        this.current = null;
    }
    SingleAssignmentDisposable.prototype.disposable = function (value) {
        return !value ? this.getDisposable() : this.setDisposable(value);
    };
    SingleAssignmentDisposable.prototype.getDisposable = function () {
        return this.current;
    };
    SingleAssignmentDisposable.prototype.setDisposable = function (value) {
        if (this.current !== null) {
            throw new Error('Disposable has already been assigned');
        }
        var shouldDispose = this.isDisposed;
        if (!shouldDispose) {
            this.current = value;
        }
        if (shouldDispose && value !== null) {
            value.dispose();
        }
    };
    SingleAssignmentDisposable.prototype.dispose = function () {
        var old = null;
        if (!this.isDisposed) {
            this.isDisposed = true;
            old = this.current;
            this.current = null;
        }
        if (old !== null) {
            old.dispose();
        }
    };
    return SingleAssignmentDisposable;
})();
var SerialDisposable = root.SerialDisposable = (function () {
    function SerialDisposable() {
        this.isDisposed = false;
        this.current = null;
    }
    SerialDisposable.prototype.getDisposable = function () {
        return this.current;
    };
    SerialDisposable.prototype.setDisposable = function (value) {
        var shouldDispose = this.isDisposed;
        var old = null;
        if (!shouldDispose) {
            old = this.current;
            this.current = value;
        }
        if (old !== null) {
            old.dispose();
        }
        if (shouldDispose && value !== null) {
            value.dispose();
        }
    };
    SerialDisposable.prototype.disposable = function (value) {
        if (!value) {
            return this.getDisposable();
        } else {
            this.setDisposable(value);
        }
    };
    SerialDisposable.prototype.dispose = function () {
        var old = null;
        if (!this.isDisposed) {
            this.isDisposed = true;
            old = this.current;
            this.current = null;
        }
        if (old !== null) {
            old.dispose();
        }
    };
    return SerialDisposable;
})();
var RefCountDisposable = root.RefCountDisposable = (function () {
    function RefCountDisposable(disposable) {
        this.underlyingDisposable = disposable;
        this.isDisposed = false;
        this.isPrimaryDisposed = false;
        this.count = 0;
    }
    RefCountDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            if (!this.isPrimaryDisposed) {
                this.isPrimaryDisposed = true;
                if (this.count === 0) {
                    this.isDisposed = true;
                    this.underlyingDisposable.dispose();
                }
            }
        }
    };
    RefCountDisposable.prototype.getDisposable = function () {
        return this.isDisposed ? disposableEmpty : new InnerDisposable(this);
    };
    var InnerDisposable = (function () {
        function InnerDisposable(disposable) {
            this.disposable = disposable;
            this.disposable.count++;
            this.isInnerDisposed = false;
        }
        InnerDisposable.prototype.dispose = function () {
            if (!this.disposable.isDisposed) {
                if (!this.isInnerDisposed) {
                    this.isInnerDisposed = true;
                    this.disposable.count--;
                    if (this.disposable.count === 0 && this.disposable.isPrimaryDisposed) {
                        this.disposable.isDisposed = true;
                        this.disposable.underlyingDisposable.dispose();
                    }
                }
            }
        };
        return InnerDisposable;
    })();

    return RefCountDisposable;
})();
var ScheduledDisposable = (function () {
    function ScheduledDisposable(scheduler, disposable) {
        this.scheduler = scheduler;
        this.disposable = disposable;
        this.isDisposed = false;
    }
    ScheduledDisposable.prototype.dispose = function () {
        var parent = this;
        this.scheduler.schedule(function () {
            if (!parent.isDisposed) {
                parent.isDisposed = true;
                parent.disposable.dispose();
            }
        });
    };
    return ScheduledDisposable;
})();

var ScheduledItem = (function () {
    function ScheduledItem(scheduler, state, action, dueTime, comparer) {
        this.scheduler = scheduler;
        this.state = state;
        this.action = action;
        this.dueTime = dueTime;
        this.comparer = comparer || function (a, b) {
            return a - b;
        };
        this.disposable = new SingleAssignmentDisposable();
    }
    ScheduledItem.prototype.invoke = function () {
        return this.disposable.disposable(this.invokeCore());
    };
    ScheduledItem.prototype.compareTo = function (other) {
        return this.comparer(this.dueTime, other.dueTime);
    };
    ScheduledItem.prototype.isCancelled = function () {
        return this.disposable.isDisposed;
    };
    ScheduledItem.prototype.invokeCore = function () {
        return this.action(this.scheduler, this.state);
    };
    return ScheduledItem;
})();
var Scheduler = root.Scheduler = (function () {
    function Scheduler(now, schedule, scheduleRelative, scheduleAbsolute) {
        this.now = now;
        this._schedule = schedule;
        this._scheduleRelative = scheduleRelative;
        this._scheduleAbsolute = scheduleAbsolute;
    }

    var _invokeRec1 = function (scheduler, pair) {
        var state = pair.first, action = pair.second, group = new CompositeDisposable()
        , recursiveAction = function (state1) {
            action(state1, function (state2) {
                var isAdded = false
                , isDone = false
                , d = scheduler.scheduleWithState(state2, function (scheduler1, state3) {
                    if (isAdded) {
                        group.remove(d);
                    } else {
                        isDone = true;
                    }
                    recursiveAction(state3);
                    return disposableEmpty;
                });
                if (!isDone) {
                    group.add(d);
                    isAdded = true;
                }
            });
        };
        recursiveAction(state);
        return group;
    };

    var _invokeRec2 = function (scheduler, pair) {
        var state = pair.first, action = pair.second, group = new CompositeDisposable()
        , recursiveAction = function (state1) {
            action(state1, function (state2, dueTime1) {
                var d, isAdded, isDone;
                isAdded = false;
                isDone = false;
                d = scheduler.scheduleWithRelativeAndState(state2, dueTime1, function (scheduler1, state3) {
                    if (isAdded) {
                        group.remove(d);
                    } else {
                        isDone = true;
                    }
                    recursiveAction(state3);
                    return disposableEmpty;
                });
                if (!isDone) {
                    group.add(d);
                    isAdded = true;
                }
            });
        };
        recursiveAction(state);
        return group;
    };

    var _invokeRec3 = function (scheduler, pair) {
        var state = pair.first, action = pair.second, group = new CompositeDisposable()
        , recursiveAction = function (state1) {
            action(state1, function (state2, dueTime1) {
                var isAdded = false,
                    isDone = false,
                    d = scheduler.scheduleWithAbsoluteAndState(state2, dueTime1, function (scheduler1, state3) {
                        if (isAdded) {
                            group.remove(d);
                        } else {
                            isDone = true;
                        }
                        recursiveAction(state3);
                        return disposableEmpty;
                    });
                if (!isDone) {
                    group.add(d);
                    isAdded = true;
                }
            });
        };
        recursiveAction(state);
        return group;
    };

    var _invoke = function (scheduler, action) {
        action();
        return disposableEmpty;
    };

    Scheduler.prototype.schedule = function (action) {
        return this._schedule(action, _invoke);
    };
    Scheduler.prototype.scheduleWithState = function (state, action) {
        return this._schedule(state, action);
    };
    Scheduler.prototype.scheduleWithRelative = function (dueTime, action) {
        return this._scheduleRelative(action, dueTime, _invoke);
    };
    Scheduler.prototype.scheduleWithRelativeAndState = function (state, dueTime, action) {
        return this._scheduleRelative(state, dueTime, action);
    };
    Scheduler.prototype.scheduleWithAbsolute = function (dueTime, action) {
        return this._scheduleAbsolute(action, dueTime, _invoke);
    };
    Scheduler.prototype.scheduleWithAbsoluteAndState = function (state, dueTime, action) {
        return this._scheduleAbsolute(state, dueTime, action);
    };
    Scheduler.prototype.scheduleRecursive = function (action) {
        return this.scheduleRecursiveWithState(action, function (_action, self) {
            _action(function () {
                self(_action);
            });
        });
    };
    Scheduler.prototype.scheduleRecursiveWithState = function (state, action) {
        return this.scheduleWithState({ first: state, second: action }, function (s, p) {
            return _invokeRec1(s, p);
        });
    };
    Scheduler.prototype.scheduleRecursiveWithRelative = function (dueTime, action) {
        return this.scheduleRecursiveWithRelativeAndState(action, dueTime, function (_action, self) {
            _action(function (dt) {
                self(_action, dt);
            });
        });
    };
    Scheduler.prototype.scheduleRecursiveWithRelativeAndState = function (state, dueTime, action) {
        return this._scheduleRelative({ first: state, second: action }, dueTime, function (s, p) {
            return _invokeRec2(s, p);
        });
    };
    Scheduler.prototype.scheduleRecursiveWithAbsolute = function (dueTime, action) {
        return this.scheduleRecursiveWithAbsoluteAndState(action, dueTime, function (_action, self) {
            _action(function (dt) {
                self(_action, dt);
            });
        });
    };
    Scheduler.prototype.scheduleRecursiveWithAbsoluteAndState = function (state, dueTime, action) {
        return this._scheduleAbsolute({ first: state, second: action }, dueTime, function (s, p) {
            return _invokeRec3(s, p);
        });
    };

    Scheduler.now = defaultNow;
    Scheduler.normalize = function (timeSpan) {
        if (timeSpan < 0) {
            timeSpan = 0;
        }
        return timeSpan;
    };

    return Scheduler;
})();
var ImmediateScheduler = (function () {
    inherits(ImmediateScheduler, Scheduler);
    function ImmediateScheduler() {
        var scheduler = this;
        ImmediateScheduler.base.constructor.call(this, defaultNow, function (state, action) {
            return action(scheduler, state);
        }, function (state, dueTime, action) {
            while (Scheduler.normalize(dueTime) > 0) {
            }
            return action(scheduler, state);
        }, function (state, dueTime, action) {
            return scheduler.scheduleWithRelativeAndState(state, dueTime - scheduler.now(), action);
        });
    }
    return ImmediateScheduler;
})(),

immediateScheduler = Scheduler.Immediate = new ImmediateScheduler();
root.setDefaultSyncScheduler = function setDefaultSyncScheduler(scheduler) {
    immediateScheduler = scheduler;
}
root.getDefaultSyncScheduler = function getDefaultSyncScheduler() {
    return immediateScheduler;
}
root.resetDefaultSyncScheduler = function resetDefaultSyncScheduler() {
    immediateScheduler = Scheduler.Immediate;
}

var Trampoline = (function () {
    function Trampoline() {
        CurrentThreadScheduler.queue = new PriorityQueue(4);
    }
    Trampoline.prototype.dispose = function () {
        CurrentThreadScheduler.queue = null;
    };
    Trampoline.prototype.run = function () {
        var item, queue = CurrentThreadScheduler.queue;
        while (queue.length > 0) {
            item = queue.dequeue();
            if (!item.isCancelled()) {
                while (item.dueTime - Scheduler.now() > 0) { }
                if (!item.isCancelled()) {
                    item.invoke();
                }
            }
        }
    };
    return Trampoline;
})(),
CurrentThreadScheduler = (function () {
    inherits(CurrentThreadScheduler, Scheduler);
    function CurrentThreadScheduler() {
        var scheduler = this;
        CurrentThreadScheduler.base.constructor.call(this, defaultNow, function (state, action) {
            return scheduler.scheduleWithRelativeAndState(state, 0, action);
        }, function (state, dueTime, action) {
            var dt = scheduler.now() + Scheduler.normalize(dueTime),
                queue = CurrentThreadScheduler.queue,
                si = new ScheduledItem(scheduler, state, action, dt),
                t;
            if (queue === null) {
                t = new Trampoline();
                try {
                    CurrentThreadScheduler.queue.enqueue(si);
                    t.run();
                } finally {
                    t.dispose();
                }
            } else {
                queue.enqueue(si);
            }
            return si.disposable;
        }, function (state, dueTime, action) {
            return scheduler.scheduleWithRelativeAndState(state, dueTime - scheduler.now(), action);
        });
    }
    CurrentThreadScheduler.prototype.scheduleRequired = function () {
        return CurrentThreadScheduler.queue === null;
    };
    CurrentThreadScheduler.prototype.ensureTrampoline = function (action) {
        if (this.scheduleRequired()) {
            return this.schedule(action);
        } else {
            return action();
        }
    };
    CurrentThreadScheduler.queue = null;

    return CurrentThreadScheduler;
})(),

currentThreadScheduler = Scheduler.CurrentThread = new CurrentThreadScheduler();
root.setDefaultCurrentThreadScheduler = function setDefaultCurrentThreadScheduler(scheduler) {
    currentThreadScheduler = scheduler;
}
root.getDefaultCurrentThreadScheduler = function getDefaultCurrentThreadScheduler() {
    return currentThreadScheduler;
}
root.resetDefaultCurrentThreadScheduler = function resetDefaultCurrentThreadScheduler() {
    currentThreadScheduler = Scheduler.CurrentThread;
}

root.VirtualTimeScheduler = (function () {
    inherits(VirtualTimeScheduler, Scheduler);
    function VirtualTimeScheduler(initialClock, comparer) {
        var scheduler = this;
        this.clock = initialClock;
        this.comparer = comparer;
        this.isEnabled = false;
        VirtualTimeScheduler.base.constructor.call(this, function () {
            return scheduler.toDateTimeOffset(scheduler.clock);
        }, function (state, action) {
            return scheduler.scheduleAbsolute(state, scheduler.clock, action);
        }, function (state, dueTime, action) {
            return scheduler.scheduleRelative(state, scheduler.toRelative(dueTime), action);
        }, function (state, dueTime, action) {
            return scheduler.scheduleRelative(state, scheduler.toRelative(dueTime - scheduler.now()), action);
        });
        this.queue = new PriorityQueue(1024);
    }
    VirtualTimeScheduler.prototype.scheduleRelative = function (state, dueTime, action) {
        var runAt = this.add(this.clock, dueTime);
        return this.scheduleAbsolute(state, runAt, action);
    };
    VirtualTimeScheduler.prototype.start = function () {
        var next;
        if (!this.isEnabled) {
            this.isEnabled = true;
            do {
                next = this.getNext();
                if (next !== null) {
                    if (this.comparer(next.dueTime, this.clock) > 0) {
                        this.clock = next.dueTime;
                    }
                    next.invoke();
                } else {
                    this.isEnabled = false;
                }
            } while (this.isEnabled);
        }
    };
    VirtualTimeScheduler.prototype.stop = function () {
        return this.isEnabled = false;
    };
    VirtualTimeScheduler.prototype.advanceTo = function (time) {
        var next;
        if (this.comparer(this.clock, time) >= 0) {
            throw new Error(argumentOutOfRange);
        }
        if (!this.isEnabled) {
            this.isEnabled = true;
            do {
                next = this.getNext();
                if (next !== null && this.comparer(next.dueTime, time) <= 0) {
                    if (this.comparer(next.dueTime, this.clock) > 0) {
                        this.clock = next.dueTime;
                    }
                    next.invoke();
                } else {
                    this.isEnabled = false;
                }
            } while (this.isEnabled);
            return this.clock = time;
        }
    };
    VirtualTimeScheduler.prototype.advanceBy = function (time) {
        var dt = this.add(this.clock, time);
        if (this.comparer(this.clock, dt) >= 0) {
            throw new Error(argumentOutOfRange);
        }
        return this.advanceTo(dt);
    };
    VirtualTimeScheduler.prototype.getNext = function () {
        var next;
        while (this.queue.length > 0) {
            next = this.queue.peek();
            if (next.isCancelled()) {
                this.queue.dequeue();
            } else {
                return next;
            }
        }
        return null;
    };
    VirtualTimeScheduler.prototype.scheduleAbsolute = function (state, dueTime, action) {
        var self = this,
        run = function (scheduler, state1) {
            self.queue.remove(si);
            return action(scheduler, state1);
        },
        si = new ScheduledItem(self, state, run, dueTime, self.comparer);
        self.queue.enqueue(si);
        return si.disposable;
    };
    return VirtualTimeScheduler;
})();
// mseeley: Added ms argument to TimeoutScheduler
var TimeoutScheduler = (function () {
    inherits(TimeoutScheduler, Scheduler);
    function TimeoutScheduler(ms) {
        var scheduler = this;
        TimeoutScheduler.base.constructor.call(this, defaultNow, function (state, action) {
            var disposable = new SingleAssignmentDisposable(), id = global.setTimeout(function() {
                disposable.setDisposable(action(scheduler, state));
            // mseeley: Default to zero if falsy
            }, ms || 0);
            return new CompositeDisposable(disposable, disposableCreate(function () {
                global.clearTimeout(id);
            }));
        }, function (state, dueTime, action) {
            var disposable = new SingleAssignmentDisposable()
            , dt = Scheduler.normalize(dueTime)
            , id = global.setTimeout(function () {
                disposable.setDisposable(action(scheduler, state));
            }, dt);
            return new CompositeDisposable(disposable, disposableCreate(function () {
                global.clearTimeout(id);
            }));
        }, function (state, dueTime, action) {
            return scheduler.scheduleWithRelativeAndState(state, dueTime - scheduler.now(), action);
        });
    }
    return TimeoutScheduler;
})(),
timeoutScheduler = Scheduler.Timeout = new TimeoutScheduler();

root.setDefaultAsyncScheduler = function setDefaultAsyncScheduler(scheduler) {
    timeoutScheduler = scheduler;
}
root.getDefaultAsyncScheduler = function getDefaultAsyncScheduler() {
    return timeoutScheduler;
}
root.resetDefaultAsyncScheduler = function resetDefaultAsyncScheduler() {
    timeoutScheduler = Scheduler.Timeout;
}

// mseeley: Exposed TimeoutScheduler on Rx root object: Rx.TimeoutScheduler
root.TimeoutScheduler = TimeoutScheduler;

var Notification = root.Notification = (function () {
    function Notification() { }
    Notification.prototype.accept = function (observerOrOnNext, onError, onCompleted) {
        if (arguments.length > 1 || typeof observerOrOnNext === 'function') {
            return this._accept(observerOrOnNext, onError, onCompleted);
        } else {
            return this._acceptObservable(observerOrOnNext);
        }
    };
    Notification.prototype.toObservable = function (scheduler) {
        var notification = this;
        scheduler = scheduler || Scheduler.Immediate;
        return observableCreateWithDisposable(function (observer) {
            return scheduler.schedule(function () {
                notification._acceptObservable(observer);
                if (notification.kind === 'N') {
                    observer.onCompleted();
                }
            });
        });
    };
    Notification.prototype.hasValue = false;
    Notification.prototype.equals = function (other) {
        var otherString = other === _undefined || other === null ? '' : other.toString();
        return this.toString() === otherString;
    };
    return Notification;
})();
Notification.createOnNext = function (next) {
    var notification = new Notification();
    notification.value = next;
    notification.hasValue = true;
    notification.kind = 'N';
    notification._accept = function (onNext) {
        return onNext(this.value);
    };
    notification._acceptObservable = function (observer) {
        return observer.onNext(this.value);
    };
    notification.toString = function () {
        return 'OnNext(' + this.value + ')';
    };
    return notification;
};
Notification.createOnError = function (error) {
    var notification = new Notification();
    notification.exception = error;
    notification.kind = 'E';
    notification._accept = function (onNext, onError) {
        return onError(this.exception);
    };
    notification._acceptObservable = function (observer) {
        return observer.onError(this.exception);
    };
    notification.toString = function () {
        return 'OnError(' + this.exception + ')';
    };
    return notification;
};
Notification.createOnCompleted = function () {
    var notification = new Notification();
    notification.kind = 'C';
    notification._accept = function (onNext, onError, onCompleted) {
        return onCompleted();
    };
    notification._acceptObservable = function (observer) {
        return observer.onCompleted();
    };
    notification.toString = function () {
        return 'OnCompleted()';
    };
    return notification;
};
var Enumerator = root.Internals.Enumerator = function (moveNext, getCurrent, dispose) {
    this.moveNext = moveNext;
    this.getCurrent = getCurrent;
    this.dispose = dispose;
}
, enumeratorCreate = Enumerator.create = function(moveNext, getCurrent, dispose) {
    var done = false;
    dispose || (dispose = nothing);
    return new Enumerator(function() {
        if (done) {
            return false;
        }
        var result = moveNext();
        if (!result) {
            done = true;
            dispose();
        }
        return result;
    }, function() { return getCurrent(); }, function() {
        if (!done) {
            dispose();
            done = true;
        }
    });
}
, Enumerable = root.Internals.Enumerable = function (getEnumerator) {
    this.getEnumerator = getEnumerator;
}
, enumerableProto = Enumerable.prototype;
enumerableProto.concat = function () {
    var sources = this;
    return observableCreateWithDisposable(function (observer) {
        var cancelable, e = sources.getEnumerator(), isDisposed = false, subscription = new SerialDisposable();
        cancelable = immediateScheduler.scheduleRecursive(function (self) {
            var current, d, ex, hasNext = false;
            if (!isDisposed) {
                try {
                    hasNext = e.moveNext();
                    if (hasNext) {
                        current = e.getCurrent();
                    } else {
                        e.dispose();
                    }
                } catch (exception) {
                    ex = exception;
                    e.dispose();
                }
            } else {
                return;
            }
            if (ex) {
                observer.onError(ex);
                return;
            }
            if (!hasNext) {
                observer.onCompleted();
                return;
            }
            d = new SingleAssignmentDisposable();
            subscription.disposable(d);
            d.disposable(current.subscribe(
                function (x) { observer.onNext(x); },
                function (exn) { observer.onError(exn); },
                function () { self(); }));
        });
        return new CompositeDisposable(subscription, cancelable, disposableCreate(function () {
            isDisposed = true;
            e.dispose();
        }));
    });
};
enumerableProto.catchException = function () {
    var sources = this;
    return observableCreateWithDisposable(function (observer) {
        var cancelable, e = sources.getEnumerator(), isDisposed = false, subscription, lastException;
        subscription = new SerialDisposable();
        cancelable = immediateScheduler.scheduleRecursive(function (self) {
            var current, d, ex, hasNext;
            hasNext = false;
            if (!isDisposed) {
                try {
                    hasNext = e.moveNext();
                    if (hasNext) {
                        current = e.getCurrent();
                    }
                } catch (exception) {
                    ex = exception;
                }
            } else {
                return;
            }
            if (ex) {
                observer.onError(ex);
                return;
            }
            if (!hasNext) {
                if (lastException) {
                    observer.onError(lastException);
                } else {
                    observer.onCompleted();
                }
                return;
            }
            d = new SingleAssignmentDisposable();
            subscription.disposable(d);
            d.disposable(current.subscribe(
                function (x) { observer.onNext(x); },
                function (exn) {
                    lastException = exn;
                    self();
                },
                function () { observer.onCompleted(); }));
        });
        return new CompositeDisposable(subscription, cancelable, disposableCreate(function () {
            isDisposed = true;
        }));
    });
};
var enumerableRepeat = Enumerable.repeat = function(value, repeatCount) {
    if (repeatCount === _undefined) {
        repeatCount = -1;
    }
    return new Enumerable(function() {
        var current, left = repeatCount;
        return enumeratorCreate(function() {
            if (left === 0) {
                return false;
            }
            if (left > 0) {
                left--;
            }
            current = value;
            return true;
        }, function() { return current; });
    });
},enumerableFor = Enumerable.forEach = function (source, selector) {
    selector || (selector = identity);
    return new Enumerable(function () {
        var current, index = -1;
        return enumeratorCreate(
            function () {
                if (++index < source.length) {
                    current = selector(source[index], index);
                    return true;
                }
                return false;
            },
            function () { return current; }
        );
    });
};
var Observer = root.Observer = function() { },
AbstractObserver = root.Internals.AbstractObserver = (function () {
    inherits(AbstractObserver, Observer);
    function AbstractObserver() {
        this.isStopped = false;
    }
    AbstractObserver.prototype.onNext = function (value) {
        if (!this.isStopped) {
            this.next(value);
        }
    };
    AbstractObserver.prototype.onError = function (error) {
        if (!this.isStopped) {
            this.isStopped = true;
            this.error(error);
        }
    };
    AbstractObserver.prototype.onCompleted = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this.completed();
        }
    };
    AbstractObserver.prototype.dispose = function () {
        this.isStopped = true;
    };
    return AbstractObserver;
})();
var AnonymousObserver = (function () {
    inherits(AnonymousObserver, AbstractObserver);
    function AnonymousObserver(onNext, onError, onCompleted) {
        AnonymousObserver.base.constructor.call(this);
        this._onNext = onNext;
        this._onError = onError;
        this._onCompleted = onCompleted;
    }
    AnonymousObserver.prototype.next = function (value) {
        this._onNext(value);
    };
    AnonymousObserver.prototype.error = function (exception) {
        this._onError(exception);
    };
    AnonymousObserver.prototype.completed = function () {
        this._onCompleted();
    };
    return AnonymousObserver;
})();
var BinaryObserver = root.Internals.BinaryObserver = (function () {
    inherits(BinaryObserver, Observer);
    function BinaryObserver(left, right) {
        if (typeof left === 'function' && typeof right === 'function') {
            this.leftObserver = observerToObserver(left);
            this.rightObserver = observerToObserver(right);
        } else {
            this.leftObserver = left;
            this.rightObserver = right;
        }
    }
    BinaryObserver.prototype.onNext = function (value) {
        var self = this;
        return value.switchValue(function (left) {
            return left.accept(self.leftObserver);
        }, function (right) {
            return right.accept(self.rightObserver);
        });
    };
    BinaryObserver.prototype.onError = function () { };
    BinaryObserver.prototype.onCompleted = function () { };
    return BinaryObserver;
})();
var ScheduledObserver = (function () {
    inherits(ScheduledObserver, AbstractObserver);
    function ScheduledObserver(scheduler, observer) {
        this.scheduler = scheduler;
        this.observer = observer;
        this.isAcquired = false;
        this.hasFaulted = false;
        this.queue = [];
        this.disposable = new SerialDisposable();
    }
    ScheduledObserver.prototype.ensureActive = function () {
        var isOwner = false, parent = this;
        if (!this.hasFaulted && this.queue.length > 0) {
            isOwner = !this.isAcquired;
            this.isAcquired = true;
        }
        if (isOwner) {
            this.disposable.disposable(this.scheduler.scheduleRecursive(function (self) {
                var work;
                if (parent.queue.length > 0) {
                    work = parent.queue.shift();
                } else {
                    parent.isAcquired = false;
                    return;
                }
                try {
                    work();
                } catch (ex) {
                    parent.queue = [];
                    parent.hasFaulted = true;
                    throw ex;
                }
                self();
            }));
        }
    };
    ScheduledObserver.prototype.next = function (value) {
        var self = this;
        this.queue.push(function () {
            self.observer.onNext(value);
        });
    };
    ScheduledObserver.prototype.error = function (exception) {
        var self = this;
        this.queue.push(function () {
            self.observer.onError(exception);
        });
    };
    ScheduledObserver.prototype.completed = function () {
		var self = this;
        this.queue.push(function () {
            self.observer.onCompleted();
        });
    };
    ScheduledObserver.prototype.dispose = function () {
        ScheduledObserver.base.dispose.call(this);
        this.disposable.dispose();
    };
    return ScheduledObserver;
})();
var observerCreate = Observer.create = function (onNext, onError, onCompleted) {
    onNext || (onNext = nothing);
    onError || (onError = function (e) { throw e; });
    onCompleted || (onCompleted = nothing);
    return new AnonymousObserver(onNext, onError, onCompleted);
},
observerFromNotifier = Observer.fromNotifier = function (handler) {
    return new AnonymousObserver(function (x) {
        return handler(Notification.createOnNext(x));
    }, function (exception) {
        return handler(Notification.createOnError(exception));
    }, function () {
        return handler(Notification.createOnCompleted());
    });
},
observerToObserver = function(handler) {
    return new AnonymousObserver(function(x) {
        handler(Notification.createOnNext(x));
    }, function (e) {
        handler(Notification.createOnError(e));
    }, function () {
        handler(Notification.createOnCompleted());
    });
};
Observer.prototype.toNotifier = function () {
    var observer = this;
    return function (n) {
        return n.accept(observer);
    };
};
Observer.prototype.asObserver = function () {
    var source = this;
    return new AnonymousObserver(function (x) {
        return source.onNext(x);
    }, function (e) {
        return source.onError(e);
    }, function () {
        return source.onCompleted();
    });
};

	var Observable = root.Observable = (function () {
		function Observable() { }
		Observable.prototype.subscribe = function (observerOrOnNext, onError, onCompleted) {
			var subscriber;
			if (arguments.length === 0 || arguments.length > 1 || typeof observerOrOnNext === 'function') {
				subscriber = observerCreate(observerOrOnNext, onError, onCompleted);
			} else {
				subscriber = observerOrOnNext;
			}
			return this._subscribe(subscriber);
		};
		return Observable;
	})(),
	observableProto = Observable.prototype,
	AnonymousObservable = (function () {
	    inherits(AnonymousObservable, Observable);
	    function AnonymousObservable(subscribe) {
	        AnonymousObservable.base.constructor.call(this);
	        this._subscribe = function (observer) {
	            var autoDetachObserver = new AutoDetachObserver(observer);
	            if (currentThreadScheduler.scheduleRequired()) {
	                currentThreadScheduler.schedule(function () {
	                    autoDetachObserver.disposable(subscribe(autoDetachObserver));
	                });
	            } else {
	                autoDetachObserver.disposable(subscribe(autoDetachObserver));
	            }

	            return autoDetachObserver;
	        };
	    }
	    AnonymousObservable.prototype._subscribe = function (observer) { return this._subscribe(observer); };
	    return AnonymousObservable;
	})(),
	AutoDetachObserver = (function () {
		inherits(AutoDetachObserver, AbstractObserver);
		function AutoDetachObserver(observer) {
			AutoDetachObserver.base.constructor.call(this);
			this.observer = observer;
			this.m = new SingleAssignmentDisposable();
		}
		AutoDetachObserver.prototype.disposable = function (value) {
			return this.m.disposable(value);
		};
		AutoDetachObserver.prototype.next = function (value) {
			this.observer.onNext(value);
		};
		AutoDetachObserver.prototype.error = function (error) {
			this.observer.onError(error);
			this.m.dispose();
		};
		AutoDetachObserver.prototype.completed = function () {
			this.observer.onCompleted();
			this.m.dispose();
		};
		AutoDetachObserver.prototype.dispose = function () {
			AutoDetachObserver.base.dispose.call(this);
			this.m.dispose();
		};
		return AutoDetachObserver;
	})();
var GroupedObservable = (function () {
    inherits(GroupedObservable, Observable);
    function GroupedObservable(key, underlyingObservable, mergedDisposable) {
        GroupedObservable.base.constructor.call(this);
        this.key = key;
        this.underlyingObservable = !mergedDisposable ?
            underlyingObservable :
            observableCreateWithDisposable(function(observer) {
                return new CompositeDisposable(mergedDisposable.getDisposable(), underlyingObservable.subscribe(observer));
            });
    }
    GroupedObservable.prototype._subscribe = function (observer) {
        return this.underlyingObservable.subscribe(observer);
    };
    return GroupedObservable;
})();
var ConnectableObservable = root.ConnectableObservable = (function () {
    inherits(ConnectableObservable, Observable);
    function ConnectableObservable(source, subject) {
        var state = {
            subject: subject,
            source: source.asObservable(),
            hasSubscription: false,
            subscription: null
        };

        this.connect = function () {
            if (!state.hasSubscription) {
                state.hasSubscription = true;
                state.subscription = new CompositeDisposable(state.source.subscribe(state.subject), disposableCreate(function () {
                    state.hasSubscription = false;
                }));
            }
            return state.subscription;
        };

        this._subscribe = function (observer) {
            return state.subject.subscribe(observer);
        };
    }
    ConnectableObservable.prototype.connect = function () { return this.connect(); };
    ConnectableObservable.prototype.refCount = function () {
        var connectableSubscription = null,
            count = 0,
            source = this;
        return observableCreateWithDisposable(function (observer) {
            var shouldConnect, subscription;
            count++;
            shouldConnect = count === 1;
            subscription = source.subscribe(observer);
            if (shouldConnect) {
                connectableSubscription = source.connect();
            }
            return disposableCreate(function () {
                subscription.dispose();
                count--;
                if (count === 0) {
                    connectableSubscription.dispose();
                }
            });
        });
    };
    ConnectableObservable.prototype._subscribe = function (observer) { return this._subscribe(observer); };
    return ConnectableObservable;
})();
var InnerSubscription = (function () {
    function InnerSubscription(subject, observer) {
        this.subject = subject, this.observer = observer;
    }
    InnerSubscription.prototype.dispose = function () {
        if (!this.subject.isDisposed && this.observer !== null) {
            this.subject.observers.remove(this.observer);
            this.observer = null;
        }
    };
    return InnerSubscription;
})()
, Subject = root.Subject = (function () {
    inherits(Subject, Observable);
    extendObject(Subject, Observer);
    function Subject() {
        Subject.base.constructor.call(this);
        this.isDisposed = false,
        this.isStopped = false,
        this.observers = new List();
    }

    var checkDisposed = function () {
        if (this.isDisposed) {
            throw new Error(objectDisposed);
        }
    };
    Subject.prototype.onCompleted = function () {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
            this.observers = new List();
            this.isStopped = true;
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onCompleted();
            }
        }
    };
    Subject.prototype.onError = function (exception) {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
            this.observers = new List();
            this.isStopped = true;
            this.exception = exception;
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onError(exception);
            }
        }
    };
    Subject.prototype.onNext = function (value) {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onNext(value);
            }
        }
    };
    Subject.prototype._subscribe = function (observer) {
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.observers.add(observer);
            return new InnerSubscription(this, observer);
        }
        if (this.exception) {
            observer.onError(this.exception);
            return disposableEmpty;
        }
        observer.onCompleted();
        return disposableEmpty;
    };

    Subject.prototype.dispose = function () {
        this.isDisposed = true;
        this.observers = null;
    };

    Subject.create = function (observer, observable) {
        return new AnonymousSubject(observer, observable);
    };

    return Subject;
})();
var AsyncSubject = root.AsyncSubject = (function () {
    inherits(AsyncSubject, Observable);
    extendObject(AsyncSubject, Observer);
    function AsyncSubject() {
        AsyncSubject.base.constructor.call(this);

        this.isDisposed = false,
        this.isStopped = false,
        this.value = null,
        this.hasValue = false,
        this.observers = new List(),
        this.exception = null;
    }

    var checkDisposed = function () {
        if (this.isDisposed) {
            throw new Error(objectDisposed);
        }
    };
    AsyncSubject.prototype.onCompleted = function () {
        var hv = false, o, os, v, i, len;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
            this.observers = new List();
            this.isStopped = true;
            v = this.value;
            hv = this.hasValue;
        }
        if (os) {
            if (hv) {
                for (i = 0, len = os.length; i < len; i++) {
                    o = os[i];
                    o.onNext(v);
                    o.onCompleted();
                }
            } else {
                for (i = 0, len = os.length; i < len; i++) {
                    os[i].onCompleted();
                }
            }
        }
    };
    AsyncSubject.prototype.onError = function (exception) {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
            this.observers = new List();
            this.isStopped = true;
            this.exception = exception;
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onError(exception);
            }
        }
    };
    AsyncSubject.prototype.onNext = function (value) {
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.value = value;
            this.hasValue = true;
        }
    };
    AsyncSubject.prototype._subscribe = function (observer) {
        var ex, hv, v;
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.observers.add(observer);
            return new InnerSubscription(this, observer);
        }
        ex = this.exception;
        hv = this.hasValue;
        v = this.value;
        if (ex) {
            observer.onError(ex);
        } else if (hv) {
            observer.onNext(v);
            observer.onCompleted();
        } else {
            observer.onCompleted();
        }
        return disposableEmpty;
    };
    AsyncSubject.prototype.dispose = function () {
        this.isDisposed = true;
        this.observers = null;
        this.exception = null;
        this.value = null;
    };

    return AsyncSubject;
})();
var BehaviorSubject = root.BehaviorSubject = (function () {
    inherits(BehaviorSubject, Observable);
    extendObject(BehaviorSubject, Observer);
    function BehaviorSubject(value) {
        BehaviorSubject.base.constructor.call(this);

        this.value = value,
        this.observers = new List(),
        this.isDisposed = false,
        this.isStopped = false,
        this.exception = null;
    }
    var checkDisposed = function () {
        if (this.isDisposed) {
            throw new Error(objectDisposed);
        }
    };
    BehaviorSubject.prototype.onCompleted = function () {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
            this.observers = new List();
            this.isStopped = true;
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onCompleted();
            }
        }
    };
    BehaviorSubject.prototype.onError = function (error) {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            os = this.observers.toArray();
            this.observers = new List();
            this.isStopped = true;
            this.exception = error;
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onError(error);
            }
        }
    };
    BehaviorSubject.prototype.onNext = function (value) {
        var os;
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.value = value;
            os = this.observers.toArray();
        }
        if (os) {
            for (var i = 0, len = os.length; i < len; i++) {
                os[i].onNext(value);
            }
        }
    };
    BehaviorSubject.prototype._subscribe = function (observer) {
        var ex;
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.observers.add(observer);
            observer.onNext(this.value);
            return new InnerSubscription(this, observer);
        }
        ex = this.exception;
        if (ex) {
            observer.onError(ex);
        } else {
            observer.onCompleted();
        }
        return disposableEmpty;
    };
    BehaviorSubject.prototype.dispose = function () {
        this.isDisposed = true;
        this.observers = null;
        this.value = null;
        this.exception = null;
    };

    return BehaviorSubject;
})();
var ReplaySubject = root.ReplaySubject = (function () {
    inherits(ReplaySubject, Observable);
    extendObject(ReplaySubject, Observable);

    function ReplaySubject(bufferSize, window, scheduler) {
        this.bufferSize = bufferSize === _undefined ? Number.MAX_VALUE : bufferSize;
        this.window = window === _undefined ? Number.MAX_VALUE : window;
        this.scheduler = scheduler || currentThreadScheduler;
        this.q = [];
        this.observers = new List();
        this.isStopped = false;
        this.isDisposed = false;
    }

    var checkDisposed = function () {
        if (this.isDisposed) {
            throw new Error(objectDisposed);
        }
    };

    ReplaySubject.prototype._trim = function (now) {
        var correction = this.isStopped ? 1 : 0,
            limit = correction + this.bufferSize;
        if (limit < this.bufferSize) {
            limit = this.bufferSize;
        }
        while (this.q.length > limit) {
            this.q.shift();
        }
        while (this.q.length > correction && now - this.q[0].timestamp > this.window) {
            this.q.shift();
        }
    };
    ReplaySubject.prototype._enqueue = function (n) {
        var now = this.scheduler.now(),
            t = { value: n, timestamp: now };
        this.q.push(t);
        this._trim(now);
    };
    ReplaySubject.prototype.onNext = function (value) {
        var o, observer, i, len;
        checkDisposed.call(this);
        if (!this.isStopped) {
            o = this.observers.toArray();
            this._enqueue(Notification.createOnNext(value));
            for (i = 0, len = o.length; i < len; i++) {
                observer = o[i];
                observer.onNext(value);
            }
        }
        if (o) {
            for (i = 0, len = o.length; i < len; i++) {
                observer = o[i];
                observer.ensureActive();
            }
        }
    };
    ReplaySubject.prototype.onError = function (error) {
        var o, i, len;
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.isStopped = true;
            this._enqueue(Notification.createOnError(error));
            o = this.observers.toArray();
            for (i = 0, len = o.length; i < len; i++) {
                o[i].onError(error);
            }
            this.observers = new List();
        }
        if (o) {
            for (i = 0, len = o.length; i < len; i++) {
                o[i].ensureActive();
            }
        }
    };
    ReplaySubject.prototype.onCompleted = function () {
        var o, i, len;
        checkDisposed.call(this);
        if (!this.isStopped) {
            this.isStopped = true;
            this._enqueue(Notification.createOnCompleted());
            o = this.observers.toArray();
            for (i = 0, len = o.length; i < len; i++) {
                o[i].onCompleted();
            }
            this.observers = new List();
        }
        if (o) {
            for (i = 0, len = o.length; i < len; i++) {
                o[i].ensureActive();
            }
        }
    };
    ReplaySubject.prototype._subscribe = function (observer) {
        var so = new ScheduledObserver(this.scheduler, observer), subscription = new RemoveableDisposable(this, so);
        checkDisposed.call(this);
        this._trim(this.scheduler.now());
        this.observers.add(so);
        for (var i = 0, len = this.q.length; i < len; i++) {
            this.q[i].value.accept(so);
        }
        so.ensureActive();
        return subscription;
    };
    ReplaySubject.prototype.dispose = function () {
        this.isDisposed = true;
        this.observers = null;
    };

    var RemoveableDisposable = (function () {
        function RemoveableDisposable(subject, observer) {
            this.subject = subject, this.observer = observer;
        }
        RemoveableDisposable.prototype.dispose = function () {
            this.observer.dispose();
            if (!this.subject.isDisposed) {
                this.subject.observers.remove(this.observer);
            }
        };
        return RemoveableDisposable;
    })();
    return ReplaySubject;
})();
var AnonymousSubject = (function () {
    inherits(AnonymousSubject, Observable);
    extendObject(AnonymousSubject, Observer);
    function AnonymousSubject(observer, observable) {
        this.observer = observer;
        this.observable = observable;
    }
    AnonymousSubject.prototype.onCompleted = function () {
        return this.observer.onCompleted();
    };
    AnonymousSubject.prototype.onError = function (exception) {
        return this.observer.onError(exception);
    };
    AnonymousSubject.prototype.onNext = function (value) {
        return this.observer.onNext(value);
    };
    AnonymousSubject.prototype._subscribe = function (observer) {
        return this.observable.subscribe(observer);
    };

    return AnonymousSubject;
})();

Observable.start = function(original, instance, args, scheduler) {
    args || (args = []);
    return observableToAsync(original, scheduler).apply(instance, args);
};
var observableToAsync = Observable.toAsync = function (original, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    return function () {
        var subject = new AsyncSubject(),
        delayed = function () {
            var result;
            try {
                result = original.apply(this, arguments);
            } catch (e) {
                subject.onError(e);
                return;
            }
            subject.onNext(result);
            subject.onCompleted();
        },
        args = slice.call(arguments),
        parent = this;
        scheduler.schedule(function () {
            delayed.apply(parent, args);
        });
        return subject;
    };
};
observableProto.multicast = function (subjectOrSubjectSelector, selector) {
    var source = this;
    return typeof subjectOrSubjectSelector === 'function' ?
        observableCreateWithDisposable(function(observer) {
            var connectable = source.multicast(subjectOrSubjectSelector());
            return new CompositeDisposable(selector(connectable).subscribe(observer), connectable.connect());
        }) :
        new ConnectableObservable(source, subjectOrSubjectSelector);
};
observableProto.publish = function (selector) {
    return !selector ?
        this.multicast(new Subject()) :
        this.multicast(function () {
            return new Subject();
        }, selector);
};
observableProto.publishLast = function (selector) {
    return !selector ?
        this.multicast(new AsyncSubject()) :
        this.multicast(function () {
            return new AsyncSubject();
        }, selector);
};
observableProto.replay = function (selector, bufferSize, window, scheduler) {
    return !selector || selector === null ?
        this.multicast(new ReplaySubject(bufferSize, window, scheduler)) :
        this.multicast(function () {
            return new ReplaySubject(bufferSize, window, scheduler);
        }, selector);
};
observableProto.publishValue = function (initialValueOrSelector, initialValue) {
    return typeof initialValueOrSelector === 'function' ?
        this.multicast(function () {
            return new BehaviorSubject(initialValue);
        }, initialValueOrSelector) :
        this.multicast(new BehaviorSubject(initialValueOrSelector));
};
var observableNever = Observable.never = function () {
    return observableCreateWithDisposable(function () {
        return disposableEmpty;
    });
},
observableEmpty = Observable.empty = function (scheduler) {
    scheduler || (scheduler = immediateScheduler);
    return observableCreateWithDisposable(function (observer) {
        return scheduler.schedule(function () {
            observer.onCompleted();
        });
    });
},
observableReturn = Observable.returnValue = function (value, scheduler) {
    scheduler || (scheduler = immediateScheduler);
    return observableCreateWithDisposable(function (observer) {
        return scheduler.schedule(function () {
            observer.onNext(value);
            observer.onCompleted();
        });
    });
},
observableThrow = Observable.throwException = function (exception, scheduler) {
    scheduler || (scheduler = immediateScheduler);
    return observableCreateWithDisposable(function (observer) {
        return scheduler.schedule(function () {
            observer.onError(exception);
        });
    });
};
Observable.generate = function(initialState, condition, iterate, resultSelector, scheduler) {
    scheduler || (scheduler = currentThreadScheduler);
    return observableCreateWithDisposable(function(observer) {
        var first = true, state = initialState;
        return scheduler.scheduleRecursive(function(self) {
            var hasResult, result;
            try {
                if (first) {
                    first = false;
                } else {
                    state = iterate(state);
                }
                hasResult = condition(state);
                if (hasResult) {
                    result = resultSelector(state);
                }
            } catch(exception) {
                observer.onError(exception);
                return;
            }
            if (hasResult) {
                observer.onNext(result);
                self();
            } else {
                observer.onCompleted();
            }
        });
    });
};
var observableDefer = Observable.defer = function(observableFactory) {
    return observableCreateWithDisposable(function(observer) {
        var result;
        try {
            result = observableFactory();
        } catch(e) {
            return observableThrow(e).subscribe(observer);
        }
        return result.subscribe(observer);
    });
};
Observable.using = function(resourceFactory, observableFactory) {
    return observableCreateWithDisposable(function(observer) {
        var disposable = disposableEmpty, resource, source;
        try {
            resource = resourceFactory();
            if (resource !== null) {
                disposable = resource;
            }
            source = observableFactory(resource);
        } catch(exception) {
            return new CompositeDisposable(observableThrow(exception).subscribe(observer), disposable);
        }
        return new CompositeDisposable(source.subscribe(observer), disposable);
    });
};
var observableFromArray = Observable.fromArray = function (array, scheduler) {
    scheduler || (scheduler = currentThreadScheduler);
    return observableCreateWithDisposable(function (observer) {
        var count = 0;
        return scheduler.scheduleRecursive(function (self) {
            if (count < array.length) {
                observer.onNext(array[count++]);
                self();
            } else {
                observer.onCompleted();
            }
        });
    });
},
observableCreateWithDisposable = Observable.createWithDisposable = function (subscribe) {
    return new AnonymousObservable(subscribe);
};
Observable.create = function(subscribe) {
    return observableCreateWithDisposable(function(o) {
        return disposableCreate(subscribe(o));
    });
};
Observable.range = function (start, count, scheduler) {
    scheduler || (scheduler = currentThreadScheduler);
    return observableCreateWithDisposable(function(observer) {
        return scheduler.scheduleRecursiveWithState(0, function(i, self) {
            if (i < count) {
                observer.onNext(start + i);
                self(i + 1);
            } else {
                observer.onCompleted();
            }
        });
    });
};
observableProto.repeat = function (repeatCount) {
    return enumerableRepeat(this, repeatCount).concat();
};
observableProto.retry = function (retryCount) {
    return enumerableRepeat(this, retryCount).catchException();
};
Observable.repeat = function (value, repeatCount, scheduler) {
    scheduler || (scheduler = currentThreadScheduler);
    if (repeatCount === _undefined) {
        repeatCount = -1;
    }
    return observableReturn(value, scheduler).repeat(repeatCount);
};

observableProto.select = function (selector) {
    var parent = this;
    return observableCreateWithDisposable(function (observer) {
        var count = 0;
        return parent.subscribe(function (value) {
            var result;
            try {
                result = selector(value, count++);
            } catch (exception) {
                observer.onError(exception);
                return;
            }
            observer.onNext(result);
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.where = function (predicate) {
    var parent = this;
    return observableCreateWithDisposable(function (observer) {
        var count = 0;
        return parent.subscribe(function (value) {
            var shouldRun;
            try {
                shouldRun = predicate(value, count++);
            } catch (exception) {
                observer.onError(exception);
                return;
            }
            if (shouldRun) {
                observer.onNext(value);
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.groupByUntil = function (keySelector, elementSelector, durationSelector, keySerializer) {
    var source = this;
    elementSelector || (elementSelector = identity);
    keySerializer || (keySerializer = defaultKeySerializer);
    return observableCreateWithDisposable(function (observer) {
        var map = {},
            groupDisposable = new CompositeDisposable(),
            refCountDisposable = new RefCountDisposable(groupDisposable);
        groupDisposable.add(source.subscribe(function (x) {
            var duration, durationGroup, element, expire, fireNewMapEntry, group, key, serializedKey, md, writer, w;
            try {
                key = keySelector(x);
                serializedKey = keySerializer(key);
            } catch (e) {
                for (w in map) {
                    map[w].onError(e);
                }
                observer.onError(e);
                return;
            }
            fireNewMapEntry = false;
            try {
                writer = map[serializedKey];
                if (!writer) {
                    writer = new Subject();
                    map[serializedKey] = writer;
                    fireNewMapEntry = true;
                }
            } catch (e) {
                for (w in map) {
                    map[w].onError(e);
                }
                observer.onError(e);
                return;
            }
            if (fireNewMapEntry) {
                group = new GroupedObservable(key, writer, refCountDisposable);
                durationGroup = new GroupedObservable(key, writer);
                try {
                    duration = durationSelector(durationGroup);
                } catch (e) {
                    for (w in map) {
                        map[w].onError(e);
                    }
                    observer.onError(e);
                    return;
                }
                observer.onNext(group);
                md = new SingleAssignmentDisposable();
                groupDisposable.add(md);
                expire = function () {
                    if (map[serializedKey] !== _undefined) {
                        delete map[serializedKey];
                        writer.onCompleted();
                    }
                    groupDisposable.remove(md);
                };
                md.disposable(duration.take(1).subscribe(function () { }, function (exn) {
                    for (w in map) {
                        map[w].onError(exn);
                    }
                    observer.onError(exn);
                }, function () {
                    expire();
                }));
            }
            try {
                element = elementSelector(x);
            } catch (e) {
                for (w in map) {
                    map[w].onError(e);
                }
                observer.onError(e);
                return;
            }
            writer.onNext(element);
        }, function (ex) {
            for (var w in map) {
                map[w].onError(ex);
            }
            observer.onError(ex);
        }, function () {
            for (var w in map) {
                map[w].onCompleted();
            }
            observer.onCompleted();
        }));
        return refCountDisposable;
    });
};
observableProto.groupBy = function (keySelector, elementSelector, keySerializer) {
    return this.groupByUntil(keySelector, elementSelector, function () {
        return observableNever();
    }, keySerializer);
};
observableProto.take = function (count, scheduler) {
    if (count < 0) {
        throw new Error(argumentOutOfRange);
    }
    if (count === 0) {
        return observableEmpty(scheduler);
    }
    var observable = this;
    return observableCreateWithDisposable(function (observer) {
        var remaining = count;
        return observable.subscribe(function (x) {
            if (remaining > 0) {
                remaining--;
                observer.onNext(x);
                if (remaining === 0) {
                    observer.onCompleted();
                }
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.skip = function (count) {
    if (count < 0) {
        throw new Error(argumentOutOfRange);
    }
    var observable = this;
    return observableCreateWithDisposable(function (observer) {
        var remaining = count;
        return observable.subscribe(function (x) {
            if (remaining <= 0) {
                observer.onNext(x);
            } else {
                remaining--;
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.takeWhile = function (predicate) {
    var observable = this;
    return observableCreateWithDisposable(function (observer) {
        var i = 0, running = true;
        return observable.subscribe(function (x) {
            if (running) {
                try {
                    running = predicate(x, i++);
                } catch (e) {
                    observer.onError(e);
                    return;
                }
                if (running) {
                    observer.onNext(x);
                } else {
                    observer.onCompleted();
                }
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.skipWhile = function (predicate) {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        var i = 0, running = false;
        return source.subscribe(function (x) {
            if (!running) {
                try {
                    running = !predicate(x, i++);
                } catch (e) {
                    observer.onError(e);
                    return;
                }
            }
            if (running) {
                observer.onNext(x);
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.selectMany = function (selector, resultSelector) {
    if (resultSelector) {
        return this.selectMany(function (x) {
            return selector(x).select(function (y) {
                return resultSelector(x, y);
            });
        });
    }
    if (typeof selector === 'function') {
        return selectMany.call(this, selector);
    }
    return selectMany.call(this, function () {
        return selector;
    });
};
var selectMany = function (selector) {
    return this.select(selector).mergeObservable();
};
var sequenceContainsNoElements = 'Sequence contains no elements.';
observableProto.finalValue = function () {
	var source = this;
    return observableCreateWithDisposable(function (observer) {
        var hasValue = false, value;
        return source.subscribe(function (x) {
            hasValue = true;
            value = x;
        }, function (e) {
            observer.onError(e);
        }, function () {
            if (!hasValue) {
                observer.onError(new Error(sequenceContainsNoElements));
            } else {
                observer.onNext(value);
                observer.onCompleted();
            }
        });
    });
},
observableProto.toArray = function () {
    var accumulator = function (list, i) {
        list.push(i);
        return list;
    };
    return this.scan([], accumulator).startWith([]).finalValue();
};
observableProto.materialize = function () {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        return source.subscribe(function (value) {
            observer.onNext(Notification.createOnNext(value));
        }, function (exception) {
            observer.onNext(Notification.createOnError(exception));
            observer.onCompleted();
        }, function () {
            observer.onNext(Notification.createOnCompleted());
            observer.onCompleted();
        });
    });
};
observableProto.dematerialize = function () {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        return source.subscribe(function (x) {
            return x.accept(observer);
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.asObservable = function () {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        return source.subscribe(observer);
    });
};
observableProto.windowWithCount = function (count, skip) {
    var source = this;
    if (count <= 0) {
        throw new Error(argumentOutOfRange);
    }
    if (skip === _undefined) {
        skip = count;
    }
    if (skip <= 0) {
        throw new Error(argumentOutOfRange);
    }
    return observableCreateWithDisposable(function (observer) {
        var m = new SingleAssignmentDisposable(),
            refCountDisposable = new RefCountDisposable(m),
            n = 0,
            q = [],
            createWindow = function () {
                var s = new Subject();
                q.push(s);
                observer.onNext(_addRef(s, refCountDisposable));
            };
        createWindow();
        m.disposable(source.subscribe(function (x) {
            var c, i, s;
            for (i = 0; i < q.length; i++) {
                q[i].onNext(x);
            }
            c = n - count + 1;
            if (c >= 0 && c % skip === 0) {
                s = q.shift();
                s.onCompleted();
            }
            n++;
            if (n % skip === 0) {
                createWindow();
            }
        }, function (exception) {
            while (q.length > 0) {
                q.shift().onError(exception);
            }
            observer.onError(exception);
        }, function () {
            while (q.length > 0) {
                q.shift().onCompleted();
            }
            observer.onCompleted();
        }));
        return refCountDisposable;
    });
};
observableProto.bufferWithCount = function (count, skip) {
    if (skip === _undefined) {
        skip = count;
    }
    return this.windowWithCount(count, skip).selectMany(function (x) {
        return x.toArray();
    }).where(function (x) {
        return x.length > 0;
    });
};
observableProto.startWith = function () {
    var values, scheduler, start = 0;
    if (arguments.length > 0 && arguments[0] !== null && arguments[0].now !== undefined) {
        scheduler = arguments[0];
        start = 1;
    } else {
        scheduler = immediateScheduler;
    }
    values = slice.call(arguments, start);
    return enumerableFor([observableFromArray(values, scheduler), this]).concat();
};
observableProto.scan = function () {
    var seed, hasSeed = false, accumulator;
    if (arguments.length === 2) {
        seed = arguments[0];
        accumulator = arguments[1];
        hasSeed = true;
    } else {
        accumulator = arguments[0];
    }
    var source = this;
    return observableDefer(function () {
        var hasAccumulation = false, accumulation;
        return source.select(function (x) {
            if (hasAccumulation) {
                accumulation = accumulator(accumulation, x);
            } else {
                accumulation = hasSeed ? accumulator(seed, x) : x;
                hasAccumulation = true;
            }
            return accumulation;
        });
    });
};
observableProto.distinctUntilChanged = function (keySelector, comparer) {
    var source = this;
    keySelector || (keySelector = identity);
    comparer || (comparer = defaultComparer);
    return observableCreateWithDisposable(function (observer) {
        var hasCurrentKey = false, currentKey;
        return source.subscribe(function (value) {
            var comparerEquals = false, key;
            try {
                key = keySelector(value);
            } catch (exception) {
                observer.onError(exception);
                return;
            }
            if (hasCurrentKey) {
                try {
                    comparerEquals = comparer(currentKey, key);
                } catch (exception) {
                    observer.onError(exception);
                    return;
                }
            }
            if (!hasCurrentKey || !comparerEquals) {
                hasCurrentKey = true;
                currentKey = key;
                observer.onNext(value);
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.finallyAction = function (finallyAction) {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        var subscription = source.subscribe(observer);
        return disposableCreate(function () {
            try {
                 subscription.dispose();
            } finally {
                finallyAction();
            }
        });
    });
};
observableProto.doAction = function (observerOrOnNext, onError, onCompleted) {
    var source = this, onNextFunc;
    if (typeof observerOrOnNext === 'function') {
        onNextFunc = observerOrOnNext;
    } else {
        onNextFunc = function (x) { observerOrOnNext.onNext(x); };
        onError = function (exception) { observerOrOnNext.onError(exception); };
        onCompleted = function () { observerOrOnNext.onCompleted(); };
    }
    return observableCreateWithDisposable(function (observer) {
        return source.subscribe(function (x) {
            try {
                onNextFunc(x);
            } catch (e) {
                observer.onError(e);
            }
            observer.onNext(x);
        }, function (exception) {
            if (!onError) {
                observer.onError(exception);
            } else {
                try {
                    onError(exception);
                } catch (e) {
                    observer.onError(e);
                }
                observer.onError(exception);
            }
        }, function () {
            if (!onCompleted) {
                observer.onCompleted();
            } else {
                try {
                    onCompleted();
                } catch (e) {
                    observer.onError(e);
                }
                observer.onCompleted();
            }
        });
    });
};
observableProto.skipLast = function (count) {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        var q = [];
        return source.subscribe(function (x) {
            q.push(x);
            if (q.length > count) {
                observer.onNext(q.shift());
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.takeLast = function (count) {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        var q = [];
        return source.subscribe(function (x) {
            q.push(x);
            if (q.length > count) {
                q.shift();
            }
        }, customBind(observer, 'onError'), function () {
            while (q.length > 0) {
                observer.onNext(q.shift());
            }
            observer.onCompleted();
        });
    });
};
observableProto.ignoreElements = function () {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        return source.subscribe(nothing, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.elementAt = function (index) {
    if (index < 0) {
        throw new Error(argumentOutOfRange);
    }
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        var i = index;
        return source.subscribe(function (x) {
            if (i === 0) {
                observer.onNext(x);
                observer.onCompleted();
            }
            i--;
        }, customBind(observer, 'onError'), function () {
            observer.onError(new Error(argumentOutOfRange));
        });
    });
};
observableProto.elementAtOrDefault = function (index, defaultValue) {
    var source = this;
    if (index < 0) {
        throw new Error(argumentOutOfRange);
    }
    if (defaultValue === _undefined) {
        defaultValue = null;
    }
    return observableCreateWithDisposable(function (observer) {
        var i = index;
        return source.subscribe(function (x) {
            if (i === 0) {
                observer.onNext(x);
                observer.onCompleted();
            }
            i--;
        }, customBind(observer, 'onError'), function () {
            observer.onNext(defaultValue);
            observer.onCompleted();
        });
    });
};
observableProto.defaultIfEmpty = function (defaultValue) {
    var source = this;
    if (defaultValue === _undefined) {
        defaultValue = null;
    }
    return observableCreateWithDisposable(function (observer) {
        var found = false;
        return source.subscribe(function (x) {
            found = true;
            observer.onNext(x);
        }, customBind(observer, 'onError'), function () {
            if (!found) {
                observer.onNext(defaultValue);
            }
            observer.onCompleted();
        });
    });
};
observableProto.distinct = function (keySelector, keySerializer) {
    var source = this;
    keySelector || (keySelector = identity);
    keySerializer || (keySerializer = defaultKeySerializer);
    return observableCreateWithDisposable(function (observer) {
        var hashSet = {};
        return source.subscribe(function (x) {
            var key, serializedKey, otherKey, hasMatch = false;
            try {
                key = keySelector(x);
                serializedKey = keySerializer(key);
            } catch (exception) {
                observer.onError(exception);
                return;
            }
            for (otherKey in hashSet) {
                if (serializedKey === otherKey) {
                    hasMatch = true;
                    break;
                }
            }
            if (!hasMatch) {
                hashSet[serializedKey] = null;
                observer.onNext(x);
            }
        }, customBind(observer, 'onError'), customBind(observer, 'onCompleted'));
    });
};
observableProto.mergeObservable = function () {
    var sources = this;
    return observableCreateWithDisposable(function (observer) {
        var group = new CompositeDisposable(),
            isStopped = false,
            m = new SingleAssignmentDisposable();
        group.add(m);
        m.disposable(sources.subscribe(function (innerSource) {
            var innerSubscription = new SingleAssignmentDisposable();
            group.add(innerSubscription);
            innerSubscription.disposable(innerSource.subscribe(function (x) {
                observer.onNext(x);
            }, function (exception) {
                observer.onError(exception);
            }, function () {
                group.remove(innerSubscription);
                if (isStopped && group.length === 1) {
                    observer.onCompleted();
                }
            }));
        }, function (exception) {
            observer.onError(exception);
        }, function () {
            isStopped = true;
            if (group.length === 1) {
                observer.onCompleted();
            }
        }));
        return group;
    });
};
observableProto.merge = function (maxConcurrentOrOther) {
    if (typeof maxConcurrentOrOther !== 'number') {
        return Observable.merge(this, maxConcurrentOrOther);
    }
    var sources = this;
    return observableCreateWithDisposable(function (observer) {
        var activeCount = 0,
            group = new CompositeDisposable(),
            isStopped = false,
            q = [],
            subscribe = function (xs) {
                var subscription = new SingleAssignmentDisposable();
                group.add(subscription);
                subscription.disposable(xs.subscribe(function (x) {
                    observer.onNext(x);
                }, function (exception) {
                    observer.onError(exception);
                }, function () {
                    var s;
                    group.remove(subscription);
                    if (q.length > 0) {
                        s = q.shift();
                        subscribe(s);
                    } else {
                        activeCount--;
                        if (isStopped && activeCount === 0) {
                            observer.onCompleted();
                        }
                    }
                }));
            };
        group.add(sources.subscribe(function (innerSource) {
            if (activeCount < maxConcurrentOrOther) {
                activeCount++;
                subscribe(innerSource);
            } else {
                q.push(innerSource);
            }
        }, customBind(observer, 'onError'), function () {
            isStopped = true;
            if (activeCount === 0) {
                observer.onCompleted();
            }
        }));
        return group;
    });
};
observableProto.switchLatest = function () {
    var sources = this;
    return observableCreateWithDisposable(function (observer) {
        var hasLatest = false,
            innerSubscription = new SerialDisposable(),
            isStopped = false,
            latest = 0,
            subscription = sources.subscribe(function (innerSource) {
                var d = new SingleAssignmentDisposable(), id = ++latest;
                hasLatest = true;
                innerSubscription.disposable(d);
                return d.disposable(innerSource.subscribe(function (x) {
                    if (latest === id) {
                        observer.onNext(x);
                    }
                }, function (e) {
                    if (latest === id) {
                        observer.onError(e);
                    }
                }, function () {
                    if (latest === id) {
                        hasLatest = false;
                        if (isStopped) {
                            observer.onCompleted();
                        }
                    }
                }));
            }, customBind(observer, 'onError'), function () {
                isStopped = true;
                if (!hasLatest) {
                    observer.onCompleted();
                }
            });
        return new CompositeDisposable(subscription, innerSubscription);
    });
};
Observable.merge = function () {
    var scheduler, sources;
    if (!arguments[0]) {
        scheduler = immediateScheduler;
        sources = slice.call(arguments, 1);
    } else if (arguments[0].now) {
        scheduler = arguments[0];
        sources = slice.call(arguments, 1);
    } else {
        scheduler = immediateScheduler;
        sources = slice.call(arguments, 0);
    }
    if (sources[0] instanceof Array) {
        sources = sources[0];
    }
    return observableFromArray(sources, scheduler).mergeObservable();
};
var _shift = function (x, func, args) {
    var items = slice.call(args, 0);
    items.unshift(x);
    return func.apply(x, items);
};
observableProto.concat = function () {
    return _shift(this, observableConcat, arguments);
};
observableProto.concatObservable = function () {
    return this.merge(1);
};
var observableConcat = Observable.concat = function () {
    var sources = argsOrArray(arguments, 0);
    return enumerableFor(sources).concat();
};
observableProto.catchException = function (handlerOrSecond) {
    if (typeof handlerOrSecond === 'function') {
        return observableCatchHandler(this, handlerOrSecond);
    }
    return observableCatch([this, handlerOrSecond]);
};
var observableCatchHandler = function (source, handler) {
    return observableCreateWithDisposable(function (observer) {
        var d1 = new SingleAssignmentDisposable(), subscription = new SerialDisposable();
        d1.disposable(source.subscribe(customBind(observer, 'onNext'), function (exception) {
            var d, result;
            try {
                result = handler(exception);
            } catch (ex) {
                observer.onError(ex);
                return;
            }
            d = new SingleAssignmentDisposable();
            subscription.disposable(d);
            d.disposable(result.subscribe(observer));
        }, customBind(observer, 'onCompleted')));
        return subscription;
    });
};
var observableCatch = Observable.catchException = function () {
    var items = argsOrArray(arguments, 0);
    return enumerableFor(items).catchException();
};
observableProto.onErrorResumeNext = function (second) {
    if (!second) {
        throw new Error('Second observable is required');
    }
    return onErrorResumeNext([this, second]);
};
var onErrorResumeNext = Observable.onErrorResumeNext = function () {
    var sources = argsOrArray(arguments, 0);
    return observableCreateWithDisposable(function (observer) {
        var pos = 0, subscription = new SerialDisposable(),
        cancelable = immediateScheduler.scheduleRecursive(function (self) {
            var current, d;
            if (pos < sources.length) {
                current = sources[pos++];
                d = new SingleAssignmentDisposable();
                subscription.disposable(d);
                d.disposable(current.subscribe(customBind(observer, 'onNext'), function () {
                    self();
                }, function () {
                    self();
                }));
            } else {
                observer.onCompleted();
            }
        });
        return new CompositeDisposable(subscription, cancelable);
    });
};
observableProto.combineLatest = function () {
    var parent = this
    , args = slice.call(arguments)
    , resultSelector = args.pop();
    args.unshift(this);
    return observableCreateWithDisposable(function (observer) {
        var n = args.length
        , hasValue = new Array(n)
        , hasValueAll = false
        , isDone = new Array(n)
        , values = new Array(n);

        var next = function (i) {
            var res;
            hasValue[i] = true;
            if (hasValueAll || (hasValueAll = arrayAll.call(hasValue, identity))) {
                try {
                    res = resultSelector.apply(parent, values);
                } catch (ex) {
                    observer.onError(ex);
                    return;
                }
                observer.onNext(res);
            } else if (arrayAll.call(arrayWhere.call(isDone, function (x, j) { return j !== i; }), identity)) {
                observer.onCompleted();
            }
        };

        var done = function (i) {
            isDone[i] = true;
            if (arrayAll.call(isDone, identity)) {
                observer.onCompleted();
            }
        };

        var subscriptions = new Array(n);
        for (var idx = 0; idx < n; idx++) {
            (function (i) {
                subscriptions[i] = new SingleAssignmentDisposable();
                subscriptions[i].setDisposable(args[i].subscribe(function (x) {
                    values[i] = x;
                    next(i);
                }, customBind(observer, 'onError'), function () {
                    done(i);
                }));
            })(idx);
        }

        return new CompositeDisposable(subscriptions);
    });
};

observableProto.zip = function () {
    var parent = this
    , sources = slice.call(arguments)
    , resultSelector = sources.pop();
    sources.unshift(parent);
    return observableCreateWithDisposable(function (observer) {
        var n = sources.length, queues = new Array(n), isDone = new Array(n);
        var next = function (i) {
            var res, queuedValues;
            if (arrayAll.call(queues, function (x) { return x && x.length > 0; })) {
                try {
                    queuedValues = arrayMap.call(queues, function(x) { return x.shift(); });
                    res = resultSelector.apply(parent, queuedValues);
                } catch (ex) {
                    observer.onError(ex);
                    return;
                }
                observer.onNext(res);
            } else if (arrayAll.call(arrayWhere.call(isDone, function (x, j) { return j !== i; }), identity)) {
                observer.onCompleted();
            }
        };

        var done = function (i) {
            isDone[i] = true;
            if (arrayAll.call(isDone, identity)) {
                observer.onCompleted();
            }
        };

        var subscriptions = new Array(n);
        for (var idx = 0; idx < n; idx++) {
            (function (i) {
                subscriptions[i] = new SingleAssignmentDisposable();
                subscriptions[i].setDisposable(sources[i].subscribe(function (x) {
                    queues[i] || (queues[i] = []);
                    queues[i].push(x);
                    next(i);
                }, customBind(observer, 'onError'), function () {
                    done(i);
                }));
            })(idx);
        }

        var disposable = new CompositeDisposable(subscriptions);
        disposable.add(disposableCreate(function () {
            for (var i = 0; i < n; i++) {
                queues[i] = null;
            }
        }));
        return disposable;
    });
};
observableProto.takeUntil = function (other) {
    var source = this;
    return _combine(other, source, function (observer, otherSubscription) {
        var isOtherStopped = false, isSourceStopped = false;
        return new BinaryObserver(function (otherValue) {
            if (!isSourceStopped && !isOtherStopped) {
                if (otherValue.kind === 'C') {
                    isOtherStopped = true;
                } else if (otherValue.kind === 'E') {
                    isOtherStopped = true;
                    isSourceStopped = true;
                    observer.onError(otherValue.exception);
                } else {
                    isSourceStopped = true;
                    observer.onCompleted();
                }
            }
        }, function (sourceValue) {
            if (!isSourceStopped) {
                sourceValue.accept(observer);
                isSourceStopped = sourceValue.kind !== 'N';
                if (isSourceStopped) {
                    otherSubscription.dispose();
                }
            }
        });
    });
};
observableProto.skipUntil = function (other) {
    return _combine(this, other, function (observer, leftSubscription, rightSubscription) {
        var open = false, rightStopped = false;
        return new BinaryObserver(function (left) {
            if (left.kind == 'E') {
                observer.onError(left.exception);
            }
            else if (open) {
                left.accept(observer);
            }
        }, function (right) {
            if (!rightStopped) {
                if (right.kind === 'N') {
                    open = true;
                } else if (right.kind === 'E') {
                    observer.onError(right.exception);
                }
                rightStopped = true;
                rightSubscription.dispose();
            }
        });
    });
};
Observable.amb = function () {
    var acc = observableNever(), i, len, items = argsOrArray(arguments, 0), func = function(previous, current) {
        return previous.amb(current);
    };
    for (i = 0, len = items.length; i < len; i++) {
        acc = func(acc, items[i]);
    }
    return acc;
};
observableProto.amb = function (rightSource) {
    return _combine(this, rightSource, function (observer, leftSubscription, rightSubscription) {
        var choice = 'N';
        return new BinaryObserver(function (left) {
            if (choice === 'N') {
                choice = 'L';
                rightSubscription.dispose();
            }
            if (choice === 'L') {
                left.accept(observer);
            }
        }, function (right) {
            if (choice === 'N') {
                choice = 'R';
                leftSubscription.dispose();
            }
            if (choice === 'R') {
                right.accept(observer);
            }
        });
    });
};
var ObserveOnObserver = (function (base) {
    inherits(ObserveOnObserver, base);
    function ObserveOnObserver() {
        ObserveOnObserver.base.constructor.apply(this, arguments);
    }
    ObserveOnObserver.prototype.next = function (value) {
        ObserveOnObserver.base.next.call(this, value);
        this.ensureActive();
    };
    ObserveOnObserver.prototype.error = function (e) {
        ObserveOnObserver.base.error.call(this, e);
        this.ensureActive();
    };
    ObserveOnObserver.prototype.completed = function () {
        ObserveOnObserver.base.completed.call(this);
        this.ensureActive();
    };

    return ObserveOnObserver;
})(ScheduledObserver);
observableProto.observeOn = function (scheduler) {
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        return source.subscribe(new ObserveOnObserver(scheduler, observer));
    });
};
observableProto.subscribeOn = function(scheduler) {
    var source = this;
    return observableCreateWithDisposable(function(observer) {
        var m = new SingleAssignmentDisposable(), d = new SerialDisposable();
        d.setDisposable(m);
        m.setDisposable(scheduler.schedule(function() {
            d.setDisposable(new ScheduledDisposable(scheduler, source.subscribe(observer)));
        }));
        return d;
    });
};
})(this);

/*
 Copyright (c) Microsoft Corporation.  All rights reserved.
 This code is licensed by Microsoft Corporation under the terms
 of the MICROSOFT REACTIVE EXTENSIONS FOR JAVASCRIPT AND .NET LIBRARIES License.
 See http://go.microsoft.com/fwlink/?LinkID=220762.
*/
(function(k,t){var l;l="undefined"!==typeof k.module&&"undefined"!==typeof k.module.exports?k.require("./rx.min.js"):k.Rx;var n=l.Observable,d=n.prototype,m=n.createWithDisposable,u=l.CompositeDisposable,o=function(a,b){return a===b},p=function(a){return a},q=function(a,b){return a>b?1:a===b?0:-1},r=function(a,b,d){return m(function(c){var f=!1,g=null,h=[];return a.subscribe(function(a){var e,i;try{i=b(a)}catch(v){c.onError(v);return}e=0;if(f)try{e=d(i,g)}catch(w){c.onError(w);return}else f=!0,g=
i;0<e&&(g=i,h=[]);0<=e&&h.push(a)},function(a){c.onError(a)},function(){c.onNext(h);c.onCompleted()})})};d.aggregate=function(a,b){return this.scan(a,b).startWith(a).finalValue()};d.aggregate1=function(a){return this.scan1(a).finalValue()};d.any=function(a){var b=this;return a!==t?b.where(a).any():m(function(a){return b.subscribe(function(){a.onNext(!0);a.onCompleted()},function(b){a.onError(b)},function(){a.onNext(!1);a.onCompleted()})})};d.all=function(a){return this.where(function(b){return!a(b)}).any().select(function(a){return!a})};
d.contains=function(a,b){b||(b=o);return this.where(function(d){return b(d,a)}).any()};d.count=function(){return this.aggregate(0,function(a){return a+1})};d.sum=function(){return this.aggregate(0,function(a,b){return a+b})};d.minBy=function(a,b){b||(b=q);return r(this,a,function(a,c){return-1*b(a,c)})};var s=function(a){if(0==a.length)throw Error("Sequence contains no elements.");return a[0]};d.min=function(a){return this.minBy(p,a).select(function(a){return s(a)})};d.maxBy=function(a,b){b||(b=q);
return r(this,a,b)};d.max=function(a){return this.maxBy(p,a).select(function(a){return s(a)})};d.average=function(){return this.scan({sum:0,count:0},function(a,b){return{sum:a.sum+b,count:a.count+1}}).finalValue().select(function(a){return a.sum/a.count})};d.sequenceEqual=function(a,b){var d=this;b||(b=o);return m(function(c){var f=!1,g=!1,h=[],j=[],e=d.subscribe(function(a){var d,f;if(0<j.length){f=j.shift();try{d=b(f,a)}catch(e){c.onError(e);return}d||(c.onNext(!1),c.onCompleted())}else g?(c.onNext(!1),
c.onCompleted()):h.push(a)},function(a){c.onError(a)},function(){f=!0;0===h.length&&(0<j.length?(c.onNext(!1),c.onCompleted()):g&&(c.onNext(!0),c.onCompleted()))}),i=a.subscribe(function(a){var d,e;if(0<h.length){e=h.shift();try{d=b(e,a)}catch(g){c.onError(g);return}d||(c.onNext(!1),c.onCompleted())}else f?(c.onNext(!1),c.onCompleted()):j.push(a)},function(a){c.onError(a)},function(){g=!0;0===j.length&&(0<h.length?(c.onNext(!1),c.onCompleted()):f&&(c.onNext(!0),c.onCompleted()))});return new u(e,
i)})}})(this);

// @depend rx.min.js
// @depend rx.aggregates.min.js
Rx = this.Rx;
/**
* @preserve Copyright (c) Microsoft Corporation.  All rights reserved.
* This code is licensed by Microsoft Corporation under the terms
* of the MICROSOFT REACTIVE EXTENSIONS FOR JAVASCRIPT AND .NET LIBRARIES License.
* See http://go.microsoft.com/fwlink/?LinkID=220762.
*/

(function (global, _undefined) {
	var root;
	if (typeof global.module !== 'undefined' && typeof global.module.exports !== 'undefined') {
  	    root = global.require('./rx.min.js');
  	} else {
  		root = global.Rx;
  	}	
	
	var Observable = root.Observable,
		observableProto = Observable.prototype,
		observableCreateWithDisposable = Observable.createWithDisposable,
		observableDefer = Observable.defer,
		observableToArray = Observable.fromArray,
		observableThrow = Observable.throwException,
		timeoutScheduler = root.Scheduler.Timeout,
		SingleAssignmentDisposable = root.SingleAssignmentDisposable,
		SerialDisposable = root.SerialDisposable,
		CompositeDisposable = root.CompositeDisposable,
		RefCountDisposable = root.RefCountDisposable,
		Subject = root.Subject,
		BinaryObserver = root.Internals.BinaryObserver;

var _addRef = function (xs, r) {
    return observableCreateWithDisposable(function (observer) {
        return new CompositeDisposable(r.getDisposable(), xs.subscribe(observer));
    });
};
var _combine = function (leftSource, rightSource, combinerSelector) {
    return observableCreateWithDisposable(function (observer) {
        var leftSubscription = new SingleAssignmentDisposable(),
            rightSubscription = new SingleAssignmentDisposable(),
            combiner = combinerSelector(observer, leftSubscription, rightSubscription);
        leftSubscription.disposable(leftSource.materialize().select(function (x) {
            return { switchValue: function (l) { return l(x); } };
        }).subscribe(combiner));
        rightSubscription.disposable(rightSource.materialize().select(function (x) {
            return { switchValue: function (l, r) { return r(x); } };
        }).subscribe(combiner));
        return new CompositeDisposable(leftSubscription, rightSubscription);
    });
};
var normalizeTime = function (timeSpan) {
	return timeSpan < 0 ? 0 : timeSpan;
},
observableTimerDate = function (dueTime, scheduler) {
    return observableCreateWithDisposable(function (observer) {
        return scheduler.scheduleWithAbsolute(dueTime, function () {
            observer.onNext(0);
            observer.onCompleted();
        });
    });
},
observableTimerDateAndPeriod = function (dueTime, period, scheduler) {
    var p = normalizeTime(period);
    return observableCreateWithDisposable(function (observer) {
        var count = 0, d = dueTime;
        return scheduler.scheduleRecursiveWithAbsolute(d, function (self) {
            var now;
            if (p > 0) {
                now = scheduler.now();
                d = d + p;
                if (d <= now) {
                    d = now + p;
                }
            }
            observer.onNext(count++);
            self(d);
        });
    });
},
observableTimerTimeSpan = function (dueTime, scheduler) {
    var d = normalizeTime(dueTime);
    return observableCreateWithDisposable(function (observer) {
        return scheduler.scheduleWithRelative(d, function () {
            observer.onNext(0);
            observer.onCompleted();
        });
    });
},
observableTimerTimeSpanAndPeriod = function (dueTime, period, scheduler) {
    return observableDefer(function () {
        return observableTimerDateAndPeriod(scheduler.now() + dueTime, period, scheduler);
    });
};
var observableinterval = Observable.interval = function (period, scheduler) {
	scheduler || (scheduler = timeoutScheduler);
    return observableTimerTimeSpanAndPeriod(period, period, scheduler);
};
Observable.timer = function (dueTime, periodOrScheduler, scheduler) {
    var period;
    scheduler || (scheduler = timeoutScheduler);
    if (periodOrScheduler !== _undefined && typeof periodOrScheduler === 'number') {
        period = periodOrScheduler;
    } else if (periodOrScheduler !== _undefined && typeof periodOrScheduler === 'object') {
        scheduler = periodOrScheduler;
    }
    if (dueTime instanceof Date && period === _undefined) {
        return observableTimerDate(dueTime.getTime(), scheduler);
    }
    if (dueTime instanceof Date && period !== _undefined) {
        period = periodOrScheduler;
        return observableTimerDateAndPeriod(dueTime.getTime(), period, scheduler);
    }
    if (period === _undefined) {
        return observableTimerTimeSpan(dueTime, scheduler);
    }
    return observableTimerTimeSpanAndPeriod(dueTime, period, scheduler);
};
var observableDelayTimeSpan = function (source, dueTime, scheduler) {
    return observableCreateWithDisposable(function (observer) {
        var active = false, 
			cancelable = new SerialDisposable(), 
			exception = null, 
			q = [], 
			running = false, 
			subscription;
        subscription = source.materialize().timestamp(scheduler).subscribe(function (notification) {
            var d, shouldRun;
            if (notification.value.kind === 'E') {
                q = [];
                q.push(notification);
                exception = notification.value.exception;
                shouldRun = !running;
            } else {
                q.push({ value: notification.value, timestamp: notification.timestamp + dueTime });
                shouldRun = !active;
                active = true;
            }
            if (shouldRun) {
                if (exception !== null) {
                    observer.onError(exception);
                } else {
                    d = new SingleAssignmentDisposable();
                    cancelable.disposable(d);
                    d.disposable(scheduler.scheduleRecursiveWithRelative(dueTime, function (self) {
                        var e, recurseDueTime, result, shouldRecurse;
                        if (exception !== null) {
                            return;
                        }
                        running = true;
                        do {
                            result = null;
                            if (q.length > 0 && q[0].timestamp - scheduler.now() <= 0) {
                                result = q.shift().value;
                            }
                            if (result !== null) {
                                result.accept(observer);
                            }
                        } while (result !== null);
                        shouldRecurse = false;
                        recurseDueTime = 0;
                        if (q.length > 0) {
                            shouldRecurse = true;
                            recurseDueTime = Math.max(0, q[0].timestamp - scheduler.now());
                        } else {
                            active = false;
                        }
                        e = exception;
                        running = false;
                        if (e !== null) {
                            observer.onError(e);
                        } else if (shouldRecurse) {
                            self(recurseDueTime);
                        }
                    }));
                }
            }
        });
        return new CompositeDisposable(subscription, cancelable);
    });
};
var observableDelayDate = function (source, dueTime, scheduler) {
    return observableDefer(function () {
        var timeSpan = dueTime - scheduler.now();
        return observableDelayTimeSpan(timeSpan, scheduler);
    });
};
observableProto.delay = function (dueTime, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
	return dueTime instanceof Date ? 
		observableDelayDate(this, dueTime.getTime(), scheduler) :
		observableDelayTimeSpan(this, dueTime, scheduler);
};
observableProto.throttle = function (dueTime, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    var source = this;
    return observableCreateWithDisposable(function (observer) {
        var cancelable = new SerialDisposable(), hasvalue = false, id = 0, subscription, value = null;
        subscription = source.subscribe(function (x) {
            var currentId, d;
            hasvalue = true;
            value = x;
            id++;
            currentId = id;
            d = new SingleAssignmentDisposable();
            cancelable.disposable(d);
            d.disposable(scheduler.scheduleWithRelative(dueTime, function () {
                if (hasvalue && id === currentId) {
                    observer.onNext(value);
                }
                hasvalue = false;
            }));
        }, function (exception) {
            cancelable.dispose();
            observer.onError(exception);
            hasvalue = false;
            id++;
        }, function () {
            cancelable.dispose();
            if (hasvalue) {
                observer.onNext(value);
            }
            observer.onCompleted();
            hasvalue = false;
            id++;
        });
        return new CompositeDisposable(subscription, cancelable);
    });
};
observableProto.windowWithTime = function (timeSpan, timeShiftOrScheduler, scheduler) {
    var source = this, timeShift;
    if (timeShiftOrScheduler === _undefined) {
        timeShift = timeSpan;
    }
    if (scheduler === _undefined) {
        scheduler = timeoutScheduler;
    }
    if (typeof timeShiftOrScheduler === 'number') {
        timeShift = timeShiftOrScheduler;
    } else if (typeof timeShiftOrScheduler === 'object') {
        timeShift = timeSpan;
        scheduler = timeShiftOrScheduler;
    }
    return observableCreateWithDisposable(function (observer) {
        var createTimer, 
			groupDisposable, 
			nextShift = timeShift, 
			nextSpan = timeSpan, 
			q = [],
			refCountDisposable, 
			timerD = new SerialDisposable(), 
			totalTime = 0;
        groupDisposable = new CompositeDisposable(timerD);
        refCountDisposable = new RefCountDisposable(groupDisposable);
        createTimer = function () {
            var isShift, isSpan, m, newTotalTime, ts;
            m = new SingleAssignmentDisposable();
            timerD.disposable(m);
            isSpan = false;
            isShift = false;
            if (nextSpan === nextShift) {
                isSpan = true;
                isShift = true;
            } else if (nextSpan < nextShift) {
                isSpan = true;
            } else {
                isShift = true;
            }
            newTotalTime = isSpan ? nextSpan : nextShift;
            ts = newTotalTime - totalTime;
            totalTime = newTotalTime;
            if (isSpan) {
                nextSpan += timeShift;
            }
            if (isShift) {
                nextShift += timeShift;
            }
            m.disposable(scheduler.scheduleWithRelative(ts, function () {
                var s;
                if (isShift) {
                    s = new Subject();
                    q.push(s);
                    observer.onNext(_addRef(s, refCountDisposable));
                }
                if (isSpan) {
                    s = q.shift();
                    s.onCompleted();
                }
                createTimer();
            }));
        };
        q.push(new Subject());
        observer.onNext(_addRef(q[0], refCountDisposable));
        createTimer();
        groupDisposable.add(source.subscribe(function (x) {
            var i, s;
            for (i = 0; i < q.length; i++) {
                s = q[i];
                s.onNext(x);
            }
        }, function (e) {
            var i, s;
            for (i = 0; i < q.length; i++) {
                s = q[i];
                s.onError(e);
            }
            observer.onError(e);
        }, function () {
            var i, s;
            for (i = 0; i < q.length; i++) {
                s = q[i];
                s.onCompleted();
            }
            observer.onCompleted();
        }));
        return refCountDisposable;
    });
};
observableProto.windowWithTimeOrCount = function (timeSpan, count, scheduler) {
    var source = this;
    scheduler || (scheduler = timeoutScheduler);
    return observableCreateWithDisposable(function (observer) {
        var createTimer, 
			groupDisposable, 
			n = 0, 
			refCountDisposable, 
			s, 
			timerD = new SerialDisposable(), 
			windowId = 0;
        groupDisposable = new CompositeDisposable(timerD);
        refCountDisposable = new RefCountDisposable(groupDisposable);
        createTimer = function (id) {
            var m = new SingleAssignmentDisposable();
            timerD.disposable(m);
            m.disposable(scheduler.scheduleWithRelative(timeSpan, function () {
                var newId;
                if (id !== windowId) {
                    return;
                }
                n = 0;
                newId = ++windowId;
                s.onCompleted();
                s = new Subject();
                observer.onNext(_addRef(s, refCountDisposable));
                createTimer(newId);
            }));
        };
        s = new Subject();
        observer.onNext(_addRef(s, refCountDisposable));
        createTimer(0);
        groupDisposable.add(source.subscribe(function (x) {
            var newId = 0, newWindow = false;
            s.onNext(x);
            n++;
            if (n === count) {
                newWindow = true;
                n = 0;
                newId = ++windowId;
                s.onCompleted();
                s = new Subject();
                observer.onNext(_addRef(s, refCountDisposable));
            }
            if (newWindow) {
                createTimer(newId);
            }
        }, function (e) {
            s.onError(e);
            observer.onError(e);
        }, function () {
            s.onCompleted();
            observer.onCompleted();
        }));
        return refCountDisposable;
    });
};
observableProto.bufferWithTime = function (timeSpan, timeShiftOrScheduler, scheduler) {
    var timeShift;
    if (timeShiftOrScheduler === _undefined) {
        timeShift = timeSpan;
    }
    scheduler || (scheduler = timeoutScheduler);
    if (typeof timeShiftOrScheduler === 'number') {
        timeShift = timeShiftOrScheduler;
    } else if (typeof timeShiftOrScheduler === 'object') {
        timeShift = timeSpan;
        scheduler = timeShiftOrScheduler;
    }
    return this.windowWithTime(timeSpan, timeShift, scheduler).selectMany(function (x) {
        return x.toArray();
    });
};
observableProto.bufferWithTimeOrCount = function (timeSpan, count, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    return this.windowWithTimeOrCount(timeSpan, count, scheduler).selectMany(function (x) {
        return x.toArray();
    });
};
observableProto.timeInterval = function (scheduler) {
    var source = this;
    scheduler || (scheduler = timeoutScheduler);
    return observableDefer(function () {
        var last = scheduler.now();
        return source.select(function (x) {
            var now = scheduler.now(), span = now - last;
            last = now;
            return {
                value: x,
                interval: span
            };
        });
    });
};
observableProto.timestamp = function (scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    return this.select(function (x) {
        return {
            value: x,
            timestamp: scheduler.now()
        };
    });
};
var sampleObservable = function (source, sampler) {
    return _combine(source, sampler, function (observer) {
        var atEnd = false, value;
        return new BinaryObserver(function (newvalue) {
            if (newvalue.kind === 'N') {
                value = newvalue;
            }
            if (newvalue.kind === 'E') {
                newvalue.accept(observer);
            }
            if (newvalue.kind === 'C') {
                atEnd = true;
            }
        }, function () {
            var myvalue = value;
            value = _undefined;
            if (myvalue !== _undefined) {
                myvalue.accept(observer);
            }
            if (atEnd) {
                observer.onCompleted();
            }
        });
    });
};
observableProto.sample = function (intervalOrSampler, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    if (typeof intervalOrSampler === 'number') {
        return sampleObservable(this, observableinterval(intervalOrSampler, scheduler));
    }
    return sampleObservable(this, intervalOrSampler);
};
observableProto.timeout = function (dueTime, other, scheduler) {
    var schedulerMethod, source = this;
    if (other === _undefined) {
        other = observableThrow(new Error('Timeout'));
    }
    scheduler || (scheduler = timeoutScheduler);
    if (dueTime instanceof Date) {
        schedulerMethod = function(dt, action) {
            scheduler.scheduleWithAbsolute(dt, action);
        };
    } else {
          schedulerMethod = function(dt, action) {
            scheduler.scheduleWithRelative(dt, action);
        };      
    }
    return observableCreateWithDisposable(function (observer) {
        var createTimer,
            id = 0,
            original = new SingleAssignmentDisposable(),
            subscription = new SerialDisposable(),
            switched = false,
            timer = new SerialDisposable();
        subscription.disposable(original);
        createTimer = function () {
            var myId = id;
            timer.disposable(schedulerMethod(dueTime, function () {
                var timerWins;
                switched = id === myId;
                timerWins = switched;
                if (timerWins) {
                    subscription.disposable(other.subscribe(observer));
                }
            }));
        };
        createTimer();
        original.disposable(source.subscribe(function (x) {
            var onNextWins = !switched;
            if (onNextWins) {
                id++;
                observer.onNext(x);
                createTimer();
            }
        }, function (e) {
            var onErrorWins = !switched;
            if (onErrorWins) {
                id++;
                observer.onError(e);
            }
        }, function () {
            var onCompletedWins = !switched;
            if (onCompletedWins) {
                id++;
                observer.onCompleted();
            }
        }));
        return new CompositeDisposable(subscription, timer);
    });
};
Observable.generateWithAbsoluteTime = function (initialState, condition, iterate, resultSelector, timeSelector, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    return observableCreateWithDisposable(function (observer) {
        var first = true,
            hasResult = false,
            result,
            state = initialState, 
            time;
        return scheduler.scheduleRecursiveWithAbsolute(scheduler.now(), function (self) {
            if (hasResult) {
                observer.onNext(result);
            }
            try {
                if (first) {
                    first = false;
                } else {
                    state = iterate(state);
                }
                hasResult = condition(state);
                if (hasResult) {
                    result = resultSelector(state);
                    time = timeSelector(state);
                }
            } catch (e) {
                observer.onError(e);
                return;
            }
            if (hasResult) {
                self(time);
            } else {
                observer.onCompleted();
            }
        });
    });
};
Observable.generateWithRelativeTime = function (initialState, condition, iterate, resultSelector, timeSelector, scheduler) {
    scheduler || (scheduler = timeoutScheduler);
    return observableCreateWithDisposable(function (observer) {
        var first = true,
            hasResult = false,
            result,
            state = initialState, 
            time;
        return scheduler.scheduleRecursiveWithRelative(0, function (self) {
            if (hasResult) {
                observer.onNext(result);
            }
            try {
                if (first) {
                    first = false;
                } else {
                    state = iterate(state);
                }
                hasResult = condition(state);
                if (hasResult) {
                    result = resultSelector(state);
                    time = timeSelector(state);
                }
            } catch (e) {
                observer.onError(e);
                return;
            }
            if (hasResult) {
                self(time);
            } else {
                observer.onCompleted();
            }
        });
    });
};
})(this);

// Dependencies
// @depend ../lib/RxJS/rx.js
// @depend ../lib/RxJS/rx.time.js

/*globals Rx*/
(function() {

    var thenObserver =
        Rx.Observer.create(
            function(item) {
                var unsubscribe,
                    obsOrFunc,
                    outerSubscription;

                this.hasItem = true;
                if (unsubscribe) {
                    return;
                }

                unsubscribe = this.unsubscribe;
                obsOrFunc = this.obsOrFunc;
                outerSubscription = this.outerSubscription;

                if (outerSubscription !== undefined) {
                    outerSubscription.dispose();
                    this.outerSubscription = undefined;
                }
                else {
                    this.unsubscribe = true;
                }

                if (obsOrFunc instanceof Function) {
                    this.subscription = obsOrFunc(item).subscribe(this.observer);
                }
                else {
                    this.subscription = obsOrFunc.subscribe(this.observer);
                }
            },
            function(error) {
                if (this.unsubscribe) {
                    return;
                }

                this.observer.onError(error);
            },
            function() {
                if (this.unsubscribe) {
                    return;
                }

                if (!this.hasItem) {
                    this.observer.onCompleted();
                }
            }),
        thenDisposable = Rx.Disposable.create(function() {
            var observableSubscription = this.observableSubscription,
                observer = this.observer,
                observerSubscription = observer.subscription;

            if (observableSubscription !== undefined) {
                observableSubscription.dispose();
                this.observableSubscription = undefined;
            }
            else if (observerSubscription !== undefined) {
                observerSubscription.dispose();
                this.observerSubscription = undefined;
            }
        }),
        thenObservable = Object.create(new Rx.Observable(), {
            _subscribe: {
                value: function(observer) {
                    var thenObserverInstance = Object.create(thenObserver, {
                        obsOrFunc: { value: this.obsOrFunc },
                        observer: { value: observer }
                    }),

                    subscription = this.source.subscribe(thenObserverInstance),
                    thenSubscriptionInstance;

                    thenObserverInstance.outerSubscription = subscription;
                    thenSubscriptionInstance = Object.create(thenDisposable, {
                        observableSubscription: { value: subscription },
                        observer: { value: thenObserverInstance }
                    });

                    // If too many items were sent synchronously, the observer will set an unsubscribe flag. We check this and unsubscribe from the outer subscription before returning.
                    if (thenObserverInstance.unsubscribe) {
                        subscription.dispose();
                    }

                    return thenSubscriptionInstance;
                }
            }
        });

    Rx.Observable.prototype.then = function(obsOrFunc) {
        return Object.create(thenObservable, {
            source: { value: this },
            obsOrFunc: { value: obsOrFunc }
        });
    };
}());

(function() {
    var returnedValue = new Rx.Observable();

    returnedValue.subscribe = function (observer, onError, onCompleted) {
        if (typeof observer === "function") {
            observer(this.value);
            if (onCompleted) {
                onCompleted();
            }
        }
        else {
            observer.onNext(this.value);
            observer.onCompleted();
        }
        return Rx.Disposable.empty;
    };

    Rx.Observable.fastReturnValue = function(value) {
        return Object.create(returnedValue, {
            value: { value: value }
        });
    };
}());


(function () {
    var observerPrototype =
        Rx.Observer.create(
            function(item) {
                var array = this.projection(item),
                    length,
                    counter,
                    observer = this.observer;

                for(counter = 0, length = array.length; counter < length; counter++) {
                    observer.onNext(array[counter]);
                }
            },
            function(error) {
                this.observer.onError(error);
            },
            function() {
                this.observer.onCompleted();
            });

    Rx.Observable.prototype.selectManyArrays = function(projection) {
        var self = this;
        return Rx.Observable.fastCreateWithDisposable(function(observer) {
            return self.subscribe( Object.create(observerPrototype, {
                observer: { value: observer },
                projection: { value: projection }
            }));
        });
    };
}());

Rx.Observable.prototype.subscribeIgnoreErrors = function(onNext, onError, onCompleted) {
    if (typeof onNext !== 'function') {
        if (onNext.onError === undefined) {
            onNext.onError = function(){};
        }
        return this.subscribe(onNext);
    }
    else if (onError === undefined) {
        onError = function(){};
    }
    return this.subscribe(onNext, onError, onCompleted);
};

Rx.Observable.prototype.windowWithTime = function(time) {
    var self = this;
    return Rx.Observable.createWithDisposable(function(observer) {
        var scheduledAction,
            items = [],
            action =
                function() {
                    observer.onNext(items.slice());
                    items.length = 0;
                };

        return self.subscribe(function(item) {
            items.push(item);
            if (scheduledAction == null) {
                scheduledAction = setTimeout(action, time);
            }
        },
        function(err) {
            if (scheduledAction != null) {
                clearTimeout(scheduledAction);
            }

            if (items.length > 0) {
                observer.onNext(items);
            }

            observer.onError(err);
        },
        function() {
            if (scheduledAction != null) {
                clearTimeout(scheduledAction);
            }

            if (items.length > 0) {
                observer.onNext(items);
            }

            observer.onCompleted();
        });
    });
};

Rx.EventDisposable = function(observers, observer) {
    this.observers = observers;
    this.observer = observer;
};

Rx.EventDisposable.prototype = new Rx.Disposable();

Rx.EventDisposable.prototype.dispose = function() {
    var observers = this.observers,
        observer = this.observer,
        length = observers.length;

    while(length--) {
        if (observers[length] === observer) {
            observers.splice(length, 1);
            break;
        }
    }
};

Rx.Event = function() { this.observers = []; };
Rx.Event.prototype = new Rx.Observable();

Rx.Event.prototype.subscribe = function(observer) {
    var observers = this.observers;

    observer = typeof observer === "function" ?
        {onNext: observer}:
        observer;

    this.observers[observers.length] = observer;

    return new Rx.EventDisposable(observers, observer);
};

Rx.Event.prototype.onNext = function(data) {
    var observer,
        observers = this.observers,
        i = 0;

    // Notify observers in order of subscription to satisfy usages of Event
    // in legacy code. See: TVUI-15493

    // Constantly read observers.length as observers may
    // be disposed or added during onNext activity.
    while(i < observers.length) {
        observer = observers[i];
        observer.onNext(data);
        // An onNext could trigger disposing of the subscription.
        // This would remove the observer from the array.
        if (observer === observers[i]) {
            i++;
        }
    }
};

/**
 *  Runs all observable sequences in parallel and collect their last elements.
 *
 * @example
 *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
 *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
 * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
 */
Rx.Observable.forkJoin = (function () {

    var argsOrArray = function(args, idx) {
        return args.length === 1 && args[idx] instanceof Array ?
                args[idx] :
                slice.call(args);
    };

    return function() {
        var allSources = argsOrArray(arguments, 0);
        return Rx.Observable.createWithDisposable(function(subscriber) {
            var count = allSources.length;
            if (count === 0) {
                subscriber.onCompleted();
                return disposableEmpty;
            }
            var group = new Rx.CompositeDisposable(),
                finished = false,
                hasResults = new Array(count),
                hasCompleted = new Array(count),
                results = new Array(count);

            for (var idx = 0; idx < count; idx++) {
                (function (i) {
                    var source = allSources[i];
                    group.add(source.subscribe(function (value) {
                        if (!finished) {
                            hasResults[i] = true;
                            results[i] = value;
                        }
                    }, function (e) {
                        finished = true;
                        subscriber.onError(e);
                        group.dispose();
                    }, function () {
                        if (!finished) {
                            if (!hasResults[i]) {
                                subscriber.onCompleted();
                                return;
                            }
                            hasCompleted[i] = true;
                            for (var ix = 0; ix < count; ix++) {
                                if (!hasCompleted[ix]) {
                                    return;
                                }
                            }
                            finished = true;
                            subscriber.onNext(results);
                            subscriber.onCompleted();
                        }
                    }));
                })(idx);
            }

            return group;
        });
    }
})();

Rx.Observable.combineLatest = (function() {
    var LinkedList = function(value, next) {
        this.value = value;
        this.next = next;
    };

    LinkedList.prototype.toArray = function() {
        var curr = this,
            results = [];

        while(curr) {
            results.push(curr.value);
            curr = curr.next;
        }

        return results;
    };

    return function(obs, f) {
        var count = obs.length-1,
            curr;

        if (obs.length > 1) {
            curr = obs[count].select(function(v) { return new LinkedList(v); });

            for(count = obs.length-2; count >= 0; count--) {
                curr =
                    curr.combineLatest(
                        obs[count],
                        function(acc, curr) {
                            return new LinkedList(curr, acc);
                        });
            }

            return curr.select(function(list) {
                return f.apply(null, list.toArray());
            });
        }
        else if (obs.length == 1) {
            return obs[0].select(f);
        }

        return Rx.Observable.empty();
    };
})();

/**
 *  @param Array[Rx.Observable] obs
 *  @param Function f
 */
Rx.Observable.zip = (function() {
    var LinkedList = function(value, next) {
        this.value = value;
        this.next = next;
    };

    LinkedList.prototype.toArray = function() {
        var curr = this,
            results = [];

        while(curr) {
            results.push(curr.value);
            curr = curr.next;
        }

        return results;
    };

    return function(obs, f) {
        var count = obs.length-1,
            curr;

        if (obs.length > 1) {
            curr = obs[count].select(function(v) { return new LinkedList(v); });

            for(count = obs.length-2; count >= 0; count--) {
                curr =
                    curr.zip(
                        obs[count],
                        function(acc, curr) {
                            return new LinkedList(curr, acc);
                        });
            }

            return curr.select(function(list) {
                return f.apply(null, list.toArray());
            });
        }
        else if (obs.length == 1) {
            return obs[0].select(f);
        }

        return Rx.Observable.empty();
    };
})();

/**
* Method on Observable that accepts an optional initial value and returns
* a new observable that returns a pair of the current value and the
* previous value.
*
* @param {Object} initialValue [optional] the initial value of the observable value.
*
* Example:
*      Rx.Observable.fromArray([1,2,3,4,5]).
*          withPrevious().
*          subscribe(function(item) {
*              console.log(JSON.stringify(item));
*          });
*
*  // output
*  { current : 2, previous : 1 }
*  { current : 3, previous : 2 }
*  { current : 4, previous : 3 }
*  { current : 5, previous : 4 }
*
*/
Rx.Observable.prototype.withPrevious = function(initialValue){
   var self = this,
       args = arguments;

   return Rx.Observable.createWithDisposable(function(observer) {
       if (args.length === 1) {
           observer.onNext({ current: initialValue, previous: undefined });
       }

       return self.subscribe(
           function(item) {
               observer.onNext({ current: item, previous: initialValue });
               initialValue = item;
           },
           function(err) {
               observer.onError(err);
           },
           function() {
               observer.onCompleted();
           });
   });
};

/**
 * @param {Function} keySelector
 * @param {Function} [valueSelector] Optional
 */
Rx.Observable.prototype.toMap = function(keySelector, valueSelector) {
    var self = this;

    return Rx.Observable.createWithDisposable(function(observer) {

        var map = {};

        return self.subscribe(
            function(value) {
                var key = keySelector(value);
                if (valueSelector) {
                    value = valueSelector(value);
                }
                map[key] = value;
            },
            function(err) {
                observer.onError(err);
            },
            function() {
                observer.onNext(map);
                observer.onCompleted();
            }
        );

    });

};

/**
 *
 */
Rx.Observable.fastCreateWithDisposable = function(subscribe) {
    var obs = new Rx.Observable();
    obs._subscribe = subscribe;
    return obs;
};


Rx.Observable.prototype.time = function(name) {
    var self = this;
    return Rx.Observable.fastCreateWithDisposable(function(observer) {
        var onNextFired = false,
            log = util.log;
        log.time(name);
        log.time(name + '-untilFirstOnNext');

        return self.subscribe(
            function(value) {
                if (!onNextFired) {
                    log.timeEnd(name + '-untilFirstOnNext');
                    log.time(name + '-fromFirstOnNextUntilCompletedOrError');
                    onNextFired = true;
                }
                //log.timeEnd(name + '-untilNextOnNext');
                //log.time(name + '-untilNextOnNext');
                observer.onNext(value);
            },
            function (err) {
                log.timeEnd(name + '-untilFirstOnNext');
                //log.timeEnd(name + '-untilNextOnNext');
                log.timeEnd(name + '-fromFirstOnNextUntilCompletedOrError');
                log.timeEnd(name);
                observer.onError(err);
            },
            function () {
                log.timeEnd(name + '-untilFirstOnNext');
                //log.timeEnd(name + '-untilNextOnNext');
                log.timeEnd(name + '-fromFirstOnNextUntilCompletedOrError');
                log.timeEnd(name);
                observer.onCompleted();
            });
    });
};

/**
 * A simpler alternative to windowWithTime() or bufferWithTime().
 * @param {Number} ms   Milliseconds to buffer stream values
 */
Rx.Observable.prototype.buffer = function(ms) {
    var self = this;
    return Rx.Observable.createWithDisposable(function (observer) {
        var values = [],
            pendingError,
            pendingComplete,
            timeoutId;

        return self.subscribe(
            function(value) {
                values.push(value);
                if (timeoutId === undefined) {
                    timeoutId = setTimeout(function () {
                        timeoutId = undefined;
                        observer.onNext(values);
                        values = [];
                        if (pendingError) {
                            observer.onError(pendingError);
                        } else if (pendingComplete) {
                            observer.onCompleted();
                        }
                    }, ms);
                }
            },
            function(err) {
                if (timeoutId === undefined) {
                    observer.onError(err);
                } else {
                    pendingError = err;
                }
            },
            function() {
                if (timeoutId === undefined) {
                    observer.onCompleted();
                } else {
                    pendingComplete = true;
                }
            }
        );
    });
};

Rx.Observable.prototype.last = function() {
    var self = this;
    return Rx.Observable.fastCreateWithDisposable(function (observer) {
        var last,
            hasItem = false;

        return self.subscribe(
            function(item) {
                last = item;
                hasItem = true;
            },
            function (error) {
                if (hasItem) {
                    observer.onNext(last);
                }
                observer.onError(error);
            },
            function () {
                if (hasItem) {
                    observer.onNext(last);
                }
                observer.onCompleted();
            });
    });
};

Rx.Observable.fromArrayFast = function(arr) {
	return Rx.Observable.fastCreateWithDisposable(function(observer) {
		for(var cnt = 0, arrLength = arr.length; cnt < arrLength; cnt++) {
			observer.onNext(arr[cnt]);
		}
		observer.onCompleted();
	});
};


Rx.Observable.prototype.toArrayFast = function() {
	var self = this;
	return Rx.Observable.fastCreateWithDisposable(function(observer) {
		var items = [];
		return self.subscribe(
			function(item) {
				items.push(item);
			},
			function(error) {
				observer.onError(error);
			},
			function() {
				observer.onNext(items);
				observer.onCompleted();
			});
	});
};

Rx.Observable.prototype.finalValueFast = function() {
	var self = this;
	return Rx.Observable.fastCreateWithDisposable(function(observer) {
		var finalValue,
            onNextFired = false;
		return self.subscribe(
			function(item) {
                onNextFired = true;
				finalValue = item;
			},
			function(error) {
				observer.onError(error);
			},
			function() {
                if (onNextFired) {
                    observer.onNext(finalValue);
                }
				observer.onCompleted();
			});
	});
};

Rx.Observable.prototype.reduce = function (accumulator) {
    var seed, hasSeed;
    if (arguments.length === 2) {
        hasSeed = true;
        seed = arguments[1];
    }
    return hasSeed ? this.scan(seed, accumulator).startWith(seed).finalValue() :
        this.scan(accumulator).finalValue();
};

/**
 * An OR operator to allow conditional chaining of observables
 * Example usage condition1.or(condition2).or(condition3)
 *  - with full cascade http://jsfiddle.net/AEUuw/
 *  - width short circuited cascade http://jsfiddle.net/sSL6C/
 */
Rx.Observable.prototype.or = function(observable) {
    return this.selectMany(function(v) {
        return v ? Rx.Observable.returnValue(v) : observable;
    });
};

/**
 * A static OR operator to allow conditional chaining of observables
 * Example usage Rx.Observable.or(condition1, condition2, condition3)
 *  - with full cascade http://jsfiddle.net/BcHpD/
 *  - width short circuited cascade http://jsfiddle.net/eUqUz/
 */
Rx.Observable.or = function() {
    var values = Array.prototype.slice.call(arguments),
        result = values[0],
        i = 1;

    for (i; i < values.length; i += 1) {
        result = result.or(values[i]);
    }

    return result;
};

/**
* A Rx Subject that replays it's last value
* Similar to a BehaviorSubject, but does not notify until it has at least one value
*/
(function(exports) {

    var subscribe = function(observer) {
        if (this._hasValue) {
            observer.onNext(this._value);
        }
        return exports.Subject.prototype._subscribe.call(this, observer);
    };

    exports.ReplayLastSubject = function(initialValue) {
        exports.Subject.call(this);
        this._value = initialValue;
        this._hasValue = arguments.length > 0;

        this._subscribe = subscribe;
    };
    exports.ReplayLastSubject.prototype = Object.create(exports.Subject.prototype);
    exports.ReplayLastSubject.prototype.constructor = exports.ReplayLastSubject;
    exports.ReplayLastSubject.prototype.onNext = function(value) {
        if (!this._hasValue || value !== this._value) {
            this._value = value;
            this._hasValue = true;
            exports.Subject.prototype.onNext.call(this, value);
        }
    };

    exports.Observable.prototype.replayLast = function() {
        var value = new exports.ReplayLastSubject();
        this.subscribe(value);
        return value;
    };

})(Rx);

Rx.Observable.prototype.retryWhile = function(predicate, maxRetries) {
    var self = this;
    return Rx.Observable.create(function(observer) {
        var retryCount = 0,
            subscription;
        var sub = function() {
            subscription = self.subscribe(function(result) {
                    observer.onNext(result);
                },
                function(err) {
                    if (retryCount < maxRetries && predicate(err)) {
                        retryCount++;
                        sub();
                    }
                    else {
                        observer.onError(err);
                    }
                },
                function() {
                    observer.onCompleted();
                })
        };
        sub();

        return function() {
            subscription.dispose();
        };
    })

};

(function (exports) {
    /**
     * Take all occurances of a sequence of values until it has come to a
     * 'settling' point.
     *
     * Unlike a buffer, this allows you to process the sequence as the values
     * propagated, but will complete when things 'settle' down.
     *
     * @method takeUntilSettled
     * @param {number} timespan The number of milliseconds after the last onNext
     * @returns {Rx.Observable}
     */
    exports.Observable.prototype.takeUntilSettled =
        function (timespan) {
            var self = this;

            if (typeof timespan !== 'number') {
                throw new Error('Rx.Observable#takeUntilSettled() expects a number');
            }

            return Rx.Observable.createWithDisposable(function (observer) {
                var timeout;

                function done (error) {
                    clearTimeout(timeout);
                    if (error) {
                        observer.onError(error);
                    }
                    else {
                        observer.onCompleted();
                    }
                }

                function pump (value) {
                    clearTimeout(timeout);
                    observer.onNext(value);
                    timeout = setTimeout(done, timespan);
                }

                return self.subscribe(pump, done, done);
            });
        };
}(Rx));

(function (exports) {
    var observableProto = exports.Observable.prototype;

    function firstOrDefaultAsync(source, hasDefault, defaultValue) {
        return exports.Observable.createWithDisposable(function (observer) {
            return source.subscribe(function (x) {
                observer.onNext(x);
                observer.onCompleted();
            }, observer.onError.bind(observer), function () {
                if (!hasDefault) {
                    observer.onError(new Error("Sequence contains no elements."));
                } else {
                    observer.onNext(defaultValue);
                    observer.onCompleted();
                }
            });
        });
    }
    /**
     * Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.
     * @example
     * var res = res = source.first();
     * var res = res = source.first(function (x) { return x > 3; });
     * @param {Function} [predicate] A predicate function to evaluate for elements in the source sequence.
     * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
     * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate if provided, else the first item in the sequence.
     */
    observableProto.first = function (predicate, thisArg) {
        return predicate ?
            this.where(predicate, thisArg).first() :
            firstOrDefaultAsync(this, false);
    };

    /**
     * Returns the first element of an observable sequence that satisfies the condition in the predicate, or a default value if no such element exists.
     * @example
     * var res = res = source.firstOrDefault();
     * var res = res = source.firstOrDefault(function (x) { return x > 3; });
     * var res = source.firstOrDefault(function (x) { return x > 3; }, 0);
     * var res = source.firstOrDefault(null, 0);
     * @param {Function} [predicate] A predicate function to evaluate for elements in the source sequence.
     * @param {Any} [defaultValue] The default value if no such element exists.  If not specified, defaults to null.
     * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
     * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate, or a default value if no such element exists.
     */
    observableProto.firstOrDefault = function (predicate, defaultValue) {
        return predicate ?
            this.where(predicate).firstOrDefault(null, defaultValue) :
            firstOrDefaultAsync(this, true, defaultValue);
    };
}(Rx));

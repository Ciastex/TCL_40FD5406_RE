var scene;
function main() {
    scene = nrdp.gibbon.makeWidget({width: 1280, height: 720, color: "#FFFFFF"});
    //nrdp.gibbon._runConsole("/set debug testSurfaceLoadCRT=true");
    //scene.addEffect("crt");
    scene.cells = [];


    var map = [
        "                                             ",
        " *    * ***** ***** ***** *     ***** *    * ",
        " **   * *       *   *     *       *    *  *  ",
        " * *  * *****   *   ***** *       *     **   ",
        " *  * * *       *   *     *       *     **   ",
        " *   ** *       *   *     *       *    *  *  ",
        " *    * *****   *   *     ***** ***** *    * "
    ];
    var map_width = map[0].length, map_height = map.length, paddle_width = 5;
    var cell_size = Math.floor(scene.width / map_width);
    for(var y = 0; y < map_height; ++y) {
        var cell_y = (cell_size*2) + (y * cell_size);
        scene.cells[cell_y] = [];
        for(var x = 0; x < map_width; ++x) {
            if(map[y][x] == "*") {
                var cell_x = x * cell_size;
                var cell = nrdp.gibbon.makeWidget({x: cell_x, y: cell_y, width: cell_size, height: cell_size,
                                                   color: "#FF0000"});
                cell.parent = scene;
                scene.cells[cell.y][cell.x] = cell;
            }
        }
    }

    scene.paddle = nrdp.gibbon.makeWidget({x: (scene.width - (cell_size * paddle_width)) / 2, y: scene.height - (scene.height % cell_size) - cell_size,
                                           width: (paddle_width*cell_size), height: cell_size, color: "#FF0000"});
    scene.paddle.parent = scene;

    function animate(bullet, x, y) {
        x -= x % cell_size;

        var logical_x = bullet.x, logical_y = bullet.y;
        var speed_x = (x - logical_x) / parseInt(logical_y / cell_size), speed_y = -cell_size;
        var timer = nrdp.gibbon.setTimeout(function() {
            function nextPos() {
                var result = { logical_x: logical_x + speed_x, logical_y: logical_y + speed_y };
                result.x = result.logical_x - (result.logical_x % cell_size);
                result.y = result.logical_y - (result.logical_y % cell_size);
                return result;
            }

            var newPos = nextPos();
            if(newPos.y+bullet.height > scene.height) {
                nrdp.gibbon.clearTimeout(timer);
                bullet.parent = undefined;
                return;
            }

            var switch_x = false, switch_y = false;
            if(newPos.x < 0 || newPos.x+bullet.width > scene.width) {
                switch_x = true;
                newPos.x = bullet.x;
            } else if(newPos.y < 0) {
                switch_y = true;
                newPos.y = bullet.y;
            }
            if(newPos.x >= scene.paddle.x && newPos.x < scene.paddle.x+scene.paddle.width &&
               newPos.y >= scene.paddle.y && newPos.y < scene.paddle.y+scene.paddle.height) {
                switch_y = true;
            } else if(scene.cells[newPos.y]) {
                var cell = scene.cells[newPos.y][newPos.x];
                if(cell && cell.visible) {
                    if(bullet.x != newPos.x)
                        switch_x = true;
                    if(bullet.y != newPos.y)
                        switch_y = true;
                    cell.visible = false;
                }
            }
            if(switch_x || switch_y) {
                if(switch_x)
                    speed_x = -speed_x;
                if(switch_y)
                    speed_y = -speed_y;
                newPos = nextPos();
            }
            logical_x = newPos.logical_x;
            logical_y = newPos.logical_y;
            bullet.x = newPos.x;
            bullet.y = newPos.y;
        }, 10, false);
    }

    nrdp.gibbon.scene.widget = scene;
    nrdp.gibbon.addEventListener('key', function(key) {
        if(key.data.type == "press") {
            if(key.data.uiEvent == "key.left") {
                if(scene.paddle.x > 0)
                    scene.paddle.x -= (cell_size*2);
            } else if(key.data.uiEvent == "key.right") {
                if(scene.paddle.x+scene.paddle.width < scene.width)
                    scene.paddle.x += (cell_size*2);
            } else if(key.data.uiEvent == "key.enter") {
                var b = nrdp.gibbon.makeWidget({x: scene.paddle.x+(scene.paddle.width/2), y: scene.paddle.y-cell_size, width: cell_size, height: cell_size,
                                                color: "#0000FF"});
                b.parent = scene;
                animate(b, parseInt(Math.random()*scene.width), 0);
            }
        }
    });
}
nrdp.gibbon.init(main);
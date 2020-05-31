#!/bin/sh

MODE=$1
FROM_PATH=$2
TO_PATH=$3
APPNAME=$4

SOURCE_APP=$FROM_PATH/$APPNAME
DEST_APP=$TO_PATH/$APPNAME
BCK_APP=$DEST_APP"_bck"

log() {
	if [ "$DEF_PROD"="0" ]
	then
		echo "[replaceVersion] " $@
	fi
}

log "MODE = $MODE"
log "FROM_PATH = $FROM_PATH"
log "TO_PATH = $TO_PATH"

log "SOURCE_APP = $SOURCE_APP"
log "DEST_APP = $DEST_APP"
log "BCK_APP = $BCK_APP"


log "checking if source path exists"
if [ ! -d "$FROM_PATH" ]
then
	log "source path ($FROM_PATH) does not exist. Exiting..."
	exit 1
fi

log "checking if source app exists"
if [ ! -d "$SOURCE_APP" ]
then
	log "source app ($SOURCE_APP) does not exist. Exiting..."
	exit 1
fi

log "checking if destination path exists"
if [ ! -d "$TO_PATH" ]
then
	log "creating dir $TO_PATH"
	mkdir -p $TO_PATH
	if [ ! "$?"="0" ]
	then
		log "could not create $TO_PATH, exiting..."
		exit 1
	fi
fi

log "checking if an older version is already installed"
if [ -d "$DEST_APP" ]
then
	log "checking if a back up version already exists"
	if [ -d "$BCK_APP" ]
	then
		log "cleaning up bck version"
		rm -rf $BCK_APP
	fi
	log "backing up old version"
	mv $DEST_APP $BCK_APP
	if [ ! "$?"="0" ]
	then
		log "could not back up old version. Exiting..."
		exit 1
	fi
fi

log "installing app"
mv $SOURCE_APP $DEST_APP
if [ ! "$?"="0" ]
then
	log "install fail. recovering old app"
	rm -rf $DEST_APP
	mv $BCK_APP $DEST_APP
	exit 1
fi

log "copying new versiondata.json"
mv /tmp/astronav/app_only.json $DEST_APP/versiondata.json
if [ ! "$?" = "0" ]
then
	exit 1
fi

log "creating .complete file"
touch $DEST_APP/".complete"

# Cleanup
log "cleaning up tmp files"
rm -rf $BCK_APP
rm -rf $FROM_PATH

exit 0
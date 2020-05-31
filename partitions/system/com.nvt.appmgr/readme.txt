v0.9.125

shortcut function:

How to enable it:
1. add shortcut app "property=SHORTCUT"
2. set target and command(now support start/stop/reset/pause/background/probe)
   shortcut_target=idtv
   shortcut_start=start_test
   
   When call start shortcut app
   appmgr will send to IDTV by NAM command EN_LIBNAM_MCMD_EXECUTE_SHORTCUT with argv "start_test"
==========================================
v0.9.140

IR simulate feature:

Enable:
key in "sim" or "sim filepath"
example: sim /mtd_apdat/irtest.txt
TXT format example irtest.txt

Disable:
key in "sim"
================================================
v0.9.141

Restart feaure:

using LIBNAM_APP_ChangeState with EN_LIBNAM_STATE_RESTART_TO_XX state
================================================
v0.9.154

remove compiling option : -fshort-wchar

==================================================
v0.9.156

new command (EN_LIBNAM_ACMD_CONTROL_PROCESS) to cover full process control
EN_LIBNAM_PROCESS_CTL_START:      Start process with initial state
EN_LIBNAM_PROCESS_CTL_STOP:       Stop process
EN_LIBNAM_PROCESS_CTL_SWITCH_ON:  Make process foreground
EN_LIBNAM_PROCESS_CTL_SWITCH_OFF: Make process to switch off state

==================================================
v0.9.161

New property UNDER
With UNDER property, the app owning DFB window will be inserted under the default app.
Without this property, It would be over the default app as default flow.


==================================================
v0.9.164

debug feature:
key in "log"
Appmgr will pack log to target location
default log path: /mtd_rwarea/logger/
default tar filw path: /media/sda1/

==================================================
v0.9.168

new property:
EXIT: call stop at power off
SUSPEND: suspend at power off
BOOTX: set boot flag X(netflix default is 1)

==================================================
v1.0.00

new property for old flag:
DELAY{X}: delay X seconds to launch app when boot up
IPCKEY: send DFB event by NAM
CLEAROSD: clear OSD after APP exits
NODFB: declare APP does not have DFB window to display UI
(check the svn log for nvt.app.fasttune.ini as example)

==================================================
v1.1.02

Support state string(lowercase/uppercase do not care)
mapping rule:
        
        EN_APP_STATE_STOP              =  0   = stop
        EN_APP_STATE_BACKGROUND        =  1   = background = bg
        EN_APP_STATE_FOREGROUND        =  2   = foreground  = fg
        EN_APP_STATE_PAUSE             =  3   = pause
        EN_APP_STATE_STOP_BY_SELF      = 0x80 = stop_by_self

==================================================
v1.2.00

Support APP individual INI setting
add conf_path in APP

==================================================
v1.2.02

debug feature:
key in "alllog"
new debug command "alllog" to make Appmgr log to console

(Modify) key in "pkglog"
Appmgr will pack log to target location
default log path: /mtd_rwarea/logger/
default tar filw path: /media/sda1/

==================================================
v1.2.06

New config
[config]
logo_on_layer

Show Netflix/Loading logo on layer surface without window controlling for project without GABuffer

==================================================
v1.2.09

Refactor SHORTCUT

1.support probe/stop/switch on/switch off/restart
2.support args fearure PARAM/BCP47/IFNAME

data in INI( command )
property=SHORTCUT
shortcut_target=XXX
shortcut_name=yyy

shortcut command need to be implemented in SendCommand(EN_LIBNAM_MCMD_EXECUTE_SHORTCUT_EX), GetParameter(EN_LIBNAM_MPAR_SHORTCUT_STAT)
    EN_APP_SC_CMD_STOP       = 1,
    EN_APP_SC_CMD_SWITCH_ON  = 2,
    EN_APP_SC_CMD_SWITCH_OFF = 3,
    EN_APP_SC_CMD_RESTART    = 4,

example code:
<SendCommand>
ST_LIBNAM_SHORTCUT_PARA *pShortCutPara;
case EN_LIBNAM_MCMD_EXECUTE_SHORTCUT_EX:
{   
    pShortCutPara = ( ST_LIBNAM_SHORTCUT_PARA * )arg;
    printf( "shortcut name %s cmd %d len %d argv %s\n", unParam.pShortCutPara->shortcutName, unParam.pShortCutPara->command, unParam.pShortCutPara->argvLen,unParam.pShortCutPara->argv );
    break;
}
<GetParameter>
ST_LIBNAM_SHORTCUT_PARA   *pShortCutPara;
case EN_LIBNAM_MPAR_SHORTCUT_STAT:
{
    pShortCutPara = ( ST_LIBNAM_SHORTCUT_PARA * )arg;
    pShortCutPara->state = 2;
    break;
}

==================================================
v1.2.18

new property: OWNCHILD
If app has child process with DFB window needed to be shown, add OWNCHILD

==================================================
v1.3.21

new feature: revert key filter

ST_LIBNAM_APAR_KEY_FILTER key;
key.bRevertFilter = true;
key.list....

The keys in list will be passed to next checking and the one not in the list will be send to the requesting app.

==================================================
v1.3.27

new feature: send key to target app

ST_LIBNAM_APAR_SEND_KEY stPara;
strncpy( stPara.appName, app_name, MAX_NAME_LENGTH );
stPara.keySymbol = evt.key_symbol;
LIBNAM_APP_SendCommand( EN_LIBNAM_ACMD_SEND_KEY, &stPara );

new config: [config] key_from_DFB
Set false to block get key from DFB event buffer.
Default value is true.

==================================================
v1.3.28

modify feature: send key to target app

ST_LIBNAM_APAR_CONTROL_PROCESS stPara;
strncpy( stPara.appName, app_name, MAX_NAME_LENGTH );
stPara.keySymbol = evt.key_symbol;
stPara.action = EN_LIBNAM_PROCESS_CTL_SEND_KEY;
LIBNAM_APP_SendCommand( EN_LIBNAM_ACMD_CONTROL_PROCESS, &stPara );
Default value is true.
    
==================================================
v1.3.29

new config:
nonsafe_switch to skip the waiting time(2s) for app switch

new property:
LOGO to replace need_loading_ui
Netflix needs to set the value to show logo.

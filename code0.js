gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDNewSpriteObjects1= [];
gdjs.MainCode.GDNewSpriteObjects2= [];
gdjs.MainCode.GDNewSprite5Objects1= [];
gdjs.MainCode.GDNewSprite5Objects2= [];
gdjs.MainCode.GDAirdropObjects1= [];
gdjs.MainCode.GDAirdropObjects2= [];
gdjs.MainCode.GDNewSprite10Objects1= [];
gdjs.MainCode.GDNewSprite10Objects2= [];
gdjs.MainCode.GDMission_9595BGObjects1= [];
gdjs.MainCode.GDMission_9595BGObjects2= [];
gdjs.MainCode.GDSocial_9595ButtObjects1= [];
gdjs.MainCode.GDSocial_9595ButtObjects2= [];
gdjs.MainCode.GDWalletObjects1= [];
gdjs.MainCode.GDWalletObjects2= [];
gdjs.MainCode.GDTaskObjects1= [];
gdjs.MainCode.GDTaskObjects2= [];
gdjs.MainCode.GDRefObjects1= [];
gdjs.MainCode.GDRefObjects2= [];
gdjs.MainCode.GDBoostObjects1= [];
gdjs.MainCode.GDBoostObjects2= [];
gdjs.MainCode.GDEarn2Objects1= [];
gdjs.MainCode.GDEarn2Objects2= [];
gdjs.MainCode.GDRef2Objects1= [];
gdjs.MainCode.GDRef2Objects2= [];
gdjs.MainCode.GDBoost2Objects1= [];
gdjs.MainCode.GDBoost2Objects2= [];
gdjs.MainCode.GDWallet2Objects1= [];
gdjs.MainCode.GDWallet2Objects2= [];
gdjs.MainCode.GDSocialObjects1= [];
gdjs.MainCode.GDSocialObjects2= [];
gdjs.MainCode.GDNewSprite2Objects1= [];
gdjs.MainCode.GDNewSprite2Objects2= [];
gdjs.MainCode.GDNewSprite3Objects1= [];
gdjs.MainCode.GDNewSprite3Objects2= [];
gdjs.MainCode.GDNewSprite13Objects1= [];
gdjs.MainCode.GDNewSprite13Objects2= [];
gdjs.MainCode.GDtimerObjects1= [];
gdjs.MainCode.GDtimerObjects2= [];
gdjs.MainCode.GDScoreGlobeObjects1= [];
gdjs.MainCode.GDScoreGlobeObjects2= [];
gdjs.MainCode.GDResourceGlobeObjects1= [];
gdjs.MainCode.GDResourceGlobeObjects2= [];
gdjs.MainCode.GDNewSprite27Objects1= [];
gdjs.MainCode.GDNewSprite27Objects2= [];
gdjs.MainCode.GDNewSprite6Objects1= [];
gdjs.MainCode.GDNewSprite6Objects2= [];
gdjs.MainCode.GDNewSprite7Objects1= [];
gdjs.MainCode.GDNewSprite7Objects2= [];
gdjs.MainCode.GDNewSprite8Objects1= [];
gdjs.MainCode.GDNewSprite8Objects2= [];
gdjs.MainCode.GDNewSprite9Objects1= [];
gdjs.MainCode.GDNewSprite9Objects2= [];
gdjs.MainCode.GDCoinObjects1= [];
gdjs.MainCode.GDCoinObjects2= [];
gdjs.MainCode.GDBGObjects1= [];
gdjs.MainCode.GDBGObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ResourceGlobe"), gdjs.MainCode.GDResourceGlobeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreGlobe"), gdjs.MainCode.GDScoreGlobeObjects1);
{for(var i = 0, len = gdjs.MainCode.GDScoreGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDScoreGlobeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].SetMaxValue(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scenetimer");
}{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].resetTimer("restimer");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.MainCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDtimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "scenetimer")))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "scenetimer"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResourceGlobe"), gdjs.MainCode.GDResourceGlobeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDResourceGlobeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDResourceGlobeObjects1[i].getTimerElapsedTimeInSecondsOrNaN("restimer") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDResourceGlobeObjects1[k] = gdjs.MainCode.GDResourceGlobeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDResourceGlobeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDResourceGlobeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].SetValue(gdjs.MainCode.GDResourceGlobeObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].resetTimer("restimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MainCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNewSpriteObjects1[k] = gdjs.MainCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ResourceGlobe"), gdjs.MainCode.GDResourceGlobeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreGlobe"), gdjs.MainCode.GDScoreGlobeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add((runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}{for(var i = 0, len = gdjs.MainCode.GDScoreGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDScoreGlobeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wallet"), gdjs.MainCode.GDWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDWalletObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDWalletObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDWalletObjects1[k] = gdjs.MainCode.GDWalletObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDWalletObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Wallet");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ref"), gdjs.MainCode.GDRefObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDRefObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDRefObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDRefObjects1[k] = gdjs.MainCode.GDRefObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDRefObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Ref");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Social_Butt"), gdjs.MainCode.GDSocial_9595ButtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDSocial_9595ButtObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSocial_9595ButtObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDSocial_9595ButtObjects1[k] = gdjs.MainCode.GDSocial_9595ButtObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSocial_9595ButtObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Social");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Task"), gdjs.MainCode.GDTaskObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDTaskObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDTaskObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDTaskObjects1[k] = gdjs.MainCode.GDTaskObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDTaskObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Minigame");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boost"), gdjs.MainCode.GDBoostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDBoostObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDBoostObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDBoostObjects1[k] = gdjs.MainCode.GDBoostObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDBoostObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Boost");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResourceGlobe"), gdjs.MainCode.GDResourceGlobeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDResourceGlobeObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDResourceGlobeObjects1[i].getTimerElapsedTimeInSecondsOrNaN("restimer") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDResourceGlobeObjects1[k] = gdjs.MainCode.GDResourceGlobeObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDResourceGlobeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDResourceGlobeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].SetValue(gdjs.MainCode.GDResourceGlobeObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDResourceGlobeObjects1[i].resetTimer("restimer");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;
gdjs.MainCode.GDNewSprite5Objects1.length = 0;
gdjs.MainCode.GDNewSprite5Objects2.length = 0;
gdjs.MainCode.GDAirdropObjects1.length = 0;
gdjs.MainCode.GDAirdropObjects2.length = 0;
gdjs.MainCode.GDNewSprite10Objects1.length = 0;
gdjs.MainCode.GDNewSprite10Objects2.length = 0;
gdjs.MainCode.GDMission_9595BGObjects1.length = 0;
gdjs.MainCode.GDMission_9595BGObjects2.length = 0;
gdjs.MainCode.GDSocial_9595ButtObjects1.length = 0;
gdjs.MainCode.GDSocial_9595ButtObjects2.length = 0;
gdjs.MainCode.GDWalletObjects1.length = 0;
gdjs.MainCode.GDWalletObjects2.length = 0;
gdjs.MainCode.GDTaskObjects1.length = 0;
gdjs.MainCode.GDTaskObjects2.length = 0;
gdjs.MainCode.GDRefObjects1.length = 0;
gdjs.MainCode.GDRefObjects2.length = 0;
gdjs.MainCode.GDBoostObjects1.length = 0;
gdjs.MainCode.GDBoostObjects2.length = 0;
gdjs.MainCode.GDEarn2Objects1.length = 0;
gdjs.MainCode.GDEarn2Objects2.length = 0;
gdjs.MainCode.GDRef2Objects1.length = 0;
gdjs.MainCode.GDRef2Objects2.length = 0;
gdjs.MainCode.GDBoost2Objects1.length = 0;
gdjs.MainCode.GDBoost2Objects2.length = 0;
gdjs.MainCode.GDWallet2Objects1.length = 0;
gdjs.MainCode.GDWallet2Objects2.length = 0;
gdjs.MainCode.GDSocialObjects1.length = 0;
gdjs.MainCode.GDSocialObjects2.length = 0;
gdjs.MainCode.GDNewSprite2Objects1.length = 0;
gdjs.MainCode.GDNewSprite2Objects2.length = 0;
gdjs.MainCode.GDNewSprite3Objects1.length = 0;
gdjs.MainCode.GDNewSprite3Objects2.length = 0;
gdjs.MainCode.GDNewSprite13Objects1.length = 0;
gdjs.MainCode.GDNewSprite13Objects2.length = 0;
gdjs.MainCode.GDtimerObjects1.length = 0;
gdjs.MainCode.GDtimerObjects2.length = 0;
gdjs.MainCode.GDScoreGlobeObjects1.length = 0;
gdjs.MainCode.GDScoreGlobeObjects2.length = 0;
gdjs.MainCode.GDResourceGlobeObjects1.length = 0;
gdjs.MainCode.GDResourceGlobeObjects2.length = 0;
gdjs.MainCode.GDNewSprite27Objects1.length = 0;
gdjs.MainCode.GDNewSprite27Objects2.length = 0;
gdjs.MainCode.GDNewSprite6Objects1.length = 0;
gdjs.MainCode.GDNewSprite6Objects2.length = 0;
gdjs.MainCode.GDNewSprite7Objects1.length = 0;
gdjs.MainCode.GDNewSprite7Objects2.length = 0;
gdjs.MainCode.GDNewSprite8Objects1.length = 0;
gdjs.MainCode.GDNewSprite8Objects2.length = 0;
gdjs.MainCode.GDNewSprite9Objects1.length = 0;
gdjs.MainCode.GDNewSprite9Objects2.length = 0;
gdjs.MainCode.GDCoinObjects1.length = 0;
gdjs.MainCode.GDCoinObjects2.length = 0;
gdjs.MainCode.GDBGObjects1.length = 0;
gdjs.MainCode.GDBGObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;

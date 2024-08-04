gdjs.BoostCode = {};
gdjs.BoostCode.localVariables = [];
gdjs.BoostCode.GDNewSprite3Objects1= [];
gdjs.BoostCode.GDNewSprite3Objects2= [];
gdjs.BoostCode.GDNewSprite11Objects1= [];
gdjs.BoostCode.GDNewSprite11Objects2= [];
gdjs.BoostCode.GDfulll_9595energyObjects1= [];
gdjs.BoostCode.GDfulll_9595energyObjects2= [];
gdjs.BoostCode.GDmultitapObjects1= [];
gdjs.BoostCode.GDmultitapObjects2= [];
gdjs.BoostCode.GDenergy_9595limitObjects1= [];
gdjs.BoostCode.GDenergy_9595limitObjects2= [];
gdjs.BoostCode.GDturboObjects1= [];
gdjs.BoostCode.GDturboObjects2= [];
gdjs.BoostCode.GDNewSprite12Objects1= [];
gdjs.BoostCode.GDNewSprite12Objects2= [];
gdjs.BoostCode.GDNewSprite17Objects1= [];
gdjs.BoostCode.GDNewSprite17Objects2= [];
gdjs.BoostCode.GDNewSprite20Objects1= [];
gdjs.BoostCode.GDNewSprite20Objects2= [];
gdjs.BoostCode.GDNewSprite22Objects1= [];
gdjs.BoostCode.GDNewSprite22Objects2= [];
gdjs.BoostCode.GDNewSprite23Objects1= [];
gdjs.BoostCode.GDNewSprite23Objects2= [];
gdjs.BoostCode.GDFull_9595energyObjects1= [];
gdjs.BoostCode.GDFull_9595energyObjects2= [];
gdjs.BoostCode.GDMultitapObjects1= [];
gdjs.BoostCode.GDMultitapObjects2= [];
gdjs.BoostCode.GDEnergy_9595limitObjects1= [];
gdjs.BoostCode.GDEnergy_9595limitObjects2= [];
gdjs.BoostCode.GDTurboObjects1= [];
gdjs.BoostCode.GDTurboObjects2= [];
gdjs.BoostCode.GDDaily_9595boostObjects1= [];
gdjs.BoostCode.GDDaily_9595boostObjects2= [];
gdjs.BoostCode.GDBoostersObjects1= [];
gdjs.BoostCode.GDBoostersObjects2= [];
gdjs.BoostCode.GDCostObjects1= [];
gdjs.BoostCode.GDCostObjects2= [];
gdjs.BoostCode.GD_95950Objects1= [];
gdjs.BoostCode.GD_95950Objects2= [];
gdjs.BoostCode.GDmultitap_9595costObjects1= [];
gdjs.BoostCode.GDmultitap_9595costObjects2= [];
gdjs.BoostCode.GDenergy_9595limit_9595costObjects1= [];
gdjs.BoostCode.GDenergy_9595limit_9595costObjects2= [];
gdjs.BoostCode.GDhour_9595leftObjects1= [];
gdjs.BoostCode.GDhour_9595leftObjects2= [];
gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1= [];
gdjs.BoostCode.GDenergy_9595limit_9595hlObjects2= [];
gdjs.BoostCode.GDturbo_9595hlObjects1= [];
gdjs.BoostCode.GDturbo_9595hlObjects2= [];
gdjs.BoostCode.GDNewSprite26Objects1= [];
gdjs.BoostCode.GDNewSprite26Objects2= [];
gdjs.BoostCode.GDlvlObjects1= [];
gdjs.BoostCode.GDlvlObjects2= [];
gdjs.BoostCode.GDfull_9595energy_9595avaObjects1= [];
gdjs.BoostCode.GDfull_9595energy_9595avaObjects2= [];
gdjs.BoostCode.GDTurboresObjects1= [];
gdjs.BoostCode.GDTurboresObjects2= [];
gdjs.BoostCode.GDFullenerguresObjects1= [];
gdjs.BoostCode.GDFullenerguresObjects2= [];
gdjs.BoostCode.GDmultitaplvlObjects1= [];
gdjs.BoostCode.GDmultitaplvlObjects2= [];
gdjs.BoostCode.GDMlvlObjects1= [];
gdjs.BoostCode.GDMlvlObjects2= [];
gdjs.BoostCode.GDEllvlObjects1= [];
gdjs.BoostCode.GDEllvlObjects2= [];
gdjs.BoostCode.GDScoreGlobeObjects1= [];
gdjs.BoostCode.GDScoreGlobeObjects2= [];
gdjs.BoostCode.GDResourceGlobeObjects1= [];
gdjs.BoostCode.GDResourceGlobeObjects2= [];
gdjs.BoostCode.GDNewSprite27Objects1= [];
gdjs.BoostCode.GDNewSprite27Objects2= [];
gdjs.BoostCode.GDNewSprite6Objects1= [];
gdjs.BoostCode.GDNewSprite6Objects2= [];
gdjs.BoostCode.GDNewSprite7Objects1= [];
gdjs.BoostCode.GDNewSprite7Objects2= [];
gdjs.BoostCode.GDNewSprite8Objects1= [];
gdjs.BoostCode.GDNewSprite8Objects2= [];
gdjs.BoostCode.GDNewSprite9Objects1= [];
gdjs.BoostCode.GDNewSprite9Objects2= [];
gdjs.BoostCode.GDCoinObjects1= [];
gdjs.BoostCode.GDCoinObjects2= [];
gdjs.BoostCode.GDBGObjects1= [];
gdjs.BoostCode.GDBGObjects2= [];


gdjs.BoostCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cost"), gdjs.BoostCode.GDCostObjects1);
gdjs.copyArray(runtimeScene.getObjects("energy_limit_cost"), gdjs.BoostCode.GDenergy_9595limit_9595costObjects1);
gdjs.copyArray(runtimeScene.getObjects("energy_limit_hl"), gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1);
gdjs.copyArray(runtimeScene.getObjects("fulll_energy"), gdjs.BoostCode.GDfulll_9595energyObjects1);
gdjs.copyArray(runtimeScene.getObjects("hour_left"), gdjs.BoostCode.GDhour_9595leftObjects1);
gdjs.copyArray(runtimeScene.getObjects("lvl"), gdjs.BoostCode.GDlvlObjects1);
gdjs.copyArray(runtimeScene.getObjects("multitap_cost"), gdjs.BoostCode.GDmultitap_9595costObjects1);
gdjs.copyArray(runtimeScene.getObjects("turbo"), gdjs.BoostCode.GDturboObjects1);
gdjs.copyArray(runtimeScene.getObjects("turbo_hl"), gdjs.BoostCode.GDturbo_9595hlObjects1);
{for(var i = 0, len = gdjs.BoostCode.GDCostObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDCostObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.BoostCode.GDturbo_9595hlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDturbo_9595hlObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.BoostCode.GDhour_9595leftObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDhour_9595leftObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.BoostCode.GDlvlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDlvlObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.BoostCode.GDmultitap_9595costObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDmultitap_9595costObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("cost").getAsNumber()));
}
}{for(var i = 0, len = gdjs.BoostCode.GDenergy_9595limit_9595costObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDenergy_9595limit_9595costObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("costel").getAsNumber()));
}
}{for(var i = 0, len = gdjs.BoostCode.GDfulll_9595energyObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDfulll_9595energyObjects1[i].resetTimer("fetimer");
}
}{for(var i = 0, len = gdjs.BoostCode.GDturboObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDturboObjects1[i].resetTimer("turbotimer");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elt");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tt");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "tt") >= 60;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("turbo_hl"), gdjs.BoostCode.GDturbo_9595hlObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{for(var i = 0, len = gdjs.BoostCode.GDturbo_9595hlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDturbo_9595hlObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tt");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "elt") >= 60;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("energy_limit_hl"), gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1);
}{for(var i = 0, len = gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elt");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite26"), gdjs.BoostCode.GDNewSprite26Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDNewSprite26Objects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDNewSprite26Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDNewSprite26Objects1[k] = gdjs.BoostCode.GDNewSprite26Objects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDNewSprite26Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("multitap"), gdjs.BoostCode.GDmultitapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDmultitapObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDmultitapObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDmultitapObjects1[k] = gdjs.BoostCode.GDmultitapObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDmultitapObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= runtimeScene.getGame().getVariables().getFromIndex(2).getChild("cost").getAsNumber();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mlvl"), gdjs.BoostCode.GDMlvlObjects1);
gdjs.copyArray(runtimeScene.getObjects("multitap_cost"), gdjs.BoostCode.GDmultitap_9595costObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("cost").getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("cost").mul(2);
}{for(var i = 0, len = gdjs.BoostCode.GDmultitap_9595costObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDmultitap_9595costObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("cost").getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.BoostCode.GDMlvlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDMlvlObjects1[i].SetValue(gdjs.BoostCode.GDMlvlObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("energy_limit"), gdjs.BoostCode.GDenergy_9595limitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDenergy_9595limitObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDenergy_9595limitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDenergy_9595limitObjects1[k] = gdjs.BoostCode.GDenergy_9595limitObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDenergy_9595limitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= runtimeScene.getGame().getVariables().getFromIndex(3).getChild("costel").getAsNumber();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ellvl"), gdjs.BoostCode.GDEllvlObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResourceGlobe"), gdjs.BoostCode.GDResourceGlobeObjects1);
gdjs.copyArray(runtimeScene.getObjects("energy_limit_cost"), gdjs.BoostCode.GDenergy_9595limit_9595costObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("costel").getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("costel").mul(2);
}{for(var i = 0, len = gdjs.BoostCode.GDenergy_9595limit_9595costObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDenergy_9595limit_9595costObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("costel").getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(500);
}{for(var i = 0, len = gdjs.BoostCode.GDResourceGlobeObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDResourceGlobeObjects1[i].SetMaxValue(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BoostCode.GDEllvlObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDEllvlObjects1[i].SetValue(gdjs.BoostCode.GDEllvlObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("turbo"), gdjs.BoostCode.GDturboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDturboObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDturboObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDturboObjects1[k] = gdjs.BoostCode.GDturboObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDturboObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Turbores"), gdjs.BoostCode.GDTurboresObjects1);
{for(var i = 0, len = gdjs.BoostCode.GDTurboresObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDTurboresObjects1[i].SetValue(gdjs.BoostCode.GDTurboresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Turbores"), gdjs.BoostCode.GDTurboresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDTurboresObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDTurboresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDTurboresObjects1[k] = gdjs.BoostCode.GDTurboresObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDTurboresObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "tt");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Turbores"), gdjs.BoostCode.GDTurboresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDTurboresObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDTurboresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 3 ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDTurboresObjects1[k] = gdjs.BoostCode.GDTurboresObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDTurboresObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "tt");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) <= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18588860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Turbores"), gdjs.BoostCode.GDTurboresObjects1);
{for(var i = 0, len = gdjs.BoostCode.GDTurboresObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDTurboresObjects1[i].SetValue(gdjs.BoostCode.GDTurboresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fulll_energy"), gdjs.BoostCode.GDfulll_9595energyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDfulll_9595energyObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDfulll_9595energyObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDfulll_9595energyObjects1[k] = gdjs.BoostCode.GDfulll_9595energyObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDfulll_9595energyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fullenergures"), gdjs.BoostCode.GDFullenerguresObjects1);
{for(var i = 0, len = gdjs.BoostCode.GDFullenerguresObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDFullenerguresObjects1[i].SetValue(gdjs.BoostCode.GDFullenerguresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fullenergures"), gdjs.BoostCode.GDFullenerguresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDFullenerguresObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDFullenerguresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDFullenerguresObjects1[k] = gdjs.BoostCode.GDFullenerguresObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDFullenerguresObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "elt");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fullenergures"), gdjs.BoostCode.GDFullenerguresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BoostCode.GDFullenerguresObjects1.length;i<l;++i) {
    if ( gdjs.BoostCode.GDFullenerguresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 3 ) {
        isConditionTrue_0 = true;
        gdjs.BoostCode.GDFullenerguresObjects1[k] = gdjs.BoostCode.GDFullenerguresObjects1[i];
        ++k;
    }
}
gdjs.BoostCode.GDFullenerguresObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "elt");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) <= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18592148);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fullenergures"), gdjs.BoostCode.GDFullenerguresObjects1);
{for(var i = 0, len = gdjs.BoostCode.GDFullenerguresObjects1.length ;i < len;++i) {
    gdjs.BoostCode.GDFullenerguresObjects1[i].SetValue(gdjs.BoostCode.GDFullenerguresObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(60);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BoostCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BoostCode.GDNewSprite3Objects1.length = 0;
gdjs.BoostCode.GDNewSprite3Objects2.length = 0;
gdjs.BoostCode.GDNewSprite11Objects1.length = 0;
gdjs.BoostCode.GDNewSprite11Objects2.length = 0;
gdjs.BoostCode.GDfulll_9595energyObjects1.length = 0;
gdjs.BoostCode.GDfulll_9595energyObjects2.length = 0;
gdjs.BoostCode.GDmultitapObjects1.length = 0;
gdjs.BoostCode.GDmultitapObjects2.length = 0;
gdjs.BoostCode.GDenergy_9595limitObjects1.length = 0;
gdjs.BoostCode.GDenergy_9595limitObjects2.length = 0;
gdjs.BoostCode.GDturboObjects1.length = 0;
gdjs.BoostCode.GDturboObjects2.length = 0;
gdjs.BoostCode.GDNewSprite12Objects1.length = 0;
gdjs.BoostCode.GDNewSprite12Objects2.length = 0;
gdjs.BoostCode.GDNewSprite17Objects1.length = 0;
gdjs.BoostCode.GDNewSprite17Objects2.length = 0;
gdjs.BoostCode.GDNewSprite20Objects1.length = 0;
gdjs.BoostCode.GDNewSprite20Objects2.length = 0;
gdjs.BoostCode.GDNewSprite22Objects1.length = 0;
gdjs.BoostCode.GDNewSprite22Objects2.length = 0;
gdjs.BoostCode.GDNewSprite23Objects1.length = 0;
gdjs.BoostCode.GDNewSprite23Objects2.length = 0;
gdjs.BoostCode.GDFull_9595energyObjects1.length = 0;
gdjs.BoostCode.GDFull_9595energyObjects2.length = 0;
gdjs.BoostCode.GDMultitapObjects1.length = 0;
gdjs.BoostCode.GDMultitapObjects2.length = 0;
gdjs.BoostCode.GDEnergy_9595limitObjects1.length = 0;
gdjs.BoostCode.GDEnergy_9595limitObjects2.length = 0;
gdjs.BoostCode.GDTurboObjects1.length = 0;
gdjs.BoostCode.GDTurboObjects2.length = 0;
gdjs.BoostCode.GDDaily_9595boostObjects1.length = 0;
gdjs.BoostCode.GDDaily_9595boostObjects2.length = 0;
gdjs.BoostCode.GDBoostersObjects1.length = 0;
gdjs.BoostCode.GDBoostersObjects2.length = 0;
gdjs.BoostCode.GDCostObjects1.length = 0;
gdjs.BoostCode.GDCostObjects2.length = 0;
gdjs.BoostCode.GD_95950Objects1.length = 0;
gdjs.BoostCode.GD_95950Objects2.length = 0;
gdjs.BoostCode.GDmultitap_9595costObjects1.length = 0;
gdjs.BoostCode.GDmultitap_9595costObjects2.length = 0;
gdjs.BoostCode.GDenergy_9595limit_9595costObjects1.length = 0;
gdjs.BoostCode.GDenergy_9595limit_9595costObjects2.length = 0;
gdjs.BoostCode.GDhour_9595leftObjects1.length = 0;
gdjs.BoostCode.GDhour_9595leftObjects2.length = 0;
gdjs.BoostCode.GDenergy_9595limit_9595hlObjects1.length = 0;
gdjs.BoostCode.GDenergy_9595limit_9595hlObjects2.length = 0;
gdjs.BoostCode.GDturbo_9595hlObjects1.length = 0;
gdjs.BoostCode.GDturbo_9595hlObjects2.length = 0;
gdjs.BoostCode.GDNewSprite26Objects1.length = 0;
gdjs.BoostCode.GDNewSprite26Objects2.length = 0;
gdjs.BoostCode.GDlvlObjects1.length = 0;
gdjs.BoostCode.GDlvlObjects2.length = 0;
gdjs.BoostCode.GDfull_9595energy_9595avaObjects1.length = 0;
gdjs.BoostCode.GDfull_9595energy_9595avaObjects2.length = 0;
gdjs.BoostCode.GDTurboresObjects1.length = 0;
gdjs.BoostCode.GDTurboresObjects2.length = 0;
gdjs.BoostCode.GDFullenerguresObjects1.length = 0;
gdjs.BoostCode.GDFullenerguresObjects2.length = 0;
gdjs.BoostCode.GDmultitaplvlObjects1.length = 0;
gdjs.BoostCode.GDmultitaplvlObjects2.length = 0;
gdjs.BoostCode.GDMlvlObjects1.length = 0;
gdjs.BoostCode.GDMlvlObjects2.length = 0;
gdjs.BoostCode.GDEllvlObjects1.length = 0;
gdjs.BoostCode.GDEllvlObjects2.length = 0;
gdjs.BoostCode.GDScoreGlobeObjects1.length = 0;
gdjs.BoostCode.GDScoreGlobeObjects2.length = 0;
gdjs.BoostCode.GDResourceGlobeObjects1.length = 0;
gdjs.BoostCode.GDResourceGlobeObjects2.length = 0;
gdjs.BoostCode.GDNewSprite27Objects1.length = 0;
gdjs.BoostCode.GDNewSprite27Objects2.length = 0;
gdjs.BoostCode.GDNewSprite6Objects1.length = 0;
gdjs.BoostCode.GDNewSprite6Objects2.length = 0;
gdjs.BoostCode.GDNewSprite7Objects1.length = 0;
gdjs.BoostCode.GDNewSprite7Objects2.length = 0;
gdjs.BoostCode.GDNewSprite8Objects1.length = 0;
gdjs.BoostCode.GDNewSprite8Objects2.length = 0;
gdjs.BoostCode.GDNewSprite9Objects1.length = 0;
gdjs.BoostCode.GDNewSprite9Objects2.length = 0;
gdjs.BoostCode.GDCoinObjects1.length = 0;
gdjs.BoostCode.GDCoinObjects2.length = 0;
gdjs.BoostCode.GDBGObjects1.length = 0;
gdjs.BoostCode.GDBGObjects2.length = 0;

gdjs.BoostCode.eventsList0(runtimeScene);

return;

}

gdjs['BoostCode'] = gdjs.BoostCode;

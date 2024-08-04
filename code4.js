gdjs.RefCode = {};
gdjs.RefCode.localVariables = [];
gdjs.RefCode.GDScoreGlobeObjects1= [];
gdjs.RefCode.GDScoreGlobeObjects2= [];
gdjs.RefCode.GDResourceGlobeObjects1= [];
gdjs.RefCode.GDResourceGlobeObjects2= [];
gdjs.RefCode.GDNewSprite27Objects1= [];
gdjs.RefCode.GDNewSprite27Objects2= [];
gdjs.RefCode.GDNewSprite6Objects1= [];
gdjs.RefCode.GDNewSprite6Objects2= [];
gdjs.RefCode.GDNewSprite7Objects1= [];
gdjs.RefCode.GDNewSprite7Objects2= [];
gdjs.RefCode.GDNewSprite8Objects1= [];
gdjs.RefCode.GDNewSprite8Objects2= [];
gdjs.RefCode.GDNewSprite9Objects1= [];
gdjs.RefCode.GDNewSprite9Objects2= [];
gdjs.RefCode.GDCoinObjects1= [];
gdjs.RefCode.GDCoinObjects2= [];
gdjs.RefCode.GDBGObjects1= [];
gdjs.RefCode.GDBGObjects2= [];


gdjs.RefCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite27"), gdjs.RefCode.GDNewSprite27Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RefCode.GDNewSprite27Objects1.length;i<l;++i) {
    if ( gdjs.RefCode.GDNewSprite27Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RefCode.GDNewSprite27Objects1[k] = gdjs.RefCode.GDNewSprite27Objects1[i];
        ++k;
    }
}
gdjs.RefCode.GDNewSprite27Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main");
}}

}


};

gdjs.RefCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RefCode.GDScoreGlobeObjects1.length = 0;
gdjs.RefCode.GDScoreGlobeObjects2.length = 0;
gdjs.RefCode.GDResourceGlobeObjects1.length = 0;
gdjs.RefCode.GDResourceGlobeObjects2.length = 0;
gdjs.RefCode.GDNewSprite27Objects1.length = 0;
gdjs.RefCode.GDNewSprite27Objects2.length = 0;
gdjs.RefCode.GDNewSprite6Objects1.length = 0;
gdjs.RefCode.GDNewSprite6Objects2.length = 0;
gdjs.RefCode.GDNewSprite7Objects1.length = 0;
gdjs.RefCode.GDNewSprite7Objects2.length = 0;
gdjs.RefCode.GDNewSprite8Objects1.length = 0;
gdjs.RefCode.GDNewSprite8Objects2.length = 0;
gdjs.RefCode.GDNewSprite9Objects1.length = 0;
gdjs.RefCode.GDNewSprite9Objects2.length = 0;
gdjs.RefCode.GDCoinObjects1.length = 0;
gdjs.RefCode.GDCoinObjects2.length = 0;
gdjs.RefCode.GDBGObjects1.length = 0;
gdjs.RefCode.GDBGObjects2.length = 0;

gdjs.RefCode.eventsList0(runtimeScene);

return;

}

gdjs['RefCode'] = gdjs.RefCode;

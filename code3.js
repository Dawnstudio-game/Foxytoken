gdjs.SocialCode = {};
gdjs.SocialCode.localVariables = [];
gdjs.SocialCode.GDNewSpriteObjects1= [];
gdjs.SocialCode.GDNewSpriteObjects2= [];
gdjs.SocialCode.GDScoreGlobeObjects1= [];
gdjs.SocialCode.GDScoreGlobeObjects2= [];
gdjs.SocialCode.GDResourceGlobeObjects1= [];
gdjs.SocialCode.GDResourceGlobeObjects2= [];
gdjs.SocialCode.GDNewSprite27Objects1= [];
gdjs.SocialCode.GDNewSprite27Objects2= [];
gdjs.SocialCode.GDNewSprite6Objects1= [];
gdjs.SocialCode.GDNewSprite6Objects2= [];
gdjs.SocialCode.GDNewSprite7Objects1= [];
gdjs.SocialCode.GDNewSprite7Objects2= [];
gdjs.SocialCode.GDNewSprite8Objects1= [];
gdjs.SocialCode.GDNewSprite8Objects2= [];
gdjs.SocialCode.GDNewSprite9Objects1= [];
gdjs.SocialCode.GDNewSprite9Objects2= [];
gdjs.SocialCode.GDCoinObjects1= [];
gdjs.SocialCode.GDCoinObjects2= [];
gdjs.SocialCode.GDBGObjects1= [];
gdjs.SocialCode.GDBGObjects2= [];


gdjs.SocialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite27"), gdjs.SocialCode.GDNewSprite27Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SocialCode.GDNewSprite27Objects1.length;i<l;++i) {
    if ( gdjs.SocialCode.GDNewSprite27Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SocialCode.GDNewSprite27Objects1[k] = gdjs.SocialCode.GDNewSprite27Objects1[i];
        ++k;
    }
}
gdjs.SocialCode.GDNewSprite27Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main");
}}

}


};

gdjs.SocialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SocialCode.GDNewSpriteObjects1.length = 0;
gdjs.SocialCode.GDNewSpriteObjects2.length = 0;
gdjs.SocialCode.GDScoreGlobeObjects1.length = 0;
gdjs.SocialCode.GDScoreGlobeObjects2.length = 0;
gdjs.SocialCode.GDResourceGlobeObjects1.length = 0;
gdjs.SocialCode.GDResourceGlobeObjects2.length = 0;
gdjs.SocialCode.GDNewSprite27Objects1.length = 0;
gdjs.SocialCode.GDNewSprite27Objects2.length = 0;
gdjs.SocialCode.GDNewSprite6Objects1.length = 0;
gdjs.SocialCode.GDNewSprite6Objects2.length = 0;
gdjs.SocialCode.GDNewSprite7Objects1.length = 0;
gdjs.SocialCode.GDNewSprite7Objects2.length = 0;
gdjs.SocialCode.GDNewSprite8Objects1.length = 0;
gdjs.SocialCode.GDNewSprite8Objects2.length = 0;
gdjs.SocialCode.GDNewSprite9Objects1.length = 0;
gdjs.SocialCode.GDNewSprite9Objects2.length = 0;
gdjs.SocialCode.GDCoinObjects1.length = 0;
gdjs.SocialCode.GDCoinObjects2.length = 0;
gdjs.SocialCode.GDBGObjects1.length = 0;
gdjs.SocialCode.GDBGObjects2.length = 0;

gdjs.SocialCode.eventsList0(runtimeScene);

return;

}

gdjs['SocialCode'] = gdjs.SocialCode;

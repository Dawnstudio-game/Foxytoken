gdjs.WalletCode = {};
gdjs.WalletCode.localVariables = [];
gdjs.WalletCode.GDNewSpriteObjects1= [];
gdjs.WalletCode.GDNewSpriteObjects2= [];
gdjs.WalletCode.GDScoreGlobeObjects1= [];
gdjs.WalletCode.GDScoreGlobeObjects2= [];
gdjs.WalletCode.GDResourceGlobeObjects1= [];
gdjs.WalletCode.GDResourceGlobeObjects2= [];
gdjs.WalletCode.GDNewSprite27Objects1= [];
gdjs.WalletCode.GDNewSprite27Objects2= [];
gdjs.WalletCode.GDNewSprite6Objects1= [];
gdjs.WalletCode.GDNewSprite6Objects2= [];
gdjs.WalletCode.GDNewSprite7Objects1= [];
gdjs.WalletCode.GDNewSprite7Objects2= [];
gdjs.WalletCode.GDNewSprite8Objects1= [];
gdjs.WalletCode.GDNewSprite8Objects2= [];
gdjs.WalletCode.GDNewSprite9Objects1= [];
gdjs.WalletCode.GDNewSprite9Objects2= [];
gdjs.WalletCode.GDCoinObjects1= [];
gdjs.WalletCode.GDCoinObjects2= [];
gdjs.WalletCode.GDBGObjects1= [];
gdjs.WalletCode.GDBGObjects2= [];


gdjs.WalletCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite27"), gdjs.WalletCode.GDNewSprite27Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WalletCode.GDNewSprite27Objects1.length;i<l;++i) {
    if ( gdjs.WalletCode.GDNewSprite27Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WalletCode.GDNewSprite27Objects1[k] = gdjs.WalletCode.GDNewSprite27Objects1[i];
        ++k;
    }
}
gdjs.WalletCode.GDNewSprite27Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main");
}}

}


};

gdjs.WalletCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WalletCode.GDNewSpriteObjects1.length = 0;
gdjs.WalletCode.GDNewSpriteObjects2.length = 0;
gdjs.WalletCode.GDScoreGlobeObjects1.length = 0;
gdjs.WalletCode.GDScoreGlobeObjects2.length = 0;
gdjs.WalletCode.GDResourceGlobeObjects1.length = 0;
gdjs.WalletCode.GDResourceGlobeObjects2.length = 0;
gdjs.WalletCode.GDNewSprite27Objects1.length = 0;
gdjs.WalletCode.GDNewSprite27Objects2.length = 0;
gdjs.WalletCode.GDNewSprite6Objects1.length = 0;
gdjs.WalletCode.GDNewSprite6Objects2.length = 0;
gdjs.WalletCode.GDNewSprite7Objects1.length = 0;
gdjs.WalletCode.GDNewSprite7Objects2.length = 0;
gdjs.WalletCode.GDNewSprite8Objects1.length = 0;
gdjs.WalletCode.GDNewSprite8Objects2.length = 0;
gdjs.WalletCode.GDNewSprite9Objects1.length = 0;
gdjs.WalletCode.GDNewSprite9Objects2.length = 0;
gdjs.WalletCode.GDCoinObjects1.length = 0;
gdjs.WalletCode.GDCoinObjects2.length = 0;
gdjs.WalletCode.GDBGObjects1.length = 0;
gdjs.WalletCode.GDBGObjects2.length = 0;

gdjs.WalletCode.eventsList0(runtimeScene);

return;

}

gdjs['WalletCode'] = gdjs.WalletCode;

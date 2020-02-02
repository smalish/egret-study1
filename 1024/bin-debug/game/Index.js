var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/game_skins/GameIndex.exml";
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.onComplete, _this);
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Index.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Index.prototype.onComplete = function () {
        var that = this;
        // 屏幕适配
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        this.group_main.width = this.stage.stageWidth;
        this.group_main.height = this.stage.stageHeight;
        this.rect_main.width = this.stage.stageWidth;
        this.rect_main.height = this.stage.stageHeight;
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);

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
var GameIndex = (function (_super) {
    __extends(GameIndex, _super);
    function GameIndex() {
        var _this = _super.call(this) || this;
        // 触摸数据
        _this.touchstart_x = 0;
        _this.touchstart_y = 0;
        _this.touchend_x = 0;
        _this.touchend_y = 0;
        _this.skinName = "resource/game_skins/GameIndex.exml";
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.onComplete, _this);
        return _this;
    }
    GameIndex.prototype.onComplete = function () {
        var that = this;
        // 屏幕适配
        // this.width = this.stage.stageWidth
        // this.height = this.stage.stageHeight
        console.log('width: ' + this.width + '; height: ' + this.height);
        // this.group_main.width = this.stage.stageWidth
        // this.group_main.height = this.stage.stageHeight
        this.rect_main.width = this.stage.stageWidth;
        this.rect_main.height = this.stage.stageHeight;
        this.initPage();
    };
    // 初始化页面
    GameIndex.prototype.initPage = function () {
        var that = this;
        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        // that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)
        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    // 触摸开始
    GameIndex.prototype.touchBegin = function (e) {
        var that = this;
        console.log('touchBegin -------- x: ' + e.localX + '; y: ' + e.localY);
        that.touchstart_x = e.localX || 0;
        that.touchstart_y = e.localY || 0;
        // console.log(e)
    };
    // 触摸移动
    // private touchMove(e:egret.Event): void{
    //     let that = this
    //     console.log('touchMove: ')
    //     console.log(e)
    // }
    // 触摸结束
    GameIndex.prototype.touchEnd = function (e) {
        var that = this;
        console.log('touchEnd -------- x: ' + e.localX + '; y: ' + e.localY);
        var touchend_x = e.localX || 0;
        var touchend_y = e.localY || 0;
        var move_x = touchend_x - that.touchstart_x;
        var move_y = touchend_y - that.touchstart_y;
        if (Math.abs(move_x) >= Math.abs(move_y)) {
            // x轴上移动距离大
            if (move_x >= 0) {
                // 向右
                that.moveNumber('right');
            }
            else {
                // 向左
                that.moveNumber('left');
            }
        }
        else {
            // y轴上移动距离大
            if (move_y >= 0) {
                // 向下
                that.moveNumber('down');
            }
            else {
                // 向上
                that.moveNumber('up');
            }
        }
    };
    //移动数字
    GameIndex.prototype.moveNumber = function (direction) {
        var that = this;
        alert(direction);
    };
    return GameIndex;
}(eui.Component));
__reflect(GameIndex.prototype, "GameIndex", ["eui.UIComponent", "egret.DisplayObject"]);

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
        //二维数组
        _this.len = 4; //二维数组宽高
        _this.rect_array = [];
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
        // 游戏开始，生成随机数
        that.initGame();
        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        // that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)        
        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchOutside, this);
        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    GameIndex.prototype.initGame = function () {
        var that = this;
        // 二维数组初始化
        for (var i = 0; i < that.len; i++) {
            that.rect_array[i] = [];
            for (var j = 0; j < that.len; j++) {
                that.rect_array[i][j] = 0;
            }
        }
        console.log(that.rect_array);
        that.randNum();
        that.randNum();
        // 显示数组块
        that.initNumRect();
        console.log(that.rect_array);
    };
    // 在随机位置生成2或4
    GameIndex.prototype.randNum = function () {
        var that = this;
        var random_x = Math.floor(Math.random() * 4); //活动【0-3】中的随机整数
        var random_y = Math.floor(Math.random() * 4);
        while (true) {
            if (!that.rect_array[random_y][random_x]) {
                break;
            }
            else {
                random_x = Math.floor(Math.random() * 4); //活动【0-3】中的随机整数
                random_y = Math.floor(Math.random() * 4);
            }
        }
        that.rect_array[random_y][random_x] = Math.random() > 0.5 ? 4 : 2;
    };
    // 获取数字色块
    GameIndex.prototype.getBackgroundColor = function (number) {
        switch (number) {
            case 2:
                return 0xeee4da;
                break;
            case 4:
                return 0xede0c8;
                break;
            case 8:
                return 0xf2b179;
                break;
            case 16:
                return 0xf59563;
                break;
            case 32:
                return 0xf67c5f;
                break;
            case 64:
                return 0xf65e3b;
                break;
            case 128:
                return 0xedcf72;
                break;
            case 256:
                return 0xedcc61;
                break;
            case 512:
                return 0x9c0;
                break;
            case 1024:
                return 0x33b5e5;
                break;
            case 2048:
                return 0x09c;
                break;
            case 4096:
                return 0xa6c;
                break;
            case 8192:
                return 0x93c;
                break;
        }
    };
    // 初始化数字快
    GameIndex.prototype.initNumRect = function () {
        var that = this;
        // that.rect_array
        var cur_rect = null;
        var new_shape = null;
        for (var i = 0; i < that.len; i++) {
            for (var j = 0; j < that.len; j++) {
                if (that.rect_array[i][j]) {
                    //有值的位置
                    cur_rect = that.group_rects.getChildAt(that.len * i + j);
                    //创建一个块
                    new_shape = new egret.Shape();
                    var color = that.getBackgroundColor(that.rect_array[i][j]);
                    new_shape.graphics.beginFill(color);
                    new_shape.graphics.drawRect(cur_rect.x, cur_rect.y, cur_rect.width, cur_rect.height);
                    new_shape.graphics.endFill();
                    that.group_numbers.addChild(new_shape);
                }
            }
        }
    };
    // 触摸开始
    GameIndex.prototype.touchBegin = function (e) {
        var that = this;
        //e.localX e.localY取到的值并不是相对于group_numbers，而是相对于每个小个子的x？？？？？？？
        console.log('touchBegin -------- x: ' + e.stageX + '; y: ' + e.stageY);
        that.touchstart_x = e.stageX || 0;
        that.touchstart_y = e.stageY || 0;
        // console.log(e)
    };
    // 触摸移动
    // private touchMove(e:egret.TouchEvent): void{
    //     let that = this
    //     console.log('touchMove -------- x: ' + e.stageX + '; y: ' + e.stageY)
    //     // console.log(e)
    // }
    // 触摸移动到容器外
    GameIndex.prototype.touchOutside = function (e) {
        var that = this;
        console.log('touchOutside -------- x: ' + e.stageX + '; y: ' + e.stageY);
        var touchend_x = e.stageX || 0;
        var touchend_y = e.stageY || 0;
        var move_x = touchend_x - that.touchstart_x;
        var move_y = touchend_y - that.touchstart_y;
        that.judgeDirection(move_x, move_y);
    };
    // 触摸结束
    GameIndex.prototype.touchEnd = function (e) {
        var that = this;
        console.log('touchEnd -------- x: ' + e.stageX + '; y: ' + e.stageY);
        var touchend_x = e.stageX || 0;
        var touchend_y = e.stageY || 0;
        var move_x = touchend_x - that.touchstart_x;
        var move_y = touchend_y - that.touchstart_y;
        that.judgeDirection(move_x, move_y);
    };
    // 判断移动方向
    GameIndex.prototype.judgeDirection = function (move_x, move_y) {
        var that = this;
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
        console.log(direction);
        // wx.showToast({
        //     title: direction,
        //     icon: 'success',
        //     duration: 2000
        // })
    };
    return GameIndex;
}(eui.Component));
__reflect(GameIndex.prototype, "GameIndex", ["eui.UIComponent", "egret.DisplayObject"]);

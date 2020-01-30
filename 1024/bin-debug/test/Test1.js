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
var Test1 = (function (_super) {
    __extends(Test1, _super);
    function Test1() {
        var _this = _super.call(this) || this;
        console.log('test constructor ---------');
        // 可以手动单独自己创建exml文件和ts文件，也可以EUI组件一起创建exml和ts文件
        //但是exml文件必须创建到resource文件夹内，编译之后default.thm.json配置文件里没有，所以exml文件还是要创建到resource文件夹内
        // this.skinName = "Test1Skin"
        _this.skinName = "resource/test_skins/Test1.exml";
        // ADDED_TO_STAGE在将显示对象直接添加到舞台显示列表或将包含显示对象的子树添加至舞台显示列表中时调度
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createView, _this);
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    // 组件初始化完成后回调
    Test1.prototype.childrenCreated = function () {
        console.log('test childrenCreated --------');
        // this.button_test.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this)
    };
    Test1.prototype.createView = function () {
        console.log('test createView -----------');
        this.button_tap.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
        this.label_test.text = '123';
    };
    // 组件加载完成
    Test1.prototype.onComplete = function () {
        console.log('test onComplete -----------');
    };
    // 点击按钮
    Test1.prototype.clickButton = function (event) {
        console.log('test clickButton -----------');
    };
    return Test1;
}(eui.Component));
__reflect(Test1.prototype, "Test1", ["eui.UIComponent", "egret.DisplayObject"]);

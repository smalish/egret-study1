class Test1 extends eui.Component implements  eui.UIComponent {


    public constructor(){
        super()
        console.log('test constructor ---------')

        // 可以手动单独自己创建exml文件和ts文件，也可以EUI组件一起创建exml和ts文件
        //但是exml文件必须创建到resource文件夹内，编译之后default.thm.json配置文件里没有，所以exml文件还是要创建到resource文件夹内
        // this.skinName = "Test1Skin"
        this.skinName = "resource/test_skins/Test1.exml"
        // ADDED_TO_STAGE在将显示对象直接添加到舞台显示列表或将包含显示对象的子树添加至舞台显示列表中时调度
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this)
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)
    }

    public button_tap: eui.Button
    public label_test: eui.Label

    // 组件初始化完成后回调
	protected childrenCreated():void{
        console.log('test childrenCreated --------')

        // this.button_test.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this)
    }


    private createView():void{
        console.log('test createView -----------')

        this.button_tap.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this)
        this.label_test.text = '123'
    }

    // 组件加载完成
    private onComplete():void{
        console.log('test onComplete -----------')

        
    }

    // 点击按钮
    private clickButton(event):void{
        console.log('test clickButton -----------')
    }
}
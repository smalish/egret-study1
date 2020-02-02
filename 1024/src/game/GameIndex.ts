class GameIndex extends eui.Component implements eui.UIComponent{

    private group_main: eui.Group
    private rect_main: eui.Rect //白色背景
    private group_numbers: eui.Group

    // 触摸数据
    private touchstart_x: number = 0
    private touchstart_y: number = 0
    private touchend_x: number = 0
    private touchend_y: number = 0

    
    constructor(){
        super()
        this.skinName = "resource/game_skins/GameIndex.exml"
        this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onComplete, this)
    }

    private onComplete():void{
        let that = this

        // 屏幕适配
        // this.width = this.stage.stageWidth
        // this.height = this.stage.stageHeight
        console.log('width: ' + this.width + '; height: ' + this.height)

        // this.group_main.width = this.stage.stageWidth
        // this.group_main.height = this.stage.stageHeight

        this.rect_main.width = this.stage.stageWidth
        this.rect_main.height = this.stage.stageHeight

        this.initPage()
       
    }

    // 初始化页面
    private initPage():void{
        let that = this

        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this)
        // that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)
        that.group_numbers.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this)
        
    }

    // 触摸开始
    private touchBegin(e:egret.TouchEvent): void{
        let that = this

        console.log('touchBegin -------- x: ' + e.localX + '; y: ' + e.localY)
        that.touchstart_x = e.localX || 0
        that.touchstart_y = e.localY || 0
        // console.log(e)
    }

    // 触摸移动
    // private touchMove(e:egret.Event): void{
    //     let that = this


    //     console.log('touchMove: ')
    //     console.log(e)
    // }
 
    // 触摸结束
    private touchEnd(e: egret.TouchEvent):void{
        let that = this

        console.log('touchEnd -------- x: ' + e.localX + '; y: ' + e.localY)
        let touchend_x:number = e.localX || 0
        let touchend_y:number = e.localY || 0

        let move_x:number = touchend_x - that.touchstart_x
        let move_y:number = touchend_y - that.touchstart_y

        if(Math.abs(move_x) >= Math.abs(move_y)){
            // x轴上移动距离大
            if(move_x >= 0){
                // 向右
                that.moveNumber('right')
            }else{
                // 向左
                that.moveNumber('left')
            }
        }else{
            // y轴上移动距离大
            if(move_y >= 0){
                // 向下
                that.moveNumber('down')
            }else{
                // 向上
                that.moveNumber('up')
            }
        }
    }

    //移动数字
    private moveNumber(direction:string): void{
       let that = this


      alert(direction)

    }


}
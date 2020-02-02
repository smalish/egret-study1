class Index extends eui.Component implements  eui.UIComponent {

	private group_main: eui.Group
    private rect_main: eui.Rect //白色背景

	public constructor() {
		super();

		this.skinName = "resource/game_skins/GameIndex.exml"
        this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onComplete, this)
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

    private onComplete():void{
        let that = this

        // 屏幕适配
        this.width = this.stage.stageWidth
        this.height = this.stage.stageHeight

        this.group_main.width = this.stage.stageWidth
        this.group_main.height = this.stage.stageHeight

        this.rect_main.width = this.stage.stageWidth
        this.rect_main.height = this.stage.stageHeight

       
    }
	
}
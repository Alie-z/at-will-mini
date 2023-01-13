const app = getApp();
export default Behavior({
    data: {
        previewShow: false,
        previewIndex: 0,
        previewList: [],
        type: 'image'
    },
    observers: {
        previewShow(val: Boolean) {
            let tabBar = this.getTabBar();
            if (tabBar)
                tabBar.setData({
                    show: !val
                });
        }
    },
    methods: {
        // 打开预览页
        handlePreview(e: WechatMiniprogram.CustomEvent) {
            const {index, list} = e.detail;
            console.log('🚀 > handlePreview >  e.detail', e);
            this.setData({
                previewShow: true,
                previewIndex: index,
                previewList: list
            });
            app.$apis.addHistory(list[index]);
        }
    }
});

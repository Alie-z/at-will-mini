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
            let {index = 0, list, id, num} = e.detail;
            let _list = [];
            if (id && num) {
                for (let i = 0; i < num; i++) {
                    const path = `https://pic.gzhuibei.com/a/1/${id}/${i}.jpg`;
                    _list.push({
                        id: id + i,
                        file_size: 0,
                        file_type: 'image/jpeg',
                        path,
                        thumbs: {
                            original: path
                        },
                        file_size_str: '0 KB',
                        height: 279.1666666666667,
                        original: path
                    });
                }
                list = _list;
            }

            this.setData({
                previewShow: true,
                previewIndex: index,
                previewList: list
            });
            app.$apis.addHistory(list[index]);
        }
    }
});

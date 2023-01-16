import toast from '../../../components/ow-toast/toast';
const app = getApp();
export default Behavior({
    data: {
        tagPreviewShow: false,
        tagList: [],
        page: 1,
        hasMore: true,
        previewShow: false,
        previewIndex: 0,
        previewList: [],
        type: 'image'
    },
    observers: {
        tagPreviewShow(val: Boolean) {
            let tabBar = this.getTabBar();
            if (tabBar) {
                tabBar.setData({
                    show: !val
                });
            }
            if (!val) {
                this.setData({
                    page: 1,
                    hasMore: true,
                    tagList: []
                });
            }
        }
    },
    methods: {
        // 打开tag预览页
        async handleTag(e: WechatMiniprogram.CustomEvent) {
            let {value, search} = e?.currentTarget?.dataset;
            let {page, activeVal, tagList, hasMore: isHas, searchValue} = this.data;
            if (!isHas) return;
            if (page === 1) {
                this.setData({
                    tagPreviewShow: true
                });
            }
            if (search) {
                value = `sousu/?s0=${searchValue}`;
                page = 1;
            }
            this.setData({
                activeVal: value || activeVal
            });
            const res = await app.$apis.getPhotoList({kw: value || activeVal, page});
            let {data, hasMore} = res;
            data.map((item: {imgSrc: string}) => {
                item.imgSrc = item.imgSrc.replace('tjg', 'pic');
            });
            if (search) {
                data = res.data;
                hasMore = false;
                if (!data.length) {
                    toast.danger({
                        message: '未查询到壁纸，请修改关键词',
                        context: this
                    });
                    this.setData({
                        tagPreviewShow: false
                    });
                    let search = this.selectComponent(`#search`);
                    search.changeSearchPlan();
                    return false;
                }
            } else {
                data = [...tagList, ...res.data];
            }

            this.setData({
                tagList: data,
                hasMore
            });
        },
        scrollLower(e: WechatMiniprogram.CustomEvent) {
            this.setData(
                {
                    page: this.data.page + 1
                },
                () => {
                    this.handleTag(e);
                }
            );
        },
        // 打开预览页
        handlePreview(e: WechatMiniprogram.CustomEvent) {
            let {index = 0, list, id, num} = e.detail;
            let _list = [];
            if (id && num) {
                for (let i = 1; i < num; i++) {
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

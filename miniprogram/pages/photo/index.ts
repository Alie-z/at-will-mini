import favorites from '../../lib/mixins/favorites';
import photoview from '../../lib/mixins/photoview/index';
import preview from '../../lib/mixins/preview/index';
import tag from '../../lib/tag';
const app = getApp();

Page({
    behaviors: [favorites, photoview, preview],
    data: {
        tag,
        activeVal: null,
        tagId: null,
        tagNum: 0,
        searchValue: ''
    },
    onLoad() {},
    // 打开查询面板
    openSearch() {
        let search = this.selectComponent(`#search`);
        search.changeSearchPlan();
    },
    // 表单
    onValueChange(e: WechatMiniprogram.CustomEvent) {
        let val = e.detail.value;
        this.setData({
            searchValue: val
        });
    }
});

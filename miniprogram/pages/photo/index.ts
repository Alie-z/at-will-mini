import favorites from '../../lib/mixins/favorites';
import preview from '../../lib/mixins/preview/index';
import tag from '../../lib/tag';
const app = getApp();

Page({
    behaviors: [favorites, preview],
    data: {
        loading: true,
        tag,
        activeVal: null
    },
    onLoad() {},
    handleTag(e: WechatMiniprogram.CustomEvent) {
        const {value} = e.currentTarget.dataset;
        console.log('🚀 > handleTag > value', value);
        this.setData({
            activeVal: value
        });
    }
});

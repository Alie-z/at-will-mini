import favorites from '../../lib/mixins/favorites';
import photoview from '../../lib/mixins/photoview/index';
import tag from '../../lib/tag';
const app = getApp();

Page({
    behaviors: [favorites, photoview],
    data: {
        loading: true,
        tag,
        activeVal: null
    },
    onLoad() {}
});

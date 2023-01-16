// components/ow-photo-list/index.ts
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [] as Array<PhotoTag>
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        width: (750 - 4 * 20) / 3
    },
    attached: function () {
        this.setData(app.$getCustomNavigationInfo());
    },
    /**
     * 组件的方法列表
     */
    methods: {
        scrollLower() {
            this.triggerEvent('Lower', true);
        },
        handleImg(e: WechatMiniprogram.CustomEvent) {
            const {id, num} = e.currentTarget.dataset;
            this.triggerEvent('ClickImg', {id, num});
        }
    }
});

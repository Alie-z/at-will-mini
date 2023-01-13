// components/ow-loading/index.ts
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

    /**
     * 组件的方法列表
     */
    methods: {}
});

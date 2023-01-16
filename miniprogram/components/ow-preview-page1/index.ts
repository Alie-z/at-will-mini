Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: Number,
            value: 1001
        }
    },
    methods: {
        handleClose() {
            this.setData({
                show: false
            });
        },
        handleAfterLeave() {
            this.setData({
                show: false
            });
        }
    }
});

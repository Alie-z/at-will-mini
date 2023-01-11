import {tabbars, changeTab} from './util';
const app = getApp();

Component({
    options: {
        addGlobalClass: true
    },
    data: {
        show: true,
        selected: -1,
        tabbars,
        switchStatus: false
    },
    methods: {
        handleClick(e: WechatMiniprogram.BaseEvent) {
            let path = e.currentTarget.dataset.path;
            wx.switchTab({url: path});
        }
    },
    lifetimes: {
        ready() {
            let index = changeTab.call(getCurrentPages()[0]);
            const switchStatus = app.$apis.getIsPhoto();
            let {tabbars} = this.data;
            if (!switchStatus) {
                tabbars.splice(1, 1);
            }
            if (index > -1) {
                this.setData({
                    selected: index,
                    tabbars,
                    switchStatus
                });
            }
        }
    }
});

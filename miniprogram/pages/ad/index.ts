const app = getApp();

Page({
    data: {
        tips: app.$config.tips
    },
    onLoad() {
        app.$apis.test().then(() => {
            wx.switchTab({url: '/pages/index/index'});
        });
    }
});

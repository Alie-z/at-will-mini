import toast from '../../components/ow-toast/toast';
const app = getApp();

Page({
    data: {
        version: '',
        updateDateTime: app.$config.updateDateTime,
        favorites: 0,
        historys: 0
    },
    onShow() {
        let {favorites, historys} = app.$apis.getTotalUserData() as TotalUserData;
        this.setData({
            favorites,
            historys
        });
    },
    onLoad() {
        const acountInfo = wx.getAccountInfoSync();
        const switchStatus = app.$apis.getIsPhoto();
        this.setData({
            version: acountInfo.miniProgram.version,
            switchStatus
        });
    },
    // 打开收藏和历史记录
    handleNav(e: WechatMiniprogram.CustomEvent) {
        let type = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '/pages/my/list/index?type=' + type
        });
    },
    // 打赏码
    handleTipMoney() {
        wx.previewImage({
            urls: ['/images/pay.jpg']
        });
    },
    // 复制
    handleCopyText(e: WechatMiniprogram.CustomEvent) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.link,
            success: () => {
                wx.showToast({
                    title: '已复制',
                    duration: 1000
                });
            }
        });
    },
    // 开通图集
    switchChange() {
        const switchStatus = app.$apis.getIsPhoto();
        app.$apis.setIsPhoto(!switchStatus);
        toast.primary((switchStatus ? '已关闭' : '已开通') + ',请重启小程序。');
        wx.reLaunch({url: '/pages/ad/index'});
    }
});

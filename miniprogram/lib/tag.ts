const uid = '375727';
const referer = 'https://www.tujidao04.com/';
const classify = ['热门', '风格', '丝腿足', '情趣', '场景', '服装', '机构', '地区'];
const tagClass = {
    热门: {
        极品: '/s/?id=47',
        美少女: '/s/?id=55',
        御姐: '/s/?id=62',
        女神: '/s/?id=59',
        日本少女: '/s/?id=80',
        嫩模: '/s/?id=85',
        妹子: '/s/?id=84',
        尤物: '/s/?id=45',
        正妹: '/s/?id=83',
        熟女: '/s/?id=87',
        乙女: '/s/?id=99',
        女星: '/s/?id=100',
        阳光: '/s/?id=81',
        网红: '/s/?id=116',
        少FU: '/s/?id=132',
        日本少FU: '/s/?id=138',
        泳装少女: '/s/?id=215',
        软妹: '/s/?id=151',
        日本妹子: '/s/?id=150',
        萌女: '/s/?id=149',
        车模: '/s/?id=154',
        女优: '/s/?id=159',
        少女: '/s/?id=166',
        日本嫩模: '/s/?id=165',
        清纯少女: '/s/?id=187',
        性感少女: '/s/?id=186',
        混血: '/s/?id=185',
        黑长直: '/s/?id=184',
        明星: '/s/?id=119',
        杂志: '/s/?id=194',
        欧美熟女: '/s/?id=197',
        金发: '/s/?id=196',
        黑人: '/s/?id=201',
        女郎: '/s/?id=212',
        轻熟女: '/s/?id=214',
        巨RU女优: '/s/?id=227',
        女友: '/s/?id=251',
        白领: '/s/?id=254',
        萝莉: '/s/?id=40'
    },
    风格: {
        可爱: '/s/?id=14',
        甜美: '/s/?id=32',
        清纯: '/s/?id=23',
        性感: '/s/?id=35',
        气质: '/s/?id=34',
        妩媚: '/s/?id=52',
        清新: '/s/?id=51',
        唯美: '/s/?id=54',
        美胸: '/s/?id=33',
        诱惑: '/s/?id=42',
        私房: '/s/?id=41',
        翘T: '/s/?id=46',
        大胆: '/s/?id=44',
        福利: '/s/?id=43',
        大胸: '/s/?id=53',
        高贵: '/s/?id=111',
        粉嫩: '/s/?id=121',
        惊艳: '/s/?id=95',
        白嫩: '/s/?id=94',
        养眼: '/s/?id=91',
        巨RU: '/s/?id=89',
        情趣: '/s/?id=73',
        短发: '/s/?id=29',
        丰T: '/s/?id=202',
        丰满: '/s/?id=242',
        巨RU萝莉: '/s/?id=236',
        勾魂: '/s/?id=232',
        半裸: '/s/?id=231',
        欧美大胸: '/s/?id=230',
        蕾丝诱惑: '/s/?id=229',
        制服诱惑: '/s/?id=228',
        丰满少F: '/s/?id=221',
        风骚少F: '/s/?id=220',
        风骚: '/s/?id=219',
        顶级少F: '/s/?id=218',
        美T少F: '/s/?id=206',
        肥TUN: '/s/?id=202',
        欧美巨RU: '/s/?id=195',
        学生: '/s/?id=192',
        肉感: '/s/?id=191',
        双马尾: '/s/?id=189',
        大尺度: '/s/?id=183',
        骨感: '/s/?id=181',
        长发: '/s/?id=162',
        冷艳: '/s/?id=161',
        包T: '/s/?id=158',
        美T: '/s/?id=160',
        爆RU: '/s/?id=153',
        魅惑: '/s/?id=137',
        优雅: '/s/?id=136',
        美RU: '/s/?id=133'
    },
    丝腿足: {
        丝袜女郎: '/s/?id=213',
        黑丝萝莉: '/s/?id=253',
        白丝萝莉: '/s/?id=252',
        长筒袜: '/s/?id=12',
        丝袜: '/s/?id=15',
        黑丝: '/s/?id=72',
        丝袜美腿: '/s/?id=71',
        灰丝: '/s/?id=109',
        美腿: '/s/?id=31',
        高跟: '/s/?id=76',
        腿模: '/s/?id=88',
        丝袜诱惑: '/s/?id=79',
        网袜: '/s/?id=78',
        丝足: '/s/?id=105',
        白丝: '/s/?id=104',
        肉丝: '/s/?id=103',
        红丝: '/s/?id=129',
        吊带丝袜: '/s/?id=143',
        美脚: '/s/?id=142',
        玉足: '/s/?id=141',
        情趣丝袜: '/s/?id=140',
        美足: '/s/?id=139',
        网衣: '/s/?id=155',
        长腿: '/s/?id=169',
        凉高跟: '/s/?id=168',
        高跟美腿: '/s/?id=167',
        欧美制服: '/s/?id=199',
        欧美丝袜: '/s/?id=198',
        街拍美T: '/s/?id=205',
        丝袜美T: '/s/?id=204',
        美丝: '/s/?id=249',
        丝足高跟: '/s/?id=208',
        丝足诱惑: '/s/?id=207',
        街拍丝袜: '/s/?id=243',
        丝袜人体: '/s/?id=240',
        丝袜短裙: '/s/?id=239',
        街拍短裙: '/s/?id=238',
        丝袜制服: '/s/?id=237',
        街拍美腿: '/s/?id=235',
        街拍高跟: '/s/?id=234',
        丝袜肥T: '/s/?id=233',
        街拍黑丝: '/s/?id=226',
        黑丝制服: '/s/?id=225',
        黑丝美腿: '/s/?id=224',
        丝袜熟女: '/s/?id=223',
        丝袜少F: '/s/?id=222',
        肉丝美腿: '/s/?id=258',
        黑丝诱惑: '/s/?id=259',
        情趣制服: '/s/?id=257'
    },
    情趣: {
        薄纱: '/s/?id=135',
        剧情: '/s/?id=255',
        肚兜: '/s/?id=93',
        旗袍: '/s/?id=69',
        空姐: '/s/?id=112',
        赛车女郎: '/s/?id=9',
        护士: '/s/?id=20',
        运动: '/s/?id=21',
        女仆: '/s/?id=27',
        兔女郎: '/s/?id=26',
        制服: '/s/?id=28',
        COS: '/s/?id=36',
        猫女: '/s/?id=48',
        美束: '/s/?id=108',
        古典: '/s/?id=68',
        SM: '/s/?id=67',
        圣诞: '/s/?id=63',
        湿身: '/s/?id=50',
        人体: '/s/?id=70',
        厨娘: '/s/?id=125',
        JK: '/s/?id=124',
        女警: '/s/?id=123',
        老师: '/s/?id=122',
        医生: '/s/?id=120',
        新年: '/s/?id=106',
        捆绑: '/s/?id=67',
        绳艺: '/s/?id=67',
        眼镜: '/s/?id=250',
        不知火舞: '/s/?id=211',
        COSER: '/s/?id=210',
        清纯护士: '/s/?id=209',
        纹身: '/s/?id=148',
        OL: '/s/?id=147',
        秘书: '/s/?id=146',
        调教: '/s/?id=115',
        镣铐: '/s/?id=114',
        姐妹花: '/s/?id=130',
        透视: '/s/?id=134'
    },
    场景: {
        桌球: '/s/?id=200',
        浴室: '/s/?id=75',
        篮球: '/s/?id=102',
        拳击: '/s/?id=92',
        足球: '/s/?id=90',
        居家: '/s/?id=82',
        办公室: '/s/?id=10',
        街拍: '/s/?id=65',
        外拍: '/s/?id=74',
        海边: '/s/?id=96',
        展台: '/s/?id=118',
        钢管: '/s/?id=152',
        床上: '/s/?id=145',
        酒店: '/s/?id=144',
        健身: '/s/?id=131',
        户外: '/s/?id=180',
        香车美人: '/s/?id=247',
        沙滩: '/s/?id=163'
    },
    服装: {
        连衣裙: '/s/?id=117',
        泳装: '/s/?id=11',
        校服: '/s/?id=13',
        长裙: '/s/?id=19',
        热裤: '/s/?id=18',
        睡衣: '/s/?id=17',
        蕾丝: '/s/?id=16',
        超短裙: '/s/?id=22',
        和服: '/s/?id=25',
        牛仔: '/s/?id=24',
        水手服: '/s/?id=38',
        比基尼: '/s/?id=49',
        丁字裤: '/s/?id=64',
        内衣: '/s/?id=77',
        高叉: '/s/?id=37',
        职业装: '/s/?id=30',
        死库水: '/s/?id=58',
        婚纱: '/s/?id=113',
        豹纹: '/s/?id=110',
        衬衫: '/s/?id=107',
        紧身裤: '/s/?id=127',
        体操服: '/s/?id=126',
        皮衣: '/s/?id=128',
        西装: '/s/?id=157',
        学生制服: '/s/?id=193',
        日本制服: '/s/?id=164',
        迷你裙: '/s/?id=244',
        毛衣: '/s/?id=245',
        长靴: '/s/?id=203',
        吊带: '/s/?id=248',
        抹胸: '/s/?id=256',
        背心: '/s/?id=156'
    },
    机构: {
        Graphis: '/x/?id=43',
        秀人网: '/x/?id=59',
        Beautyleg: '/x/?id=57',
        克拉女神: '/x/?id=31',
        绅士约拍: '/x/?id=114',
        DJAWA: '/x/?id=113',
        壹吻映画: '/x/?id=112',
        LD零度: '/x/?id=111',
        宅急约: '/x/?id=110',
        尤蜜: '/x/?id=109',
        ARTGRAVIA: '/x/?id=101',
        喵糖映画: '/x/?id=95',
        语画界: '/x/?id=85',
        尤美: '/x/?id=84',
        日本CosPlay: '/x/?id=83',
        森萝财团: '/x/?id=82',
        蜜丝: '/x/?id=81',
        Cosdoki: '/x/?id=80',
        'Girlz-High': '/x/?id=79',
        台湾正妹: '/x/?id=78',
        美媛馆: '/x/?id=74',
        尤物馆: '/x/?id=73',
        魅妍社: '/x/?id=72',
        蜜桃社: '/x/?id=71',
        模范学院: '/x/?id=70',
        爱蜜社: '/x/?id=68',
        嗲囡囡: '/x/?id=67',
        尤果圈爱尤物: '/x/?id=62',
        尤蜜荟: '/x/?id=58',
        'YS Web': '/x/?id=52',
        'Hello! Project Digital Books': '/x/?id=51',
        丽柜: '/x/?id=49',
        ISHOW爱秀: '/x/?id=46',
        丝享家: '/x/?id=14',
        丝足便当: '/x/?id=13',
        异思趣向: '/x/?id=12',
        网络美女: '/x/?id=2',
        'Minisuka.tv': '/x/?id=35',
        'Digi-Gra': '/x/?id=17',
        LovePop: '/x/?id=18',
        推女郎: '/x/?id=75',
        头条女神: '/x/?id=45',
        'Young Magazine': '/x/?id=94',
        'Young Gangan': '/x/?id=93',
        'Young Champion': '/x/?id=92',
        'Weekly Big Comic Spirits': '/x/?id=91',
        FRIDAY杂志写真: '/x/?id=90',
        FLASH杂志写真: '/x/?id=89',
        阳光宝贝: '/x/?id=88',
        丝意SIEE: '/x/?id=87',
        风之领域: '/x/?id=86',
        猎女神: '/x/?id=77',
        OnlyTease: '/x/?id=76',
        星乐园: '/x/?id=69',
        尤果网: '/x/?id=63',
        波萝社: '/x/?id=66',
        '@misty': '/x/?id=65',
        Wanibooks: '/x/?id=64',
        影私荟: '/x/?id=61',
        顽味生活: '/x/?id=60',
        优星馆: '/x/?id=56',
        御女郎: '/x/?id=55',
        'NS Eyes': '/x/?id=54',
        'Image.tv': '/x/?id=53',
        'Bomb.TV': '/x/?id=50',
        PB写真集: '/x/?id=48',
        '4K-STAR': '/x/?id=47',
        动感之星: '/x/?id=44',
        'Bejean On Line': '/x/?id=42',
        '51MODO': '/x/?id=41',
        'Imuto.tv': '/x/?id=40',
        推女神: '/x/?id=39',
        'DDY Pantyhose': '/x/?id=38',
        爱丝: '/x/?id=37',
        VYJ: '/x/?id=36',
        网红馆: '/x/?id=34',
        WPB写真: '/x/?id=33',
        美腿宝贝: '/x/?id=32',
        瑞丝馆: '/x/?id=30',
        薄荷叶: '/x/?id=29',
        Sabra: '/x/?id=28',
        果团网: '/x/?id=27',
        青豆客: '/x/?id=26',
        花の颜: '/x/?id=25',
        模特联盟: '/x/?id=24',
        花漾: '/x/?id=23',
        兔几盟: '/x/?id=22',
        'Juicy Honey': '/x/?id=21',
        'X-City': '/x/?id=20',
        'Princess Collection': '/x/?id=19',
        熊川纪信: '/x/?id=16',
        星颜社: '/x/?id=15',
        'The Black Alley': '/x/?id=11',
        激萌文化: '/x/?id=10',
        'Young Animal Arashi': '/x/?id=9',
        DGC: '/x/?id=8',
        'RQ-STAR': '/x/?id=7',
        'Young Animal': '/x/?id=6',
        'For-side': '/x/?id=5',
        'Weekly Playboy': '/x/?id=4',
        'Weekly Young Jump': '/x/?id=3',
        BWH: '/x/?id=1',
        山茶摄影: '/x/?id=108',
        奈丝: '/x/?id=107',
        大生模拍: '/x/?id=106',
        佳爷SJA: '/x/?id=105',
        一千零一夜: '/x/?id=100',
        丽丝映像: '/x/?id=99',
        斯文传媒SIW: '/x/?id=98',
        轻兰映画: '/x/?id=97',
        纳丝摄影: '/x/?id=96',
        袜涩: '/x/?id=104',
        思话: '/x/?id=103',
        丝慕: '/x/?id=102'
    },
    地区: {
        国内: '/cat/?id=10',
        日本: '/cat/?id=8',
        中国台湾: '/cat/?id=11',
        欧美: '/cat/?id=20',
        韩国: '/cat/?id=19',
        泰国: '/cat/?id=23'
    }
};
const tagAll1 = {
    极品: '/s/?id=47',
    美少女: '/s/?id=55',
    御姐: '/s/?id=62',
    女神: '/s/?id=59',
    日本少女: '/s/?id=80',
    嫩模: '/s/?id=85',
    妹子: '/s/?id=84',
    尤物: '/s/?id=45',
    正妹: '/s/?id=83',
    熟女: '/s/?id=87',
    乙女: '/s/?id=99',
    女星: '/s/?id=100',
    阳光: '/s/?id=81',
    网红: '/s/?id=116',
    少FU: '/s/?id=132',
    日本少FU: '/s/?id=138',
    泳装少女: '/s/?id=215',
    软妹: '/s/?id=151',
    日本妹子: '/s/?id=150',
    萌女: '/s/?id=149',
    车模: '/s/?id=154',
    女优: '/s/?id=159',
    少女: '/s/?id=166',
    日本嫩模: '/s/?id=165',
    清纯少女: '/s/?id=187',
    性感少女: '/s/?id=186',
    混血: '/s/?id=185',
    黑长直: '/s/?id=184',
    明星: '/s/?id=119',
    杂志: '/s/?id=194',
    欧美熟女: '/s/?id=197',
    金发: '/s/?id=196',
    黑人: '/s/?id=201',
    女郎: '/s/?id=212',
    轻熟女: '/s/?id=214',
    巨RU女优: '/s/?id=227',
    女友: '/s/?id=251',
    白领: '/s/?id=254',
    萝莉: '/s/?id=40',

    可爱: '/s/?id=14',
    甜美: '/s/?id=32',
    清纯: '/s/?id=23',
    性感: '/s/?id=35',
    气质: '/s/?id=34',
    妩媚: '/s/?id=52',
    清新: '/s/?id=51',
    唯美: '/s/?id=54',
    美胸: '/s/?id=33',
    诱惑: '/s/?id=42',
    私房: '/s/?id=41',
    翘T: '/s/?id=46',
    大胆: '/s/?id=44',
    福利: '/s/?id=43',
    大胸: '/s/?id=53',
    高贵: '/s/?id=111',
    粉嫩: '/s/?id=121',
    惊艳: '/s/?id=95',
    白嫩: '/s/?id=94',
    养眼: '/s/?id=91',
    巨RU: '/s/?id=89',
    情趣: '/s/?id=73',
    短发: '/s/?id=29',
    丰T: '/s/?id=202',
    丰满: '/s/?id=242',
    巨RU萝莉: '/s/?id=236',
    勾魂: '/s/?id=232',
    半裸: '/s/?id=231',
    欧美大胸: '/s/?id=230',
    蕾丝诱惑: '/s/?id=229',
    制服诱惑: '/s/?id=228',
    丰满少F: '/s/?id=221',
    风骚少F: '/s/?id=220',
    风骚: '/s/?id=219',
    顶级少F: '/s/?id=218',
    美T少F: '/s/?id=206',
    肥TUN: '/s/?id=202',
    欧美巨RU: '/s/?id=195',
    学生: '/s/?id=192',
    肉感: '/s/?id=191',
    双马尾: '/s/?id=189',
    大尺度: '/s/?id=183',
    骨感: '/s/?id=181',
    长发: '/s/?id=162',
    冷艳: '/s/?id=161',
    包T: '/s/?id=158',
    美T: '/s/?id=160',
    爆RU: '/s/?id=153',
    魅惑: '/s/?id=137',
    优雅: '/s/?id=136',
    美RU: '/s/?id=133',

    丝袜女郎: '/s/?id=213',
    黑丝萝莉: '/s/?id=253',
    白丝萝莉: '/s/?id=252',
    长筒袜: '/s/?id=12',
    丝袜: '/s/?id=15',
    黑丝: '/s/?id=72',
    丝袜美腿: '/s/?id=71',
    灰丝: '/s/?id=109',
    美腿: '/s/?id=31',
    高跟: '/s/?id=76',
    腿模: '/s/?id=88',
    丝袜诱惑: '/s/?id=79',
    网袜: '/s/?id=78',
    丝足: '/s/?id=105',
    白丝: '/s/?id=104',
    肉丝: '/s/?id=103',
    红丝: '/s/?id=129',
    吊带丝袜: '/s/?id=143',
    美脚: '/s/?id=142',
    玉足: '/s/?id=141',
    情趣丝袜: '/s/?id=140',
    美足: '/s/?id=139',
    网衣: '/s/?id=155',
    长腿: '/s/?id=169',
    凉高跟: '/s/?id=168',
    高跟美腿: '/s/?id=167',
    欧美制服: '/s/?id=199',
    欧美丝袜: '/s/?id=198',
    街拍美T: '/s/?id=205',
    丝袜美T: '/s/?id=204',
    美丝: '/s/?id=249',
    丝足高跟: '/s/?id=208',
    丝足诱惑: '/s/?id=207',
    街拍丝袜: '/s/?id=243',
    丝袜人体: '/s/?id=240',
    丝袜短裙: '/s/?id=239',
    街拍短裙: '/s/?id=238',
    丝袜制服: '/s/?id=237',
    街拍美腿: '/s/?id=235',
    街拍高跟: '/s/?id=234',
    丝袜肥T: '/s/?id=233',
    街拍黑丝: '/s/?id=226',
    黑丝制服: '/s/?id=225',
    黑丝美腿: '/s/?id=224',
    丝袜熟女: '/s/?id=223',
    丝袜少F: '/s/?id=222',
    肉丝美腿: '/s/?id=258',
    黑丝诱惑: '/s/?id=259',
    情趣制服: '/s/?id=257',

    薄纱: '/s/?id=135',
    剧情: '/s/?id=255',
    肚兜: '/s/?id=93',
    旗袍: '/s/?id=69',
    空姐: '/s/?id=112',
    赛车女郎: '/s/?id=9',
    护士: '/s/?id=20',
    运动: '/s/?id=21',
    女仆: '/s/?id=27',
    兔女郎: '/s/?id=26',
    制服: '/s/?id=28',
    COS: '/s/?id=36',
    猫女: '/s/?id=48',
    美束: '/s/?id=108',
    古典: '/s/?id=68',
    SM: '/s/?id=67',
    圣诞: '/s/?id=63',
    湿身: '/s/?id=50',
    人体: '/s/?id=70',
    厨娘: '/s/?id=125',
    JK: '/s/?id=124',
    女警: '/s/?id=123',
    老师: '/s/?id=122',
    医生: '/s/?id=120',
    新年: '/s/?id=106',
    捆绑: '/s/?id=67',
    绳艺: '/s/?id=67',
    眼镜: '/s/?id=250',
    不知火舞: '/s/?id=211',
    COSER: '/s/?id=210',
    清纯护士: '/s/?id=209',
    纹身: '/s/?id=148',
    OL: '/s/?id=147',
    秘书: '/s/?id=146',
    调教: '/s/?id=115',
    镣铐: '/s/?id=114',
    姐妹花: '/s/?id=130',
    透视: '/s/?id=134',

    桌球: '/s/?id=200',
    浴室: '/s/?id=75',
    篮球: '/s/?id=102',
    拳击: '/s/?id=92',
    足球: '/s/?id=90',
    居家: '/s/?id=82',
    办公室: '/s/?id=10',
    街拍: '/s/?id=65',
    外拍: '/s/?id=74',
    海边: '/s/?id=96',
    展台: '/s/?id=118',
    钢管: '/s/?id=152',
    床上: '/s/?id=145',
    酒店: '/s/?id=144',
    健身: '/s/?id=131',
    户外: '/s/?id=180',
    香车美人: '/s/?id=247',
    沙滩: '/s/?id=163',

    连衣裙: '/s/?id=117',
    泳装: '/s/?id=11',
    校服: '/s/?id=13',
    长裙: '/s/?id=19',
    热裤: '/s/?id=18',
    睡衣: '/s/?id=17',
    蕾丝: '/s/?id=16',
    超短裙: '/s/?id=22',
    和服: '/s/?id=25',
    牛仔: '/s/?id=24',
    水手服: '/s/?id=38',
    比基尼: '/s/?id=49',
    丁字裤: '/s/?id=64',
    内衣: '/s/?id=77',
    高叉: '/s/?id=37',
    职业装: '/s/?id=30',
    死库水: '/s/?id=58',
    婚纱: '/s/?id=113',
    豹纹: '/s/?id=110',
    衬衫: '/s/?id=107',
    紧身裤: '/s/?id=127',
    体操服: '/s/?id=126',
    皮衣: '/s/?id=128',
    西装: '/s/?id=157',
    学生制服: '/s/?id=193',
    日本制服: '/s/?id=164',
    迷你裙: '/s/?id=244',
    毛衣: '/s/?id=245',
    长靴: '/s/?id=203',
    吊带: '/s/?id=248',
    抹胸: '/s/?id=256',
    背心: '/s/?id=156',

    Graphis: '/x/?id=43',
    秀人网: '/x/?id=59',
    Beautyleg: '/x/?id=57',
    克拉女神: '/x/?id=31',
    绅士约拍: '/x/?id=114',
    DJAWA: '/x/?id=113',
    壹吻映画: '/x/?id=112',
    LD零度: '/x/?id=111',
    宅急约: '/x/?id=110',
    尤蜜: '/x/?id=109',
    ARTGRAVIA: '/x/?id=101',
    喵糖映画: '/x/?id=95',
    语画界: '/x/?id=85',
    尤美: '/x/?id=84',
    日本CosPlay: '/x/?id=83',
    森萝财团: '/x/?id=82',
    蜜丝: '/x/?id=81',
    Cosdoki: '/x/?id=80',
    'Girlz-High': '/x/?id=79',
    台湾正妹: '/x/?id=78',
    美媛馆: '/x/?id=74',
    尤物馆: '/x/?id=73',
    魅妍社: '/x/?id=72',
    蜜桃社: '/x/?id=71',
    模范学院: '/x/?id=70',
    爱蜜社: '/x/?id=68',
    嗲囡囡: '/x/?id=67',
    尤果圈爱尤物: '/x/?id=62',
    尤蜜荟: '/x/?id=58',
    'YS Web': '/x/?id=52',
    'Hello! Project Digital Books': '/x/?id=51',
    丽柜: '/x/?id=49',
    ISHOW爱秀: '/x/?id=46',
    丝享家: '/x/?id=14',
    丝足便当: '/x/?id=13',
    异思趣向: '/x/?id=12',
    网络美女: '/x/?id=2',
    'Minisuka.tv': '/x/?id=35',
    'Digi-Gra': '/x/?id=17',
    LovePop: '/x/?id=18',
    推女郎: '/x/?id=75',
    头条女神: '/x/?id=45',
    'Young Magazine': '/x/?id=94',
    'Young Gangan': '/x/?id=93',
    'Young Champion': '/x/?id=92',
    'Weekly Big Comic Spirits': '/x/?id=91',
    FRIDAY杂志写真: '/x/?id=90',
    FLASH杂志写真: '/x/?id=89',
    阳光宝贝: '/x/?id=88',
    丝意SIEE: '/x/?id=87',
    风之领域: '/x/?id=86',
    猎女神: '/x/?id=77',
    OnlyTease: '/x/?id=76',
    星乐园: '/x/?id=69',
    尤果网: '/x/?id=63',
    波萝社: '/x/?id=66',
    '@misty': '/x/?id=65',
    Wanibooks: '/x/?id=64',
    影私荟: '/x/?id=61',
    顽味生活: '/x/?id=60',
    优星馆: '/x/?id=56',
    御女郎: '/x/?id=55',
    'NS Eyes': '/x/?id=54',
    'Image.tv': '/x/?id=53',
    'Bomb.TV': '/x/?id=50',
    PB写真集: '/x/?id=48',
    '4K-STAR': '/x/?id=47',
    动感之星: '/x/?id=44',
    'Bejean On Line': '/x/?id=42',
    '51MODO': '/x/?id=41',
    'Imuto.tv': '/x/?id=40',
    推女神: '/x/?id=39',
    'DDY Pantyhose': '/x/?id=38',
    爱丝: '/x/?id=37',
    VYJ: '/x/?id=36',
    网红馆: '/x/?id=34',
    WPB写真: '/x/?id=33',
    美腿宝贝: '/x/?id=32',
    瑞丝馆: '/x/?id=30',
    薄荷叶: '/x/?id=29',
    Sabra: '/x/?id=28',
    果团网: '/x/?id=27',
    青豆客: '/x/?id=26',
    花の颜: '/x/?id=25',
    模特联盟: '/x/?id=24',
    花漾: '/x/?id=23',
    兔几盟: '/x/?id=22',
    'Juicy Honey': '/x/?id=21',
    'X-City': '/x/?id=20',
    'Princess Collection': '/x/?id=19',
    熊川纪信: '/x/?id=16',
    星颜社: '/x/?id=15',
    'The Black Alley': '/x/?id=11',
    激萌文化: '/x/?id=10',
    'Young Animal Arashi': '/x/?id=9',
    DGC: '/x/?id=8',
    'RQ-STAR': '/x/?id=7',
    'Young Animal': '/x/?id=6',
    'For-side': '/x/?id=5',
    'Weekly Playboy': '/x/?id=4',
    'Weekly Young Jump': '/x/?id=3',
    BWH: '/x/?id=1',
    山茶摄影: '/x/?id=108',
    奈丝: '/x/?id=107',
    大生模拍: '/x/?id=106',
    佳爷SJA: '/x/?id=105',
    一千零一夜: '/x/?id=100',
    丽丝映像: '/x/?id=99',
    斯文传媒SIW: '/x/?id=98',
    轻兰映画: '/x/?id=97',
    纳丝摄影: '/x/?id=96',
    袜涩: '/x/?id=104',
    思话: '/x/?id=103',
    丝慕: '/x/?id=102',

    国内: '/cat/?id=10',
    日本: '/cat/?id=8',
    中国台湾: '/cat/?id=11',
    欧美: '/cat/?id=20',
    韩国: '/cat/?id=19',
    泰国: '/cat/?id=23'
};

var tagAll = {
    '/s/?id=47': '极品',
    '/s/?id=55': '美少女',
    '/s/?id=62': '御姐',
    '/s/?id=59': '女神',
    '/s/?id=80': '日本少女',
    '/s/?id=85': '嫩模',
    '/s/?id=84': '妹子',
    '/s/?id=45': '尤物',
    '/s/?id=83': '正妹',
    '/s/?id=87': '熟女',
    '/s/?id=99': '乙女',
    '/s/?id=100': '女星',
    '/s/?id=81': '阳光',
    '/s/?id=116': '网红',
    '/s/?id=132': '少FU',
    '/s/?id=138': '日本少FU',
    '/s/?id=215': '泳装少女',
    '/s/?id=151': '软妹',
    '/s/?id=150': '日本妹子',
    '/s/?id=149': '萌女',
    '/s/?id=154': '车模',
    '/s/?id=159': '女优',
    '/s/?id=166': '少女',
    '/s/?id=165': '日本嫩模',
    '/s/?id=187': '清纯少女',
    '/s/?id=186': '性感少女',
    '/s/?id=185': '混血',
    '/s/?id=184': '黑长直',
    '/s/?id=119': '明星',
    '/s/?id=194': '杂志',
    '/s/?id=197': '欧美熟女',
    '/s/?id=196': '金发',
    '/s/?id=201': '黑人',
    '/s/?id=212': '女郎',
    '/s/?id=214': '轻熟女',
    '/s/?id=227': '巨RU女优',
    '/s/?id=251': '女友',
    '/s/?id=254': '白领',
    '/s/?id=40': '萝莉',
    '/s/?id=14': '可爱',
    '/s/?id=32': '甜美',
    '/s/?id=23': '清纯',
    '/s/?id=35': '性感',
    '/s/?id=34': '气质',
    '/s/?id=52': '妩媚',
    '/s/?id=51': '清新',
    '/s/?id=54': '唯美',
    '/s/?id=33': '美胸',
    '/s/?id=42': '诱惑',
    '/s/?id=41': '私房',
    '/s/?id=46': '翘T',
    '/s/?id=44': '大胆',
    '/s/?id=43': '福利',
    '/s/?id=53': '大胸',
    '/s/?id=111': '高贵',
    '/s/?id=121': '粉嫩',
    '/s/?id=95': '惊艳',
    '/s/?id=94': '白嫩',
    '/s/?id=91': '养眼',
    '/s/?id=89': '巨RU',
    '/s/?id=73': '情趣',
    '/s/?id=29': '短发',
    '/s/?id=202': '肥TUN',
    '/s/?id=242': '丰满',
    '/s/?id=236': '巨RU萝莉',
    '/s/?id=232': '勾魂',
    '/s/?id=231': '半裸',
    '/s/?id=230': '欧美大胸',
    '/s/?id=229': '蕾丝诱惑',
    '/s/?id=228': '制服诱惑',
    '/s/?id=221': '丰满少F',
    '/s/?id=220': '风骚少F',
    '/s/?id=219': '风骚',
    '/s/?id=218': '顶级少F',
    '/s/?id=206': '美T少F',
    '/s/?id=195': '欧美巨RU',
    '/s/?id=192': '学生',
    '/s/?id=191': '肉感',
    '/s/?id=189': '双马尾',
    '/s/?id=183': '大尺度',
    '/s/?id=181': '骨感',
    '/s/?id=162': '长发',
    '/s/?id=161': '冷艳',
    '/s/?id=158': '包T',
    '/s/?id=160': '美T',
    '/s/?id=153': '爆RU',
    '/s/?id=137': '魅惑',
    '/s/?id=136': '优雅',
    '/s/?id=133': '美RU',
    '/s/?id=213': '丝袜女郎',
    '/s/?id=253': '黑丝萝莉',
    '/s/?id=252': '白丝萝莉',
    '/s/?id=12': '长筒袜',
    '/s/?id=15': '丝袜',
    '/s/?id=72': '黑丝',
    '/s/?id=71': '丝袜美腿',
    '/s/?id=109': '灰丝',
    '/s/?id=31': '美腿',
    '/s/?id=76': '高跟',
    '/s/?id=88': '腿模',
    '/s/?id=79': '丝袜诱惑',
    '/s/?id=78': '网袜',
    '/s/?id=105': '丝足',
    '/s/?id=104': '白丝',
    '/s/?id=103': '肉丝',
    '/s/?id=129': '红丝',
    '/s/?id=143': '吊带丝袜',
    '/s/?id=142': '美脚',
    '/s/?id=141': '玉足',
    '/s/?id=140': '情趣丝袜',
    '/s/?id=139': '美足',
    '/s/?id=155': '网衣',
    '/s/?id=169': '长腿',
    '/s/?id=168': '凉高跟',
    '/s/?id=167': '高跟美腿',
    '/s/?id=199': '欧美制服',
    '/s/?id=198': '欧美丝袜',
    '/s/?id=205': '街拍美T',
    '/s/?id=204': '丝袜美T',
    '/s/?id=249': '美丝',
    '/s/?id=208': '丝足高跟',
    '/s/?id=207': '丝足诱惑',
    '/s/?id=243': '街拍丝袜',
    '/s/?id=240': '丝袜人体',
    '/s/?id=239': '丝袜短裙',
    '/s/?id=238': '街拍短裙',
    '/s/?id=237': '丝袜制服',
    '/s/?id=235': '街拍美腿',
    '/s/?id=234': '街拍高跟',
    '/s/?id=233': '丝袜肥T',
    '/s/?id=226': '街拍黑丝',
    '/s/?id=225': '黑丝制服',
    '/s/?id=224': '黑丝美腿',
    '/s/?id=223': '丝袜熟女',
    '/s/?id=222': '丝袜少F',
    '/s/?id=258': '肉丝美腿',
    '/s/?id=259': '黑丝诱惑',
    '/s/?id=257': '情趣制服',
    '/s/?id=135': '薄纱',
    '/s/?id=255': '剧情',
    '/s/?id=93': '肚兜',
    '/s/?id=69': '旗袍',
    '/s/?id=112': '空姐',
    '/s/?id=9': '赛车女郎',
    '/s/?id=20': '护士',
    '/s/?id=21': '运动',
    '/s/?id=27': '女仆',
    '/s/?id=26': '兔女郎',
    '/s/?id=28': '制服',
    '/s/?id=36': 'COS',
    '/s/?id=48': '猫女',
    '/s/?id=108': '美束',
    '/s/?id=68': '古典',
    '/s/?id=67': '绳艺',
    '/s/?id=63': '圣诞',
    '/s/?id=50': '湿身',
    '/s/?id=70': '人体',
    '/s/?id=125': '厨娘',
    '/s/?id=124': 'JK',
    '/s/?id=123': '女警',
    '/s/?id=122': '老师',
    '/s/?id=120': '医生',
    '/s/?id=106': '新年',
    '/s/?id=250': '眼镜',
    '/s/?id=211': '不知火舞',
    '/s/?id=210': 'COSER',
    '/s/?id=209': '清纯护士',
    '/s/?id=148': '纹身',
    '/s/?id=147': 'OL',
    '/s/?id=146': '秘书',
    '/s/?id=115': '调教',
    '/s/?id=114': '镣铐',
    '/s/?id=130': '姐妹花',
    '/s/?id=134': '透视',
    '/s/?id=200': '桌球',
    '/s/?id=75': '浴室',
    '/s/?id=102': '篮球',
    '/s/?id=92': '拳击',
    '/s/?id=90': '足球',
    '/s/?id=82': '居家',
    '/s/?id=10': '办公室',
    '/s/?id=65': '街拍',
    '/s/?id=74': '外拍',
    '/s/?id=96': '海边',
    '/s/?id=118': '展台',
    '/s/?id=152': '钢管',
    '/s/?id=145': '床上',
    '/s/?id=144': '酒店',
    '/s/?id=131': '健身',
    '/s/?id=180': '户外',
    '/s/?id=247': '香车美人',
    '/s/?id=163': '沙滩',
    '/s/?id=117': '连衣裙',
    '/s/?id=11': '泳装',
    '/s/?id=13': '校服',
    '/s/?id=19': '长裙',
    '/s/?id=18': '热裤',
    '/s/?id=17': '睡衣',
    '/s/?id=16': '蕾丝',
    '/s/?id=22': '超短裙',
    '/s/?id=25': '和服',
    '/s/?id=24': '牛仔',
    '/s/?id=38': '水手服',
    '/s/?id=49': '比基尼',
    '/s/?id=64': '丁字裤',
    '/s/?id=77': '内衣',
    '/s/?id=37': '高叉',
    '/s/?id=30': '职业装',
    '/s/?id=58': '死库水',
    '/s/?id=113': '婚纱',
    '/s/?id=110': '豹纹',
    '/s/?id=107': '衬衫',
    '/s/?id=127': '紧身裤',
    '/s/?id=126': '体操服',
    '/s/?id=128': '皮衣',
    '/s/?id=157': '西装',
    '/s/?id=193': '学生制服',
    '/s/?id=164': '日本制服',
    '/s/?id=244': '迷你裙',
    '/s/?id=245': '毛衣',
    '/s/?id=203': '长靴',
    '/s/?id=248': '吊带',
    '/s/?id=256': '抹胸',
    '/s/?id=156': '背心',
    '/x/?id=43': 'Graphis',
    '/x/?id=59': '秀人网',
    '/x/?id=57': 'Beautyleg',
    '/x/?id=31': '克拉女神',
    '/x/?id=114': '绅士约拍',
    '/x/?id=113': 'DJAWA',
    '/x/?id=112': '壹吻映画',
    '/x/?id=111': 'LD零度',
    '/x/?id=110': '宅急约',
    '/x/?id=109': '尤蜜',
    '/x/?id=101': 'ARTGRAVIA',
    '/x/?id=95': '喵糖映画',
    '/x/?id=85': '语画界',
    '/x/?id=84': '尤美',
    '/x/?id=83': '日本CosPlay',
    '/x/?id=82': '森萝财团',
    '/x/?id=81': '蜜丝',
    '/x/?id=80': 'Cosdoki',
    '/x/?id=79': 'Girlz-High',
    '/x/?id=78': '台湾正妹',
    '/x/?id=74': '美媛馆',
    '/x/?id=73': '尤物馆',
    '/x/?id=72': '魅妍社',
    '/x/?id=71': '蜜桃社',
    '/x/?id=70': '模范学院',
    '/x/?id=68': '爱蜜社',
    '/x/?id=67': '嗲囡囡',
    '/x/?id=62': '尤果圈爱尤物',
    '/x/?id=58': '尤蜜荟',
    '/x/?id=52': 'YS Web',
    '/x/?id=51': 'Hello! Project Digital Books',
    '/x/?id=49': '丽柜',
    '/x/?id=46': 'ISHOW爱秀',
    '/x/?id=14': '丝享家',
    '/x/?id=13': '丝足便当',
    '/x/?id=12': '异思趣向',
    '/x/?id=2': '网络美女',
    '/x/?id=35': 'Minisuka.tv',
    '/x/?id=17': 'Digi-Gra',
    '/x/?id=18': 'LovePop',
    '/x/?id=75': '推女郎',
    '/x/?id=45': '头条女神',
    '/x/?id=94': 'Young Magazine',
    '/x/?id=93': 'Young Gangan',
    '/x/?id=92': 'Young Champion',
    '/x/?id=91': 'Weekly Big Comic Spirits',
    '/x/?id=90': 'FRIDAY杂志写真',
    '/x/?id=89': 'FLASH杂志写真',
    '/x/?id=88': '阳光宝贝',
    '/x/?id=87': '丝意SIEE',
    '/x/?id=86': '风之领域',
    '/x/?id=77': '猎女神',
    '/x/?id=76': 'OnlyTease',
    '/x/?id=69': '星乐园',
    '/x/?id=63': '尤果网',
    '/x/?id=66': '波萝社',
    '/x/?id=65': '@misty',
    '/x/?id=64': 'Wanibooks',
    '/x/?id=61': '影私荟',
    '/x/?id=60': '顽味生活',
    '/x/?id=56': '优星馆',
    '/x/?id=55': '御女郎',
    '/x/?id=54': 'NS Eyes',
    '/x/?id=53': 'Image.tv',
    '/x/?id=50': 'Bomb.TV',
    '/x/?id=48': 'PB写真集',
    '/x/?id=47': '4K-STAR',
    '/x/?id=44': '动感之星',
    '/x/?id=42': 'Bejean On Line',
    '/x/?id=41': '51MODO',
    '/x/?id=40': 'Imuto.tv',
    '/x/?id=39': '推女神',
    '/x/?id=38': 'DDY Pantyhose',
    '/x/?id=37': '爱丝',
    '/x/?id=36': 'VYJ',
    '/x/?id=34': '网红馆',
    '/x/?id=33': 'WPB写真',
    '/x/?id=32': '美腿宝贝',
    '/x/?id=30': '瑞丝馆',
    '/x/?id=29': '薄荷叶',
    '/x/?id=28': 'Sabra',
    '/x/?id=27': '果团网',
    '/x/?id=26': '青豆客',
    '/x/?id=25': '花の颜',
    '/x/?id=24': '模特联盟',
    '/x/?id=23': '花漾',
    '/x/?id=22': '兔几盟',
    '/x/?id=21': 'Juicy Honey',
    '/x/?id=20': 'X-City',
    '/x/?id=19': 'Princess Collection',
    '/x/?id=16': '熊川纪信',
    '/x/?id=15': '星颜社',
    '/x/?id=11': 'The Black Alley',
    '/x/?id=10': '激萌文化',
    '/x/?id=9': 'Young Animal Arashi',
    '/x/?id=8': 'DGC',
    '/x/?id=7': 'RQ-STAR',
    '/x/?id=6': 'Young Animal',
    '/x/?id=5': 'For-side',
    '/x/?id=4': 'Weekly Playboy',
    '/x/?id=3': 'Weekly Young Jump',
    '/x/?id=1': 'BWH',
    '/x/?id=108': '山茶摄影',
    '/x/?id=107': '奈丝',
    '/x/?id=106': '大生模拍',
    '/x/?id=105': '佳爷SJA',
    '/x/?id=100': '一千零一夜',
    '/x/?id=99': '丽丝映像',
    '/x/?id=98': '斯文传媒SIW',
    '/x/?id=97': '轻兰映画',
    '/x/?id=96': '纳丝摄影',
    '/x/?id=104': '袜涩',
    '/x/?id=103': '思话',
    '/x/?id=102': '丝慕',
    '/cat/?id=10': '国内',
    '/cat/?id=8': '日本',
    '/cat/?id=11': '中国台湾',
    '/cat/?id=20': '欧美',
    '/cat/?id=19': '韩国',
    '/cat/?id=23': '泰国'
};
export default {
    referer,
    classify,
    tagClass,
    tagAll,
    uid
};

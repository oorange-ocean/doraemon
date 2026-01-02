// 电影数据
const filmsData = [
    {
        id: 'film-001',
        chinese_title: '哆啦A梦：新・大雄的海底鬼岩城',
        japanese_title: '映画ドラえもん 新・のび太の海底鬼岩城',
        release_date: '2026年2月27日',
        creators: '矢嶋哲生',
        cover: 'images/film_cover/映画ドラえもん 新・のび太の海底鬼岩城.jpg',
        synopsis: '描绘哆啦A梦与大雄一行人在海底世界展开的全新大冒险。1983年的《大雄的海底鬼岩城》时隔40多年后焕然新生。监督由首次执导《电影哆啦A梦》系列的矢嶋哲生担任。',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=115637951141749&bvid=BV1vHSiBmEFK&cid=34389361998&p=1'
    },
    {
        id: 'film-002',
        chinese_title: '哆啦A梦：大雄的绘画奇遇记',
        japanese_title: '映画ドラえもん のび太の絵世界物語',
        release_date: '2025年3月7日',
        creators: '寺本幸代 / 小林雄次',
        cover: 'images/film_cover/映画ドラえもん のび太の絵世界物語.jpg',
        synopsis: '新闻中一幅价值数十亿日元的名画引发轰动，而画作残片竟意外坠入到大雄手中！哆啦A梦一行人进入画中的世界并邂逅了神秘少女可蕾雅。在她的请求下，众人前往新闻中的中世纪欧洲"雅托利亚公国"。传说中这里存在一种蕴含神秘力量的宝石"雅托利亚蓝"，为了揭开宝石之谜，哆啦A梦一行人展开了冒险，流传中"世界毁灭"的传说开始复苏，他们陷入了巨大的危机......',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=114523541411011&bvid=BV1mcJNzdEtv&cid=30010705553&p=1'
    },
    {
        id: 'film-003',
        chinese_title: '哆啦A梦：大雄的地球交响乐',
        japanese_title: '映画ドラえもん のび太の地球交響楽',
        release_date: '2024年3月1日',
        creators: '今井一晓 / 内海照子',
        cover: 'images/film_cover/映画ドラえもん のび太の地球交響楽.jpg',
        synopsis: '为了准备学校音乐会的演出，大雄埋头苦练他并不擅长的竖笛。这时，他的面前出现了一位神秘的外星少女米佳，她格外中意大雄吹出来的跑调的笛声，于是米佳引领哆啦A梦和伙伴们来到了以音乐为能量的外星球上的一座音乐殿堂。就在这时，一种能够令音乐从世界上消失的神秘生命体突然降临，地球陷入危机……！哆啦A梦和伙伴们究竟能否拯救音乐的未来和地球危机呢？',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=1953021527&bvid=BV1eC411G7kh&cid=1502475055&p=1'
    },
    {
        id: 'film-004',
        chinese_title: '哆啦A梦：大雄与天空的理想乡',
        japanese_title: '映画ドラえもん のび太と空の理想郷',
        release_date: '2023年3月3日',
        creators: '堂山卓见 / 古泽良太',
        cover: 'images/film_cover/映画ドラえもん のび太と空の理想郷.jpg',
        synopsis: '平凡的一天，出木杉君带来了《乌托邦》这本小说，为同学们讲述理想国的故事。那个没有考试和学校的国度，深深吸引着吊车尾的大雄（大原惠美 配音）。偶然机缘，大雄在后山看到了一个新月形状的悬浮物停在空中，随后很快消失。这个发现让他无比兴奋，于是认定这就是传说中的乌托邦。他拜托哆啦A梦（水田山葵 配音）寻找历史上的相关报道，随后又买来时空穿梭飞艇，和胖虎（木村昴 配音）、小夫（关智一 配音）、静香（嘉数由美 配音）前往新闻中各个时代的目击点寻找新月形悬浮物。但是大多数发现都是自然现象或者人工产物，似乎天空的乌托邦真的就只是一个传说。知道某天，那个悬浮物再度出现，引领少年们开启一段全新的冒险……',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=868070628&bvid=BV1gV4y1d753&cid=1112782159&p=1'
    },
    {
        id: 'film-005',
        chinese_title: '哆啦A梦：大雄的宇宙小战争 2021',
        japanese_title: '映画ドラえもん のび太の宇宙小戦争2021',
        release_date: '2022年3月4日',
        creators: '山口晋 / 佐藤大',
        cover: 'images/film_cover/映画ドラえもん のび太の宇宙小戦争2021.jpg',
        synopsis: '在银河系的另一端，原本宁静祥和的匹里卡星突发变故。邪恶的吉尔莫亚将军（香川照之 配音）发动政变，建立军事独裁政府。年仅10岁的总统帕比（朴璐美 配音）无力抵抗，只得乘上飞船被迫流亡。几经辗转，帕比来到了地球，他惊讶地发现，这里人类的身形竟然与他有着巨大的悬殊。没过多久，大雄（大原惠美 配音）和哆啦A梦（水田山葵 配音）他们便和帕比成为好朋友，并且为这个小小的总统建造了临时住所。然而好久不长，吉尔莫亚将军派来的追踪者随后来到地球。为了保护他们的小朋友，为了遥远星球的和平，大雄和朋友们踏上遥远的星际征程……',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=970303144&bvid=BV1cp4y1r7Jc&cid=259267266&p=1'
    },
    {
        id: 'film-006',
        chinese_title: '哆啦A梦：伴我同行2',
        japanese_title: 'STAND BY ME ドラえもん 2',
        release_date: '2020年11月20日',
        creators: '八木龙一、山崎贵 / 山崎贵',
        cover: 'images/film_cover/STAND BY ME ドラえもん 2.jpg',
        synopsis: '某天，大雄（大原惠美 配音）偶然发现了童年时奶奶为自己缝制的玩偶熊，于是央求哆啦A梦（水田山葵 配音）去往过去看望已不再人世的奶奶（宫本信子 配音），大雄与奶奶重逢之后，奶奶希望能看到大雄长大结婚时的样子，答应奶奶的大雄与哆啦A梦则再一次的返回了未来，婚礼如期举行的那天，所有人都到了场，但最重要的新郎成年大雄（妻夫木聪 配音）居然不在现场，情急之下，哆啦A梦让大雄假扮成年时的自己与静香结婚（嘉数由美 配音），然而真正的成年大雄究竟去了哪里呢？',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=286383442&bvid=BV14f4y1R7sf&cid=217093716&p=1'
    },
    {
        id: 'film-007',
        chinese_title: '哆啦A梦：大雄的新恐龙',
        japanese_title: '映画ドラえもん のび太の新恐竜',
        release_date: '2020年8月7日',
        creators: '今井一晓 / 川村元气',
        cover: 'images/film_cover/映画ドラえもん のび太の新恐竜.jpg',
        synopsis: '阳光明媚的日子里，大雄、静香、胖虎和小夫一起去参加恐龙博物展。由于被胖虎和小夫嘲笑，大雄情急之下又再次胡说八道，发誓要找到真正的恐龙给他们看。在儿童考古体验现场，大雄找到一枚蛋状石头，于是他将其当作恐龙蛋化石，宝贝一样带回家中，拜托哆啦A梦用时间包袱皮孵化。令人意想不到的是，经过一天一夜孵化，那枚彩色蛋中居然真的钻出两只从没见过的小恐龙。这两只被命名为小咪和小啾的小家伙给大雄带来无限乐趣，可是在现代社会养恐龙又怎会是一件容易的事。万般无奈之下，好朋友们结伴坐上时光机，把小恐龙们带回白垩纪时代，而他们的大冒险就此展开……本片是《哆啦A梦》漫画连载50周年纪念作品，同时也是《哆啦A梦》系列电影的第40部作品。',
        video_url: '//player.bilibili.com/player.html?isOutside=true&aid=77133673&bvid=BV1EJ411X7in&cid=131936538&p=1'
    },
    {
        id: 'film-008',
        chinese_title: '哆啦A梦：大雄的月球探险记',
        japanese_title: '映画ドラえもん のび太の月面探査記',
        release_date: '2019年3月1日',
        creators: '八锹新之介 / 辻村深月',
        cover: 'images/film_cover/映画ドラえもん のび太の月面探査記.jpg'
    },
    {
        id: 'film-010',
        chinese_title: '哆啦A梦：大雄的金银岛',
        japanese_title: '映画ドラえもん のび太の宝島',
        release_date: '2018年3月3日',
        creators: '今井一晓 / 川村元气',
        cover: 'images/film_cover/映画ドラえもん のび太の宝島.jpg'
    },
    {
        id: 'film-011',
        chinese_title: '哆啦A梦：大雄的南极冰冰凉大冒险',
        japanese_title: '映画ドラえもん のび太の南極カチコチ大冒険',
        release_date: '2017年3月4日',
        creators: '高桥敦史 / 高桥敦史',
        cover: 'images/film_cover/映画ドラえもん のび太の南極カチコチ大冒険.jpg'
    },
    {
        id: 'film-013',
        chinese_title: '哆啦A梦：新·大雄的日本诞生',
        japanese_title: '映画ドラえもん 新・のび太の日本誕生',
        release_date: '2016年3月5日',
        creators: '八锹新之介 / 八锹新之介',
        cover: 'images/film_cover/映画ドラえもん 新・のび太の日本誕生.jpg'
    },
    {
        id: 'film-014',
        chinese_title: '哆啦A梦：大雄的宇宙英雄记',
        japanese_title: '映画ドラえもん のび太の宇宙英雄記',
        release_date: '2015年3月7日',
        creators: '大杉宜弘 / 清水东',
        cover: 'images/film_cover/映画ドラえもん のび太の宇宙英雄記.jpg'
    },
    {
        id: 'film-015',
        chinese_title: '哆啦A梦：伴我同行',
        japanese_title: 'STAND BY ME ドラえもん',
        release_date: '2014年8月8日',
        creators: '八木龙一、山崎贵 / 山崎贵',
        cover: 'images/film_cover/STAND BY ME ドラえもん.jpg'
    },
    {
        id: 'film-016',
        chinese_title: '哆啦A梦：新·大雄的大魔境',
        japanese_title: '映画ドラえもん 新・のび太の大魔境',
        release_date: '2014年3月8日',
        creators: '八锹新之介 / 清水东',
        cover: 'images/film_cover/映画ドラえもん 新・のび太の大魔境 〜ペコと5人の探検隊〜.jpg'
    }
];


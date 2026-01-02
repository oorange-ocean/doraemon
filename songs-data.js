// 歌曲数据
const songsData = [
    {
        id: 'doraemon',
        name: 'ドラえもん',
        nameZh: '哆啦A梦',
        artist: '星野源',
        cover: 'images/music/ドラえもん/109951164343737340.jpg',
        audio: 'images/music/ドラえもん/星野源 - ドラえもん.mp3',
        lrc: 'images/music/ドラえもん/ドラえもん - 星野源.lrc',
        duration: '03:45', // 示例时长，实际需要从音频文件获取
        description: '剧场版《哆啦A梦大雄的宝岛》主题曲，后也曾作为电视版片头曲。最初，该歌曲作为电视动画片头曲的合约期限为一年，但由于其受欢迎程度，最终合约期限延长至五年，直至2024年 11月2日。',
        showOriginalName: true // 显示日语原名以区分重名
    },
    {
        id: 'doraemon-no-uta',
        name: 'どらえもんのうた',
        nameZh: '哆啦A梦之歌',
        artist: '山野さと子',
        cover: 'images/music/どらえもんのうた/5823013580925801.jpg',
        audio: 'images/music/どらえもんのうた/山野さと子 - ドラえもんのうた.mp3',
        lrc: 'images/music/どらえもんのうた/ドラえもんのうた - 山野さと子.lrc',
        duration: '02:30',
        description: '最具代表性的初代国民级主题曲。歌词中包含了"竹蜻蜓"、"随意门"等经典道具，旋律欢快且极具辨识度。山野智子演唱的版本（1979-2005年间使用）被公认为最经典的"大山版"动画代名词。'
    },
    {
        id: 'yume-wo-kanaete-doraemon',
        name: '夢をかなえてドラえもん',
        nameZh: '实现梦想的哆啦A梦',
        artist: 'mao,ひまわりキッズ',
        cover: 'images/music/夢をかなえてドラえもん/6017627139011604.jpg',
        audio: 'images/music/夢をかなえてドラえもん/mao,ひまわりキッズ - 夢をかなえてドラえもん.mp3',
        lrc: 'images/music/夢をかなえてドラえもん/夢をかなえてドラえもん - mao,ひまわりキッズ.lrc',
        duration: '03:20',
        description: '"水田版"动画（新番）的长期片头曲。2007年随声优大换血而启用。相比老版的俏皮，这首歌更加治愈、宏大，歌词强调"梦想"与"陪伴"，充满了希望感，是00后和10后观众心中最熟悉的旋律。'
    },
    {
        id: 'doraemon-kelly',
        name: '哆啦A梦',
        nameZh: '哆啦A梦',
        artist: '陈慧琳',
        cover: 'images/music/哆啦A梦/YZNo1o8j0zZEB6JQcbnhLA==_109951164546358533',
        audio: 'images/music/哆啦A梦/陈慧琳 - 哆啦A梦.mp3',
        lrc: 'images/music/哆啦A梦/哆啦A梦(国) - 陈慧琳.lrc',
        duration: '03:30',
        description: '粤语/国语地区极具知名度的翻唱版本。这首歌改编自《哆啦A梦之歌》。陈慧琳的版本在2000年代初火遍大江南北，歌词中"人人期望可达到，我的快乐比天高"是很多华语观众的第一记忆。'
    },
    {
        id: 'himawari-no-yakusoku',
        name: 'ひまわりの約束',
        nameZh: '向日葵的约定',
        artist: '秦基博',
        cover: 'images/music/ひまわりの約束/109951167506119842.jpg',
        audio: 'images/music/ひまわりの約束/秦基博 - ひまわりの約束.mp3',
        lrc: 'images/music/ひまわりの約束/ひまわりの約束 - 秦基博.lrc',
        duration: '04:15',
        description: '3D电影《哆啦A梦：伴我同行》的主题曲。这是一首足以让人落泪的抒情神曲。秦基博用温暖而略带沙哑的声音，讲述了陪伴与离别。它不仅在音乐排行榜上刷新纪录，更成为了表达友谊与感激之情的经典曲目。'
    },
    {
        id: 'paradise',
        name: 'Paradise',
        nameZh: 'Paradise',
        artist: 'NiziU',
        cover: 'images/music/paradise/109951168314407763.jpg',
        audio: 'images/music/paradise/NiziU - Paradise.mp3',
        lrc: 'images/music/paradise/Paradise - NiziU.lrc',
        duration: '03:50',
        description: '2023年剧场版《大雄与天空的理想乡》主题曲。由Stray Kids的3RACHA团队参与制作。这是一首充满现代感的J-POP，节奏明快，歌词传递出"每个人都是独一无二的，你就是自己的奇迹"这一核心主题，非常契合电影关于个性的讨论。'
    }
];


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
        description: '剧场版《哆啦A梦大雄的宝岛》主题曲',
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
        duration: '02:30' // 示例时长，实际需要从音频文件获取
    },
    {
        id: 'yume-wo-kanaete-doraemon',
        name: '夢をかなえてドラえもん',
        nameZh: '实现梦想的哆啦A梦',
        artist: 'mao,ひまわりキッズ',
        cover: 'images/music/夢をかなえてドラえもん/6017627139011604.jpg',
        audio: 'images/music/夢をかなえてドラえもん/mao,ひまわりキッズ - 夢をかなえてドラえもん.mp3',
        lrc: 'images/music/夢をかなえてドラえもん/夢をかなえてドラえもん - mao,ひまわりキッズ.lrc',
        duration: '03:20' // 示例时长，实际需要从音频文件获取
    },
    {
        id: 'doraemon-kelly',
        name: '哆啦A梦（国语）',
        nameZh: '哆啦A梦（国语）',
        artist: '陈慧琳',
        cover: 'images/music/哆啦A梦/YZNo1o8j0zZEB6JQcbnhLA==_109951164546358533',
        audio: 'images/music/哆啦A梦/陈慧琳 - 哆啦A梦(国).mp3',
        lrc: 'images/music/哆啦A梦/哆啦A梦(国) - 陈慧琳.lrc',
        duration: '03:30' // 示例时长，实际需要从音频文件获取
    },
    {
        id: 'himawari-no-yakusoku',
        name: 'ひまわりの約束',
        nameZh: '向日葵的约定',
        artist: '秦基博',
        cover: 'images/music/ひまわりの約束/109951167506119842.jpg',
        audio: 'images/music/ひまわりの約束/秦基博 - ひまわりの約束.mp3',
        lrc: 'images/music/ひまわりの約束/ひまわりの約束 - 秦基博.lrc',
        duration: '04:15' // 示例时长，实际需要从音频文件获取
    },
    {
        id: 'paradise',
        name: 'Paradise',
        nameZh: 'Paradise',
        artist: 'NiziU',
        cover: 'images/music/paradise/109951168314407763.jpg',
        audio: 'images/music/paradise/NiziU - Paradise.mp3',
        lrc: 'images/music/paradise/Paradise - NiziU.lrc',
        duration: '03:50' // 示例时长，实际需要从音频文件获取
    }
];


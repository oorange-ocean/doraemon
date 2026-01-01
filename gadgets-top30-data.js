// 日本人最想要的哆啦A梦秘密道具 TOP 30
// 数据来源：日本朝日电视台2006年统计

const gadgetsTop30Data = [
    {
        id: 30,
        rank: 30,
        chinese_name: '指引天使',
        alternative_name: '引路天使',
        description: '它可以告诉你最好的路，不至于在路上出意外。',
        image: 'images/gadget/30.jpg'
    },
    {
        id: 29,
        rank: 29,
        chinese_name: '云朵凝固瓦斯',
        alternative_name: '凝云喷雾',
        description: '使用这个瓦斯的话，云会凝固，变得可以奔走在云上。',
        image: 'images/gadget/29.jpg'
    },
    {
        id: 28,
        rank: 28,
        chinese_name: '交换绳',
        alternative_name: '',
        description: '两人同时握住绳索的话，心还是一样，但身体替换。',
        image: 'images/gadget/28.jpg'
    },
    {
        id: 27,
        rank: 27,
        chinese_name: '室内旅行机',
        alternative_name: '',
        description: '可以显示出各种地点的立体影像，但室内面积并不会随之更动。会让自己的家有旅行的味道。',
        image: 'images/gadget/27.jpg'
    },
    {
        id: 26,
        rank: 26,
        chinese_name: '落难神明',
        alternative_name: '天神机器人',
        description: '是一个难看老机器人。不过，帮助他的话，可以满足3个请求。',
        image: 'images/gadget/26.jpg'
    },
    {
        id: 25,
        rank: 25,
        chinese_name: '梦风铃',
        alternative_name: '',
        description: '使用这个风铃，就可以将睡觉的人叫起来(他们是梦游状态)，并且任凭差遣。',
        image: 'images/gadget/25.jpg'
    },
    {
        id: 24,
        rank: 24,
        chinese_name: 'NS徽章',
        alternative_name: '南北极徽章',
        description: '只要将自己与另外一个人贴上写有「N」或「S」的徽章，就会变的像磁铁一样，同极相斥，异极相吸。',
        image: 'images/gadget/24.jpg'
    },
    {
        id: 23,
        rank: 23,
        chinese_name: '阿拉丁神灯',
        alternative_name: '',
        description: '擦拭油灯的话，冒烟的机器人就会出现，不管什么命令都听。',
        image: 'images/gadget/23.jpg'
    },
    {
        id: 22,
        rank: 22,
        chinese_name: '间谍工具组合',
        alternative_name: '间谍套装',
        description: '能用监视器看间谍人偶的「麦克风」和「照相机」侦察的影像。',
        image: 'images/gadget/22.gif'
    },
    {
        id: 21,
        rank: 21,
        chinese_name: '声音糖果',
        alternative_name: '声音糖',
        description: '只要利用这个录制声音，再给别人吃下去以后，就可以得到被录制声音的特征。',
        image: 'images/gadget/21.jpg'
    },
    {
        id: 20,
        rank: 20,
        chinese_name: '进化退化放射线枪',
        alternative_name: '进化退化光线枪',
        description: '被这光照射到，动物就可以进化(或是退化)。',
        image: 'images/gadget/20.jpg'
    },
    {
        id: 19,
        rank: 19,
        chinese_name: '梦境电视',
        alternative_name: '显梦电视',
        description: '能除去别人看的梦的电视。',
        image: 'images/gadget/19.jpg'
    },
    {
        id: 18,
        rank: 18,
        chinese_name: '算了算了棒',
        alternative_name: '算啦棒',
        description: '用这个棒子将正在生气的人的嘴巴堵住，并说「算了，算了」，那人气就消了。',
        image: 'images/gadget/18.jpg'
    },
    {
        id: 17,
        rank: 17,
        chinese_name: '助兴乐团',
        alternative_name: '增加气氛乐团 / 迷你插秧少女 / 迷你啦啦队',
        description: '这两个道具都是人型玩偶，都会播放音乐，让气氛变好；不同的是，只要让小型插秧姑娘唱歌，就可以快速地完成插秧。',
        image: 'images/gadget/17.jpg'
    },
    {
        id: 16,
        rank: 16,
        chinese_name: '四次元口袋',
        alternative_name: '四度空间百宝袋',
        description: '哆啦A梦的道具都是放在这里面的。四次元空间是个没有大小的空间，要多大有多大。',
        image: 'images/gadget/16.jpg'
    },
    {
        id: 15,
        rank: 15,
        chinese_name: '美食桌巾',
        alternative_name: '美食台布',
        description: '它可以帮你做出好吃的料理。无论什么料理都可以变出来。',
        image: 'images/gadget/15.jpg'
    },
    {
        id: 14,
        rank: 14,
        chinese_name: '丘比特之箭',
        alternative_name: '爱神之箭',
        description: '被箭射中的人，会对射箭的人产生好感。',
        image: 'images/gadget/14.jpg'
    },
    {
        id: 13,
        rank: 13,
        chinese_name: '感动麦克风',
        alternative_name: '感动扩音器',
        description: '使用这个麦克风，发出的声音就会让人感动不已。',
        image: 'images/gadget/13.jpg'
    },
    {
        id: 12,
        rank: 12,
        chinese_name: '桃太郎丸子',
        alternative_name: '桃太郎饭团',
        description: '让动物吃下，他会对你言听计从。',
        image: 'images/gadget/12.gif'
    },
    {
        id: 11,
        rank: 11,
        chinese_name: '樵夫之泉',
        alternative_name: '樵夫水池',
        description: '把东西丢到这个泉里，女神就会出现。如果你说了实话，他就会给你一个更好、更新的东西。',
        image: 'images/gadget/11.jpg'
    },
    {
        id: 10,
        rank: 10,
        chinese_name: '更衣照相机',
        alternative_name: '换衫相机',
        description: '选择合适的衣服，拍摄一下马上就能穿在身上。',
        image: 'images/gadget/10.jpg'
    },
    {
        id: 9,
        rank: 9,
        chinese_name: '穿透环',
        alternative_name: '穿墙圈',
        description: '可以穿过任何障碍。',
        image: 'images/gadget/09.jpg'
    },
    {
        id: 8,
        rank: 8,
        chinese_name: '如果电话亭',
        alternative_name: '',
        description: '「如果这个世界是……」只要这样对着话筒说话，就可以创造出你所说出的世界。但是当取消时，世界将会变成「平行世界」，双方没有瓜葛。',
        image: 'images/gadget/08.jpg'
    },
    {
        id: 7,
        rank: 7,
        chinese_name: '翻译蒟蒻',
        alternative_name: '翻译糕',
        description: '吃了这个蒟蒻，任何人说的任何话，我们都可以听懂、而且可以沟通。',
        image: 'images/gadget/07.gif'
    },
    {
        id: 6,
        rank: 6,
        chinese_name: '缩小灯',
        alternative_name: '缩小电筒',
        description: '被光照射到，东西会变小。',
        image: 'images/gadget/06.gif'
    },
    {
        id: 5,
        rank: 5,
        chinese_name: '记忆面包',
        alternative_name: '',
        description: '学生们应该会特别喜欢这道具吧！这也是为什么它能排到第五名的重要原因！只要吃下这个吐司，就能非常容易的记住事前写在吐司上的事物。',
        image: 'images/gadget/05.jpg'
    },
    {
        id: 4,
        rank: 4,
        chinese_name: '时光布',
        alternative_name: '时间布',
        description: '这个时光包巾位列第四，因为它的功用实在太大了，包了的东西既可以变新，也可以变旧。',
        image: 'images/gadget/04.gif'
    },
    {
        id: 3,
        rank: 3,
        chinese_name: '竹蜻蜓',
        alternative_name: '',
        description: '虽然很委屈的排到第3名，但是却是最常被哆啦A梦使用的道具！在一开始便已登场。只要把它放置在身体任何部分，就可依自己意思在天空中翱翔。内藏超小型电池，可时速80公里连续飞行8小时。若是间断飞行，还可撑更久！',
        image: 'images/gadget/03.jpg'
    },
    {
        id: 2,
        rank: 2,
        chinese_name: '时光机',
        alternative_name: '',
        description: '长2.2公尺，宽1.6公尺，高1.28公尺，重538公斤。除了时间移动之外，它也可以用来空间与空间间的互相移动。其实前面这三个名次，也就是哆啦A梦最常使用的三个道具，不过是名次调换而已。',
        image: 'images/gadget/02.jpg'
    },
    {
        id: 1,
        rank: 1,
        chinese_name: '任意门',
        alternative_name: '随意门',
        description: '最受众人喜爱，光荣的第一名是由「任意门」获得！只要心中想着想去的地点，电脑就会传达并歪曲所在地与目的地间的空间而将两地靠拢，跨过门就可以到达。但是不能去距离十光年以上的行星，或者是电脑地图上没有的地区。是很常用的道具，使用率位列第三，仅次于竹蜻蜓、时光机。',
        image: 'images/gadget/01.jpg'
    }
];


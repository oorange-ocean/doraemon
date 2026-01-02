// 哆啦A梦主要人物数据
const charactersData = [
    {
        id: 'doraemon',
        icon: 'images/icon/doraemon_icon.png',
        cover: 'images/cover/doraemon.jpg',
        brief: '22世纪的猫型机器人',
        detail: `来自22世纪的蓝色猫型机器人，为了改变大雄命运而来，能从四次元百宝袋装在里面拿出各种奇妙道具。漫画版和动画版的初登场都在第一回。喜欢吃铜锣烧。弱点是害怕老鼠。常被人以为是狸猫，引起哆啦A梦的不满。\n\n外表原是黄色，因为失去原生的耳朵（被机器鼠咬掉），后来成了蓝色的原因有两个设定：《哆啦A梦百科》提及是被机械老鼠吃掉耳朵后而吓成蓝色；《2112年哆啦A梦的诞生》则是耳朵不见又被哆啦咪子取笑，之后难过地到海边，本想拿出元气之素喝提振精神，却误喝下悲剧之素，结果难过大哭三天，把外层的漆都哭掉，显现底下原本的底色蓝色。与他相对的是机器猫表扬大会上的优等生帕瓦A梦，目前在首相家服务。\n\n在机器猫工厂是公认最后一名，原因是一次打雷把哆啦A梦的一颗螺丝打掉。后因世修不小心触碰电视拍卖的购买按钮，使哆啦A梦有了雇主。并前往大雄家改变未来。`,
        photos: [],
        status: {
            height: '129.3cm',
            weight: '129.3kg',
            english_name: 'Doraemon',
            chinese_name: '哆啦A梦',
            japanese_name: 'ドラえもん',
            gender: '男'
        }
    },
    {
        id: 'nobita',
        icon: 'images/icon/nobita_icon.png',
        cover: 'images/cover/nobita.jpg',
        brief: '成绩差但心地善良，是哆啦A梦的好朋友',
        detail: '原作为小学4年级的学生，动画版为小学5年级。哆啦A梦负责照顾的对象。又笨又懒，功课、体育也不好，也因个性懦弱、懒惰而常受师长的责骂及同学的霸凌。但本性(心地)善良，在剧场版常有耀眼表现，也热爱大自然。擅长的项目有射击、翻花绳和快速入睡。喜欢静香。缺点经常上学迟到。',
        photos: [],
        status: {
            height: '140cm',
            weight: '40kg',
            english_name: 'Nobita Nobi',
            chinese_name: '野比大雄',
            japanese_name: '野比のび太',
            japanese_name_kana: 'のび のびた',
            romanized_name: 'Nobi Nobita',
            alternative_names: '叶大雄、野比太、康夫、大宝',
            gender: '男',
            birthday: '1964年8月7日'
        }
    },
    {
        id: 'shizuka',
        icon: 'images/icon/shizuka_icon.png',
        cover: 'images/cover/shizuka.jpg',
        brief: '可靠的女主角',
        detail: '大雄的同学兼朋友，读书成绩优秀兼性情温和，爱好和平，也是其憧憬对象和未来的新娘。缺点是有洁癖，而且拉小提琴拉出的琴声甚至比胖虎的歌还具有破坏力。',
        photos: [],
        status: {
            height: '136cm',
            weight: '32kg',
            english_name: 'Shizuka Minamoto',
            chinese_name: '源静香',
            japanese_name: '源静香',
            japanese_name_kana: 'みなもと しずか',
            romanized_name: 'Minamoto Shizuka',
            alternative_names: '陈静香、静怡、静儿、静子、宜静、静静、小静',
            gender: '女',
            birthday: '1964年5月2日'
        }
    },
    {
        id: 'suneo',
        icon: 'images/icon/suneo_icon.png',
        cover: 'images/cover/suneo.jpg',
        brief: '家境富裕，喜欢炫耀，但也会帮助朋友',
        detail: '大雄的同学。显示欲强。家境富裕，喜好卖弄、炫耀、耍小聪明。',
        photos: [],
        status: {
            height: '135cm',
            weight: '30kg',
            english_name: 'Suneo Honekawa',
            chinese_name: '骨川小夫',
            japanese_name: '骨川スネ夫',
            japanese_name_kana: 'ほねかわ スネお',
            romanized_name: 'Honekawa Suneo',
            alternative_names: '王小夫、阿福、骨川阿福、强夫',
            nickname: '小夫',
            gender: '男',
            birthday: '1964年2月18日'
        }
    },
    {
        id: 'takeshi',
        icon: 'images/icon/takeshi_icon.png',
        cover: 'images/cover/takeshi.jpg',
        brief: '热爱唱歌的孩子王',
        detail: '大雄的同学。身强力壮。擅长运动。喜欢唱歌和烹饪，水平极差却不自觉。尢其是唱歌，没有人受得了。有严重自我中心，经常欺负人（尤其大雄），并袒护自己的妹妹。优点是勇敢、有正义感。',
        photos: [],
        status: {
            height: '145cm',
            weight: '45kg',
            english_name: 'Takeshi Goda',
            chinese_name: '刚田武',
            japanese_name: '剛田武',
            japanese_name_kana: 'ごうだ たけし',
            romanized_name: 'Gouda Takeshi',
            alternative_names: '刚田武志、刚田胖虎',
            nickname: 'ジャイアン／Giant／技安、胖虎、武胖虎、武技安、刚田技安、大熊、大雄',
            gender: '男',
            birthday: '1964年6月15日'
        }
    },
    {
        id: 'dekisugi',
        icon: 'images/icon/dekisugi_icon.png',
        cover: 'images/cover/dekisugi.jpg',
        brief: '万能优等生',
        detail: '出木杉出生于1964年4月。他是大雄班级里的班长，也是学校里的帅哥。除了功课好以外，也擅长体育，多次帮助胖虎的棒球队扭转败局，还很会做菜。有想要的东西时，他不依赖父母，而是给别的小孩做家庭教师赚钱。此外，他也看漫画，玩游戏，还会变魔术。虽然是小学生，但是却与外国笔友史密斯长期通信联络。\n\n可以说是一位极少缺点的少年。对预言之类的东西也能找到合乎逻辑的破解方法。能够去未来的世界看看是他的梦想，在大雄的帮助下得以实现。此外，也曾经与大雄和哆啦美一起去白垩纪时代。\n\n在自己的房间内有部电话，为此还被骚扰过。',
        photos: [],
        status: {
            height: '138cm',
            weight: '35kg',
            english_name: 'Hidetoshi Dekisugi',
            chinese_name: '出木杉英才',
            japanese_name: '出木杉英才',
            japanese_name_kana: 'できすぎ ひでとし',
            romanized_name: 'Dekisugi Hidetoshi',
            alternative_names: '王聪明',
            nickname: '彬仔、太郎、小杉',
            gender: '男',
            birthday: '1964年4月'
        }
    },
    {
        id: 'dorami',
        icon: 'images/icon/dorami_icon.png',
        cover: 'images/cover/dorami.jpg',
        brief: '哆啦A梦优秀的妹妹',
        detail: '哆啦美（香港旧译叮美或叮铃，台湾旧译小叮铃，日文名为ドラミ），是漫画及动画《哆啦A梦》中哆啦A梦的妹妹。是野比家在22世纪的机器人。最喜欢吃蜜瓜包，特别厌恶蟑螂。\n\n哆啦美的性能远强于哆啦A梦，有1万马力（哆啦A梦仅129.3）。也时时会来大雄这里来照顾大雄，以替代哆啦A梦去工厂检修时的空缺。性格温和，但是很容易被惹而发脾气（多数是因哆啦A梦），非常勤劳爱干净。在大长篇中，哆啦美多次担任助拳人的角色，例如在魔界大冒险中，帮助哆啦A梦和大雄解除石化魔法。',
        photos: [],
        status: {
            height: '100cm',
            weight: '91kg',
            english_name: 'Dorami',
            chinese_name: '哆啦美',
            japanese_name: 'ドラミ',
            japanese_name_kana: 'ドラミ',
            romanized_name: 'Dorami',
            alternative_names: '小叮铃',
            gender: '女',
            birthday: '2114年12月2日'
        }
    },
    {
        id: 'jaiko',
        icon: 'images/icon/jaiko_icon.png',
        cover: 'images/cover/jko.jpg',
        brief: '以漫画家为目标的胖虎的妹妹',
        detail: '她（还有小珠、技兰、胖妹、技子、玉枝、胖妹、小花、阿花、阿珠、刚田兰、洁子等不同翻译，「ジャイ子」不是本名，本来藤子老师也预计要在漫画中适时写到她的本名，可惜现在已经是永恒的谜了）比胖虎小两岁，小时候又胖又任性，时常欺负大雄。可是当她萌生漫画家梦以后，便努力的学画漫画，性格有了很大不同；但她只要遇到挫折，就会很失落。因此，爱护妹妹的胖虎常常强迫其他人买小珠的漫画。她在学画漫画时，喜欢上了和他合作的茂手持夫同学。可是她太害羞，一直不敢表白，因此常常闷闷不乐。原本是在 19 年后和大雄结婚。但是因为哆啦A梦的到来，使得她脱离了这场梦靥。',
        photos: [],
        status: {
            english_name: 'Jaiko Goda',
            chinese_name: '刚田技子',
            japanese_name: '剛田ジャイ子',
            gender: '女'
        }
    },
    {
        id: 'nobisuke',
        icon: 'images/icon/nobisuke_icon.png',
        cover: 'images/cover/nobisuke.jpg',
        brief: '心地善良的上班族',
        detail: '野比大雄的爸爸，爱抽烟喝酒看电视，相对妈妈更宠大雄一些，经常和妈妈一起训完大雄后再被妈妈训一顿。',
        photos: [],
        status: {
            height: '170cm',
            weight: '65kg',
            english_name: 'Nobisuke Nobi',
            chinese_name: '野比大助',
            japanese_name: '野比のび助',
            japanese_name_kana: 'のび のびすけ',
            romanized_name: 'Nobi Nobisuke',
            alternative_names: '叶野比、叶大助、叶阿助',
            nickname: 'のび太のパパ',
            gender: '男',
            birthday: '1937年1月24日'
        }
    },
    {
        id: 'tamako',
        icon: 'images/icon/tamako_icon.png',
        cover: 'images/cover/tamako.jpg',
        brief: '生气时很可怕！',
        detail: '大雄的妈妈，38岁，生于1941年。婚前名为片冈玉子，是动漫画中，除了五位主角之外最常出现的人物，是一位勤劳的家庭主妇，然而性格却相当保守，对于新产品及科技都不甚感兴趣，常为家中赤字烦恼。小时候相当顽皮捣蛋，而且成绩不太好、但成长之后头脑聪明、成绩优秀。婚后对于大雄、哆啦A梦以及野比大助的过失常加以严厉苛责（尤其是大雄），亦禁止饲养宠物（但也有在极少数因特殊情况而允许），但实际上很关怀家人，偶尔也会对大雄展露出温柔慈爱的一面。只要有人（包括大雄的爸爸）破坏家中的和谐、安宁或环境整洁时就会大发雷霆。',
        photos: [],
        status: {
            height: '158cm',
            weight: '58kg',
            english_name: 'Tamako Nobi',
            chinese_name: '野比玉子',
            japanese_name: '野比玉子',
            japanese_name_kana: 'のび たまこ',
            romanized_name: 'Nobi Tamako',
            alternative_names: '叶美玉、片冈玉子',
            maiden_name: '片岡玉子',
            old_name: '野比のぶ子',
            nickname: 'のび太のママ',
            gender: '女',
            birthday: '1941年9月30日',
            specialty: '扣大雄零花钱,训大雄',
            hobbies: '看电视、插花',
            dislikes: '小动物',
            most_angry_moments: '大雄考零分时、大雄做错事时',
            fears: '鬼、蟑螂'
        }
    },
    {
        id: 'sewashi',
        icon: 'images/icon/sewashi_icon.png',
        cover: 'images/cover/sewashi.jpg',
        brief: '生活在22世纪的大雄的玄孙',
        detail: '大雄的玄孙，由于大雄生意失败流下的借款太多还不完，压岁钱只剩下50日元，为改变悲惨的命运，送了22世纪的机器猫哆啦A梦到现代去帮助大雄。总是称呼大雄为「爷爷」，让大雄很不满。常在22世纪用时光电视关注着大雄与哆啦A梦。',
        photos: [],
        status: {
            height: '140cm',
            weight: '30kg',
            english_name: 'Sewashi Nobi',
            chinese_name: '野比世修',
            japanese_name: '野比セワシ',
            japanese_name_kana: 'のび セワシ',
            romanized_name: 'Nobi Sewashi',
            alternative_names: '野比世修、野比延助、阿忙、小世、世雄、舍华斯',
            hair_color: '黑发',
            eye_color: '黑瞳',
            gender: '男'
        }
    }
];

// 导出数据（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = charactersData;
}


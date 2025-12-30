// 哆啦A梦主要人物数据
const charactersData = [
    {
        id: 'doraemon',
        icon: 'images/icon/doraemon_icon.png',
        cover: 'images/cover/doraemon.jpg',
        brief: '来自22世纪的猫型育儿机器人',
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
        brief: '成绩差但心地善良，是哆啦A梦的好朋友。',
        detail: '',
        photos: [],
        status: {
            height: '140cm',
            weight: '40kg',
            english_name: 'Nobita Nobi',
            chinese_name: '野比大雄',
            japanese_name: '野比のび太',
            gender: '男'
        }
    },
    {
        id: 'shizuka',
        icon: 'images/icon/shizuka_icon.png',
        cover: 'images/cover/shizuka.jpg',
        brief: '大雄的青梅竹马，温柔善良，是大雄暗恋的对象。',
        detail: '',
        photos: [],
        status: {
            height: '136cm',
            weight: '32kg',
            english_name: 'Shizuka Minamoto',
            chinese_name: '源静香',
            japanese_name: '源静香',
            gender: '女'
        }
    },
    {
        id: 'suneo',
        icon: 'images/icon/suneo_icon.png',
        cover: 'images/cover/suneo.jpg',
        brief: '家境富裕，喜欢炫耀，但有时也会帮助朋友。',
        detail: '',
        photos: [],
        status: {
            height: '136cm',
            weight: '30kg',
            english_name: 'Suneo Honekawa',
            chinese_name: '骨川小夫',
            japanese_name: '骨川スネ夫',
            gender: '男'
        }
    },
    {
        id: 'takeshi',
        icon: 'images/icon/takeshi_icon.png',
        cover: 'images/cover/takeshi.jpg',
        brief: '外号胖虎，力气大但脾气暴躁，喜欢唱歌。',
        detail: '',
        photos: [],
        status: {
            height: '145cm',
            weight: '45kg',
            english_name: 'Takeshi Goda',
            chinese_name: '刚田武',
            japanese_name: '剛田武',
            gender: '男'
        }
    },
    {
        id: 'dekisugi',
        icon: 'images/icon/dekisugi_icon.png',
        cover: 'images/cover/dekisugi.jpg',
        brief: '学习成绩优秀，各方面都很出色，是大雄的竞争对手。',
        detail: '',
        photos: [],
        status: {
            height: '138cm',
            weight: '35kg',
            english_name: 'Hidetoshi Dekisugi',
            chinese_name: '出木杉英才',
            japanese_name: '出木杉英才',
            gender: '男'
        }
    },
    {
        id: 'dorami',
        icon: 'images/icon/dorami_icon.png',
        cover: 'images/cover/dorami.jpg',
        brief: '哆啦A梦的妹妹，比哥哥更优秀，拥有四次元口袋。',
        detail: '',
        photos: [],
        status: {
            height: '100cm',
            weight: '91kg',
            english_name: 'Dorami',
            chinese_name: '哆啦美',
            japanese_name: 'ドラミ',
            gender: '女'
        }
    },
    {
        id: 'jaiko',
        icon: 'images/icon/jaiko_icon.png',
        cover: 'images/cover/jko.jpg',
        brief: '胖虎的妹妹，喜欢画漫画，梦想成为漫画家。',
        detail: '',
        photos: [],
        status: {
            height: '135cm',
            weight: '38kg',
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
        brief: '大雄的父亲，在公司上班，对家人很关心。',
        detail: '',
        photos: [],
        status: {
            height: '170cm',
            weight: '65kg',
            english_name: 'Nobisuke Nobi',
            chinese_name: '野比伸助',
            japanese_name: '野比伸助',
            gender: '男'
        }
    },
    {
        id: 'tamako',
        icon: 'images/icon/tamako_icon.png',
        cover: 'images/cover/tamako.jpg',
        brief: '大雄的母亲，家庭主妇，对儿子的学习很关心。',
        detail: '',
        photos: [],
        status: {
            height: '158cm',
            weight: '52kg',
            english_name: 'Tamako Nobi',
            chinese_name: '野比玉子',
            japanese_name: '野比玉子',
            gender: '女'
        }
    },
    {
        id: 'sewashi',
        icon: 'images/icon/sewashi_icon.png',
        cover: 'images/cover/sewashi.jpg',
        brief: '大雄的玄孙，来自22世纪，是哆啦A梦的原主人。',
        detail: '',
        photos: [],
        status: {
            height: '120cm',
            weight: '28kg',
            english_name: 'Sewashi Nobi',
            chinese_name: '野比世修',
            japanese_name: '野比セワシ',
            gender: '男'
        }
    }
];

// 导出数据（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = charactersData;
}


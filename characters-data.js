// 哆啦A梦主要人物数据
const charactersData = [
    {
        id: 'doraemon',
        icon: 'images/icon/doraemon_icon.png',
        cover: 'images/cover/doraemon.jpg',
        brief: '来自22世纪的猫型育儿机器人，拥有四次元口袋，帮助大雄解决各种困难。',
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
        brief: '故事的主角，学习成绩差，运动能力弱，但心地善良，是哆啦A梦的好朋友。',
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
        brief: '大雄的青梅竹马，温柔善良，学习成绩优秀，是大雄暗恋的对象。',
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
        brief: '家境富裕，喜欢炫耀，但有时也会帮助朋友，是大雄的同学之一。',
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
        brief: '外号胖虎，力气大但脾气暴躁，喜欢唱歌但歌声难听，是大雄的同学。',
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
        brief: '学习成绩优秀，各方面都很出色，是大雄的竞争对手，也是静香的好朋友。',
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
        brief: '哆啦A梦的妹妹，比哥哥更优秀，拥有四次元口袋，经常帮助大雄和哆啦A梦。',
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
        brief: '胖虎的妹妹，喜欢画漫画，梦想成为漫画家，性格温和。',
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
        brief: '大雄的父亲，在公司上班，年轻时也有过梦想，对家人很关心。',
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
        brief: '大雄的母亲，家庭主妇，对儿子的学习很关心，有时会责备大雄。',
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
        brief: '大雄的玄孙，来自22世纪，是哆啦A梦的原主人，派哆啦A梦来帮助大雄。',
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


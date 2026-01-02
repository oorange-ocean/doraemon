// 人物页面逻辑
document.addEventListener('DOMContentLoaded', function () {
    const overviewView = document.getElementById('overviewView');
    const detailView = document.getElementById('detailView');
    const charactersGrid = document.getElementById('charactersGrid');
    const characterDetail = document.getElementById('characterDetail');
    const backButton = document.getElementById('backButton');

    // 保存总览页面的滚动位置
    let savedScrollPosition = 0;

    // 初始化总览界面
    function initOverview() {
        if (!charactersData || !Array.isArray(charactersData)) {
            console.error('Characters data not found');
            return;
        }

        charactersGrid.innerHTML = '';

        charactersData.forEach(character => {
            const card = document.createElement('character-card');
            card.setAttribute('character-data', JSON.stringify(character));
            charactersGrid.appendChild(card);

            // 监听卡片点击事件
            card.addEventListener('character-click', (e) => {
                showDetail(e.detail.characterId);
            });
        });
    }

    // 显示详情界面
    function showDetail(characterId) {
        const character = charactersData.find(c => c.id === characterId);
        if (!character) {
            console.error('Character not found:', characterId);
            return;
        }

        // 保存当前滚动位置
        savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // 更新 URL（不刷新页面）
        window.history.pushState({ view: 'detail', characterId }, '', `?character=${characterId}`);

        // 渲染详情内容
        renderDetail(character);

        // 切换视图
        overviewView.classList.add('hidden');
        detailView.classList.remove('hidden');

        // 立即滚动到顶部（无动画）
        window.scrollTo(0, 0);
    }

    // 渲染详情内容
    function renderDetail(character) {
        // 排除中文名，因为已经在标题中显示
        const statusItems = Object.entries(character.status)
            .filter(([key]) => key !== 'chinese_name')
            .map(([key, value]) => {
                const labels = {
                    height: '身高',
                    weight: '体重',
                    english_name: '英文名',
                    japanese_name: '日语名',
                    japanese_name_kana: '假名',
                    romanized_name: '罗马字',
                    alternative_names: '别名',
                    maiden_name: '婚前名',
                    old_name: '旧版名',
                    nickname: '昵称',
                    gender: '性别',
                    birthday: '生日',
                    specialty: '特长',
                    hobbies: '爱好',
                    dislikes: '讨厌',
                    most_angry_moments: '最生气时刻',
                    fears: '最害怕'
                };
                return `
                    <div class="status-item">
                        <div class="status-label">${labels[key] || key}</div>
                        <div class="status-value">${value}</div>
                    </div>
                `;
            })
            .join('');

        characterDetail.innerHTML = `
            <div class="detail-header">
                <img src="${character.cover}" alt="${character.status.chinese_name}" class="detail-cover">
                <h2 class="detail-name">${character.status.chinese_name}</h2>
                <div class="detail-names">
                    <span class="detail-name-item">${character.status.english_name}</span>
                    <span class="detail-name-item">${character.status.japanese_name}</span>
                    ${character.status.japanese_name_kana ? `<span class="detail-name-item">${character.status.japanese_name_kana}</span>` : ''}
                    ${character.status.romanized_name ? `<span class="detail-name-item">${character.status.romanized_name}</span>` : ''}
                </div>
                <p class="detail-brief">${character.brief}</p>
            </div>
            <div class="detail-content">
                <div class="detail-section">
                    <h3>基本信息</h3>
                    <div class="status-grid">
                        ${statusItems}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>人物介绍</h3>
                    <div class="detail-text ${character.detail ? '' : 'empty'}">
                        ${character.detail || '暂无详细介绍'}
                    </div>
                </div>
            </div>
        `;
    }

    // 显示总览界面
    function showOverview() {
        window.history.pushState({ view: 'overview' }, '', 'character.html');
        // 重新初始化总览界面，确保内容被正确渲染
        initOverview();
        overviewView.classList.remove('hidden');
        detailView.classList.add('hidden');

        // 恢复到之前保存的滚动位置（无动画）
        // 使用 setTimeout 确保 DOM 更新完成后再滚动
        setTimeout(() => {
            window.scrollTo(0, savedScrollPosition);
        }, 0);
    }

    // 返回按钮事件
    backButton.addEventListener('click', showOverview);

    // 处理浏览器前进/后退
    window.addEventListener('popstate', (e) => {
        const urlParams = new URLSearchParams(window.location.search);
        const characterId = urlParams.get('character');

        if (characterId) {
            showDetail(characterId);
        } else {
            showOverview();
        }
    });

    // 初始化：检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('character');

    if (characterId) {
        showDetail(characterId);
    } else {
        initOverview();
    }
});


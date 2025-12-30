// 道具页面逻辑
document.addEventListener('DOMContentLoaded', function () {
    const overviewView = document.getElementById('overviewView');
    const detailView = document.getElementById('detailView');
    const gadgetsGrid = document.getElementById('gadgetsGrid');
    const gadgetDetail = document.getElementById('gadgetDetail');
    const backButton = document.getElementById('backButton');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // 性能优化：分批加载
    const ITEMS_PER_PAGE = 24; // 每页显示24个
    let currentPage = 1;
    let filteredGadgets = [];
    let displayedCount = 0;

    // 初始化
    function init() {
        if (!gadgetsData || !Array.isArray(gadgetsData)) {
            console.error('Gadgets data not found');
            return;
        }

        // 初始化类别筛选器
        initCategoryFilter();
        
        // 初始化数据
        filteredGadgets = gadgetsData;
        
        // 加载第一页
        loadMoreItems();
        
        // 绑定事件
        categoryFilter.addEventListener('change', handleFilter);
        searchInput.addEventListener('input', debounce(handleFilter, 300));
        loadMoreBtn.addEventListener('click', loadMoreItems);
        backButton.addEventListener('click', showOverview);
    }

    // 初始化类别筛选器
    function initCategoryFilter() {
        const categories = [...new Set(gadgetsData.map(g => g.category))].sort();
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = getCategoryName(category);
            categoryFilter.appendChild(option);
        });
    }

    // 处理筛选
    function handleFilter() {
        const category = categoryFilter.value;
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        filteredGadgets = gadgetsData.filter(gadget => {
            const matchCategory = !category || gadget.category === category;
            const matchSearch = !searchTerm || 
                gadget.chinese_name.toLowerCase().includes(searchTerm) ||
                gadget.english_name.toLowerCase().includes(searchTerm) ||
                gadget.japanese_name.toLowerCase().includes(searchTerm) ||
                gadget.function.toLowerCase().includes(searchTerm);
            
            return matchCategory && matchSearch;
        });
        
        // 重置分页
        currentPage = 1;
        displayedCount = 0;
        gadgetsGrid.innerHTML = '';
        
        // 加载第一页
        loadMoreItems();
    }

    // 加载更多道具
    function loadMoreItems() {
        const startIndex = displayedCount;
        const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredGadgets.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const gadget = filteredGadgets[i];
            const card = document.createElement('gadget-card');
            card.setAttribute('gadget-data', JSON.stringify(gadget));
            gadgetsGrid.appendChild(card);
            
            // 监听卡片点击事件
            card.addEventListener('gadget-click', (e) => {
                showDetail(e.detail.gadgetId);
            });
        }
        
        displayedCount = endIndex;
        
        // 更新加载更多按钮
        if (displayedCount >= filteredGadgets.length) {
            loadMoreBtn.classList.add('hidden');
        } else {
            loadMoreBtn.classList.remove('hidden');
        }
    }

    // 显示详情界面
    function showDetail(gadgetId) {
        const gadget = gadgetsData.find(g => g.id === gadgetId);
        if (!gadget) {
            console.error('Gadget not found:', gadgetId);
            return;
        }

        // 更新 URL（不刷新页面）
        window.history.pushState({ view: 'detail', gadgetId }, '', `?gadget=${gadgetId}`);

        // 渲染详情内容
        renderDetail(gadget);

        // 切换视图
        overviewView.classList.add('hidden');
        detailView.classList.remove('hidden');

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 渲染详情内容
    function renderDetail(gadget) {
        const userDisplayName = getUserDisplayName(gadget.main_user);
        const usedByDisplay = gadget.used_by ? gadget.used_by.split(', ').map(u => getUserDisplayName(u.trim())).join('、') : userDisplayName;
        
        gadgetDetail.innerHTML = `
            <div class="detail-header">
                <h2 class="detail-name">${gadget.chinese_name}</h2>
                <div class="detail-names">
                    <span class="detail-name-item">${gadget.english_name}</span>
                    <span class="detail-name-item">${gadget.japanese_name}</span>
                </div>
                <span class="detail-category">${getCategoryName(gadget.category)}</span>
            </div>
            <div class="detail-content">
                <div class="detail-section">
                    <h3>功能说明</h3>
                    <div class="detail-text">
                        ${gadget.function}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>基本信息</h3>
                    <div class="info-grid">
                        ${gadget.first_appearance_episode ? `
                            <div class="info-item">
                                <div class="info-label">首次出现</div>
                                <div class="info-value">第${gadget.first_appearance_episode}集</div>
                            </div>
                        ` : ''}
                        <div class="info-item">
                            <div class="info-label">主要使用者</div>
                            <div class="info-value">${userDisplayName}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">使用者</div>
                            <div class="info-value">${usedByDisplay}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">是否经常出现</div>
                            <div class="info-value">${gadget.is_recurring ? '是' : '否'}</div>
                        </div>
                    </div>
                </div>
                ${gadget.notes ? `
                    <div class="detail-section">
                        <h3>备注</h3>
                        <div class="detail-text">
                            ${gadget.notes}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // 显示总览界面
    function showOverview() {
        window.history.pushState({ view: 'overview' }, '', 'item.html');
        overviewView.classList.remove('hidden');
        detailView.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 处理浏览器前进/后退
    window.addEventListener('popstate', (e) => {
        const urlParams = new URLSearchParams(window.location.search);
        const gadgetId = urlParams.get('gadget');

        if (gadgetId) {
            showDetail(gadgetId);
        } else {
            showOverview();
        }
    });

    // 工具函数
    function getCategoryName(category) {
        const categoryMap = {
            'Transportation': '交通',
            'Time Travel': '时光',
            'Education': '教育',
            'Weapon': '武器',
            'Daily Life': '日常',
            'Transformation': '变形',
            'Stealth': '隐身',
            'Animal': '动物',
            'Power': '力量',
            'Special': '特殊',
            'Vintage': '复古',
            'Survival': '生存',
            'Entertainment': '娱乐',
            'Technology': '科技',
            'Food': '食物',
            'Prank': '恶作剧',
            'Fantasy': '奇幻',
            'Space': '宇宙',
            'Weather': '天气',
            'Tool': '工具',
            'Construction': '建筑',
            'Medical': '医疗',
            'Psychic': '超能力',
            'Information': '信息',
            'Music': '音乐',
            'Art': '艺术',
            'Game': '游戏',
            'Science': '科学',
            'Social': '社交',
            'Festive': '节日',
            'Emotional': '情感',
            'Training': '训练',
            'Finance': '金融',
            'Meta': '元',
            'Sensory': '感官',
            'Sports': '运动',
            'Toy': '玩具',
            'Adventure': '冒险'
        };
        return categoryMap[category] || category;
    }

    function getUserDisplayName(user) {
        const userMap = {
            'Nobita': '大雄',
            'Doraemon': '哆啦A梦',
            'Gian': '胖虎',
            'Suneo': '小夫',
            'Shizuka': '静香',
            'Dorami': '哆啦美',
            "Nobita's Dad": '大雄爸爸',
            "Nobita's Mom": '大雄妈妈',
            'Everyone': '所有人'
        };
        return userMap[user] || user;
    }

    // 防抖函数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 初始化：检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const gadgetId = urlParams.get('gadget');

    if (gadgetId) {
        showDetail(gadgetId);
    } else {
        init();
    }
});


// 道具页面逻辑 - TOP 30 版本
document.addEventListener('DOMContentLoaded', function () {
    const overviewView = document.getElementById('overviewView');
    const detailView = document.getElementById('detailView');
    const gadgetsGrid = document.getElementById('gadgetsGrid');
    const gadgetDetail = document.getElementById('gadgetDetail');
    const backButton = document.getElementById('backButton');

    // 初始化
    function init() {
        if (!gadgetsTop30Data || !Array.isArray(gadgetsTop30Data)) {
            console.error('Gadgets data not found');
            return;
        }

        // 按排名排序（从高到低，即1-30）
        const sortedGadgets = [...gadgetsTop30Data].sort((a, b) => a.rank - b.rank);
        
        // 渲染所有道具卡片
        renderGadgets(sortedGadgets);
        
        // 绑定事件
        backButton.addEventListener('click', showOverview);
    }

    // 渲染道具卡片
    function renderGadgets(gadgets) {
        gadgetsGrid.innerHTML = '';
        
        gadgets.forEach(gadget => {
            const card = document.createElement('gadget-card');
            card.setAttribute('gadget-data', JSON.stringify(gadget));
            gadgetsGrid.appendChild(card);
            
            // 监听卡片点击事件
            card.addEventListener('gadget-click', (e) => {
                showDetail(e.detail.gadgetId);
            });
        });
    }

    // 显示详情界面
    function showDetail(gadgetId) {
        const gadget = gadgetsTop30Data.find(g => g.id === gadgetId);
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
        // 确定图片格式
        const imageExt = gadget.image ? gadget.image.split('.').pop() : 'jpg';
        const imagePath = gadget.image || `images/gadget/${String(gadget.rank).padStart(2, '0')}.${imageExt}`;
        
        gadgetDetail.innerHTML = `
            <div class="detail-header">
                <div class="detail-rank">${gadget.rank}</div>
                <div class="detail-image-container">
                    <img src="${imagePath}" alt="${gadget.chinese_name}" class="detail-image" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'color: #999; font-size: 1rem; text-align: center;\'>图片加载失败</div>';">
                </div>
                <h2 class="detail-name">${gadget.chinese_name}</h2>
                ${gadget.alternative_name ? `<div class="detail-name-alt">${gadget.alternative_name}</div>` : ''}
            </div>
            <div class="detail-content">
                <div class="detail-section">
                    <h3>功能说明</h3>
                    <div class="detail-text">
                        ${gadget.description}
                    </div>
                </div>
                <div class="detail-section">
                    <h3>排名信息</h3>
                    <div class="detail-text">
                        在2006年日本朝日电视台统计的「最想要的哆啦A梦道具 TOP 30」中，${gadget.chinese_name}排名第<strong style="color: var(--accent-red); font-size: 1.3em;">${gadget.rank}</strong>位。
                    </div>
                </div>
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
            showDetail(parseInt(gadgetId));
        } else {
            showOverview();
        }
    });

    // 初始化：检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const gadgetId = urlParams.get('gadget');

    if (gadgetId) {
        showDetail(parseInt(gadgetId));
    } else {
        init();
    }
});

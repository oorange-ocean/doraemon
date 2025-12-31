// 电影页面逻辑
document.addEventListener('DOMContentLoaded', function () {
    const overviewView = document.getElementById('overviewView');
    const detailView = document.getElementById('detailView');
    const filmsGrid = document.getElementById('filmsGrid');
    const filmDetail = document.getElementById('filmDetail');
    const backButton = document.getElementById('backButton');

    // 初始化总览界面
    function initOverview() {
        if (!filmsData || !Array.isArray(filmsData)) {
            console.error('Films data not found');
            return;
        }

        filmsGrid.innerHTML = '';

        // 按上映时间倒序排列（最新的在前）
        const sortedFilms = [...filmsData].sort((a, b) => {
            const dateA = extractYear(a.release_date);
            const dateB = extractYear(b.release_date);
            return dateB - dateA;
        });

        sortedFilms.forEach(film => {
            const card = document.createElement('film-card');
            card.setAttribute('film-data', JSON.stringify(film));
            filmsGrid.appendChild(card);

            // 监听卡片点击事件
            card.addEventListener('film-click', (e) => {
                showDetail(e.detail.filmId);
            });
        });
    }

    // 从日期字符串中提取年份
    function extractYear(dateString) {
        const match = dateString.match(/(\d{4})/);
        return match ? parseInt(match[1]) : 0;
    }

    // 显示详情界面
    function showDetail(filmId) {
        const film = filmsData.find(f => f.id === filmId);
        if (!film) {
            console.error('Film not found:', filmId);
            return;
        }

        // 更新 URL（不刷新页面）
        window.history.pushState({ view: 'detail', filmId }, '', `?film=${filmId}`);

        // 渲染详情内容
        renderDetail(film);

        // 切换视图
        overviewView.classList.add('hidden');
        detailView.classList.remove('hidden');

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 渲染详情内容
    function renderDetail(film) {
        filmDetail.innerHTML = `
            <div class="detail-header">
                <img src="${film.cover}" alt="${film.chinese_title}" class="detail-cover" 
                     onerror="this.src='images/bg_detail.png'; this.onerror=null;">
                <h2 class="detail-title-cn">${film.chinese_title}</h2>
                <div class="detail-title-jp">${film.japanese_title}</div>
            </div>
            <div class="detail-content">
                <div class="detail-section">
                    <h3>基本信息</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">上映时间</div>
                            <div class="info-value release-date">${film.release_date}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">主创信息</div>
                            <div class="info-value">${film.creators}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 显示总览界面
    function showOverview() {
        window.history.pushState({ view: 'overview' }, '', 'anime.html');
        overviewView.classList.remove('hidden');
        detailView.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 返回按钮事件
    backButton.addEventListener('click', showOverview);

    // 处理浏览器前进/后退
    window.addEventListener('popstate', (e) => {
        const urlParams = new URLSearchParams(window.location.search);
        const filmId = urlParams.get('film');

        if (filmId) {
            showDetail(filmId);
        } else {
            showOverview();
        }
    });

    // 初始化：检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('film');

    if (filmId) {
        showDetail(filmId);
    } else {
        initOverview();
    }
});


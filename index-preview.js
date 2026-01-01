// 首页预览内容生成脚本

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 生成人物预览
    generateCharactersPreview();

    // 生成道具预览
    generateGadgetsPreview();

    // 生成音乐预览
    generateSongsPreview();

    // 生成电影预览
    generateFilmsPreview();
});

// 生成人物预览（显示前6个主要人物）
function generateCharactersPreview() {
    const previewContainer = document.getElementById('charactersPreview');
    if (!previewContainer || !charactersData) return;

    // 选择前6个主要人物
    const mainCharacters = charactersData.slice(0, 6);

    mainCharacters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'preview-character-card';
        card.onclick = () => window.location.href = `character.html?character=${character.id}`;

        card.innerHTML = `
            <img src="${character.icon}" alt="${character.status.chinese_name}" class="preview-character-icon">
            <div class="preview-character-name">${character.status.chinese_name}</div>
        `;

        previewContainer.appendChild(card);
    });
}

// 生成道具预览（显示排名前6的道具）
function generateGadgetsPreview() {
    const previewContainer = document.getElementById('gadgetsPreview');
    if (!previewContainer || !gadgetsTop30Data) return;

    // 选择排名前6的道具（排名1-6）
    const topGadgets = gadgetsTop30Data
        .filter(gadget => gadget.rank <= 6)
        .sort((a, b) => a.rank - b.rank);

    topGadgets.forEach(gadget => {
        const card = document.createElement('div');
        card.className = 'preview-gadget-card';
        // 道具页面目前没有详情页功能，所以跳转到总览页
        card.onclick = () => window.location.href = 'gadget.html';

        card.innerHTML = `
            <img src="${gadget.image}" alt="${gadget.chinese_name}" class="preview-gadget-image">
            <div class="preview-gadget-name">${gadget.chinese_name}</div>
        `;

        previewContainer.appendChild(card);
    });
}

// 生成音乐预览（显示前4首歌曲）
function generateSongsPreview() {
    const previewContainer = document.getElementById('songsPreview');
    if (!previewContainer || !songsData) return;

    // 选择前4首歌曲
    const topSongs = songsData.slice(0, 4);

    topSongs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'preview-song-card';
        card.onclick = () => window.location.href = `music.html?song=${song.id}`;

        card.innerHTML = `
            <img src="${song.cover}" alt="${song.nameZh}" class="preview-song-cover">
            <div class="preview-song-name">${song.nameZh}</div>
            <div class="preview-song-artist">${song.artist}</div>
        `;

        previewContainer.appendChild(card);
    });
}

// 生成电影预览（显示前4部电影）
function generateFilmsPreview() {
    const previewContainer = document.getElementById('filmsPreview');
    if (!previewContainer || !filmsData) return;

    // 选择前4部电影
    const topFilms = filmsData.slice(0, 4);

    topFilms.forEach(film => {
        const card = document.createElement('div');
        card.className = 'preview-film-card';
        card.onclick = () => window.location.href = `anime.html?film=${film.id}`;

        card.innerHTML = `
            <img src="${film.cover}" alt="${film.chinese_title}" class="preview-film-cover">
            <div class="preview-film-title">${film.chinese_title}</div>
        `;

        previewContainer.appendChild(card);
    });
}


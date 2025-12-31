// 音乐页面逻辑
document.addEventListener('DOMContentLoaded', function () {
    const overviewView = document.getElementById('overviewView');
    const detailView = document.getElementById('detailView');
    const songsList = document.getElementById('songsList');
    const songDetail = document.getElementById('songDetail');
    const backButton = document.getElementById('backButton');

    let currentAudio = null;
    let currentLyrics = [];
    let currentLyricIndex = -1;
    let updateInterval = null;

    // 初始化总览界面
    function initOverview() {
        if (!songsData || !Array.isArray(songsData)) {
            console.error('Songs data not found');
            return;
        }

        songsList.innerHTML = '';

        songsData.forEach(song => {
            const card = document.createElement('song-card');
            card.setAttribute('song-data', JSON.stringify(song));
            songsList.appendChild(card);

            // 监听卡片点击事件
            card.addEventListener('song-click', (e) => {
                showDetail(e.detail.songId);
            });
        });
    }

    // 显示详情界面
    function showDetail(songId) {
        const song = songsData.find(s => s.id === songId);
        if (!song) {
            console.error('Song not found:', songId);
            return;
        }

        // 更新 URL（不刷新页面）
        window.history.pushState({ view: 'detail', songId }, '', `?song=${songId}`);

        // 渲染详情内容
        renderDetail(song);

        // 切换视图
        overviewView.classList.add('hidden');
        detailView.classList.remove('hidden');

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 渲染详情内容
    async function renderDetail(song) {
        // 停止之前的音频
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }

        // 加载歌词
        let lyrics = [];
        try {
            const response = await fetch(song.lrc);
            const lrcText = await response.text();
            lyrics = LRCParser.parse(lrcText);
        } catch (error) {
            console.error('Failed to load lyrics:', error);
        }

        currentLyrics = lyrics;
        currentLyricIndex = -1;

        songDetail.innerHTML = `
            <div class="song-detail-header">
                <div class="song-cover-container">
                    <img src="${song.cover}" alt="${song.nameZh || song.name}" class="song-cover-image">
                </div>
                <div class="song-info-header">
                    <h2 class="song-title">${song.nameZh || song.name}</h2>
                    <p class="song-artist-detail">${song.artist}</p>
                </div>
            </div>
            
            <div class="song-detail-content">
                <!-- 歌词组件 -->
                <div class="lyrics-container">
                    <div class="lyrics-list" id="lyricsList">
                        ${lyrics.length > 0 ? lyrics.map((lyric, index) => `
                            <div class="lyric-line" data-time="${lyric.time}" data-index="${index}">
                                ${lyric.lines.map(line => `<div class="lyric-text">${line}</div>`).join('')}
                            </div>
                        `).join('') : '<div class="lyric-line"><div class="lyric-text">暂无歌词</div></div>'}
                    </div>
                </div>

                <!-- 播放器控制器 -->
                <div class="player-controls">
                    <audio id="audioPlayer" preload="metadata">
                        <source src="${song.audio}" type="audio/mpeg">
                    </audio>
                    
                    <div class="player-progress-container">
                        <div class="player-time">
                            <span id="currentTime">00:00</span>
                            <span id="totalTime">00:00</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar" id="progressBar">
                                <div class="progress-fill" id="progressFill"></div>
                                <div class="progress-handle" id="progressHandle"></div>
                            </div>
                        </div>
                    </div>

                    <div class="player-buttons">
                        <button class="player-btn" id="prevBtn" title="上一首" disabled>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                                <line x1="5" y1="19" x2="5" y2="5"></line>
                            </svg>
                        </button>
                        <button class="player-btn play-pause-btn" id="playPauseBtn" title="播放/暂停">
                            <svg class="play-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            <svg class="pause-icon hidden" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16"></rect>
                                <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                        </button>
                        <button class="player-btn" id="nextBtn" title="下一首" disabled>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                                <line x1="19" y1="5" x2="19" y2="19"></line>
                            </svg>
                        </button>
                    </div>

                    <div class="player-volume-container">
                        <button class="player-btn volume-btn" id="volumeBtn" title="音量">
                            <svg class="volume-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                            <svg class="volume-mute-icon hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                        </button>
                        <div class="volume-slider-container">
                            <div class="volume-slider" id="volumeSlider">
                                <div class="volume-fill" id="volumeFill"></div>
                                <div class="volume-handle" id="volumeHandle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 初始化播放器
        initPlayer(song);
    }

    // 初始化播放器
    function initPlayer(song) {
        const audio = document.getElementById('audioPlayer');
        if (!audio) return;

        currentAudio = audio;

        // 播放/暂停按钮
        const playPauseBtn = document.getElementById('playPauseBtn');
        const playIcon = playPauseBtn.querySelector('.play-icon');
        const pauseIcon = playPauseBtn.querySelector('.pause-icon');

        // 进度条
        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');
        const progressHandle = document.getElementById('progressHandle');

        // 时间显示
        const currentTimeEl = document.getElementById('currentTime');
        const totalTimeEl = document.getElementById('totalTime');

        // 音量控制
        const volumeBtn = document.getElementById('volumeBtn');
        const volumeIcon = volumeBtn.querySelector('.volume-icon');
        const volumeMuteIcon = volumeBtn.querySelector('.volume-mute-icon');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeFill = document.getElementById('volumeFill');
        const volumeHandle = document.getElementById('volumeHandle');

        // 设置初始音量
        audio.volume = 0.7;
        updateVolumeUI(0.7);

        // 播放/暂停
        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                startLyricsSync();
            } else {
                audio.pause();
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
                stopLyricsSync();
            }
        });

        // 音频加载完成
        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration;
            totalTimeEl.textContent = formatTime(duration);
        });

        // 音频时间更新
        audio.addEventListener('timeupdate', () => {
            const current = audio.currentTime;
            const duration = audio.duration || 0;
            const progress = duration > 0 ? (current / duration) * 100 : 0;
            
            currentTimeEl.textContent = formatTime(current);
            progressFill.style.width = `${progress}%`;
            progressHandle.style.left = `${progress}%`;
        });

        // 音频播放结束
        audio.addEventListener('ended', () => {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            stopLyricsSync();
            currentLyricIndex = -1;
            updateLyricsHighlight();
        });

        // 进度条点击和拖拽
        let isDragging = false;
        const handleProgressMouseDown = (e) => {
            isDragging = true;
            updateProgress(e);
        };
        const handleProgressMouseMove = (e) => {
            if (isDragging) {
                updateProgress(e);
            }
        };
        const handleProgressMouseUp = () => {
            isDragging = false;
        };

        progressBar.addEventListener('mousedown', handleProgressMouseDown);
        document.addEventListener('mousemove', handleProgressMouseMove);
        document.addEventListener('mouseup', handleProgressMouseUp);

        function updateProgress(e) {
            const rect = progressBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = Math.max(0, Math.min(1, x / rect.width));
            const time = percent * (audio.duration || 0);
            audio.currentTime = time;
        }

        // 音量控制
        let isVolumeDragging = false;
        const handleVolumeMouseDown = (e) => {
            isVolumeDragging = true;
            updateVolume(e);
        };
        const handleVolumeMouseMove = (e) => {
            if (isVolumeDragging) {
                updateVolume(e);
            }
        };
        const handleVolumeMouseUp = () => {
            isVolumeDragging = false;
        };

        volumeSlider.addEventListener('mousedown', handleVolumeMouseDown);
        document.addEventListener('mousemove', handleVolumeMouseMove);
        document.addEventListener('mouseup', handleVolumeMouseUp);

        function updateVolume(e) {
            const rect = volumeSlider.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = Math.max(0, Math.min(1, x / rect.width));
            audio.volume = percent;
            updateVolumeUI(percent);
        }

        function updateVolumeUI(volume) {
            volumeFill.style.width = `${volume * 100}%`;
            volumeHandle.style.left = `${volume * 100}%`;
            
            if (volume === 0) {
                volumeIcon.classList.add('hidden');
                volumeMuteIcon.classList.remove('hidden');
            } else {
                volumeIcon.classList.remove('hidden');
                volumeMuteIcon.classList.add('hidden');
            }
        }

        volumeBtn.addEventListener('click', () => {
            if (audio.volume > 0) {
                audio.volume = 0;
                updateVolumeUI(0);
            } else {
                audio.volume = 0.7;
                updateVolumeUI(0.7);
            }
        });
    }

    // 开始歌词同步
    function startLyricsSync() {
        if (updateInterval) return;
        
        updateInterval = setInterval(() => {
            if (currentAudio && !currentAudio.paused) {
                updateLyricsHighlight();
            }
        }, 100);
    }

    // 停止歌词同步
    function stopLyricsSync() {
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }
    }

    // 更新歌词高亮
    function updateLyricsHighlight() {
        if (!currentAudio || currentLyrics.length === 0) return;

        const currentTime = currentAudio.currentTime;
        const newIndex = LRCParser.getCurrentLyricIndex(currentLyrics, currentTime);

        if (newIndex !== currentLyricIndex) {
            currentLyricIndex = newIndex;
            
            const lyricsList = document.getElementById('lyricsList');
            if (!lyricsList) return;

            const lines = lyricsList.querySelectorAll('.lyric-line');
            lines.forEach((line, index) => {
                if (index === currentLyricIndex) {
                    line.classList.add('active');
                    // 滚动到当前行
                    line.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    line.classList.remove('active');
                }
            });
        }
    }

    // 格式化时间
    function formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // 显示总览界面
    function showOverview() {
        // 停止音频
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }
        currentLyrics = [];
        currentLyricIndex = -1;

        window.history.pushState({ view: 'overview' }, '', 'music.html');
        overviewView.classList.remove('hidden');
        detailView.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 返回按钮事件
    backButton.addEventListener('click', showOverview);

    // 处理浏览器前进/后退
    window.addEventListener('popstate', (e) => {
        const urlParams = new URLSearchParams(window.location.search);
        const songId = urlParams.get('song');

        if (songId) {
            showDetail(songId);
        } else {
            showOverview();
        }
    });

    // 初始化：检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('song');

    if (songId) {
        showDetail(songId);
    } else {
        initOverview();
    }
});


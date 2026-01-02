document.addEventListener('DOMContentLoaded', function () {
    const overviewView = document.getElementById('overviewView');
    const detailView = document.getElementById('detailView');
    const songsList = document.getElementById('songsList');
    const playerContainer = document.getElementById('playerContainer');

    let currentAudio = null;
    let currentLyrics = [];
    let currentLyricIndex = -1;
    let updateInterval = null;
    let currentSongId = null;
    let isLyricsMode = false;

    let savedScrollPosition = 0;

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

            card.addEventListener('song-click', (e) => {
                showDetail(e.detail.songId);
            });
        });
    }

    function showDetail(songId) {
        const song = songsData.find(s => s.id === songId);
        if (!song) {
            console.error('Song not found:', songId);
            return;
        }

        savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        window.history.pushState({ view: 'detail', songId }, '', `?song=${songId}`);

        overviewView.classList.add('hidden');
        detailView.classList.remove('hidden');

        window.scrollTo(0, 0);

        renderDetail(song);
    }

    async function renderDetail(song) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }

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
        currentSongId = song.id;
        isLyricsMode = false;

        const mobileCover = document.getElementById('mobileCover');
        const mobileTitle = document.getElementById('mobileTitle');
        const mobileArtist = document.getElementById('mobileArtist');
        const desktopCover = document.getElementById('desktopCover');
        const desktopTitle = document.getElementById('desktopTitle');
        const desktopArtist = document.getElementById('desktopArtist');
        const audio = document.getElementById('audioPlayer');

        if (mobileCover) mobileCover.src = song.cover;
        if (mobileTitle) mobileTitle.textContent = song.showOriginalName ? song.name : (song.nameZh || song.name);
        if (mobileArtist) mobileArtist.textContent = song.artist;
        if (desktopCover) desktopCover.src = song.cover;
        if (desktopTitle) desktopTitle.textContent = song.showOriginalName ? song.name : (song.nameZh || song.name);
        if (desktopArtist) desktopArtist.textContent = song.artist;
        if (audio) audio.src = song.audio;

        const lyricsList = document.getElementById('lyricsList');
        const lyricsListDesktop = document.getElementById('lyricsListDesktop');

        const lyricsHTML = lyrics.length > 0 ? lyrics.map((lyric, index) => `
            <div class="lyric-line" data-time="${lyric.time}" data-index="${index}">
                ${lyric.lines.map(line => `<div class="lyric-text">${line}</div>`).join('')}
            </div>
        `).join('') : '<div class="lyric-line"><div class="lyric-text">暂无歌词</div></div>';

        if (lyricsList) lyricsList.innerHTML = lyricsHTML;
        if (lyricsListDesktop) lyricsListDesktop.innerHTML = lyricsHTML;

        initPlayer(song);

        setTimeout(() => {
            const lyricLines = document.querySelectorAll('.lyric-line');
            lyricLines.forEach((line) => {
                line.style.cursor = 'pointer';
                line.addEventListener('click', () => {
                    const time = parseFloat(line.getAttribute('data-time'));
                    if (currentAudio && !isNaN(time)) {
                        currentAudio.currentTime = time;
                        if (currentAudio.paused) {
                            currentAudio.play();
                            const playPauseBtn = document.getElementById('playPauseBtn');
                            const playIcon = playPauseBtn.querySelector('.play-icon');
                            const pauseIcon = playPauseBtn.querySelector('.pause-icon');
                            if (playIcon && pauseIcon) {
                                playIcon.classList.add('hidden');
                                pauseIcon.classList.remove('hidden');
                            }
                            startLyricsSync();
                        }
                    }
                });
            });
        }, 100);
    }

    function initPlayer(song) {
        const audio = document.getElementById('audioPlayer');
        if (!audio) return;

        currentAudio = audio;

        const playPauseBtn = document.getElementById('playPauseBtn');
        const playIcon = playPauseBtn.querySelector('.play-icon');
        const pauseIcon = playPauseBtn.querySelector('.pause-icon');

        const progressBar = document.getElementById('progressBar');
        const progressFill = document.getElementById('progressFill');
        const progressHandle = document.getElementById('progressHandle');

        const currentTimeEl = document.getElementById('currentTime');
        const totalTimeEl = document.getElementById('totalTime');

        const toggleLyricsBtn = document.getElementById('toggleLyricsBtn');

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

        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration;
            totalTimeEl.textContent = formatTime(duration);
        });

        audio.addEventListener('timeupdate', () => {
            const current = audio.currentTime;
            const duration = audio.duration || 0;
            const progress = duration > 0 ? (current / duration) * 100 : 0;

            currentTimeEl.textContent = formatTime(current);
            progressFill.style.width = `${progress}%`;
            progressHandle.style.left = `${progress}%`;
        });

        audio.addEventListener('ended', () => {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            stopLyricsSync();
            currentLyricIndex = -1;
            updateLyricsHighlight();
            playNextSong();
        });

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

        const prevBtn = document.getElementById('prevBtn');
        prevBtn.addEventListener('click', () => {
            playPreviousSong();
        });

        const nextBtn = document.getElementById('nextBtn');
        nextBtn.addEventListener('click', () => {
            playNextSong();
        });

        if (toggleLyricsBtn) {
            toggleLyricsBtn.addEventListener('click', () => {
                toggleLyricsMode();
            });
        }

        const playlistBtn = document.getElementById('playlistBtn');
        if (playlistBtn) {
            playlistBtn.addEventListener('click', () => {
                showOverview();
            });
        }

        updateNavigationButtons();
    }

    function toggleLyricsMode() {
        isLyricsMode = !isLyricsMode;
        if (playerContainer) {
            if (isLyricsMode) {
                playerContainer.classList.add('lyrics-mode');
            } else {
                playerContainer.classList.remove('lyrics-mode');
            }
        }
    }

    function playPreviousSong() {
        if (!songsData || songsData.length === 0) return;

        const currentIndex = songsData.findIndex(s => s.id === currentSongId);
        if (currentIndex === -1) return;

        let prevIndex;
        if (currentIndex === 0) {
            prevIndex = songsData.length - 1;
        } else {
            prevIndex = currentIndex - 1;
        }

        const prevSong = songsData[prevIndex];
        if (prevSong) {
            showDetail(prevSong.id);
            setTimeout(() => {
                const audio = document.getElementById('audioPlayer');
                if (audio) {
                    audio.play();
                    const playPauseBtn = document.getElementById('playPauseBtn');
                    const playIcon = playPauseBtn.querySelector('.play-icon');
                    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
                    if (playIcon && pauseIcon) {
                        playIcon.classList.add('hidden');
                        pauseIcon.classList.remove('hidden');
                    }
                    startLyricsSync();
                }
            }, 500);
        }
    }

    function playNextSong() {
        if (!songsData || songsData.length === 0) return;

        const currentIndex = songsData.findIndex(s => s.id === currentSongId);
        if (currentIndex === -1) return;

        let nextIndex;
        if (currentIndex === songsData.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        }

        const nextSong = songsData[nextIndex];
        if (nextSong) {
            showDetail(nextSong.id);
            setTimeout(() => {
                const audio = document.getElementById('audioPlayer');
                if (audio) {
                    audio.play();
                    const playPauseBtn = document.getElementById('playPauseBtn');
                    const playIcon = playPauseBtn.querySelector('.play-icon');
                    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
                    if (playIcon && pauseIcon) {
                        playIcon.classList.add('hidden');
                        pauseIcon.classList.remove('hidden');
                    }
                    startLyricsSync();
                }
            }, 500);
        }
    }

    function updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (!songsData || songsData.length <= 1) {
            if (prevBtn) prevBtn.disabled = true;
            if (nextBtn) nextBtn.disabled = true;
        } else {
            if (prevBtn) prevBtn.disabled = false;
            if (nextBtn) nextBtn.disabled = false;
        }
    }

    function startLyricsSync() {
        if (updateInterval) return;

        updateInterval = setInterval(() => {
            if (currentAudio && !currentAudio.paused) {
                updateLyricsHighlight();
            }
        }, 100);
    }

    function stopLyricsSync() {
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }
    }

    function updateLyricsHighlight() {
        if (!currentAudio || currentLyrics.length === 0) return;

        const currentTime = currentAudio.currentTime;
        const newIndex = LRCParser.getCurrentLyricIndex(currentLyrics, currentTime);

        if (newIndex !== currentLyricIndex) {
            currentLyricIndex = newIndex;

            const lyricsList = document.getElementById('lyricsList');
            const lyricsListDesktop = document.getElementById('lyricsListDesktop');

            if (lyricsList) {
                const lines = lyricsList.querySelectorAll('.lyric-line');
                lines.forEach((line, index) => {
                    if (index === currentLyricIndex) {
                        line.classList.add('active');
                        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        line.classList.remove('active');
                    }
                });
            }

            if (lyricsListDesktop) {
                const linesDesktop = lyricsListDesktop.querySelectorAll('.lyric-line');
                linesDesktop.forEach((line, index) => {
                    if (index === currentLyricIndex) {
                        line.classList.add('active');
                        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        line.classList.remove('active');
                    }
                });
            }
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function showOverview() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        if (updateInterval) {
            clearInterval(updateInterval);
            updateInterval = null;
        }

        isLyricsMode = false;
        if (playerContainer) {
            playerContainer.classList.remove('lyrics-mode');
        }

        detailView.classList.add('hidden');
        overviewView.classList.remove('hidden');

        window.scrollTo(0, savedScrollPosition);

        window.history.pushState({ view: 'overview' }, '', window.location.pathname);
    }

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.view === 'detail' && event.state.songId) {
            showDetail(event.state.songId);
        } else {
            showOverview();
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const songParam = urlParams.get('song');
    if (songParam) {
        const song = songsData.find(s => s.id === songParam);
        if (song) {
            showDetail(song.id);
        }
    }

    initOverview();
});

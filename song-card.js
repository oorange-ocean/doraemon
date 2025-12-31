// 歌曲卡片 Web Component
class SongCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['song-data'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const data = this.getSongData();
        if (!data) return;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    --primary-blue: #2DB5FD;
                    --secondary-blue: #0564F1;
                    --accent-blue: #26599F;
                }

                .card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    padding: 1rem 1.25rem;
                    gap: 1.25rem;
                    border: 1px solid rgba(45, 181, 253, 0.1);
                }

                .card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(5, 100, 241, 0.15);
                    background: rgba(255, 255, 255, 1);
                    border-color: rgba(45, 181, 253, 0.3);
                }

                .card:active {
                    transform: translateY(0);
                }

                .cover-container {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
                }

                .cover-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .card:hover .cover-image {
                    transform: scale(1.05);
                }

                .play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(5, 100, 241, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    backdrop-filter: blur(2px);
                }

                .card:hover .play-overlay {
                    opacity: 1;
                }

                .play-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform: scale(0.85);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                }

                .card:hover .play-icon {
                    transform: scale(1);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .play-icon::before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-left: 12px solid var(--secondary-blue);
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;
                    margin-left: 3px;
                }

                .song-info {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 0.25rem;
                }

                .song-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1d1d1f;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: color 0.3s ease;
                }

                .card:hover .song-name {
                    color: var(--secondary-blue);
                }

                .song-artist {
                    font-size: 0.9rem;
                    color: #86868b;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .song-duration {
                    font-size: 0.85rem;
                    color: #86868b;
                    margin: 0;
                    flex-shrink: 0;
                    padding-left: 1rem;
                    font-variant-numeric: tabular-nums;
                }

                @media (min-width: 768px) {
                    .cover-container {
                        width: 100px;
                        height: 100px;
                    }

                    .song-name {
                        font-size: 1.2rem;
                    }

                    .song-artist {
                        font-size: 1rem;
                    }

                    .song-duration {
                        font-size: 0.9rem;
                    }
                }
            </style>
            <div class="card">
                <div class="cover-container">
                    <img src="${data.cover}" alt="${data.nameZh || data.name}" class="cover-image">
                    <div class="play-overlay">
                        <div class="play-icon"></div>
                    </div>
                </div>
                <div class="song-info">
                    <h3 class="song-name">${data.nameZh || data.name}</h3>
                    <p class="song-artist">${data.artist}</p>
                </div>
                <div class="song-duration">${data.duration}</div>
            </div>
        `;

        // 添加点击事件
        const card = this.shadowRoot.querySelector('.card');
        card.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('song-click', {
                detail: { songId: data.id },
                bubbles: true,
                composed: true
            }));
        });
    }

    getSongData() {
        const dataAttr = this.getAttribute('song-data');
        if (dataAttr) {
            try {
                return JSON.parse(dataAttr);
            } catch (e) {
                console.error('Failed to parse song data:', e);
            }
        }
        return null;
    }
}

// 注册 Web Component
customElements.define('song-card', SongCard);


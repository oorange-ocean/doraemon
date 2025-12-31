// 电影卡片 Web Component
class FilmCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['film-data'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const data = this.getFilmData();
        if (!data) return;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 320px;
                    margin: 0.5rem;
                }

                .card {
                    position: relative;
                    background: linear-gradient(135deg, #EDE1CB 0%, #FFFFFF 100%);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 2px solid #2DB5FD;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(5, 100, 241, 0.3);
                    border-color: #0564F1;
                }

                .card-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        repeating-linear-gradient(0deg, transparent, transparent 18px, #26599F 18px, #26599F 19px),
                        repeating-linear-gradient(90deg, transparent, transparent 18px, #26599F 18px, #26599F 19px),
                        repeating-linear-gradient(0deg, transparent, transparent 36px, #0564F1 36px, #0564F1 37px),
                        repeating-linear-gradient(90deg, transparent, transparent 36px, #0564F1 36px, #0564F1 37px);
                    background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
                    opacity: 0.2;
                    pointer-events: none;
                    border-radius: 15px;
                }

                .cover-container {
                    position: relative;
                    width: 100%;
                    padding-top: 140%;
                    overflow: hidden;
                    background: linear-gradient(135deg, #2DB5FD, #0564F1);
                }

                .film-cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .card:hover .film-cover {
                    transform: scale(1.05);
                }

                .card-content {
                    padding: 1rem;
                    position: relative;
                    z-index: 5;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    background: rgba(255, 255, 255, 0.95);
                }

                .film-title-cn {
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: #0564F1;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                    min-height: 3em;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .film-title-jp {
                    font-size: 0.9rem;
                    color: #602B34;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                    min-height: 2.6em;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .film-info {
                    margin-top: auto;
                    padding-top: 0.75rem;
                    border-top: 1px solid rgba(45, 181, 253, 0.3);
                }

                .info-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 0.5rem;
                    font-size: 0.85rem;
                }

                .info-item:last-child {
                    margin-bottom: 0;
                }

                .info-label {
                    color: #26599F;
                    font-weight: 600;
                    min-width: 50px;
                    flex-shrink: 0;
                }

                .info-value {
                    color: #333;
                    flex: 1;
                    line-height: 1.4;
                }

                .release-date {
                    color: #D93C37;
                    font-weight: 600;
                }
            </style>
            <div class="card">
                <div class="card-grid"></div>
                <div class="cover-container">
                    <img src="${data.cover}" alt="${data.chinese_title}" class="film-cover" 
                         onerror="this.src='images/bg_detail.png'; this.onerror=null;">
                </div>
                <div class="card-content">
                    <div class="film-title-cn">${data.chinese_title}</div>
                    <div class="film-title-jp">${data.japanese_title}</div>
                    <div class="film-info">
                        <div class="info-item">
                            <span class="info-label">上映：</span>
                            <span class="info-value release-date">${data.release_date}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">主创：</span>
                            <span class="info-value">${data.creators}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 添加点击事件
        const card = this.shadowRoot.querySelector('.card');
        card.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('film-click', {
                detail: { filmId: data.id },
                bubbles: true,
                composed: true
            }));
        });
    }

    getFilmData() {
        const dataAttr = this.getAttribute('film-data');
        if (dataAttr) {
            try {
                return JSON.parse(dataAttr);
            } catch (e) {
                console.error('Failed to parse film data:', e);
            }
        }
        return null;
    }
}

// 注册 Web Component
customElements.define('film-card', FilmCard);


// 角色总览卡片 Web Component
class CharacterCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['character-data'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const data = this.getCharacterData();
        if (!data) return;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 300px;
                    margin: 1rem;
                }

                .card {
                    position: relative;
                    background: linear-gradient(135deg, #B8FFCD 0%, #FFFFCE 100%);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
                }

                .card-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        repeating-linear-gradient(0deg, transparent, transparent 19px, #1A72C6 19px, #1A72C6 21px),
                        repeating-linear-gradient(90deg, transparent, transparent 19px, #1A72C6 19px, #1A72C6 21px),
                        repeating-linear-gradient(0deg, transparent, transparent 39px, #0063C1 39px, #0063C1 41px),
                        repeating-linear-gradient(90deg, transparent, transparent 39px, #0063C1 39px, #0063C1 41px);
                    background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
                    opacity: 0.4;
                    pointer-events: none;
                    border-radius: 15px;
                }

                .image-container {
                    position: relative;
                    width: 100%;
                    padding-top: 100%;
                    overflow: hidden;
                }

                .character-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .ribbon {
                    position: absolute;
                    bottom: 20px;
                    left: -35px;
                    width: 130%;
                    height: 45px;
                    background: linear-gradient(135deg, #FF007F 0%, #FF3399 50%, #FF007F 100%);
                    transform: rotate(-8deg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
                    z-index: 10;
                    border-top: 2px solid rgba(255, 255, 255, 0.3);
                    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
                }

                .ribbon::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -12px;
                    width: 0;
                    height: 0;
                    border-left: 18px solid transparent;
                    border-right: 18px solid transparent;
                    border-top: 12px solid #CC0066;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                }

                .ribbon::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: -12px;
                    width: 0;
                    height: 0;
                    border-left: 18px solid transparent;
                    border-right: 18px solid transparent;
                    border-top: 12px solid #CC0066;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                }

                .brief-text {
                    color: white;
                    font-size: 0.95rem;
                    font-weight: 700;
                    text-align: center;
                    padding: 0 25px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    letter-spacing: 0.5px;
                }

                .card-content {
                    padding: 1rem;
                    position: relative;
                    z-index: 5;
                }

                .character-name {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #26599F;
                    text-align: center;
                    margin-bottom: 0.5rem;
                }

                .character-icon {
                    width: 60px;
                    height: 60px;
                    margin: 0 auto;
                    display: block;
                    border-radius: 50%;
                    border: 3px solid #2DB5FD;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                }
            </style>
            <div class="card">
                <div class="card-grid"></div>
                <div class="image-container">
                    <img src="${data.cover}" alt="${data.status.chinese_name}" class="character-image">
                    <div class="ribbon">
                        <div class="brief-text">${data.brief}</div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="character-name">${data.status.chinese_name}</div>
                    <img src="${data.icon}" alt="${data.status.chinese_name} icon" class="character-icon">
                </div>
            </div>
        `;

        // 添加点击事件
        const card = this.shadowRoot.querySelector('.card');
        card.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('character-click', {
                detail: { characterId: data.id },
                bubbles: true,
                composed: true
            }));
        });
    }

    getCharacterData() {
        const dataAttr = this.getAttribute('character-data');
        if (dataAttr) {
            try {
                return JSON.parse(dataAttr);
            } catch (e) {
                console.error('Failed to parse character data:', e);
            }
        }
        return null;
    }
}

// 注册 Web Component
customElements.define('character-card', CharacterCard);


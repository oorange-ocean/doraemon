// 道具卡片 Web Component
class GadgetCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['gadget-data'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const data = this.getGadgetData();
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
                    background: linear-gradient(135deg, #B8FFCD 0%, #FFFFCE 100%);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                }

                .card-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        repeating-linear-gradient(0deg, transparent, transparent 15px, #1A72C6 15px, #1A72C6 16px),
                        repeating-linear-gradient(90deg, transparent, transparent 15px, #1A72C6 15px, #1A72C6 16px),
                        repeating-linear-gradient(0deg, transparent, transparent 30px, #0063C1 30px, #0063C1 31px),
                        repeating-linear-gradient(90deg, transparent, transparent 30px, #0063C1 30px, #0063C1 31px);
                    background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
                    opacity: 0.25;
                    pointer-events: none;
                    border-radius: 12px;
                }

                .card-header {
                    padding: 1rem;
                    position: relative;
                    z-index: 5;
                    flex-shrink: 0;
                }

                .gadget-name {
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: #26599F;
                    margin-bottom: 0.3rem;
                    line-height: 1.3;
                }

                .gadget-name-en {
                    font-size: 0.85rem;
                    color: #602B34;
                    font-style: italic;
                    margin-bottom: 0.5rem;
                }

                .category-badge {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    background: linear-gradient(135deg, #2DB5FD, #0564F1);
                    color: white;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin-top: 0.5rem;
                }

                .card-body {
                    padding: 0 1rem 1rem;
                    position: relative;
                    z-index: 5;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .function-text {
                    font-size: 0.9rem;
                    color: #333;
                    line-height: 1.5;
                    margin-bottom: 0.75rem;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .main-user {
                    font-size: 0.8rem;
                    color: #666;
                    margin-top: auto;
                    padding-top: 0.5rem;
                    border-top: 1px solid rgba(45, 181, 253, 0.3);
                }

                .main-user-label {
                    color: #26599F;
                    font-weight: 600;
                }
            </style>
            <div class="card">
                <div class="card-grid"></div>
                <div class="card-header">
                    <div class="gadget-name">${data.chinese_name}</div>
                    <div class="gadget-name-en">${data.english_name}</div>
                    <span class="category-badge">${this.getCategoryName(data.category)}</span>
                </div>
                <div class="card-body">
                    <div class="function-text">${data.function}</div>
                    <div class="main-user">
                        <span class="main-user-label">主要使用者：</span>${this.getUserDisplayName(data.main_user)}
                    </div>
                </div>
            </div>
        `;

        // 添加点击事件
        const card = this.shadowRoot.querySelector('.card');
        card.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('gadget-click', {
                detail: { gadgetId: data.id },
                bubbles: true,
                composed: true
            }));
        });
    }

    getGadgetData() {
        const dataAttr = this.getAttribute('gadget-data');
        if (dataAttr) {
            try {
                return JSON.parse(dataAttr);
            } catch (e) {
                console.error('Failed to parse gadget data:', e);
            }
        }
        return null;
    }

    getCategoryName(category) {
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

    getUserDisplayName(user) {
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
}

// 注册 Web Component
customElements.define('gadget-card', GadgetCard);


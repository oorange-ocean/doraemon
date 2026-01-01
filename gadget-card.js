// 道具卡片 Web Component - TOP 30 版本
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

        // 确定图片格式（jpg或gif）
        const imageExt = data.image ? data.image.split('.').pop() : 'jpg';
        const imagePath = data.image || `images/gadget/${String(data.rank).padStart(2, '0')}.${imageExt}`;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 380px;
                    margin: 0.5rem;
                }

                .card {
                    position: relative;
                    background: linear-gradient(135deg, #2DB5FD 0%, #0564F1 100%);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(45, 181, 253, 0.3);
                    transition: all 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 32px rgba(45, 181, 253, 0.4);
                }

                .rank-badge {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: linear-gradient(135deg, #602B34, #D93C37);
                    color: #EDE1CB;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    z-index: 10;
                    box-shadow: 0 4px 12px rgba(96, 43, 52, 0.4);
                }

                .card-image-container {
                    width: 100%;
                    height: 240px;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                }

                .card-image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    transition: transform 0.3s ease;
                }

                .card:hover .card-image {
                    transform: scale(1.05);
                }

                .card-content {
                    padding: 1.5rem;
                    background: rgba(255, 255, 255, 0.95);
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .gadget-name {
                    font-size: 1.4rem;
                    font-weight: bold;
                    color: #0564F1;
                    margin-bottom: 0.5rem;
                    line-height: 1.3;
                }

                .gadget-name-alt {
                    font-size: 0.9rem;
                    color: #602B34;
                    margin-bottom: 1rem;
                    font-style: italic;
                }

                .description {
                    font-size: 0.95rem;
                    color: #333;
                    line-height: 1.6;
                    flex-grow: 1;
                }

                @media (max-width: 768px) {
                    :host {
                        max-width: 100%;
                    }

                    .card-image-container {
                        height: 200px;
                    }

                    .gadget-name {
                        font-size: 1.2rem;
                    }
                }
            </style>
            <div class="card">
                <div class="rank-badge">${data.rank}</div>
                <div class="card-image-container">
                    <img src="${imagePath}" alt="${data.chinese_name}" class="card-image" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'color: #999; font-size: 0.9rem;\'>图片加载失败</div>';">
                </div>
                <div class="card-content">
                    <div class="gadget-name">${data.chinese_name}</div>
                    ${data.alternative_name ? `<div class="gadget-name-alt">${data.alternative_name}</div>` : ''}
                    <div class="description">${data.description}</div>
                </div>
            </div>
        `;
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
}

// 注册 Web Component
customElements.define('gadget-card', GadgetCard);

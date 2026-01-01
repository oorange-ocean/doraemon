// 道具页面逻辑 - TOP 30 版本
document.addEventListener('DOMContentLoaded', function () {
    const gadgetsGrid = document.getElementById('gadgetsGrid');

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
    }

    // 渲染道具卡片
    function renderGadgets(gadgets) {
        gadgetsGrid.innerHTML = '';

        gadgets.forEach(gadget => {
            const card = document.createElement('gadget-card');
            card.setAttribute('gadget-data', JSON.stringify(gadget));
            gadgetsGrid.appendChild(card);
        });
    }

    // 初始化
    init();
});

// 汉堡菜单功能
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('navMenu');
    const navMenuLinks = document.querySelectorAll('.nav-menu-link');

    // 切换导航菜单
    function toggleNavMenu() {
        if (navMenu && hamburger) {
            const isActive = navMenu.classList.contains('active');

            if (isActive) {
                // 关闭菜单
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            } else {
                // 打开菜单
                navMenu.classList.add('active');
                hamburger.classList.add('active');
            }
        }
    }

    // 点击汉堡菜单切换导航菜单
    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleNavMenu();
        });
    }

    // 点击导航链接后关闭菜单
    navMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function (e) {
        if (navMenu && hamburger && navMenu.classList.contains('active')) {
            // 如果点击的不是导航菜单或汉堡按钮，则关闭菜单
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // 按 ESC 键关闭菜单
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });

    // 回到顶部功能
    initBackToTop();

    // 可展开内容功能
    initExpandableContent();
});

// 可展开内容功能
function initExpandableContent() {
    const expandButtons = document.querySelectorAll('.expand-toggle');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            
            if (content) {
                const isExpanded = content.classList.contains('expanded');
                
                if (isExpanded) {
                    // 收起
                    content.classList.remove('expanded');
                    this.classList.remove('expanded');
                } else {
                    // 展开
                    content.classList.add('expanded');
                    this.classList.add('expanded');
                }
            }
        });
    });
}

// 回到顶部功能
function initBackToTop() {
    // 创建回到顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', '回到顶部');
    document.body.appendChild(backToTopBtn);

    // 监听滚动事件
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // 当滚动超过300px时显示按钮
                if (scrollTop > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // 点击按钮回到顶部
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


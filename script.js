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
});


const customHomepageLink = document.getElementById('customHomepageLink');
if (customHomepageLink) {
    customHomepageLink.addEventListener('click', function() {
        window.open('https://theonegingerguy.github.io/custom-homepage/', '_blank');
    });
}

const clockWorkLink = document.getElementById('clockWorkLink');
if (clockWorkLink) {
    clockWorkLink.addEventListener('click', function() {
        window.open('https://theonegingerguy.github.io/web-design/', '_blank');
    });
}

const miniGameLink = document.getElementById('miniGameLink');
if (miniGameLink) {
    miniGameLink.addEventListener('click', function() {
        window.open('https://theonegingerguy.github.io/Mini-Game-Project/', '_blank');
    });
}

const follower = document.getElementById('follower');
if (follower) {
    document.addEventListener('mousemove', (e) => {
        follower.style.left = `${e.clientX}px`;
        follower.style.top = `${e.clientY}px`;
    });
}

const hexConfig = {
    '.htmlWrapper':   100,
    '.cssWrapper':    100,
    '.jsWrapper':     65,
    '.pythonWrapper': 35,
    '.reactWrapper':  1,
};

const HEX_SPEED = 0.08;

Object.entries(hexConfig).forEach(([selector, fillPercent]) => {
    const wrapper = document.querySelector(selector);
    if (!wrapper) return;

    let animFrame;
    let current = 0;

    function animateTo(target) {
        cancelAnimationFrame(animFrame);
        function step() {
            current += (target - current) * HEX_SPEED;
            if (Math.abs(target - current) < 0.5) current = target;
            wrapper.style.setProperty('--hex-pct', current.toFixed(1) + '%');
            if (current !== target) animFrame = requestAnimationFrame(step);
        }
        step();
    }

    wrapper.addEventListener('mouseenter', () => animateTo(fillPercent));
    wrapper.addEventListener('mouseleave', () => animateTo(0));
});

const fadeSections = document.querySelectorAll('.section-fade');

function handleScrollFade() {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.bottom < windowHeight * 0.1) {
            section.classList.add('faded');
        } else {
            section.classList.remove('faded');
        }
    });
}

window.addEventListener('scroll', handleScrollFade, { passive: true });
handleScrollFade();
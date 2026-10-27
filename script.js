// ==========================================
// NAVBAR — muda aparência ao rolar a página
// ==========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.style.background = 'rgba(26, 18, 8, 0.98)';
        navbar.style.padding = '0.9rem 2.5rem';
    } else {
        navbar.style.background = 'rgba(26, 18, 8, 0.85)';
        navbar.style.padding = '1.25rem 2.5rem';
    }
});

// ==========================================
// ANIMAÇÃO DE ENTRADA AO ROLAR (Scroll reveal)
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Aplica animação em cards e seções
document.querySelectorAll('.servico-card, .galeria-item, .diferencial, .contato-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// SCROLL SUAVE para links internos
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// DESTAQUE das seções no hover (mantendo sua ideia original)
// ==========================================
document.querySelectorAll('section').forEach(secao => {
    secao.addEventListener('mouseenter', () => {
        secao.style.borderLeft = '4px solid #c8860a';
    });
    secao.addEventListener('mouseleave', () => {
        secao.style.borderLeft = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // 1. スムーススクロール
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. IntersectionObserverでフェードイン
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // 3. フォーム簡易バリデーション
    const reserveForm = document.getElementById('reserve-form');
    const formError = document.getElementById('form-error');
    if (reserveForm) {
        reserveForm.addEventListener('submit', (e) => {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');

            if (!nameInput.value || !emailInput.value) {
                e.preventDefault(); // 送信をブロック
                if(formError) formError.style.display = 'block';
            } else {
                if(formError) formError.style.display = 'none';
                // 送信成功時の処理（ここではダミー）
                // alert('送信しました！');
            }
        });
    }

});
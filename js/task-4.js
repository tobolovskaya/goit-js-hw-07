document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Запобігає перезавантаженню сторінки

        const { elements } = this;
        const email = elements.email.value.trim();
        const password = elements.password.value.trim();

        if (!email || !password) {
            alert('All form fields must be filled in');
            return;
        }

        const formData = {
            email,
            password
        };

        console.log(formData); // Вивід об'єкту з даними форми в консоль

        this.reset(); // Очищення форми після відправлення
    });
});


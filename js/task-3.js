document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');

    input.addEventListener('input', () => {
        const trimmedInput = input.value.trim();
        output.textContent = trimmedInput ? trimmedInput : "Anonymous";
    });
});

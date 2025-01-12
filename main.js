const emojis = document.querySelectorAll('.emoji');
const resultDiv = document.getElementById('result');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        const rating = emoji.previousElementSibling.value; 
        resultDiv.textContent = `Thank you! for Rating: ${rating} : ${emoji.textContent}`;
    });
});
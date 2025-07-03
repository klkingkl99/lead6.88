
let tapCount = 0;
const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const claimButton = document.getElementById('claimButton');
const spinSound = document.getElementById('spinSound');

giftBox.addEventListener('click', () => {
    spinSound.play();  // ✅ 每次点击 gift 都播放音乐（不限制一次）

    tapCount++;
    giftBox.style.transform = 'scale(0.95)';
    setTimeout(() => {
        giftBox.style.transform = 'scale(1)';
    }, 150);

    if (tapCount === 1) {
        message.innerText = "🔁 CLICK MORE!";
    } else {
        message.innerText = "🎉 TAHNIAH! ANDA DAPAT 6.88";
        message.classList.add("animate");
        claimButton.style.display = 'inline-block';
    }
});

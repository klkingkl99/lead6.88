
let tapCount = 0;
const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const claimButton = document.getElementById('claimButton');
const spinSound = document.getElementById('spinSound');
const tipsButton = document.getElementById('tipsButton');
const tipsDisplay = document.getElementById('tipsDisplay');

const tips = [
    "🐬 Great Blue sesuai main jam 3-4 pagi!",
    "🔥 Safari Heat senang trigger free spin malam Jumaat.",
    "🚚 Highway Kings power kalau ID ending 88!",
    "🌑 Panther Moon lucky kalau topup lepas tengah malam.",
    "💰 Captain's Treasure sesuai main bila tak ramai orang online.",
    "🌿 Amazon Jungle best bila tekan slow2, jangan auto.",
    "🐟 Ocean King main lepas cuci kadang bagi balik.",
    "🐻 Bonus Bears keluar free game selang-selang 15 minit.",
    "🧞 Aladdin Wishes sesuai ID hujung nombor 1, 7, 9.",
    "🐬 Dolphin Reef sesuai player perempuan, smooth rate.",
    "🌊 Seaworld kadang2 bagi dalam 20x spin pertama."
];

giftBox.addEventListener('click', () => {
    spinSound.play();
    tapCount++;
    giftBox.style.transform = 'scale(0.95)';
    setTimeout(() => {
        giftBox.style.transform = 'scale(1)';
    }, 150);

    if (tapCount === 1) {
        message.innerText = "🔁 CLICK MORE!";
    } else {
        message.innerText = "🎉 Welcome Bonus 50% 🎁 Min In RM10";
        message.classList.add("animate");
        claimButton.style.display = 'inline-block';
    }
});

let tipsClickCount = 0;
tipsButton.addEventListener('click', () => {
    if (tipsClickCount < 3) {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipsDisplay.innerText = randomTip;
        tipsClickCount++;
        if (tipsClickCount === 3) {
            tipsButton.disabled = true;
            tipsButton.innerText = "✅ Cukup 3x Tips!";
        }
    }
});

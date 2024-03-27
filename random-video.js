// Array of YouTube video IDs
const videos = [
    'v3gEi92np9k',
    '9k4Mhg9vMHw',
    'vYzNVSKRbyE',
    'iAhxyvycIXY',
    '5SM-Sb83U9s',
    'JUz6nKfXM6o',
    'lewx_yiP_80',
    'HXGbJO3a4OM',
    'Tg_QnOV7RK0',
    'lAplMOEJ0O0'
];

function loadRandomVideo() {
    let randomIndex = Math.floor(Math.random() * videos.length);
    let videoId = videos[randomIndex];
    let iframeSrc = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('video-frame').src = iframeSrc;
}

// Load a random video when the page loads
window.onload = loadRandomVideo();

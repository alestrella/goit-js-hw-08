import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
addEventListener('DOMContentLoaded', pageInit);

function onPlay(data) {
    const currentTime = JSON.stringify(data.seconds);
    localStorage.setItem(STORAGE_KEY, currentTime);
};

function pageInit() {
    const savedTime = localStorage.getItem(STORAGE_KEY);

    if (savedTime) {
        player.setCurrentTime(JSON.parse(savedTime));
    } 
}


import Player from "@vimeo/player";

const iframe = document.querySelector('iframe')

const player = new Player(iframe);

 player.on('timeupdate', function(data) {
        localStorage.setItem('videoplayer-current-time', data.seconds)
 });
 let currentTime = localStorage.getItem('videoplayer-current-time')
    
player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
    

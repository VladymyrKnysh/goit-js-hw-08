
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe')

const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time'

player.setCurrentTime(+localStorage.getItem(STORAGE_KEY))

player.on('timeupdate', throttle(onTimeupdate, 1000))
 
function onTimeupdate(params) {
   localStorage.setItem(STORAGE_KEY, params.seconds) 
}
        

    
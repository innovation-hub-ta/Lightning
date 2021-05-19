import { Lightning, VideoPlayer, Utils } from '@lightningjs/sdk'


export default class Player extends Lightning.Component {

  // static _template () {
  //     return {
  //         VideoPlayer: { type: VideoPlayer },
  //     };
  // }

  _firstActive() {
    VideoPlayer.consumer(this);
    const videoUrl = Utils.asset('particles.mp4');
    const myLoader = (videoUrl, videoEl, config) => {
      return new Promise(resolve => {
        videoEl.setAttribute('src', videoUrl)
        videoEl.load()
        resolve()
      })
    }

    VideoPlayer.loader(myLoader);
    VideoPlayer.open(videoUrl);
    VideoPlayer.mute(true);
    VideoPlayer.close();
  }


}
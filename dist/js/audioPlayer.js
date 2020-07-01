class AudioPlayer{
  constructor(src, name, num){
    this.wrap_audio = document.createElement('li');
    this.wrap_audio.setAttribute('class', 'wrap_audio');
    this.wrap_audio.setAttribute('id', 'audio=' + num);

    this.player = document.createElement('audio');
    this.player.setAttribute('controls', true);
    this.player.setAttribute('src', src);
    this.player.setAttribute('loop', true);
    this.player.setAttribute('autoplay', true);
    this.player.setAttribute('name', 'audio');

    this.button_remove = document.createElement('button');
    this.button_remove.name = 'remove=' + num;
    this.button_remove.innerHTML = '削除';

    this.name = document.createElement('div');
    this.name.innerHTML = name;

    this.wrap_audio.appendChild(this.name);
    this.wrap_audio.appendChild(this.player);
    this.wrap_audio.appendChild(this.button_remove);
  }
  obj(){
    return this.wrap_audio;
  }
  play(){
    this.player.play();
  }
  pause(){
    this.player.pause();
  }
  delete(){
    this.wrap.removeChild(this.wrap_audio);
  }
}

export default AudioPlayer;
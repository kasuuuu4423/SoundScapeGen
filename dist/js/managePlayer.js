import AudioPlayer from "./audioPlayer.Js";

class ManagePlayer{
  constructor(){
    this.wrap = document.getElementById('wrap');

    this.audio_ul = document.createElement('ul');
    this.audio_ul.className = 'ul_audio';

    this.button_ul = document.createElement('ul');
    this.button_ul.className = 'ul_button'

    this.players = [];

    var text = readTextFile("assets/audio/list.inc");
    let list = splitComma(text);
    this.list_audio = [];
    this.count_list = 0;
    for(let i = 0; i < list.length; i++){
      let li = document.createElement('li');
      let audioText = document.createElement('button');
      audioText.innerHTML = list[i];
      audioText.name = 'audio=' + list[i];
      li.appendChild(audioText);
      this.button_ul.appendChild(li);
    }
    this.wrap.addEventListener('click', (e) => {
      let target = e.target;
      let name = target.name;
      try{
        name = name.split('=');
      }
      catch(e){
        console.log(name);
        console.log(e);
      }
      if(name[0] == 'audio'){
        this.players[this.count_list] = new AudioPlayer("./assets/audio/" + name[1] + ".mp3", name[1], this.count_list);
        let test  = this.players[this.count_list].obj();
        this.audio_ul.appendChild(test);
        this.count_list++;
      }
      else if(name[0] == 'remove'){
        let removeItem = document.getElementById('audio=' + name[1]);
        this.audio_ul.removeChild(removeItem);
        delete this.players[parseInt(name[1])];
      }
    });
    this.wrap.appendChild(this.button_ul);
    this.wrap.appendChild(this.audio_ul);
  }
  add_player(){
    this.players.push(new AudioPlayer("./assets/audio/camera.mp3"));
  }
}

const readTextFile = (file) => {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  var result;
  rawFile.onreadystatechange = function (){
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              result = rawFile.responseText;
          }
      }
  }
  rawFile.send(null);
  return result;
}

const splitComma = (text) => {
  let result = text.split(',');
  return result;
}


export default ManagePlayer;
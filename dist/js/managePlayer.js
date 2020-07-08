import AudioPlayer from "./audioPlayer.Js";

class ManagePlayer{
  constructor(){
    this.wrap = document.getElementById('wrap');

    this.wrap_audio = document.createElement('div');
    this.wrap_audio.className = 'audio';
    this.wrap_button = document.createElement('div');
    this.wrap_button.className = 'button';

    this.audio_ul = document.createElement('ul');
    this.audio_ul.className = 'ul_audio';

    this.button_ul = document.createElement('ul');
    this.button_ul.className = 'ul_button'

    this.players = [];

    var text = readTextFile("assets/audio/list.inc");
    let list = text.split('\n');
    this.list_audio = [];
    this.count_list = 0;
    for(let i = 0; i < list.length; i++){
      let li = document.createElement('li');
      let audioText = document.createElement('button');
      let filedata = list[i].split(',');
      audioText.innerHTML = filedata[1];
      audioText.name = 'audio=' + filedata[0];
      li.appendChild(audioText);
      this.button_ul.appendChild(li);
    }
    this.wrap.addEventListener('click', (e) => {
      let target = e.target;
      let name = target.name;
      let inner = target.innerHTML;
      try{
        name = name.split('=');
        if(name[0]){
          if(name[0] == 'audio'){
            this.players[this.count_list] = new AudioPlayer("./assets/audio/" + name[1] + ".mp3", inner, this.count_list);
            let test  = this.players[this.count_list].obj();
            this.audio_ul.appendChild(test);
            this.count_list++;
          }
          else if(name[0] == 'remove'){
            let removeItem = document.getElementById('audio=' + name[1]);
            this.audio_ul.removeChild(removeItem);
            delete this.players[parseInt(name[1])];
          }
        }
      }
      catch(e){
        //エラー出まくりの対処try
      }
    });
    this.wrap_button.appendChild(this.button_ul);
    this.wrap_audio.appendChild(this.audio_ul);
    this.wrap.appendChild(this.wrap_button);
    this.wrap.appendChild(this.wrap_audio);
  }
  add_player(filename){
    this.players.push(new AudioPlayer("./assets/audio/" + filename + ".mp3"));
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

export default ManagePlayer;
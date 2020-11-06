export default class Player{
    player;
    constructor(src){
        this.player = this.createPlayer(src);
    }

    createPlayer(src){
        let player = document.createElement('div');
        let audio = document.createElement('audio');
        audio.setAttribute('src', src);
        player.appendChild(audio);
        audio = this.format_playerSetting(audio);
        return player;
    }
    format_playerSetting(player){
        player.setAttribute('autoplay', true);
        player.setAttribute('controls', true);
        player.setAttribute('loop', true);
    }
}
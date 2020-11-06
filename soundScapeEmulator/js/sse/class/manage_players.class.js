import AudioPlayer from './audioPlayer.class.js';
import Config from "../config.js";
import Util from './util.class.js';

export default class Manage_player{
    players = [];wrap_players;config;util;

    constructor(){
        this.wrap_players = document.getElementById('players');
        this.config = new Config();
        this.util = new Util();
    }
    addPlayer(name, num, text){
        let src = this.config.root + '/assets/audio/' + name + '.mp3';
        let player = new AudioPlayer(src, name, num, text);
        this.players.push([player.player, player.uniqueName, player.num]);
        this.wrap_players.appendChild(player.player);
    }
    removePlayer(name){
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i][1] == name){
                this.wrap_players.removeChild(this.players[i][0]);
                this.players.splice(i, 1);
            }
        }
    }
    renamePlayer(name, num){
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i][2] === num){
                this.players[i][0].innerText = name;
            }
        }
    }
    change_input(name){
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i][1] == name){
                let text = this.players[i][0].getElementsByClassName('playName')[0];
                text.style.display = 'none';
                let btn_change = this.players[i][0].getElementsByClassName('btn_rename')[0];
                btn_change.innerText = '完了';
                let input = this._create_input_text();
                this.players[i][0].insertBefore(input, this.players[i][0].firstChild);
                console.log(this.players[i][0]);
            }
        }
    }
    change_text(name, num){
        let result = "";
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i][1] == name){
                let text = this.players[i][0].getElementsByClassName('playName')[0];
                let input = this.players[i][0].getElementsByClassName('playName_input')[0];
                text.innerText = input.value;
                result = input.value;
                for(let j = 0; j < this.players.length; j++){
                    if(this.players[j][2] == num){
                        let item_text = this.players[j][0].getElementsByClassName('playName')[0];
                        item_text.innerText = input.value;
                    }
                }
                text.style.display = 'block';
                this.players[i][0].removeChild(input);
                let btn_change = this.players[i][0].getElementsByClassName('btn_rename')[0];
                btn_change.innerText = '名前を変える'
            }
        }
        return result;
    }
    _create_input_text(){
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('playName_input');
        return input;
    }
}
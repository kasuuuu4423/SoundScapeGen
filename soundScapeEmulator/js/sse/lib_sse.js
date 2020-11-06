import Player from "./class/player.class.js";
import LoadCSV from "./class/loadCSV.class.js";
import Manage_names from "./class/manage_names.class.js";

export default class SSE{
    players;
    audioNames = [];
    MN;
    names;
    wrap;
    constructor(){
        this.players = [new Player];
        this.wrap = document.getElementById('sse');
        this.wrap = this.addWrappers(this.wrap);
        this.MN = new Manage_names();
        const csv = new LoadCSV('./assets/list.csv');
        csv.request.addEventListener('load', (e)=>{
            this.names = csv.data;
            for(let i = 0; i < this.names.length; i++){
                this.MN.addName(this.names[i][0]);
            }
        });
    }
    addWrappers(wrap){
        let names = document.createElement('div');
        names.id = 'names';
        wrap.appendChild(names);
        let players = document.createElement('div');
        players.id = 'players';
        wrap.appendChild(players);
        return wrap;
    }
    observe(){
        
    }
    //イベントリスナー関係はイベントリッスン管理をそのクラスで行って，コールバック関数で処理を実行？？
}
import LoadCSV from "./class/loadCSV.class.js";
import Manage_names from "./class/manage_names.class.js";
import Manage_players from "./class/manage_players.class.js";
import Config from "./config.js";
import Util from './class/util.class.js';

export default class SSE{
    players;audioNames = [];csv;csvData;MN;MP;names;wrap;config;util;
    constructor(){
        this.wrap = document.getElementById('sse');
        this.wrap = this.addWrappers(this.wrap);
        this.config = new Config();
        this.util = new Util();
        this.MN = new Manage_names();
        this.MP = new Manage_players();
        this.csv = new LoadCSV(this.config.root + '/assets/list.csv');
        this.csv_event(this.csv);
        this.click_event();
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
    csv_event(csvInstance){
        csvInstance.request.addEventListener('load', (e)=>{
            this.names = csvInstance.data;
            for(let i = 0; i < this.names.length; i++){
                this.MN.addName(this.names[i][0]);
            }
        });
    }
    click_event(){
        document.addEventListener('click', (e)=>{
            let class_target = e.target.classList;
            if(class_target[0] === 'name'){
                this.click_event_name(e.target);
            }
            else if(class_target[0] === 'btn_remove'){
                this.click_event_remove(e.target);
            }
            else if(class_target[0] === 'btn_rename'){
                this.click_event_rename(e.target);
            }
        });
    }
    click_event_name(target){
        let data_name = target.getAttribute('data-name');
        let data_num = target.getAttribute('data-num');
        let text = target.innerHTML;
        this.MP.addPlayer(data_name, data_num, text);
    }
    click_event_remove(target){
        let data_name = target.getAttribute('data-name');
        this.MP.removePlayer(data_name);
    }
    click_event_rename(target){
        let data_num = target.getAttribute('data-num');
        let data_name = target.getAttribute('data-name');
        if(target.classList.contains('change')){
            let text = this.MP.change_text(data_name, data_num);
            this.MN.change_text(data_num, text);
            target.classList.remove('change');
        }
        else{
            this.MP.change_input(data_name);
            target.classList.add('change');
        }
    }
}
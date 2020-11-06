import AudioNames from "./audioName.class.js";

export default class Manage_Names{
    names = [];
    AN;
    wrap_names;
    constructor(){
        this.wrap_names = document.getElementById('names');
    }
    addName(name){
        let obj_name = new AudioNames(name);
        this.names.push(obj_name);
        this.wrap_names.appendChild(obj_name);
    }
}
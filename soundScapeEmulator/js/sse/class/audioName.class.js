export default class AudioName{
    name;
    constructor(name){
        this.name = document.createElement('div');
        this.name.innerText = name;
        return this.name;
    }
}
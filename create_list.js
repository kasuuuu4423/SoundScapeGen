const fs = require('fs');
const NodeID3 = require('node-id3');
const { create } = require('browser-sync');
const jschardet = require('jschardet');
const iconv = require('iconv-lite');

const dir = './dist/assets/audio/';
const name = 'list.inc';

let filenames = [];
let array_list = [];

fs.readdir(dir, (err, files) => {
  create_file(dir, name);
  files.forEach(file => {
    let name = file.split('.');
    if(name[1] == 'mp3'){
      let tag = NodeID3.read(dir + file)['title'];
      // var detectResult = jschardet.detect(tag);
      // if(detectResult['encoding'] == 'UTF-8'){
      //   tag = iconv.encode(tag, 'ISO-8859-1');
      //   console.log(tag);
      // }
      // console.log(detectResult);
      filenames.push(name[0]);
      array_list.push(tag + ',' + name[0] + '\n');
    }
  });
  array_list = array_list.sort((x, y) => x.localeCompare(y, 'ja'));
  array_list.forEach(item => {
    try{
      let temp = item;
      if (item == array_list[array_list.length - 1]){
        temp = temp.slice(0, -3);
        console.log('last')
      }
      fs.appendFileSync(dir + name, temp);
      console.log('Done Writing!');
    }
    catch(e){
      console.log(e);
    }
  });
  //console.log(array_list);
});

const create_file = (dir, name) => {
  try{
    fs.writeFileSync(dir + name, "");
    console.log('Done Creating file!')
  }
  catch(e){
    console.log(e);
  }
}
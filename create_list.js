const fs = require('fs');
const NodeID3 = require('node-id3');

const dir = './dist/assets/audio/';

let filenames = [];
fs.readdir(dir, (err, files) => {
    try{
      fs.writeFileSync("./dist/assets/audio/list.inc", "");
      console.log('Done Creating file!')
    }
    catch(e){
      console.log(e);
    }
    files.forEach(file => {
      let name = file.split('.');
      if(name[1] == 'mp3'){
        let tag = NodeID3.read(dir + file)['title'];
        filenames.push(name[0]);
        try {
          fs.appendFileSync("./dist/assets/audio/list.inc", name[0] + ',' + tag + '\n');
          console.log('Done Writing!');
        }
        catch(e){
          console.log(e);
        }
      }
    });
    console.log(filenames);
});

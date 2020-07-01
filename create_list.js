const fs = require('fs');

let filenames = [];
fs.readdir('./dist/assets/audio/', (err, files) => {
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
        filenames.push(name[0]);
        try {
          fs.appendFileSync("./dist/assets/audio/list.inc", name[0] + ',');
          console.log('Done Writing!');
        }
        catch(e){
          console.log(e);
        }
      }
    });
    console.log(filenames);
});

const Fs = require('fs');
const colors = require('./final.json')
function writeToFile (data, path) {  
  const json = JSON.stringify(data, null, 2)

  Fs.writeFile(path, json, (err) => {
    if (err) {
      console.error(err)
      throw err
    }

    console.log('Saved data to file.')
  })
};

let res = [];

const final = colors.map(item =>{
    let res = {key:item.abv, duo:item.duo, name:item.team, logo:item.img, theme:{primary:item.colors[0].HEX, secondary:item.colors[1].HEX, alt:item.colors[2].HEX}}
    return res
})

writeToFile(final, 'finall.json')
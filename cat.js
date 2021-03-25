const fs = require('fs') 
// les const
const path = `./${process.argv[2]}`

// les test 
if(process.argv.length !== 3){
  console.log(`Error: only fileame.txt exepted`)
  process.exit(1)
}

if(!fs.existsSync(path)){
  console.log(`Error: Such a file does not exist`)
  process.exit(1)
}

let test = fs.statSync(process.argv[2])

if(!test.isFile()){
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}


const txt = fs.readFileSync(process.argv[2],'utf-8')
console.log(txt)
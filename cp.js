const fs = require('fs') 
// les const
const srcPath = `./${process.argv[2]}`
const tgtPath = `./${process.argv[3]}`

// les test 
if(process.argv.length !== 4){
  console.log(`Error: srcFile and targetFile exepted`)
  process.exit(1)
}

if(!fs.existsSync(srcPath)){
  console.log(`Error: srcFile does not exist`)
  process.exit(1)
}

let srcTest = fs.statSync(srcPath)

if(!srcTest.isFile()){
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}
let txt = fs.readFileSync(srcPath,'utf8')
fs.writeFileSync(tgtPath,txt)

console.log(`${srcPath} copied to ${tgtPath}`)


const fs = require('fs') 
const path = `./${process.argv[2]}`

// les test 
if((process.argv.length <= 4)){
  console.log(`Error: this command exepts only two arg`)
  process.exit(1)
}
if(process.argv[3] !== '-n'){
  console.log(`Error: this command exepts only -n for second arg`)
  process.exit(1)
}
if(!fs.existsSync(path)){
  console.log(`Error: srcFile does not exist`)
  process.exit(1)
}

const txt = fs.readFileSync('file.txt','utf-8')
const lineT = txt.split(`\n`)

if(process.argv[3] === '-n'){
  console.log(path)
  console.log(lineT.slice((lineT.length)-10).length)
}else{
 // console.log(lineT.slice((lineT.length)-10))
}


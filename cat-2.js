const fs = require('fs') 
// les const
let path = `./`
let test =''
// les test 
if(process.argv.length <= 2){
  console.log(`Error: at least one file exepted`)
  process.exit(1)
}
for(let i = 2 ; i<process.argv.length ; ++i){
  path = `./${process.argv[i]}`
  if(!fs.existsSync(process.argv[i])){
    console.log(`Error: ${process.argv[i]} Such a file does not exist`)
    process.exit(1)
  }

  test = fs.statSync(process.argv[i])
  
  if(!test.isFile()){
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
  }

  const txt = fs.readFileSync(process.argv[2],'utf-8')
  console.log(txt)
}



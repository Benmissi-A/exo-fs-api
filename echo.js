if(process.argv.length === 2){
  console.log(`Error: you need to write something in the command line`)
  process.exit(1)
}

let str =''
for(let i = 2 ; i<process.argv.length ; ++i){
  str += ` ${process.argv[i]}`
}
console.log(str.trim())
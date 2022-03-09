const args = process.argv.slice(2)
function reverse(args){
  for(let i = 0; i < args.length; i++){
  let reverseString = ''
    for(let j = args[i].length-1; j >= 0; j--){
      reverseString += args[i][j]
      }
  console.log(reverseString)
  }
}
reverse(args)

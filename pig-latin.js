const args = process.argv.slice(2);
let translate = function(args) {
  let translateString = '';
  for (let i = 0; i < args.length; i++) {
    translateString += args[i].slice(1) + args[i][0] + "ay" + " ";
  }console.log(translateString.trim());
};
translate(args);

// node pig-latin.js pig latin
// igpay atinlay

// node pig-latin.js this is all just gibberish
// histay siay llaay ustjay ibberishgay

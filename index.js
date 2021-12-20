function palindrome(str) {
var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ");
var finalString = punctuationless.replace(/\s{2,}/g," ");
finalString=finalString.replace(/\s+/g, "").toLowerCase();;
var pol="";
console.log("finalString:", finalString);
//for(let i=finalString.lenght; i>=0; i--){
var i = finalString.length;
while (i--) {
  pol=finalString.split('').reverse().join(''); 
  
  console.log("pol:", pol);
}
if(pol===finalString){
    console.log("is a pol");
    return true;
  }
  else{
    return false;
  }

  
}

palindrome("eye");

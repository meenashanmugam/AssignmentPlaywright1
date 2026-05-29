
function checknumber(number)
{
    var number=0;

 if(number > 0) {
     return "Positive";
 } else if(number < 0) {
     return "Negative";
 } else {
     return "Zero";
 }
}
var result=checknumber(-4);
console.log(result);

let name="level"
let reverse="";
let length=name.length
{
for(let i=length-1; i>=0; i--)
{
    let charAT=name[i];
    reverse=reverse.concat(charAT);
}
console.log(reverse);

if (reverse===name) {
    console.log("it is a palindrome");

}
else{
    console.log("it is not a palindrome");
}

}
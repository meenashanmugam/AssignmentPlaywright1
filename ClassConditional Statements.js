
let browserName="chrome"
let testType="default"

function launchBrowser()
{
if(browserName=="chrome")
{
console.log("launching chrome browser");
}
else if(browserName=="edge")
{
    console.log("launching edge browser");
}
else if(browserName=="firefox")
{
    console.log("launching firefox browser");
}
else{
    console.log("please provide valid browser name");   
}
}
function runTests()
{
switch (testType) {
    case "smoke":
        console.log("running smoke tests");
        break;
case "sanity":
    console.log("running sanity tests");
    break;
case "regression":
    console.log("running regression tests");
    break;
    default:
        console.log("running the smoke tests");
        break;
}
}
launchBrowser();
runTests();
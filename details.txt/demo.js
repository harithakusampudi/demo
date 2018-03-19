
var fs = require("fs");

// console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("sample.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON

 console.log("User Name is ",jsonContent.name);
 console.log("age is ", jsonContent.age);
 console.log("sex is ", jsonContent.sex);
 console.log("hobbies are" );

 for (var i in jsonContent.hobbies) {
     var x = jsonContent.hobbies[i];
    console.log( x +" ");
}
    //document.getElementById("demo").innerHTML = x;
 //consloe.log("\n *EXIT* \n");

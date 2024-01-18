
 const fs =  require('fs');
 const generator = require('generate-password');
 const password = generator.generate({
	length: 10,
	numbers: true
});
console.log("password", password)
 fs.readFile("task.txt", (error,data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data.toString())
 })


const threads = require("./index")

threads(username, type).then(result=>{
    console.log("Successfully")
    console.log(result)
}).catch(err=>{
    console.error(err)
})

// Promise takes a single function as an argument called the "executor"
// The function takes two arguments: "resolve" and "reject"
// if the executor succeeds "resolve" is called
// if it fails or throws an error "reject" is called
// both "resolve" and "reject" can take a single parameter

function alarm(person, delay) {
    return new Promise((resolve,reject)=>{
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative")
        }
        setTimeout(()=>{
            resolve(`Wake up, ${person}`)
        },delay)
    })
}

console.log("waiting for alarm call - 1 second")

alarm("Dave", 1000)
    .then(message=>{
        console.log(message)
    })
    .catch(error=>{
        console.error(error)
    })

    
// Promises also work with async / await
!(
    async function(){
        console.log("waiting for await alarm call - 2 seconds")
        try {
            const message = await alarm("Chris", 2000)
            console.log(message)
        } catch (error) {
            console.error("Couldn't set alarm: " + error)
        }
    }
)()
/* --- INTRO --- */

// Long-running functions prevent any other lines from executing until finished
// Allows other js to run while longer tasks are running

// Synchronous
// Runs one line at a time in order
const num1 = 24
const num2 = 12
const sum = num1 + num2
console.log(`The sum of ${num1} + ${num2} is ${sum}`)

// Asynchronous
// Starts process then uses a listener / callback function to respond to once completed
fetch("https://raw.githubusercontent.com/mdn/content/main/files/jsondata/SpecData.json").then(()=>console.log("Fetch Completed"))
console.log("Runs Before 'fetch'")


/* --- PROMISES --- */

/* --- PROMISE BASED API --- */

/* --- WORKERS --- */

/* --- SEQUENCING ANIMATIONS --- */

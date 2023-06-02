// Oject (Promise) return by async function that provides methods 
// to handle events of an operation once completed

// -- Terminology --
//  States
//   pending   : promise created; not succeeded of failed yet
//   fulfilled : async function succeeded; .then() is called
//   rejected  : async function failed; .catch() is called

const fetchPromise1 = fetch("https://raw.githubusercontent.com/mdn/content/main/files/jsondata/SpecData.json")
fetchPromise1.then((res)=>{
    console.log("Fetch Status: " + res.status)

    // chaining responses
    res.json().then(json=>{
        console.log("JSON Received")
    })
})


// Reformat To Promise Chaining

const fetchPromise2 = fetch("https://raw.githubusercontent.com/mdn/content/main/files/jsondata/SpecData.json")

fetchPromise2
    .then(res=>{
        // manually check for error
        // if (!res.ok) {
        //     throw new Error("Error: " + res.status)
        // }
        res.json()
    })
    .then(json=>{
        console.log("JSON Received")
    })
    // Use 'catch' to check for error
    .catch(error=>{
        console.error("Error: " + error)
    })



// Promise.all : wait for all non-dependent async function to complete

// If all succeed .then() is called
// If any fail .catch() is called

const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise5 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise3,fetchPromise4, fetchPromise5])
    .then(responses=>{
        for (const res of responses) {
            console.log(`${res.url}: ${res.status}`)
        }
    })
    .catch(error=>{
        console.error(`Failed to fetch: ${error}`)
    })

// If only one of a set is required use 'Promise.any()' instead



// Creating async functions

// add 'async' to the beginning of the function declaration

// 'await' is able to be used inside async functions

// 'await' can only be used if your code is a in a js module

// await forces async operations to run in order

async function fetchJSON() {
    // use try...catch for error handling
    try {
        const res = await fetch("https://raw.githubusercontent.com/mdn/content/main/files/jsondata/SpecData.json")

        if (!res.ok) throw new Error("HTTP error: " + res.status)

        const json = await res.json()

        console.log("JSON Received")

        return json
    } catch (error) {
        console.error("Could not get products: " + error)
    }
}

// returns promise; .then is needed for response
fetchJSON().then(data=>console.log(Object.values(data)[0]))
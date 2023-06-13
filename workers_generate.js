// listen for message from main thread with global "addEventListener"
addEventListener("message", (message) => {
    console.log("recieved")
    if (message.data.command === "generate") {
        generatePrimes(message.data.quota);
    }
});

function generatePrimes(quota) {
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    // When done, send a message to the main thread using "postMessage"
    postMessage(primes.length)
}

// "Enable you to run some tasks in a separate thread of execution"
// Starts running a task on a separate thread to keep the main thread open for other processing

// Workers cannot access the DOM on the web

// Three types of workers:
// - dedicated : used by a single script instance
// - shared    : can be shared by several script running in different windows
// - service   : acts like proxy servers, caching resources

// Create worker with code from "worker-generate.js"
const worker = new Worker("./workers_generate.js");

// Send message to worker when user clicks "Generate Primes"
document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;

    // use "postMessage" method on worker to send "command" and "quota" in object
    worker.postMessage({
        command: "generate",
        quota,
    });
});

// listen for message back from worker
worker.addEventListener("message", (message) => {
    console.log(message)
    // worker sends "data" in message object
    document.querySelector(
        "#output"
    ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    // document.querySelector("#user-input").value =
        // 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});

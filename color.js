let startTime;
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const textElement = document.getElementById("text");
const resultElement = document.getElementById("result");
const fontSizeInput = document.getElementById("font-size");

// Adjust font size dynamically
fontSizeInput.addEventListener("input", () => {
    const newSize = fontSizeInput.value + "px";
    textElement.style.fontSize = newSize;
});

// Start the experiment
startButton.addEventListener("click", () => {
    startButton.classList.add("hidden");
    textElement.classList.add("hidden");
    resultElement.textContent = "";

    // Random delay before showing the text
    const delay = Math.random() * 4000 + 1000; // 1 to 3 seconds
    setTimeout(() => {
        startTime = Date.now();
        textElement.classList.remove("hidden");
    }, delay);
});

// Ensure stop button is always visible and positioned
stopButton.style.position = "relative";
stopButton.style.marginTop = "20px";
stopButton.classList.remove("hidden");

// Stop the experiment
stopButton.addEventListener("click", () => {
    const reactionTime = Date.now() - startTime;
    resultElement.textContent = `Your reaction time is ${reactionTime} ms.`;
    textElement.classList.add("hidden");
    startButton.classList.remove("hidden");
});

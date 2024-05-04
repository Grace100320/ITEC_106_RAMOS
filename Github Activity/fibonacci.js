function fibonacciSequence(n) {
    let fibSequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        [a, b] = [b, a + b];
    }
    return fibSequence;
}

function displayError(message) {
    alert(message);
}

function generateSequence() {
    const numTermsInput = document.getElementById("numTerms");
    const sequenceDiv = document.getElementById("sequence");
    const numTerms = parseInt(numTermsInput.value);

    if (isNaN(numTerms) || numTerms <= 0 || numTerms >= 100) {
        displayError("Engkkk! Enter a valid number between 1 and 99.");
        sequenceDiv.textContent = ""; // Clear previous sequence
        return;
    }

    const sequence = fibonacciSequence(numTerms);
    sequenceDiv.textContent = "Fibonacci sequence: " + sequence.join(", ");
}

function updatePrompt() {
    let promptInput = document.getElementById("prompt");
    let prompt = promptInput.value.toString();
    for (let i = 0; i < prompt.length; i++) {
        let c = prompt.charCodeAt(i);
        if (c < 32 || c > 127) {
            prompt = prompt.slice(0, i) + prompt.slice(i+1);
            i--;
        }
    }
    if (prompt.length > 15)
        prompt = prompt.slice(0, 15);
    promptInput.value = prompt;
    if (prompt.length > 0)
        document.getElementById("seed").value = generateSeedNumber(prompt);
    else
        document.getElementById("seed").value = "";
}

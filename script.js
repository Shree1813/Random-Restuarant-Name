const names = [ "Publix food", "Jefferson's", "Jimmy John's", "Chipotle", "Greek Cafe", "Mediterrean cuisine",
    "Sushi Place" ];

    const generateName = () => {
        const randomNames = names[Math.floor(Math.random() * names.length)];
        const name = `${randomNames}`;
        document.getElementById("name").textContent = name;
    }

    document.getElementById("generate-btn").addEventListener("click", generateName);
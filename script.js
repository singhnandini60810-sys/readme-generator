function generateReadme() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    const tech = document.getElementById("tech").value.split(",");
    const features = document.getElementById("features").value.split("\n");

    let techList = tech.map(t => `- ${t.trim()}`).join("\n");
    let featureList = features.map(f => `- ${f}`).join("\n");

    const readme = `# ${title}

## 📖 Description
${desc}

## ✨ Features
${featureList}

## 🛠 Tech Stack
${techList}
`;

    document.getElementById("output").value = readme;
}

function copyReadme() {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Copied!");
}

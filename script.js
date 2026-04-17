// add javascript here

//in class tips

// document.getElementById("playBtn").addEventListener("click",function() 
//     {play(level)
//     //can also just leave out "function()"
// })

// function play(level) {
//     let radios = document.getElementByName("level");
//     //etc etc
// }

// LIST (stores multiple scientists organized by category)
const scientists = [
    { name: "Alan Turing", field: "compsci" },
    { name: "Ada Lovelace", field: "compsci" },
    { name: "Albert Einstein", field: "physics" },
    { name: "Isaac Newton", field: "physics" },
    { name: "Marie Curie", field: "chem" },
    { name: "Dmitri Mendeleev", field: "chem" },
    { name: "Carl Gauss", field: "math" },
    { name: "Katherine Johnson", field: "math" },
    { name: "Nikola Tesla", field: "engineering" },
    { name: "Benjamin Franklin", field: "engineering" }
];

// output
const result = document.createElement("p");
document.body.appendChild(result);

function getRandomScientist(topic) {
    let filtered = [];

    for (let i = 0; i < scientists.length; i++) {
        if (scientists[i].field === topic) {
            filtered.push(scientists[i]);
        }
    }

    // nothing clicked
    if (filtered.length === 0) {
        result.textContent = "Please select a category first!";
        return;
    }

    // random
    let randomIndex = Math.floor(Math.random() * filtered.length);
    result.textContent = "Your Genius: " + filtered[randomIndex].name;
}

function getSelectedTopic() {
    if (document.getElementById("compsci").checked) return "compsci";
    if (document.getElementById("physics").checked) return "physics";
    if (document.getElementById("chem").checked) return "chem";
    if (document.getElementById("math").checked) return "math";
    if (document.getElementById("engineering").checked) return "engineering";
    return null;
}

// input
document.getElementById("compsci").addEventListener("change", function() {
    findScientists("compsci");
});

document.getElementById("physics").addEventListener("change", function() {
    findScientists("physics");
});

document.getElementById("chem").addEventListener("change", function() {
    findScientists("chem");
});

document.getElementById("math").addEventListener("change", function() {
    findScientists("math");
});

document.getElementById("engineering").addEventListener("change", function() {
    findScientists("engineering");
});

document.getElementById("randomBtn").addEventListener("click", function() {
    let topic = getSelectedTopic();
    getRandomScientist(topic);
});
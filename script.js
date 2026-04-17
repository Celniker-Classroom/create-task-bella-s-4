const scientists = [
    { name: "Alan Turing", field: "compsci" },
    { name: "Ada Lovelace", field: "compsci" },
    { name: "George Boole", field: "compsci" },
    { name: "Kathleen Booth", field: "compsci" },
    { name: "Tommy Flowers", field: "compsci" },
    { name: "Susan L Graham", field: "compsci" },
    { name: "Grace Hopper", field: "compsci" },
    { name: "Gladys West", field: "compsci" },
    { name: "Albert Einstein", field: "physics" },
    { name: "Isaac Newton", field: "physics" },
    { name: "Niels Bohr", field: "physics" },
    { name: "Galileo Galilei", field: "physics" },
    { name: "Maria Geoppert Mayer", field: "physics" },
    { name: "Michael Faraday", field: "physics" },
    { name: "Emmy Noether", field: "physics" },
    { name: "Marie Curie", field: "physics" },
    { name: "Marie Curie", field: "chem" },
    { name: "Dmitri Mendeleev", field: "chem" },
    { name: "Richard Abegg", field: "chem" },
    { name: "Heather Cecil Allen", field: "chem" },
    { name: "Andrea Angel", field: "chem" },
    { name: "Valerie Ashby", field: "chem" },
    { name: "Katheryn Bullock", field: "chem" },
    { name: "Melvin Calvin", field: "chem" },
    { name: "Carl Gauss", field: "math" },
    { name: "Katherine Johnson", field: "math" },
    { name: "Pythagoras", field: "math" },
    { name: "Terence Tao", field: "math" },
    { name: "Archimedes", field: "math" },
    { name: "Narges Mohammadi", field: "math" },
    { name: "Euclid", field: "math" },
    { name: "Maryam Mirzakhani", field: "math" },
    { name: "Nikola Tesla", field: "engineering" },
    { name: "Thomas Edison", field: "engineering" },
    { name: "Henry Ford", field: "engineering" },
    { name: "Nikolaus Otto", field: "engineering" },
    { name: "Leonardo Da Vinci", field: "engineering" },
    { name: "Edith Clarke", field: "engineering" },
    { name: "Hedy Lamarr", field: "engineering" },
    { name: "Mary Walton", field: "engineering" },
];

const result = document.createElement("p");
document.body.appendChild(result);

function getRandomScientist(topic) {
    let filtered = [];

    for (let i = 0; i < scientists.length; i++) {
        if (scientists[i].field === topic) {
            filtered.push(scientists[i]);
        }
    }

    if (filtered.length === 0) {
        result.textContent = "Please select a category first!";
        return;
    }

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

document.getElementById("randomBtn").addEventListener("click", function() {
    let topic = getSelectedTopic();
    getRandomScientist(topic);
});
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

function findScientists(topic) {
    let output = "Your Geniuses: ";

    for (let i = 0; i < scientists.length; i++) {

        if (scientists[i].field === topic) {
            output += scientists[i].name + ", ";
        }
    }

    result.textContent = output;
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
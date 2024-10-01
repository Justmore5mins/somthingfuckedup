const table = document.getElementById("table");

window.onload = (event) => {
    fetch("data/clublist.json")
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            for (const club in response) {
                const text = document.createElement("span");
                const img = document.createElement("img");
                img.src = `${window.location.port}/data/img/${club}.png`;
                img.alt = `${response[club]["name"]}`
                
                img.onerror = function () {
                    img.src = `${window.location.port}/data/img/NotFound.png`;
                };

                img.onload = function () {
                    text.textContent = response[club]["name"];
                    table.innerHTML += `<button onclick="clicking('${club}')"> ${img.outerHTML + "<br>" + text.outerHTML} </button> `;
                };
            }
        });
};

function clicking(club){
    location.href = `club.html?name=${club}`
}
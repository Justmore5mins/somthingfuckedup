const image = document.getElementById("img")
const text = document.getElementById("text")
const club = new URLSearchParams(location.search).get('name')

window.onload = function(){
        fetch("data/clublist.json")
        .then(res => res.json())
        .then(res => {
            console.log(club)
            const img = document.createElement("img")
            img.src = `${location.port}/data/img/${club}.png`
            img.onerror = function(){
                img.src = `${location.port}/data/img/NotFound.png`
            }
            img.alt = club
            image.appendChild(img)

            text.innerHTML += `<p>${res[club]["name"]}</p> <p>人數:${res[club]["count"]}人</p><p>上課地點:${res[club]['place']}</p>`
        })
}

function back(){
    location.href = "index.html"
}
document.querySelector(".busca").addEventListener("submit", async (event) => {
    event.preventDefault();

    let warning = document.querySelector(".aviso");
    var info = document.querySelector("#searchInput").value;

    if (info !== "") {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
            info
        )}&units=metric&appid=32eabf72d7951c55959396ba0fe8c541`;

        let results = await fetch(url);
        let json = await results.json();
        let showResultado = document.querySelector(".resultado");

        console.log(json);

        if (json.cod === 200) {
            let result_title = document.querySelector(".resultado .titulo");
            let nCity = json.name;
            let tempInfo = document.querySelector(".info .tempInfo");
            let ventoInfo = document.querySelector(".vento .ventoInfo");

            showResultado.style.display = "flex";
            tempInfo.innerHTML = `${json.main.temp}°C`;
            result_title.innerHTML = nCity;
            ventoInfo.innerHTML = `${json.wind.speed} KM`;
        } else {
            warning.innerHTML = "Algo deu errado...";
        }
    }
});

function showInfo(planet) {
    const info = {
        mercury: {
            title: "Меркурий",
            description: "Меркурий - ближайшая планета к Солнцу. Он не имеет атмосферы и почти не отражает солнечные лучи."
        },
        venus: {
            title: "Венера",
            description: "Венера - вторая планета от Солнца. Из-за плотной атмосферы, ее температура достигает 470°C."
        },
        earth: {
            title: "Земля",
            description: "Земля - третья планета от Солнца, единственная, на которой известна жизнь. Она обладает разнообразной природой и климатом."
        },
        mars: {
            title: "Марс",
            description: "Марс - четвертая планета от Солнца, известная своим красным цветом. На Марсе возможен след жизни в прошлом."
        }
    };

    document.getElementById("planet-info").innerHTML = `
        <h2>${info[planet].title}</h2>
        <p>${info[planet].description}</p>
    `;
    document.getElementById("info").style.display = 'flex';
}

function closeInfo() {
    document.getElementById("info").style.display = 'none';
}
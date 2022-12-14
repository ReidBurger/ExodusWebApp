window.addEventListener('load', function () {

    const finalNation = document.getElementById("finalNation");
    const finalPlanet = document.getElementById("finalPlanet");
    const finalScore = document.getElementById("finalScore");
    const nationFlag = document.getElementsByClassName("flag")[0];
    const planetIcon = document.getElementsByClassName("FinalScorePlanet")[0];

    const health = document.getElementById("health");
    const morale = document.getElementById("morale");
    const sustain = document.getElementById("sustain");
    const eco = document.getElementById("eco");
    const defense = document.getElementById("def");

    const healthBar = document.getElementsByClassName("health")[0];
    const moraleBar = document.getElementsByClassName("morale")[0];
    const susBar = document.getElementsByClassName("sustainability")[0];
    const ecoBar = document.getElementsByClassName("economy")[0];
    const defBar = document.getElementsByClassName("defense")[0];

    const healthPercent = localStorage.getItem("health");
    const moralePercent = localStorage.getItem("morale");
    const sustainPercent = localStorage.getItem("sustain");
    const ecoPercent = localStorage.getItem("economy");
    const defPercent = localStorage.getItem("defense");

    finalNation.innerHTML = localStorage.getItem("nation").charAt(0).toUpperCase() + localStorage.getItem("nation").slice(1);
    finalPlanet.innerHTML = localStorage.getItem("planet").charAt(0).toUpperCase() + localStorage.getItem("planet").slice(1);

    nationFlag.src = localStorage.getItem("flagURL");
    planetIcon.src = localStorage.getItem("planetURL");

    health.innerHTML = healthPercent + "%";
    morale.innerHTML = moralePercent + "%";
    sustain.innerHTML = sustainPercent + "%";
    eco.innerHTML = ecoPercent + "%";
    defense.innerHTML = defPercent + "%";
    finalScore.innerHTML = "Final Score: " + localStorage.getItem("finalScore");

    healthBar.style.width = healthPercent + "%";
    moraleBar.style.width = moralePercent + "%";
    susBar.style.width = sustainPercent + "%";
    ecoBar.style.width = ecoPercent + "%";
    defBar.style.width = defPercent + "%";
    
})
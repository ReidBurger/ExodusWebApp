const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const nation = urlParams.get('nation')
console.log(nation);

localStorage.setItem("nation", nation);

localStorage.setItem("health", "0")
localStorage.setItem("morale", "0");
localStorage.setItem("sustain", "0");
localStorage.setItem("economy", "0");
localStorage.setItem("defense", "0");

localStorage.setItem("planet", null);

localStorage.setItem("s1SelectedOption", null);
localStorage.setItem("s2SelectedOption", null);
localStorage.setItem("s3SelectedOption", null);
localStorage.setItem("s4SelectedOption", null);
localStorage.setItem("s5SelectedOption", null);
localStorage.setItem("s6SelectedOption", null);
localStorage.setItem("s7SelectedOption", null);
localStorage.setItem("s8SelectedOption", null);
localStorage.setItem("s9SelectedOption", null);
localStorage.setItem("s10SelectedOption", null);
localStorage.setItem("s11SelectedOption", null);
localStorage.setItem("s12SelectedOption", null);
localStorage.setItem("s13SelectedOption", null);
localStorage.setItem("s14SelectedOption", null);

localStorage.setItem("station1", null);
localStorage.setItem("station2", null);
localStorage.setItem("station3", null);
localStorage.setItem("station4", null);
localStorage.setItem("station5", null);
localStorage.setItem("station6", null);
localStorage.setItem("station7", null);
localStorage.setItem("station8", null);
localStorage.setItem("station9", null);
localStorage.setItem("station10", null);
localStorage.setItem("station11", null);
localStorage.setItem("station12", null);
localStorage.setItem("station13", null);
localStorage.setItem("station14", null);

localStorage.setItem("station1_nation_score", 0);
localStorage.setItem("station2_nation_score", 0);
localStorage.setItem("station3_nation_score", 0);
localStorage.setItem("station4_nation_score", 0);
localStorage.setItem("station5_nation_score", 0);
localStorage.setItem("station6_nation_score", 0);
localStorage.setItem("station7_nation_score", 0);
localStorage.setItem("station8_nation_score", 0);
localStorage.setItem("station9_nation_score", 0);
localStorage.setItem("station10_nation_score", 0);
localStorage.setItem("station11_nation_score", 0);
localStorage.setItem("station12_nation_score", 0);
localStorage.setItem("station13_nation_score", 0);
localStorage.setItem("station14_nation_score", 0);

localStorage.setItem("station1_planet_score", 0);
localStorage.setItem("station2_planet_score", 0);
localStorage.setItem("station3_planet_score", 0);
localStorage.setItem("station4_planet_score", 0);
localStorage.setItem("station5_planet_score", 0);
localStorage.setItem("station6_planet_score", 0);
localStorage.setItem("station7_planet_score", 0);
localStorage.setItem("station8_planet_score", 0);
localStorage.setItem("station9_planet_score", 0);
localStorage.setItem("station10_planet_score", 0);
localStorage.setItem("station11_planet_score", 0);
localStorage.setItem("station12_planet_score", 0);
localStorage.setItem("station13_planet_score", 0);
localStorage.setItem("station14_planet_score", 0);

window.addEventListener('load', function () {
    const landingFlag = document.getElementById("landingFlag");

    landingFlag.src = "images/" + localStorage.getItem("nation") +".png"
})

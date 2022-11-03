function calculateScore() {

    let healthScore = parseInt(localStorage.getItem("health"));
    let moraleScore = parseInt(localStorage.getItem("morale"));
    let sustainScore = parseInt(localStorage.getItem("sustain"));
    let ecoScore = parseInt(localStorage.getItem("economy"));
    let defScore = parseInt(localStorage.getItem("defense"));

    let station1_nation_score = parseInt(localStorage.getItem("station1_nation_score"));
    let station2_nation_score = parseInt(localStorage.getItem("station2_nation_score"));
    let station3_nation_score = parseInt(localStorage.getItem("station3_nation_score"));
    let station4_nation_score = parseInt(localStorage.getItem("station4_nation_score"));
    let station5_nation_score = parseInt(localStorage.getItem("station5_nation_score"));
    let station6_nation_score = parseInt(localStorage.getItem("station6_nation_score"));
    let station7_nation_score = parseInt(localStorage.getItem("station7_nation_score"));
    let station8_nation_score = parseInt(localStorage.getItem("station8_nation_score"));
    let station9_nation_score = parseInt(localStorage.getItem("station9_nation_score"));
    let station10_nation_score = parseInt(localStorage.getItem("station10_nation_score"));
    let station11_nation_score = parseInt(localStorage.getItem("station11_nation_score"));
    let station12_nation_score = parseInt(localStorage.getItem("station12_nation_score"));
    let station13_nation_score = parseInt(localStorage.getItem("station13_nation_score"));
    let station14_nation_score = parseInt(localStorage.getItem("station14_nation_score"));

    let station1_planet_score = parseInt(localStorage.getItem("station1_planet_score"));
    let station2_planet_score = parseInt(localStorage.getItem("station2_planet_score"));
    let station3_planet_score = parseInt(localStorage.getItem("station3_planet_score"));
    let station4_planet_score = parseInt(localStorage.getItem("station4_planet_score"));
    let station5_planet_score = parseInt(localStorage.getItem("station5_planet_score"));
    let station6_planet_score = parseInt(localStorage.getItem("station6_planet_score"));
    let station7_planet_score = parseInt(localStorage.getItem("station7_planet_score"));
    let station8_planet_score = parseInt(localStorage.getItem("station8_planet_score"));
    let station9_planet_score = parseInt(localStorage.getItem("station9_planet_score"));
    let station10_planet_score = parseInt(localStorage.getItem("station10_planet_score"));
    let station11_planet_score = parseInt(localStorage.getItem("station11_planet_score"));
    let station12_planet_score = parseInt(localStorage.getItem("station12_planet_score"));
    let station13_planet_score = parseInt(localStorage.getItem("station13_planet_score"));
    let station14_planet_score = parseInt(localStorage.getItem("station14_planet_score"));

    // calculations for froichua
    if (localStorage.getItem("nation") == "froichua") {
        // froichua station 1 options
        if (localStorage.getItem("station1") == "option1") {
            healthScore += 5;
            moraleScore += 3;
            sustainScore -= 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            healthScore += 4;
            moraleScore += 5;
            sustainScore -= 2;
        }
        // froichua station 2 options
        if (localStorage.getItem("station2") == "option1") {
            healthScore += 5;
            moraleScore += 3;
            sustainScore -= 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            healthScore += 4;
            moraleScore += 5;
            sustainScore -= 2;
        }
    }

    // calculations for lesniuberg
    else if (localStorage.getItem("nation") == "lesniuberg") {
        // lesniuberg station 1 options
        if (localStorage.getItem("station1") == "option1") {
            healthScore += 5;
            moraleScore += 3;
            sustainScore -= 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            healthScore += 4;
            moraleScore += 5;
            sustainScore -= 2;
        }
        // lesniuberg station 2 options
        if (localStorage.getItem("station2") == "option1") {
            healthScore += 5;
            moraleScore += 3;
            sustainScore -= 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            healthScore += 4;
            moraleScore += 5;
            sustainScore -= 2;
        }
    }
    
    localStorage.setItem("health", healthScore)
    localStorage.setItem("morale", moraleScore);
    localStorage.setItem("sustain", sustainScore);
    localStorage.setItem("economy", ecoScore);
    localStorage.setItem("defense", defScore);
}
function calculateScore() {

    let healthScore = parseInt(localStorage.getItem("health"));
    let moraleScore = parseInt(localStorage.getItem("morale"));
    let sustainScore = parseInt(localStorage.getItem("sustain"));
    let ecoScore = parseInt(localStorage.getItem("economy"));
    let defScore = parseInt(localStorage.getItem("defense"));

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
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
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            station1_nation_score += 1;
        }
        else {
            station1_nation_score += 3;
        }
        // froichua station 2 options
        if (localStorage.getItem("station2") == "option1") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else {
            station2_nation_score += 3;
        }
        // froichua station 3 options
        if (localStorage.getItem("station3") == "option1") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station3_nation_score += 1;
        }
        else {
            station3_nation_score += 3;
        }
        // froichua station 4 options
        if (localStorage.getItem("station4") == "option1") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station4_nation_score += 1;
        }
        else {
            station4_nation_score += 3;
        }
        // froichua station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option2") {
            station5_nation_score += 1;
        }
        else {
            station5_nation_score += 3;
        }
        // froichua station 6 options
        if (localStorage.getItem("station6") == "option1") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option2") {
            station6_nation_score += 1;
        }
        else {
            station6_nation_score += 3;
        }
        // froichua station 7 options
        if (localStorage.getItem("station7") == "option1") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 1;
        }
        else {
            station7_nation_score += 3;
        }
        // froichua station 8 options
        if (localStorage.getItem("station8") == "option1") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option2") {
            station8_nation_score += 1;
        }
        else {
            station8_nation_score += 3;
        }
        // froichua station 9 options
        if (localStorage.getItem("station9") == "option1") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 1;
        }
        else {
            station9_nation_score += 3;
        }
        // froichua station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 1;
        }
        else {
            station10_nation_score += 3;
        }
        // froichua station 11 options
        if (localStorage.getItem("station11") == "option1") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option2") {
            station11_nation_score += 1;
        }
        else {
            station11_nation_score += 3;
        }
        // froichua station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else {
            station12_nation_score += 3;
        }
        // froichua station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option2") {
            station13_nation_score += 1;
        }
        else {
            station13_nation_score += 3;
        }
        // froichua station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option2") {
            station14_nation_score += 1;
        }
        else {
            station14_nation_score += 3;
        }
    }

    if (localStorage.getItem("nation") == "lesniuberg") {
        // lesniuberg station 1 options
        if (localStorage.getItem("station1") == "option1") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            station1_nation_score += 1;
        }
        else {
            station1_nation_score += 3;
        }
        // lesniuberg station 2 options
        if (localStorage.getItem("station2") == "option1") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else {
            station2_nation_score += 3;
        }
        // lesniuberg station 3 options
        if (localStorage.getItem("station3") == "option1") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station3_nation_score += 1;
        }
        else {
            station3_nation_score += 3;
        }
        // lesniuberg station 4 options
        if (localStorage.getItem("station4") == "option1") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station4_nation_score += 1;
        }
        else {
            station4_nation_score += 3;
        }
        // lesniuberg station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option2") {
            station5_nation_score += 1;
        }
        else {
            station5_nation_score += 3;
        }
        // lesniuberg station 6 options
        if (localStorage.getItem("station6") == "option1") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option2") {
            station6_nation_score += 1;
        }
        else {
            station6_nation_score += 3;
        }
        // lesniuberg station 7 options
        if (localStorage.getItem("station7") == "option1") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 1;
        }
        else {
            station7_nation_score += 3;
        }
        // lesniuberg station 8 options
        if (localStorage.getItem("station8") == "option1") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option2") {
            station8_nation_score += 1;
        }
        else {
            station8_nation_score += 3;
        }
        // lesniuberg station 9 options
        if (localStorage.getItem("station9") == "option1") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 1;
        }
        else {
            station9_nation_score += 3;
        }
        // lesniuberg station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 1;
        }
        else {
            station10_nation_score += 3;
        }
        // lesniuberg station 11 options
        if (localStorage.getItem("station11") == "option1") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option2") {
            station11_nation_score += 1;
        }
        else {
            station11_nation_score += 3;
        }
        // lesniuberg station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else {
            station12_nation_score += 3;
        }
        // lesniuberg station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option2") {
            station13_nation_score += 1;
        }
        else {
            station13_nation_score += 3;
        }
        // lesniuberg station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option2") {
            station14_nation_score += 1;
        }
        else {
            station14_nation_score += 3;
        }
    }

    if (localStorage.getItem("nation") == "niqnio") {
        // niqnio station 1 options
        if (localStorage.getItem("station1") == "option1") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            station1_nation_score += 1;
        }
        else {
            station1_nation_score += 3;
        }
        // niqnio station 2 options
        if (localStorage.getItem("station2") == "option1") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else {
            station2_nation_score += 3;
        }
        // niqnio station 3 options
        if (localStorage.getItem("station3") == "option1") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station3_nation_score += 1;
        }
        else {
            station3_nation_score += 3;
        }
        // niqnio station 4 options
        if (localStorage.getItem("station4") == "option1") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station4_nation_score += 1;
        }
        else {
            station4_nation_score += 3;
        }
        // niqnio station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option2") {
            station5_nation_score += 1;
        }
        else {
            station5_nation_score += 3;
        }
        // niqnio station 6 options
        if (localStorage.getItem("station6") == "option1") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option2") {
            station6_nation_score += 1;
        }
        else {
            station6_nation_score += 3;
        }
        // niqnio station 7 options
        if (localStorage.getItem("station7") == "option1") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 1;
        }
        else {
            station7_nation_score += 3;
        }
        // niqnio station 8 options
        if (localStorage.getItem("station8") == "option1") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option2") {
            station8_nation_score += 1;
        }
        else {
            station8_nation_score += 3;
        }
        // niqnio station 9 options
        if (localStorage.getItem("station9") == "option1") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 1;
        }
        else {
            station9_nation_score += 3;
        }
        // niqnio station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 1;
        }
        else {
            station10_nation_score += 3;
        }
        // niqnio station 11 options
        if (localStorage.getItem("station11") == "option1") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option2") {
            station11_nation_score += 1;
        }
        else {
            station11_nation_score += 3;
        }
        // niqnio station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else {
            station12_nation_score += 3;
        }
        // niqnio station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option2") {
            station13_nation_score += 1;
        }
        else {
            station13_nation_score += 3;
        }
        // niqnio station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option2") {
            station14_nation_score += 1;
        }
        else {
            station14_nation_score += 3;
        }
    }

    if (localStorage.getItem("nation") == "otraria") {
        // otraria station 1 options
        if (localStorage.getItem("station1") == "option1") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            station1_nation_score += 1;
        }
        else {
            station1_nation_score += 3;
        }
        // otraria station 2 options
        if (localStorage.getItem("station2") == "option1") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else {
            station2_nation_score += 3;
        }
        // otraria station 3 options
        if (localStorage.getItem("station3") == "option1") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station3_nation_score += 1;
        }
        else {
            station3_nation_score += 3;
        }
        // otraria station 4 options
        if (localStorage.getItem("station4") == "option1") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station4_nation_score += 1;
        }
        else {
            station4_nation_score += 3;
        }
        // otraria station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option2") {
            station5_nation_score += 1;
        }
        else {
            station5_nation_score += 3;
        }
        // otraria station 6 options
        if (localStorage.getItem("station6") == "option1") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option2") {
            station6_nation_score += 1;
        }
        else {
            station6_nation_score += 3;
        }
        // otraria station 7 options
        if (localStorage.getItem("station7") == "option1") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 1;
        }
        else {
            station7_nation_score += 3;
        }
        // otraria station 8 options
        if (localStorage.getItem("station8") == "option1") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option2") {
            station8_nation_score += 1;
        }
        else {
            station8_nation_score += 3;
        }
        // otraria station 9 options
        if (localStorage.getItem("station9") == "option1") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 1;
        }
        else {
            station9_nation_score += 3;
        }
        // otraria station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 1;
        }
        else {
            station10_nation_score += 3;
        }
        // otraria station 11 options
        if (localStorage.getItem("station11") == "option1") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option2") {
            station11_nation_score += 1;
        }
        else {
            station11_nation_score += 3;
        }
        // otraria station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else {
            station12_nation_score += 3;
        }
        // otraria station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option2") {
            station13_nation_score += 1;
        }
        else {
            station13_nation_score += 3;
        }
        // otraria station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option2") {
            station14_nation_score += 1;
        }
        else {
            station14_nation_score += 3;
        }
    }

    if (localStorage.getItem("nation") == "ufren") {
        // ufren station 1 options
        if (localStorage.getItem("station1") == "option1") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option2") {
            station1_nation_score += 1;
        }
        else {
            station1_nation_score += 3;
        }
        // ufren station 2 options
        if (localStorage.getItem("station2") == "option1") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else {
            station2_nation_score += 3;
        }
        // ufren station 3 options
        if (localStorage.getItem("station3") == "option1") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station3_nation_score += 1;
        }
        else {
            station3_nation_score += 3;
        }
        // ufren station 4 options
        if (localStorage.getItem("station4") == "option1") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station4_nation_score += 1;
        }
        else {
            station4_nation_score += 3;
        }
        // ufren station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option2") {
            station5_nation_score += 1;
        }
        else {
            station5_nation_score += 3;
        }
        // ufren station 6 options
        if (localStorage.getItem("station6") == "option1") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option2") {
            station6_nation_score += 1;
        }
        else {
            station6_nation_score += 3;
        }
        // ufren station 7 options
        if (localStorage.getItem("station7") == "option1") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 1;
        }
        else {
            station7_nation_score += 3;
        }
        // ufren station 8 options
        if (localStorage.getItem("station8") == "option1") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option2") {
            station8_nation_score += 1;
        }
        else {
            station8_nation_score += 3;
        }
        // ufren station 9 options
        if (localStorage.getItem("station9") == "option1") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 1;
        }
        else {
            station9_nation_score += 3;
        }
        // ufren station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 1;
        }
        else {
            station10_nation_score += 3;
        }
        // ufren station 11 options
        if (localStorage.getItem("station11") == "option1") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option2") {
            station11_nation_score += 1;
        }
        else {
            station11_nation_score += 3;
        }
        // ufren station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else {
            station12_nation_score += 3;
        }
        // ufren station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option2") {
            station13_nation_score += 1;
        }
        else {
            station13_nation_score += 3;
        }
        // ufren station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option2") {
            station14_nation_score += 1;
        }
        else {
            station14_nation_score += 3;
        }
    }
    
    localStorage.setItem("health", healthScore)
    localStorage.setItem("morale", moraleScore);
    localStorage.setItem("sustain", sustainScore);
    localStorage.setItem("economy", ecoScore);
    localStorage.setItem("defense", defScore);
}
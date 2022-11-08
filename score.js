function calculateScore() {

    let healthPercent = parseInt(localStorage.getItem("health"));
    let moralePercent = parseInt(localStorage.getItem("morale"));
    let sustainPercent = parseInt(localStorage.getItem("sustain"));
    let ecoPercent = parseInt(localStorage.getItem("economy"));
    let defPercent = parseInt(localStorage.getItem("defense"));

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
        if (localStorage.getItem("station1") == "option4") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option1") {
            station1_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_nation_score += 3;
        }
        // froichua station 2 options
        if (localStorage.getItem("station2") == "option1" || localStorage.getItem("station2") == "option4") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else if (localStorage.getItem("station2") == "null") {
            station1_nation_score += 2;
        }
        else {
            station2_nation_score += 3;
        }
        // froichua station 3 options
        if (localStorage.getItem("station3") == "option4") {
            station3_nation_score += 5;
        }
        // else if (localStorage.getItem("station2") == "option1") {
        //     station3_nation_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
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
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_nation_score += 3;
        }
        // froichua station 5 options
        if (localStorage.getItem("station5") == "option2") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option5") {
            station5_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_nation_score += 3;
        }
        // froichua station 6 options
        if (localStorage.getItem("station6") == "option2") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option3") {
            station6_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station6_nation_score += 2;
        }
        else {
            station6_nation_score += 3;
        }
        // froichua station 7 options
        if (localStorage.getItem("station7") == "option3") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option1") {
            station7_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_nation_score += 3;
        }
        // froichua station 8 options
        if (localStorage.getItem("station8") == "option4") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option3") {
            station8_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_nation_score += 3;
        }
        // froichua station 9 options
        if (localStorage.getItem("station9") == "option3") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_nation_score += 3;
        }
        // froichua station 10 options
        if (localStorage.getItem("station10") == "option3") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_nation_score += 3;
        }
        // froichua station 11 options
        if (localStorage.getItem("station11") == "option4") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option1") {
            station11_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_nation_score += 3;
        }
        // froichua station 12 options
        if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option5") {
            station12_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_nation_score += 3;
        }
        // froichua station 13 options
        if (localStorage.getItem("station13") == "option3") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_nation_score += 3;
        }
        // froichua station 14 options
        if (localStorage.getItem("station14") == "option4" ||localStorage.getItem("station14") == "option5") {
            station14_nation_score += 5;
        }
        // else if (localStorage.getItem("station14") == "option2") {
        //     station14_nation_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
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
        else if (localStorage.getItem("station1") == "option3") {
            station1_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_nation_score += 3;
        }
        // lesniuberg station 2 options
        if (localStorage.getItem("station2") == "option2" || localStorage.getItem("station2") == "option5") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option4") {
            station2_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_nation_score += 3;
        }
        // lesniuberg station 3 options
        if (localStorage.getItem("station3") == "option5") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option4") {
            station3_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_nation_score += 3;
        }
        // lesniuberg station 4 options
        if (localStorage.getItem("station4") == "option3") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option5") {
            station4_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_nation_score += 3;
        }
        // lesniuberg station 5 options
        if (localStorage.getItem("station5") == "option5" || localStorage.getItem("station5") == "option3") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option1" || localStorage.getItem("station5") == "option2") {
            station5_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_nation_score += 3;
        }
        // lesniuberg station 6 options
        if (localStorage.getItem("station6") == "option3") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option5") {
            station6_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station6_nation_score += 2;
        }
        else {
            station6_nation_score += 3;
        }
        // lesniuberg station 7 options
        if (localStorage.getItem("station7") == "option4") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_nation_score += 3;
        }
        // lesniuberg station 8 options
        if (localStorage.getItem("station8") == "option3") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option1" || localStorage.getItem("station8") == "option2") {
            station8_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_nation_score += 3;
        }
        // lesniuberg station 9 options
        if (localStorage.getItem("station9") == "option4") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option5") {
            station9_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_nation_score += 3;
        }
        // lesniuberg station 10 options
        if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_nation_score += 3;
        }
        // lesniuberg station 11 options
        if (localStorage.getItem("station11") == "option5") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option2") {
            station11_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_nation_score += 3;
        }
        // lesniuberg station 12 options
        if (localStorage.getItem("station12") == "option3") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_nation_score += 3;
        }
        // lesniuberg station 13 options
        if (localStorage.getItem("station13") == "option1" || localStorage.getItem("station13") == "option4") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option5") {
            station13_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_nation_score += 3;
        }
        // lesniuberg station 14 options
        if (localStorage.getItem("station14") == "option2") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option4" || localStorage.getItem("station14") == "option5") {
            station14_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
        }
        else {
            station14_nation_score += 3;
        }
    }

    if (localStorage.getItem("nation") == "niqnio") {
        // niqnio station 1 options
        if (localStorage.getItem("station1") == "option3") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option4") {
            station1_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_nation_score += 3;
        }
        // niqnio station 2 options
        if (localStorage.getItem("station2") == "option5") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option4") {
            station2_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_nation_score += 3;
        }
        // niqnio station 3 options
        if (localStorage.getItem("station3") == "option3") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option4") {
            station3_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_nation_score += 3;
        }
        // niqnio station 4 options
        if (localStorage.getItem("station4") == "option5") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option4") {
            station4_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_nation_score += 3;
        }
        // niqnio station 5 options
        if (localStorage.getItem("station5") == "option4") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_nation_score += 3;
        }
        // niqnio station 6 options
        if (localStorage.getItem("station6") == "option4") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option1" || localStorage.getItem("station6") == "option3") {
            station6_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station6_nation_score += 2;
        }
        else {
            station6_nation_score += 3;
        }
        // niqnio station 7 options
        if (localStorage.getItem("station7") == "option5") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option3") {
            station7_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_nation_score += 3;
        }
        // niqnio station 8 options
        if (localStorage.getItem("station8") == "option5") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option1" || 
                 localStorage.getItem("station8") == "option2" ||
                 localStorage.getItem("station8") == "option4") {
            station8_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_nation_score += 3;
        }
        // niqnio station 9 options
        if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option5" || localStorage.getItem("station9") == "option3") {
            station9_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_nation_score += 3;
        }
        // niqnio station 10 options
        if (localStorage.getItem("station10") == "option2") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_nation_score += 3;
        }
        // niqnio station 11 options
        if (localStorage.getItem("station11") == "option4") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option5") {
            station11_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_nation_score += 3;
        }
        // niqnio station 12 options
        if (localStorage.getItem("station12") == "option5") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_nation_score += 3;
        }
        // niqnio station 13 options
        if (localStorage.getItem("station13") == "option2" || localStorage.getItem("station13") == "option4") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option5") {
            station13_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_nation_score += 3;
        }
        // niqnio station 14 options
        if (localStorage.getItem("station14") == "option2" || localStorage.getItem("station14") == "option3") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option5") {
            station14_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
        }
        else {
            station14_nation_score += 3;
        }
    }

    if (localStorage.getItem("nation") == "otraria") {
        // otraria station 1 options
        if (localStorage.getItem("station1") == "option3") {
            station1_nation_score += 5;
        }
        else if (localStorage.getItem("station1") == "option4") {
            station1_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_nation_score += 3;
        }
        // otraria station 2 options
        if (localStorage.getItem("station2") == "option4") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_nation_score += 3;
        }
        // otraria station 3 options
        if (localStorage.getItem("station3") == "option3" || localStorage.getItem("station3") == "option4") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option1" || localStorage.getItem("station2") == "option5") {
            station3_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_nation_score += 3;
        }
        // otraria station 4 options
        if (localStorage.getItem("station4") == "option2") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option4") {
            station4_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_nation_score += 3;
        }
        // otraria station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option5") {
            station5_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_nation_score += 3;
        }
        // otraria station 6 options
        if (localStorage.getItem("station6") == "option5") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option1" || localStorage.getItem("station6") == "option3") {
            station6_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station6_nation_score += 2;
        }
        else {
            station6_nation_score += 3;
        }
        // otraria station 7 options
        if (localStorage.getItem("station7") == "option2") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option4" || localStorage.getItem("station7") == "option5") {
            station7_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_nation_score += 3;
        }
        // otraria station 8 options
        if (localStorage.getItem("station8") == "option2") {
            station8_nation_score += 5;
        }
        else if (localStorage.getItem("station8") == "option5") {
            station8_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_nation_score += 3;
        }
        // otraria station 9 options
        if (localStorage.getItem("station9") == "option2") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option5") {
            station9_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_nation_score += 3;
        }
        // otraria station 10 options
        if (localStorage.getItem("station10") == "option3") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_nation_score += 3;
        }
        // otraria station 11 options
        if (localStorage.getItem("station11") == "option3") {
            station11_nation_score += 5;
        }
        else if (localStorage.getItem("station11") == "option4") {
            station11_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_nation_score += 3;
        }
        // otraria station 12 options
        if (localStorage.getItem("station12") == "option4") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option5" || localStorage.getItem("station12") == "option2") {
            station12_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_nation_score += 3;
        }
        // otraria station 13 options
        if (localStorage.getItem("station13") == "option2") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option4" || localStorage.getItem("station13") == "option5") {
            station13_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_nation_score += 3;
        }
        // otraria station 14 options
        if (localStorage.getItem("station14") == "option5") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option3") {
            station14_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
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
        else if (localStorage.getItem("station1") == "option4") {
            station1_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_nation_score += 3;
        }
        // ufren station 2 options
        if (localStorage.getItem("station2") == "option1" || localStorage.getItem("station2") == "option2") {
            station2_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option3") {
            station2_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_nation_score += 3;
        }
        // ufren station 3 options
        if (localStorage.getItem("station3") == "option1" ||localStorage.getItem("station3") == "option5") {
            station3_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station3_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_nation_score += 3;
        }
        // ufren station 4 options
        if (localStorage.getItem("station4") == "option1") {
            station4_nation_score += 5;
        }
        else if (localStorage.getItem("station2") == "option5") {
            station4_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_nation_score += 3;
        }
        // ufren station 5 options
        if (localStorage.getItem("station5") == "option3") {
            station5_nation_score += 5;
        }
        else if (localStorage.getItem("station5") == "option5") {
            station5_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_nation_score += 3;
        }
        // ufren station 6 options
        if (localStorage.getItem("station6") == "option1") {
            station6_nation_score += 5;
        }
        else if (localStorage.getItem("station6") == "option4" || localStorage.getItem("station6") == "option5") {
            station6_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station6_nation_score += 2;
        }
        else {
            station6_nation_score += 3;
        }
        // ufren station 7 options
        if (localStorage.getItem("station7") == "option1" || localStorage.getItem("station7") == "option2") {
            station7_nation_score += 5;
        }
        else if (localStorage.getItem("station7") == "option4" || localStorage.getItem("station7") == "option5") {
            station7_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_nation_score += 3;
        }
        // ufren station 8 options
        if (localStorage.getItem("station8") == "option1" || localStorage.getItem("station8") == "option4") {
            station8_nation_score += 5;
        }
        // else if (localStorage.getItem("station8") == "option2") {
        //     station8_nation_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_nation_score += 3;
        }
        // ufren station 9 options
        if (localStorage.getItem("station9") == "option1" || localStorage.getItem("station9") == "option2") {
            station9_nation_score += 5;
        }
        else if (localStorage.getItem("station9") == "option3" || localStorage.getItem("station9") == "option5") {
            station9_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_nation_score += 3;
        }
        // ufren station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_nation_score += 5;
        }
        else if (localStorage.getItem("station10") == "option3") {
            station10_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
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
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_nation_score += 3;
        }
        // ufren station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_nation_score += 5;
        }
        else if (localStorage.getItem("station12") == "option5") {
            station12_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_nation_score += 3;
        }
        // ufren station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_nation_score += 5;
        }
        else if (localStorage.getItem("station13") == "option4" || localStorage.getItem("station13") == "option5") {
            station13_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_nation_score += 3;
        }
        // ufren station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_nation_score += 5;
        }
        else if (localStorage.getItem("station14") == "option4" || localStorage.getItem("station14") == "option5") {
            station14_nation_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
        }
        else {
            station14_nation_score += 3;
        }
    }

    // calculations for ecralia
    if (localStorage.getItem("planet") == "ecralia") {
        // ecralia station 1 options
        if (localStorage.getItem("station1") == "option1") {
            station1_planet_score += 5;
        }
        else if (localStorage.getItem("station1") == "option3") {
            station1_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_planet_score += 3;
        }
        // ecralia station 2 options
        if (localStorage.getItem("station2") == "option1") {
            station2_planet_score += 5;
        }
        else if (localStorage.getItem("station2") == "option3") {
            station2_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_planet_score += 3;
        }
        //  ecralia station 3 options
        if (localStorage.getItem("station3") == "option1") {
            station3_planet_score += 5;
        }
        else if (localStorage.getItem("station3") == "option2") {
            station3_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_planet_score += 3;
        }
        //  ecralia station 4 options
        // if (localStorage.getItem("station4") == "option1") {
        //     station4_planet_score += 5;
        // }
        if (localStorage.getItem("station4") == "option2") {
            station4_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_planet_score += 3;
        }
        //  ecralia station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_planet_score += 5;
        }
        else if (localStorage.getItem("station5") == "option4") {
            station5_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_planet_score += 3;
        }
        //  ecralia station 6 options
        // Every option is neutral
        // if (localStorage.getItem("station6") == "option1") {
        //     station6_planet_score += 5;
        // }
        // else if (localStorage.getItem("station6") == "option2") {
        //     station6_planet_score += 1;
        // }
        // else {
            station6_planet_score += 5;
        // }
        //  ecralia station 7 options
        // Every option is neutral
        // if (localStorage.getItem("station7") == "option1") {
        //     station7_planet_score += 5;
        // }
        // else if (localStorage.getItem("station7") == "option2") {
        //     station7_planet_score += 1;
        // }
        // else {
            station7_planet_score += 5;
        // }
        //  ecralia station 8 options
        if (localStorage.getItem("station8") == "option1" || localStorage.getItem("station8") == "option2") {
            station8_planet_score += 5;
        }
        else if (localStorage.getItem("station8") == "option4") {
            station8_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_planet_score += 3;
        }
        //  ecralia station 9 options
        if (localStorage.getItem("station9") == "option1") {
            station9_planet_score += 5;
        }
        else if (localStorage.getItem("station9") == "option3") {
            station9_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_planet_score += 3;
        }
        //  ecralia station 10 options
        if (localStorage.getItem("station10") == "option2") {
            station10_planet_score += 5;
        }
        else if (localStorage.getItem("station10") == "option3") {
            station10_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_planet_score += 3;
        }
        //  ecralia station 11 options
        // Every option is neutral
        // if (localStorage.getItem("station11") == "option1") {
        //     station11_planet_score += 5;
        // }
        // else if (localStorage.getItem("station11") == "option2") {
        //     station11_planet_score += 1;
        // }
        // else {
            station11_planet_score += 5;
        // }
        //  ecralia station 12 options
        // if (localStorage.getItem("station12") == "option1") {
        //     station12_planet_score += 5;
        // }
        if (localStorage.getItem("station12") == "option2") {
            station12_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_planet_score += 3;
        }
        //  ecralia station 13 options
        if (localStorage.getItem("station13") == "option1") {
            station13_planet_score += 5;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else if (localStorage.getItem("station13") == "option3" ||
                localStorage.getItem("station13") == "option4" ||
                localStorage.getItem("station13") == "option5") {
            station13_planet_score += 1;
        }
        else {
            station13_planet_score += 3;
        }
        //  ecralia station 14 options
        if (localStorage.getItem("station14") == "option1") {
            station14_planet_score += 5;
        }
        else if (localStorage.getItem("station14") == "option3" || localStorage.getItem("station14") == "option4") {
            station14_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
        }
        else {
            station14_planet_score += 3;
        }
    }

    // calculations for anvolia
    if (localStorage.getItem("planet") == "anvolia") {
        // anvolia station 1 options
        // Everything is neutral
        // if (localStorage.getItem("station1") == "option1") {
        //     station1_planet_score += 5;
        // }
        // else if (localStorage.getItem("station1") == "option2") {
        //     station1_planet_score += 1;
        // }
        // else {
            station1_planet_score += 5;
        // }
        // anvolia station 2 options
        if (localStorage.getItem("station2") == "option2" || localStorage.getItem("station2") == "option5") {
            station2_planet_score += 5;
        }
        else if (localStorage.getItem("station2") == "option3") {
            station2_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_planet_score += 3;
        }
        //  anvolia station 3 options
        if (localStorage.getItem("station3") == "option3" || localStorage.getItem("station3") == "option5") {
            station3_planet_score += 5;
        }
        else if (localStorage.getItem("station3") == "option1"|| localStorage.getItem("station3") == "option2") {
            station3_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_planet_score += 3;
        }
        //  anvolia station 4 options
        if (localStorage.getItem("station4") == "option3") {
            station4_planet_score += 5;
        }
        else if (localStorage.getItem("station4") == "option5") {
            station4_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_planet_score += 3;
        }
        //  anvolia station 5 options
        if (localStorage.getItem("station5") == "option5") {
            station5_planet_score += 5;
        }
        else if (localStorage.getItem("station5") == "option1") {
            station5_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_planet_score += 3;
        }
        //  anvolia station 6 options
        // Everything is neutral
        // if (localStorage.getItem("station6") == "option1") {
        //     station6_planet_score += 5;
        // }
        // else if (localStorage.getItem("station6") == "option2") {
        //     station6_planet_score += 1;
        // }
        // else {
            station6_planet_score += 5;
        // }
        //  anvolia station 7 options
        if (localStorage.getItem("station7") == "option4" || localStorage.getItem("station7") == "option5") {
            station7_planet_score += 5;
        }
        // else if (localStorage.getItem("station7") == "option2") {
        //     station7_planet_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_planet_score += 3;
        }
        //  anvolia station 8 options
        if (localStorage.getItem("station8") == "option3" || localStorage.getItem("station8") == "option5") {
            station8_planet_score += 5;
        }
        else if (localStorage.getItem("station8") == "option4") {
            station8_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_planet_score += 3;
        }
        //  anvolia station 9 options
        if (localStorage.getItem("station9") == "option4") {
            station9_planet_score += 5;
        }
        else if (localStorage.getItem("station9") == "option1" || localStorage.getItem("station9") == "option3") {
            station9_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_planet_score += 3;
        }
        //  anvolia station 10 options
        if (localStorage.getItem("station10") == "option1") {
            station10_planet_score += 5;
        }
        else if (localStorage.getItem("station10") == "option3") {
            station10_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_planet_score += 3;
        }
        //  anvolia station 11 options
        if (localStorage.getItem("station11") == "option1" || localStorage.getItem("station11") == "option5") {
            station11_planet_score += 5;
        }
        else if (localStorage.getItem("station11") == "option4") {
            station11_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_planet_score += 3;
        }
        //  anvolia station 12 options
        if (localStorage.getItem("station12") == "option4") {
            station12_planet_score += 5;
        }
        else if (localStorage.getItem("station12") == "option1") {
            station12_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_planet_score += 3;
        }
        //  anvolia station 13 options
        if (localStorage.getItem("station13") == "option2") {
            station13_planet_score += 5;
        }
        else if (localStorage.getItem("station13") == "option3" ||
                localStorage.getItem("station13") == "option4" ||
                localStorage.getItem("station13") == "option5") {
            station13_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_planet_score += 3;
        }
        //  anvolia station 14 options
        if (localStorage.getItem("station14") == "option2" || localStorage.getItem("station14") == "option3") {
            station14_planet_score += 5;
        }
        else if (localStorage.getItem("station14") == "option4") {
            station14_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
        }
        else {
            station14_planet_score += 3;
        }
    }

     // calculations for mion
     if (localStorage.getItem("planet") == "mion") {
        // mion station 1 options
        if (localStorage.getItem("station1") == "option4" || localStorage.getItem("station1") == "option3") {
            station1_planet_score += 5;
        }
        // else if (localStorage.getItem("station1") == "option3") {
        //     station1_planet_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station1_nation_score += 2;
        }
        else {
            station1_planet_score += 3;
        }
        // mion station 2 options
        if (localStorage.getItem("station2") == "option1" || localStorage.getItem("station2") == "option4") {
            station2_planet_score += 5;
        }
        else if (localStorage.getItem("station2") == "option2") {
            station2_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station2_nation_score += 2;
        }
        else {
            station2_planet_score += 3;
        }
        //  mion station 3 options
        if (localStorage.getItem("station3") == "option4") {
            station3_planet_score += 5;
        }
        else if (localStorage.getItem("station3") == "option1") {
            station3_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station3_nation_score += 2;
        }
        else {
            station3_planet_score += 3;
        }
        //  mion station 4 options
        if (localStorage.getItem("station4") == "option4" || localStorage.getItem("station4") == "option5") {
            station4_planet_score += 5;
        }
        else if (localStorage.getItem("station4") == "option3") {
            station4_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station4_nation_score += 2;
        }
        else {
            station4_planet_score += 3;
        }
        //  mion station 5 options
        if (localStorage.getItem("station5") == "option1") {
            station5_planet_score += 5;
        }
        else if (localStorage.getItem("station5") == "option5") {
            station5_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station5_nation_score += 2;
        }
        else {
            station5_planet_score += 3;
        }
        //  mion station 6 options
        // Everything is neutral
        // if (localStorage.getItem("station6") == "option1") {
        //     station6_planet_score += 5;
        // }
        // else if (localStorage.getItem("station6") == "option2") {
        //     station6_planet_score += 1;
        // }
        // else {
            station6_planet_score += 5;
        // }
        //  mion station 7 options
        if (localStorage.getItem("station7") == "option2") {
            station7_planet_score += 5;
        }
        else if (localStorage.getItem("station7") == "option1" ||
                localStorage.getItem("station7") == "option4" ||
                localStorage.getItem("station7") == "option5") {
            station7_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station7_nation_score += 2;
        }
        else {
            station7_planet_score += 3;
        }
        //  mion station 8 options
        if (localStorage.getItem("station8") == "option2" || localStorage.getItem("station8") == "option4") {
            station8_planet_score += 5;
        }
        else if (localStorage.getItem("station8") == "option3") {
            station8_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station8_nation_score += 2;
        }
        else {
            station8_planet_score += 3;
        }
        //  mion station 9 options
        if (localStorage.getItem("station9") == "option3" || localStorage.getItem("station9") == "option5") {
            station9_planet_score += 5;
        }
        else if (localStorage.getItem("station9") == "option1" || localStorage.getItem("station9") == "option4") {
            station9_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station9_nation_score += 2;
        }
        else {
            station9_planet_score += 3;
        }
        //  mion station 10 options
        if (localStorage.getItem("station10") == "option3") {
            station10_planet_score += 5;
        }
        // else if (localStorage.getItem("station10") == "option2") {
        //     station10_planet_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station10_nation_score += 2;
        }
        else {
            station10_planet_score += 3;
        }
        //  mion station 11 options
        if (localStorage.getItem("station11") == "option4") {
            station11_planet_score += 5;
        }
        // else if (localStorage.getItem("station11") == "option2") {
        //     station11_planet_score += 1;
        // }
        else if (localStorage.getItem("station1") == "null") {
            station11_nation_score += 2;
        }
        else {
            station11_planet_score += 3;
        }
        //  mion station 12 options
        if (localStorage.getItem("station12") == "option1") {
            station12_planet_score += 5;
        }
        else if (localStorage.getItem("station12") == "option5") {
            station12_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station12_nation_score += 2;
        }
        else {
            station12_planet_score += 3;
        }
        //  mion station 13 options
        if (localStorage.getItem("station13") == "option2" || localStorage.getItem("station13") == "option3") {
            station13_planet_score += 5;
        }
        else if (localStorage.getItem("station13") == "option5") {
            station13_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station13_nation_score += 2;
        }
        else {
            station13_planet_score += 3;
        }
        //  mion station 14 options
        if (localStorage.getItem("station14") == "option5") {
            station14_planet_score += 5;
        }
        else if (localStorage.getItem("station14") == "option3") {
            station14_planet_score += 1;
        }
        else if (localStorage.getItem("station1") == "null") {
            station14_nation_score += 2;
        }
        else {
            station14_planet_score += 3;
        }
    }
   
    // calculating final score for each category
    const maxScore = 60;
    const moraleMaxScore = 70;
    const ecoMaxScore = 50;

    // max points 60
    let healthScore = station1_nation_score + station1_planet_score + station2_nation_score + station2_planet_score + 
                  station3_nation_score + station3_planet_score + station4_nation_score + station4_planet_score +
                  station7_nation_score + station7_planet_score + station9_nation_score + station9_planet_score;
    healthPercent = Math.round((healthScore / maxScore) * 100);
                
    // max points 70
    let moraleScore = station1_nation_score + station1_planet_score + station3_nation_score + station3_planet_score + 
                  station4_nation_score +  station4_planet_score + station6_nation_score + station6_planet_score +
                  station7_nation_score + station7_planet_score + station10_nation_score + station10_planet_score +
                  station11_nation_score + station11_planet_score;
    moralePercent = Math.round((moraleScore / moraleMaxScore) * 100);
             
    // max points 60
    let sustainScore = station2_nation_score + station2_planet_score + station3_nation_score + station3_planet_score + 
                   station5_nation_score + station5_planet_score + station7_nation_score + station7_planet_score +
                   station8_nation_score + station8_planet_score + station13_nation_score + station13_planet_score;
    sustainPercent = Math.round((sustainScore / maxScore) * 100);

    // max points 50
    let ecoScore = station2_nation_score + station2_planet_score + station4_nation_score + station4_planet_score + 
               station8_nation_score + station8_planet_score + station9_nation_score + station9_planet_score +
               station10_nation_score + station10_planet_score;
    ecoPercent = Math.round((ecoScore / ecoMaxScore) * 100);

    // max points 60
    let defScore = station3_nation_score + station3_planet_score + station5_nation_score + station5_planet_score + 
               station8_nation_score + station8_planet_score + station10_nation_score + station10_planet_score +
               station12_nation_score + station12_planet_score + station14_nation_score + station14_planet_score;
    defPercent = Math.round((defScore / maxScore) * 100);

    localStorage.setItem("health", healthPercent)
    localStorage.setItem("morale", moralePercent);
    localStorage.setItem("sustain", sustainPercent);
    localStorage.setItem("economy", ecoPercent);
    localStorage.setItem("defense", defPercent);
}
import { updateSelected } from "./updateOption.js";

window.addEventListener('load', function () {
    const planet1 = document.getElementById("planet1");
    const planet2 = document.getElementById("planet2");
    const planet3 = document.getElementById("planet3");

    const S1O1 = document.getElementById("S1O1");
    const S1O2 = document.getElementById("S1O2");
    const S1O3 = document.getElementById("S1O3");
    const S1O4 = document.getElementById("S1O4");

    const S2O1 = document.getElementById("S2O1");
    const S2O2 = document.getElementById("S2O2");
    const S2O3 = document.getElementById("S2O3");
    const S2O4 = document.getElementById("S2O4");
    const S2O5 = document.getElementById("S2O5");

    const S3O1 = document.getElementById("S3O1");
    const S3O2 = document.getElementById("S3O2");
    const S3O3 = document.getElementById("S3O3");
    const S3O4 = document.getElementById("S3O4");
    const S3O5 = document.getElementById("S3O5");

    const S4O1 = document.getElementById("S4O1");
    const S4O2 = document.getElementById("S4O2");
    const S4O3 = document.getElementById("S4O3");
    const S4O4 = document.getElementById("S4O4");
    const S4O5 = document.getElementById("S4O5");

    const S5O1 = document.getElementById("S5O1");
    const S5O2 = document.getElementById("S5O2");
    const S5O3 = document.getElementById("S5O3");
    const S5O4 = document.getElementById("S5O4");
    const S5O5 = document.getElementById("S5O5");

    const S6O1 = document.getElementById("S6O1");
    const S6O2 = document.getElementById("S6O2");
    const S6O3 = document.getElementById("S6O3");
    const S6O4 = document.getElementById("S6O4");
    const S6O5 = document.getElementById("S6O5");

    const S7O1 = document.getElementById("S7O1");
    const S7O2 = document.getElementById("S7O2");
    const S7O3 = document.getElementById("S7O3");
    const S7O4 = document.getElementById("S7O4");
    const S7O5 = document.getElementById("S7O5");

    const S8O1 = document.getElementById("S8O1");
    const S8O2 = document.getElementById("S8O2");
    const S8O3 = document.getElementById("S8O3");
    const S8O4 = document.getElementById("S8O4");
    const S8O5 = document.getElementById("S8O5");

    const S9O1 = document.getElementById("S9O1");
    const S9O2 = document.getElementById("S9O2");
    const S9O3 = document.getElementById("S9O3");
    const S9O4 = document.getElementById("S9O4");
    const S9O5 = document.getElementById("S9O5");

    const S10O1 = document.getElementById("S10O1");
    const S10O2 = document.getElementById("S10O2");
    const S10O3 = document.getElementById("S10O3");

    const S11O1 = document.getElementById("S11O1");
    const S11O2 = document.getElementById("S11O2");
    const S11O3 = document.getElementById("S11O3");
    const S11O4 = document.getElementById("S11O4");
    const S11O5 = document.getElementById("S11O5");

    const S12O1 = document.getElementById("S12O1");
    const S12O2 = document.getElementById("S12O2");
    const S12O3 = document.getElementById("S12O3");
    const S12O4 = document.getElementById("S12O4");
    const S12O5 = document.getElementById("S12O5");

    const S13O1 = document.getElementById("S13O1");
    const S13O2 = document.getElementById("S13O2");
    const S13O3 = document.getElementById("S13O3");
    const S13O4 = document.getElementById("S13O4");
    const S13O5 = document.getElementById("S13O5");

    const S14O1 = document.getElementById("S14O1");
    const S14O2 = document.getElementById("S14O2");
    const S14O3 = document.getElementById("S14O3");
    const S14O4 = document.getElementById("S14O4");
    const S14O5 = document.getElementById("S14O5");

    const departButton = document.getElementById("depart-btn");

    // nation can be froichua, lesniuberg, ufren, otraria, or niqnio

    /** choose planet */
    if (planet1 != null) {
        planet1.addEventListener("click", function () {
            selectPlanet("ecralia");
        });
        planet2.addEventListener("click", function () {
            selectPlanet("anvolia");
        });
        planet3.addEventListener("click", function () {
            selectPlanet("mion");
        });
    }

    /** choose station 1 option */
    if (S1O1 != null) {
        S1O1.addEventListener("click", function () {
            selectOption("station1", "option1");
        });
        S1O2.addEventListener("click", function () {
            selectOption("station1", "option2");
        });
        S1O3.addEventListener("click", function () {
            selectOption("station1", "option3");
        });
        S1O4.addEventListener("click", function () {
            selectOption("station1", "option4");
        });
    }

    if (S2O1 != null) {
        S2O1.addEventListener("click", function () {
            selectOption("station2", "option1");
        });
        S2O2.addEventListener("click", function () {
            selectOption("station2", "option2");
        });
        S2O3.addEventListener("click", function () {
            selectOption("station2", "option3");
        });
        S2O4.addEventListener("click", function () {
            selectOption("station2", "option4");
        });
        S2O5.addEventListener("click", function () {
            selectOption("station2", "option5");
        });
    }

    if (S3O1 != null) {
        S3O1.addEventListener("click", function () {
            selectOption("station3", "option1");
        });
        S3O2.addEventListener("click", function () {
            selectOption("station3", "option2");
        });
        S3O3.addEventListener("click", function () {
            selectOption("station3", "option3");
        });
        S3O4.addEventListener("click", function () {
            selectOption("station3", "option4");
        });
        S3O5.addEventListener("click", function () {
            selectOption("station3", "option5");
        });
    }

    if (S4O1 != null) {
        S4O1.addEventListener("click", function () {
            selectOption("station4", "option1");
        });
        S4O2.addEventListener("click", function () {
            selectOption("station4", "option2");
        });
        S4O3.addEventListener("click", function () {
            selectOption("station4", "option3");
        });
        S4O4.addEventListener("click", function () {
            selectOption("station4", "option4");
        });
        S4O5.addEventListener("click", function () {
            selectOption("station4", "option5");
        });
    }

    if (S5O1 != null) {
        S5O1.addEventListener("click", function () {
            selectOption("station5", "option1");
        });
        S5O2.addEventListener("click", function () {
            selectOption("station5", "option2");
        });
        S5O3.addEventListener("click", function () {
            selectOption("station5", "option3");
        });
        S5O4.addEventListener("click", function () {
            selectOption("station5", "option4");
        });
        S5O5.addEventListener("click", function () {
            selectOption("station5", "option5");
        });
    }

    if (S6O1 != null) {
        S6O1.addEventListener("click", function () {
            selectOption("station6", "option1");
        });
        S6O2.addEventListener("click", function () {
            selectOption("station6", "option2");
        });
        S6O3.addEventListener("click", function () {
            selectOption("station6", "option3");
        });
        S6O4.addEventListener("click", function () {
            selectOption("station6", "option4");
        });
        S6O5.addEventListener("click", function () {
            selectOption("station6", "option5");
        });
    }

    if (S7O1 != null) {
        S7O1.addEventListener("click", function () {
            selectOption("station7", "option1");
        });
        S7O2.addEventListener("click", function () {
            selectOption("station7", "option2");
        });
        S7O3.addEventListener("click", function () {
            selectOption("station7", "option3");
        });
        S7O4.addEventListener("click", function () {
            selectOption("station7", "option4");
        });
        S7O5.addEventListener("click", function () {
            selectOption("station7", "option5");
        });
    }

    if (S8O1 != null) {
        S8O1.addEventListener("click", function () {
            selectOption("station8", "option1");
        });
        S8O2.addEventListener("click", function () {
            selectOption("station8", "option2");
        });
        S8O3.addEventListener("click", function () {
            selectOption("station8", "option3");
        });
        S8O4.addEventListener("click", function () {
            selectOption("station8", "option4");
        });
        S8O5.addEventListener("click", function () {
            selectOption("station8", "option5");
        });
    }

    if (S9O1 != null) {
        S9O1.addEventListener("click", function () {
            selectOption("station9", "option1");
        });
        S9O2.addEventListener("click", function () {
            selectOption("station9", "option2");
        });
        S9O3.addEventListener("click", function () {
            selectOption("station9", "option3");
        });
        S9O4.addEventListener("click", function () {
            selectOption("station9", "option4");
        });
        S9O5.addEventListener("click", function () {
            selectOption("station9", "option5");
        });
    }

    if (S8O1 != null) {
        S8O1.addEventListener("click", function () {
            selectOption("station8", "option1");
        });
        S8O2.addEventListener("click", function () {
            selectOption("station8", "option2");
        });
        S8O3.addEventListener("click", function () {
            selectOption("station8", "option3");
        });
        S8O4.addEventListener("click", function () {
            selectOption("station8", "option4");
        });
        S8O5.addEventListener("click", function () {
            selectOption("station8", "option5");
        });
    }

    if (S9O1 != null) {
        S9O1.addEventListener("click", function () {
            selectOption("station9", "option1");
        });
        S9O2.addEventListener("click", function () {
            selectOption("station9", "option2");
        });
        S9O3.addEventListener("click", function () {
            selectOption("station9", "option3");
        });
        S9O4.addEventListener("click", function () {
            selectOption("station9", "option4");
        });
        S9O5.addEventListener("click", function () {
            selectOption("station9", "option5");
        });
    }

    if (S10O1 != null) {
        S10O1.addEventListener("click", function () {
            selectOption("station10", "option1");
        });
        S10O2.addEventListener("click", function () {
            selectOption("station10", "option2");
        });
        S10O3.addEventListener("click", function () {
            selectOption("station10", "option3");
        });
    }

    if (S11O1 != null) {
        S11O1.addEventListener("click", function () {
            selectOption("station11", "option1");
        });
        S11O2.addEventListener("click", function () {
            selectOption("station11", "option2");
        });
        S11O3.addEventListener("click", function () {
            selectOption("station11", "option3");
        });
        S11O4.addEventListener("click", function () {
            selectOption("station11", "option4");
        });
        S11O5.addEventListener("click", function () {
            selectOption("station11", "option5");
        });
    }

    if (S12O1 != null) {
        S12O1.addEventListener("click", function () {
            selectOption("station12", "option1");
        });
        S12O2.addEventListener("click", function () {
            selectOption("station12", "option2");
        });
        S12O3.addEventListener("click", function () {
            selectOption("station12", "option3");
        });
        S12O4.addEventListener("click", function () {
            selectOption("station12", "option4");
        });
        S12O5.addEventListener("click", function () {
            selectOption("station12", "option5");
        });
    }

    if (S13O1 != null) {
        S13O1.addEventListener("click", function () {
            selectOption("station13", "option1");
        });
        S13O2.addEventListener("click", function () {
            selectOption("station13", "option2");
        });
        S13O3.addEventListener("click", function () {
            selectOption("station13", "option3");
        });
        S13O4.addEventListener("click", function () {
            selectOption("station13", "option4");
        });
        S13O5.addEventListener("click", function () {
            selectOption("station13", "option5");
        });
    }

    if (S14O1 != null) {
        S14O1.addEventListener("click", function () {
            selectOption("station14", "option1");
            localStorage.setItem("s14SelectedOption", "S14O1");
            updateSelected();
        });
        S14O2.addEventListener("click", function () {
            selectOption("station14", "option2");
            localStorage.setItem("s14SelectedOption", "S14O2");
            updateSelected();
        });
        S14O3.addEventListener("click", function () {
            selectOption("station14", "option3");
            localStorage.setItem("s14SelectedOption", "S14O3");
            updateSelected();
        });
        S14O4.addEventListener("click", function () {
            selectOption("station14", "option4");
            localStorage.setItem("s14SelectedOption", "S14O4");
            updateSelected();
        });
        S14O5.addEventListener("click", function () {
            selectOption("station14", "option5");
            localStorage.setItem("s14SelectedOption", "S14O5");
            updateSelected();
        });
    }

    departButton.addEventListener("click", function () {
        calculateScore();
    })

    function selectOption(station, option) {
        localStorage.setItem(station, option);
        updateCheckmarks();
    }

    function selectPlanet(planet) {
        localStorage.setItem("planet", planet);
        setImageStrings(localStorage.getItem("planet"), localStorage.getItem("nation"));
    }

    function setImageStrings(planet, nation) {
        localStorage.setItem("planetURL", "images/" + planet + ".png");
        localStorage.setItem("flagURL", "images/" + nation + ".png");
    }

    function formatNation(nation) {
        if (nation == "froichua") {
            return "Froi Chua"
        }
        if (nation == "lesniuberg") {
            return "Lesniuberg"
        }
        if (nation == "niqnio") {
            return "Niqnio"
        }
        if (nation == "otraria") {
            return "Otraria"
        }
        if (nation == "ufren") {
            return "Ufren"
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    function createPopups() {
        document.getElementById("flag-popup").src = localStorage.getItem("flagURL");
        document.getElementById("planet-popup").src = localStorage.getItem("planetURL");
        document.getElementById("nation-name").innerHTML = "<h3>" + 
            formatNation(localStorage.getItem("nation")) + "</h3>";
    }

    updateCheckmarks();
    updateSelected();
    createPopups();

    function updateCheckmarks() {
        if (localStorage.getItem("station1") == "null") {
            document.getElementById("check1").style.display = "none";
        } else { document.getElementById("check1").style.display = "inline" }
        if (localStorage.getItem("station2") == "null") {
            document.getElementById("check2").style.display = "none";
        } else { document.getElementById("check2").style.display = "inline" }
        if (localStorage.getItem("station3") == "null") {
            document.getElementById("check3").style.display = "none";
        } else { document.getElementById("check3").style.display = "inline" }
        if (localStorage.getItem("station4") == "null") {
            document.getElementById("check4").style.display = "none";
        } else { document.getElementById("check4").style.display = "inline" }
        if (localStorage.getItem("station5") == "null") {
            document.getElementById("check5").style.display = "none";
        } else { document.getElementById("check5").style.display = "inline" }
        if (localStorage.getItem("station6") == "null") {
            document.getElementById("check6").style.display = "none";
        } else { document.getElementById("check6").style.display = "inline" }
        if (localStorage.getItem("station7") == "null") {
            document.getElementById("check7").style.display = "none";
        } else { document.getElementById("check7").style.display = "inline" }
        if (localStorage.getItem("station8") == "null") {
            document.getElementById("check8").style.display = "none";
        } else { document.getElementById("check8").style.display = "inline" }
        if (localStorage.getItem("station9") == "null") {
            document.getElementById("check9").style.display = "none";
        } else { document.getElementById("check9").style.display = "inline" }
        if (localStorage.getItem("station10") == "null") {
            document.getElementById("check10").style.display = "none";
        } else { document.getElementById("check10").style.display = "inline" }
        if (localStorage.getItem("station11") == "null") {
            document.getElementById("check11").style.display = "none";
        } else { document.getElementById("check11").style.display = "inline" }
        if (localStorage.getItem("station12") == "null") {
            document.getElementById("check12").style.display = "none";
        } else { document.getElementById("check12").style.display = "inline" }
        if (localStorage.getItem("station13") == "null") {
            document.getElementById("check13").style.display = "none";
        } else { document.getElementById("check13").style.display = "inline" }
        if (localStorage.getItem("station14") == "null") {
            document.getElementById("check14").style.display = "none";
        } else { document.getElementById("check14").style.display = "inline" }
    }

})
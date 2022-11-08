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
            localStorage.setItem("s1SelectedOption", "S1O1");
            updateSelected();
        });
        S1O2.addEventListener("click", function () {
            selectOption("station1", "option2");
            localStorage.setItem("s1SelectedOption", "S1O2");
            updateSelected();
        });
        S1O3.addEventListener("click", function () {
            selectOption("station1", "option3");
            localStorage.setItem("s1SelectedOption", "S1O3");
            updateSelected();
        });
        S1O4.addEventListener("click", function () {
            selectOption("station1", "option4");
            localStorage.setItem("s1SelectedOption", "S1O4");
            updateSelected();
        });
    }

    if (S2O1 != null) {
        S2O1.addEventListener("click", function () {
            selectOption("station2", "option1");
            localStorage.setItem("s2SelectedOption", "S2O1");
            updateSelected();
        });
        S2O2.addEventListener("click", function () {
            selectOption("station2", "option2");
            localStorage.setItem("s2SelectedOption", "S2O2");
            updateSelected();
        });
        S2O3.addEventListener("click", function () {
            selectOption("station2", "option3");
            localStorage.setItem("s2SelectedOption", "S2O3");
            updateSelected();
        });
        S2O4.addEventListener("click", function () {
            selectOption("station2", "option4");
            localStorage.setItem("s2SelectedOption", "S2O4");
            updateSelected();
        });
        S2O5.addEventListener("click", function () {
            selectOption("station2", "option5");
            localStorage.setItem("s2SelectedOption", "S2O5");
            updateSelected();
        });
    }

    if (S3O1 != null) {
        S3O1.addEventListener("click", function () {
            selectOption("station3", "option1");
            localStorage.setItem("s3SelectedOption", "S3O1");
            updateSelected();
        });
        S3O2.addEventListener("click", function () {
            selectOption("station3", "option2");
            localStorage.setItem("s3SelectedOption", "S3O2");
            updateSelected();
        });
        S3O3.addEventListener("click", function () {
            selectOption("station3", "option3");
            localStorage.setItem("s3SelectedOption", "S3O3");
            updateSelected();
        });
        S3O4.addEventListener("click", function () {
            selectOption("station3", "option4");
            localStorage.setItem("s3SelectedOption", "S3O4");
            updateSelected();
        });
        S3O5.addEventListener("click", function () {
            selectOption("station3", "option5");
            localStorage.setItem("s3SelectedOption", "S3O5");
            updateSelected();
        });
    }

    if (S4O1 != null) {
        S4O1.addEventListener("click", function () {
            selectOption("station4", "option1");
            localStorage.setItem("s4SelectedOption", "S4O1");
            updateSelected();
        });
        S4O2.addEventListener("click", function () {
            selectOption("station4", "option2");
            localStorage.setItem("s4SelectedOption", "S4O2");
            updateSelected();
        });
        S4O3.addEventListener("click", function () {
            selectOption("station4", "option3");
            localStorage.setItem("s4SelectedOption", "S4O3");
            updateSelected();
        });
        S4O4.addEventListener("click", function () {
            selectOption("station4", "option4");
            localStorage.setItem("s4SelectedOption", "S4O4");
            updateSelected();
        });
        S4O5.addEventListener("click", function () {
            selectOption("station4", "option5");
            localStorage.setItem("s4SelectedOption", "S4O5");
            updateSelected();
        });
    }

    if (S5O1 != null) {
        S5O1.addEventListener("click", function () {
            selectOption("station5", "option1");
            localStorage.setItem("s5SelectedOption", "S5O1");
            updateSelected();
        });
        S5O2.addEventListener("click", function () {
            selectOption("station5", "option2");
            localStorage.setItem("s5SelectedOption", "S5O2");
            updateSelected();
        });
        S5O3.addEventListener("click", function () {
            selectOption("station5", "option3");
            localStorage.setItem("s5SelectedOption", "S5O3");
            updateSelected();
        });
        S5O4.addEventListener("click", function () {
            selectOption("station5", "option4");
            localStorage.setItem("s5SelectedOption", "S5O4");
            updateSelected();
        });
        S5O5.addEventListener("click", function () {
            selectOption("station5", "option5");
            localStorage.setItem("s5SelectedOption", "S5O5");
            updateSelected();
        });
    }

    if (S6O1 != null) {
        S6O1.addEventListener("click", function () {
            selectOption("station6", "option1");
            localStorage.setItem("s6SelectedOption", "S6O1");
            updateSelected();
        });
        S6O2.addEventListener("click", function () {
            selectOption("station6", "option2");
            localStorage.setItem("s6SelectedOption", "S6O2");
            updateSelected();
        });
        S6O3.addEventListener("click", function () {
            selectOption("station6", "option3");
            localStorage.setItem("s6SelectedOption", "S6O3");
            updateSelected();
        });
        S6O4.addEventListener("click", function () {
            selectOption("station6", "option4");
            localStorage.setItem("s6SelectedOption", "S6O4");
            updateSelected();
        });
        S6O5.addEventListener("click", function () {
            selectOption("station6", "option5");
            localStorage.setItem("s6SelectedOption", "S6O5");
            updateSelected();
        });
    }

    if (S7O1 != null) {
        S7O1.addEventListener("click", function () {
            selectOption("station7", "option1");
            localStorage.setItem("s7SelectedOption", "S7O1");
            updateSelected();
        });
        S7O2.addEventListener("click", function () {
            selectOption("station7", "option2");
            localStorage.setItem("s7SelectedOption", "S7O2");
            updateSelected();
        });
        S7O3.addEventListener("click", function () {
            selectOption("station7", "option3");
            localStorage.setItem("s7SelectedOption", "S7O3");
            updateSelected();
        });
        S7O4.addEventListener("click", function () {
            selectOption("station7", "option4");
            localStorage.setItem("s7SelectedOption", "S7O4");
            updateSelected();
        });
        S7O5.addEventListener("click", function () {
            selectOption("station7", "option5");
            localStorage.setItem("s7SelectedOption", "S7O5");
            updateSelected();
        });
    }

    if (S8O1 != null) {
        S8O1.addEventListener("click", function () {
            selectOption("station8", "option1");
            localStorage.setItem("s8SelectedOption", "S8O1");
            updateSelected();
        });
        S8O2.addEventListener("click", function () {
            selectOption("station8", "option2");
            localStorage.setItem("s8SelectedOption", "S8O2");
            updateSelected();
        });
        S8O3.addEventListener("click", function () {
            selectOption("station8", "option3");
            localStorage.setItem("s8SelectedOption", "S8O3");
            updateSelected();
        });
        S8O4.addEventListener("click", function () {
            selectOption("station8", "option4");
            localStorage.setItem("s8SelectedOption", "S8O4");
            updateSelected();
        });
        S8O5.addEventListener("click", function () {
            selectOption("station8", "option5");
            localStorage.setItem("s8SelectedOption", "S8O5");
            updateSelected();
        });
    }

    if (S9O1 != null) {
        S9O1.addEventListener("click", function () {
            selectOption("station9", "option1");
            localStorage.setItem("s9SelectedOption", "S9O1");
            updateSelected();
        });
        S9O2.addEventListener("click", function () {
            selectOption("station9", "option2");
            localStorage.setItem("s9SelectedOption", "S9O2");
            updateSelected();
        });
        S9O3.addEventListener("click", function () {
            selectOption("station9", "option3");
            localStorage.setItem("s9SelectedOption", "S9O3");
            updateSelected();
        });
        S9O4.addEventListener("click", function () {
            selectOption("station9", "option4");
            localStorage.setItem("s9SelectedOption", "S9O4");
            updateSelected();
        });
        S9O5.addEventListener("click", function () {
            selectOption("station9", "option5");
            localStorage.setItem("s9SelectedOption", "S9O5");
            updateSelected();
        });
    }

    if (S10O1 != null) {
        S10O1.addEventListener("click", function () {
            selectOption("station10", "option1");
            localStorage.setItem("s10SelectedOption", "S10O1");
            updateSelected();
        });
        S10O2.addEventListener("click", function () {
            selectOption("station10", "option2");
            localStorage.setItem("s10SelectedOption", "S10O2");
            updateSelected();
        });
        S10O3.addEventListener("click", function () {
            selectOption("station10", "option3");
            localStorage.setItem("s10SelectedOption", "S10O3");
            updateSelected();
        });
    }

    if (S11O1 != null) {
        S11O1.addEventListener("click", function () {
            selectOption("station11", "option1");
            localStorage.setItem("s11SelectedOption", "S11O1");
            updateSelected();
        });
        S11O2.addEventListener("click", function () {
            selectOption("station11", "option2");
            localStorage.setItem("s11SelectedOption", "S11O2");
            updateSelected();
        });
        S11O3.addEventListener("click", function () {
            selectOption("station11", "option3");
            localStorage.setItem("s11SelectedOption", "S11O3");
            updateSelected();
        });
        S11O4.addEventListener("click", function () {
            selectOption("station11", "option4");
            localStorage.setItem("s11SelectedOption", "S11O4");
            updateSelected();
        });
        S11O5.addEventListener("click", function () {
            selectOption("station11", "option5");
            localStorage.setItem("s11SelectedOption", "S11O5");
            updateSelected();
        });
    }

    if (S12O1 != null) {
        S12O1.addEventListener("click", function () {
            selectOption("station12", "option1");
            localStorage.setItem("s12SelectedOption", "S12O1");
            updateSelected();
        });
        S12O2.addEventListener("click", function () {
            selectOption("station12", "option2");
            localStorage.setItem("s12SelectedOption", "S12O2");
            updateSelected();
        });
        S12O3.addEventListener("click", function () {
            selectOption("station12", "option3");
            localStorage.setItem("s12SelectedOption", "S12O3");
            updateSelected();
        });
        S12O4.addEventListener("click", function () {
            selectOption("station12", "option4");
            localStorage.setItem("s12SelectedOption", "S12O4");
            updateSelected();
        });
        S12O5.addEventListener("click", function () {
            selectOption("station12", "option5");
            localStorage.setItem("s12SelectedOption", "S12O5");
            updateSelected();
        });
    }

    if (S13O1 != null) {
        S13O1.addEventListener("click", function () {
            selectOption("station13", "option1");
            localStorage.setItem("s13SelectedOption", "S13O1");
            updateSelected();
        });
        S13O2.addEventListener("click", function () {
            selectOption("station13", "option2");
            localStorage.setItem("s13SelectedOption", "S13O2");
            updateSelected();
        });
        S13O3.addEventListener("click", function () {
            selectOption("station13", "option3");
            localStorage.setItem("s13SelectedOption", "S13O3");
            updateSelected();
        });
        S13O4.addEventListener("click", function () {
            selectOption("station13", "option4");
            localStorage.setItem("s13SelectedOption", "S13O4");
            updateSelected();
        });
        S13O5.addEventListener("click", function () {
            selectOption("station13", "option5");
            localStorage.setItem("s13SelectedOption", "S13O5");
            updateSelected();
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
window.addEventListener('load', function () {
    const planet1 = document.getElementById("planet1");
    const planet2 = document.getElementById("planet2");
    const planet3 = document.getElementById("planet3");

    const S1O1 = document.getElementById("S1O1");
    const S1O2 = document.getElementById("S1O2");
    const S1O3 = document.getElementById("S1O3");
    const S1O4 = document.getElementById("S1O4");

    const departButton = document.getElementById("depart-btn");

    // nation can be froichua, lesniuberg, ufren, otraria, or niqnio
    localStorage.setItem("nation", "froichua");

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

    departButton.addEventListener("click", function () {
        // calculateScore();
        // set the innerHTML of the score to healthScore/moraleScore etc.
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
window.addEventListener('load', function () {
    const planet1 = document.getElementById("planet1");
    const planet2 = document.getElementById("planet2");
    const planet3 = document.getElementById("planet3");

    const option1 = document.getElementById("S1O1");
    const option2 = document.getElementById("S1O2");
    const option3 = document.getElementById("S1O3");
    const option4 = document.getElementById("S1O4");

    localStorage.setItem("station1", null);
    localStorage.setItem("station2", null);
    localStorage.setItem("station3", null);
    localStorage.setItem("station4", null);
    localStorage.setItem("station5", null);
    localStorage.setItem("station6", null);
    localStorage.setItem("station7", null);
    localStorage.setItem("station8", null);
    localStorage.setItem("station9", null);

    /** choose planet */
    if (planet1 != null) {
        planet1.addEventListener("click", function () {
            selectPlanet("planet1");
        });
        planet2.addEventListener("click", function () {
            selectPlanet("planet2");
        });
        planet3.addEventListener("click", function () {
            selectPlanet("planet3");
        });
    }

    /** choose option */
    if (option1 != null) {
        option1.addEventListener("click", function () {
            selectOption("option1");
        });
        option2.addEventListener("click", function () {
            selectOption("option2");
        });
        option3.addEventListener("click", function () {
            selectOption("option3");
        });
        option4.addEventListener("click", function () {
            selectOption("option4");
        });
    }

    function selectOption(option) {
        localStorage.setItem("station1", option);
        updateCheckmarks();
    }

    function selectPlanet(planet) {
        localStorage.setItem("planet", planet);
    }

    updateCheckmarks();

    function updateCheckmarks() {
        if (localStorage.getItem("station1") == "null") {
            document.getElementById("check1").style.display = "none";
        } else { document.getElementById("check1").style.display = "inline"}
        if (localStorage.getItem("station2") == "null") {
            document.getElementById("check2").style.display = "none";
        } else { document.getElementById("check2").style.display = "inline"}
        if (localStorage.getItem("station3") == "null") {
            document.getElementById("check3").style.display = "none";
        } else { document.getElementById("check3").style.display = "inline"}
        if (localStorage.getItem("station4") == "null") {
            document.getElementById("check4").style.display = "none";
        } else { document.getElementById("check4").style.display = "inline"}
        if (localStorage.getItem("station5") == "null") {
            document.getElementById("check5").style.display = "none";
        } else { document.getElementById("check5").style.display = "inline"}
        if (localStorage.getItem("station6") == "null") {
            document.getElementById("check6").style.display = "none";
        } else { document.getElementById("check6").style.display = "inline"}
        if (localStorage.getItem("station7") == "null") {
            document.getElementById("check7").style.display = "none";
        } else { document.getElementById("check7").style.display = "inline"}
        if (localStorage.getItem("station8") == "null") {
            document.getElementById("check8").style.display = "none";
        } else { document.getElementById("check8").style.display = "inline"}
        if (localStorage.getItem("station9") == "null") {
            document.getElementById("check9").style.display = "none";
        } else { document.getElementById("check9").style.display = "inline"}
    }

})
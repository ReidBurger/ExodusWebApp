window.addEventListener('load', function() {
    const planet1 = document.getElementById("planet1");
    const planet2 = document.getElementById("planet2");
    const planet3 = document.getElementById("planet3");

    const option1 = document.getElementById("S1O1");
    const option2 = document.getElementById("S1O2");
    const option3 = document.getElementById("S1O3");
    const option4 = document.getElementById("S1O4");

    /** choose planet */
    if (planet1 != null) {
        planet1.addEventListener("click", function() {
            selectPlanet("planet1");
        });
        planet2.addEventListener("click", function() {
            selectPlanet("planet2");
        });
        planet3.addEventListener("click", function() {
            selectPlanet("planet3");
        });
    }

    /** choose option */
    if (option1 != null) {
        option1.addEventListener("click", function() {
            selectOption("option1");
        });
        option2.addEventListener("click", function() {
            selectOption("option2");
        });
        option3.addEventListener("click", function() {
            selectOption("option3");
        });
        option4.addEventListener("click", function() {
            selectOption("option4");
        });
    }

    function selectOption(option) {
        localStorage.setItem("station1", option);
    }

    function selectPlanet(planet) {
        localStorage.setItem("planet", planet);
    }
})

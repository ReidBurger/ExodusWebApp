export function updateSelected() {
        
    if (localStorage.getItem("s14SelectedOption") != null) {

        const selected = document.getElementsByClassName("optionSelected14");
        for(let i = 0 ; i < selected.length ; i++) {
            selected[i].classList.remove('optionSelected14'); 
        }
        
        if (localStorage.getItem("s14SelectedOption") == "S14O1") {
            S14O1.classList.add("optionSelected14");
        }
        else if (localStorage.getItem("s14SelectedOption") == "S14O2") {
            S14O2.classList.add("optionSelected14");
        }
        else if (localStorage.getItem("s14SelectedOption") == "S14O3") {
            S14O3.classList.add("optionSelected14");
        }
        else if (localStorage.getItem("s14SelectedOption") == "S14O4") {
            S14O4.classList.add("optionSelected14");
        }
        else if (localStorage.getItem("s14SelectedOption") == "S14O5") {
            S14O5.classList.add("optionSelected14");
        }
    }
}
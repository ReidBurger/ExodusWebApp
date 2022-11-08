export function updateSelected() {

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
    
    if (S1O1 != null) {

        const selected1 = document.getElementsByClassName("optionSelected1");
        for(let i = 0 ; i < selected1.length ; i++) {
            selected1[i].classList.remove('optionSelected1'); 
        }
        
        if (localStorage.getItem("s1SelectedOption") == "S1O1") {
            S1O1.classList.add("optionSelected1");
        }
        else if (localStorage.getItem("s1SelectedOption") == "S1O2") {
            S1O2.classList.add("optionSelected1");
        }
        else if (localStorage.getItem("s1SelectedOption") == "S1O3") {
            S1O3.classList.add("optionSelected1");
        }
        else if (localStorage.getItem("s1SelectedOption") == "S1O4") {
            S1O4.classList.add("optionSelected1");
        }
    }
        
    if (S2O1 != null) {

        const selected2 = document.getElementsByClassName("optionSelected2");
        for(let i = 0 ; i < selected2.length ; i++) {
            selected2[i].classList.remove('optionSelected2'); 
        }
        
        if (localStorage.getItem("s2SelectedOption") == "S2O1") {
            S2O1.classList.add("optionSelected2");
        }
        else if (localStorage.getItem("s2SelectedOption") == "S2O2") {
            S2O2.classList.add("optionSelected2");
        }
        else if (localStorage.getItem("s2SelectedOption") == "S2O3") {
            S2O3.classList.add("optionSelected2");
        }
        else if (localStorage.getItem("s2SelectedOption") == "S2O4") {
            S2O4.classList.add("optionSelected2");
        }
        else if (localStorage.getItem("s2SelectedOption") == "S2O5") {
            S2O5.classList.add("optionSelected2");
        }
    }
   
    if (S3O1 != null) {

        const selected3 = document.getElementsByClassName("optionSelected3");
        for(let i = 0 ; i < selected3.length ; i++) {
            selected3[i].classList.remove('optionSelected3'); 
        }
        
        if (localStorage.getItem("s3SelectedOption") == "S3O1") {
            S3O1.classList.add("optionSelected3");
        }
        else if (localStorage.getItem("s3SelectedOption") == "S3O2") {
            S3O2.classList.add("optionSelected3");
        }
        else if (localStorage.getItem("s3SelectedOption") == "S3O3") {
            S3O3.classList.add("optionSelected3");
        }
        else if (localStorage.getItem("s3SelectedOption") == "S3O4") {
            S3O4.classList.add("optionSelected3");
        }
        else if (localStorage.getItem("s3SelectedOption") == "S3O5") {
            S3O5.classList.add("optionSelected3");
        }
    }
   
    if (S4O1 != null) {

        const selected4 = document.getElementsByClassName("optionSelected4");
        for(let i = 0 ; i < selected4.length ; i++) {
            selected4[i].classList.remove('optionSelected4'); 
        }
        
        if (localStorage.getItem("s4SelectedOption") == "S4O1") {
            S4O1.classList.add("optionSelected4");
        }
        else if (localStorage.getItem("s4SelectedOption") == "S4O2") {
            S4O2.classList.add("optionSelected4");
        }
        else if (localStorage.getItem("s4SelectedOption") == "S4O3") {
            S4O3.classList.add("optionSelected4");
        }
        else if (localStorage.getItem("s4SelectedOption") == "S4O4") {
            S4O4.classList.add("optionSelected4");
        }
        else if (localStorage.getItem("s4SelectedOption") == "S4O5") {
            S4O5.classList.add("optionSelected4");
        }
    }
   
    if (S5O1 != null) {

        const selected5 = document.getElementsByClassName("optionSelected5");
        for(let i = 0 ; i < selected5.length ; i++) {
            selected5[i].classList.remove('optionSelected5'); 
        }
        
        if (localStorage.getItem("s5SelectedOption") == "S5O1") {
            S5O1.classList.add("optionSelected5");
        }
        else if (localStorage.getItem("s5SelectedOption") == "S5O2") {
            S5O2.classList.add("optionSelected5");
        }
        else if (localStorage.getItem("s5SelectedOption") == "S5O3") {
            S5O3.classList.add("optionSelected5");
        }
        else if (localStorage.getItem("s5SelectedOption") == "S5O4") {
            S5O4.classList.add("optionSelected5");
        }
        else if (localStorage.getItem("s5SelectedOption") == "S5O5") {
            S5O5.classList.add("optionSelected5");
        }
    }
  
    if (S6O1 != null) {

        const selected6 = document.getElementsByClassName("optionSelected6");
        for(let i = 0 ; i < selected6.length ; i++) {
            selected6[i].classList.remove('optionSelected6'); 
        }
        
        if (localStorage.getItem("s6SelectedOption") == "S6O1") {
            S6O1.classList.add("optionSelected6");
        }
        else if (localStorage.getItem("s6SelectedOption") == "S6O2") {
            S6O2.classList.add("optionSelected6");
        }
        else if (localStorage.getItem("s6SelectedOption") == "S6O3") {
            S6O3.classList.add("optionSelected6");
        }
        else if (localStorage.getItem("s6SelectedOption") == "S6O4") {
            S6O4.classList.add("optionSelected6");
        }
        else if (localStorage.getItem("s6SelectedOption") == "S6O5") {
            S6O5.classList.add("optionSelected6");
        }
    }

    if (S7O1 != null) {

        const selected7 = document.getElementsByClassName("optionSelected7");
        for(let i = 0 ; i < selected7.length ; i++) {
            selected7[i].classList.remove('optionSelected7'); 
        }
        
        if (localStorage.getItem("s7SelectedOption") == "S7O1") {
            S7O1.classList.add("optionSelected7");
        }
        else if (localStorage.getItem("s7SelectedOption") == "S7O2") {
            S7O2.classList.add("optionSelected7");
        }
        else if (localStorage.getItem("s7SelectedOption") == "S7O3") {
            S7O3.classList.add("optionSelected7");
        }
        else if (localStorage.getItem("s7SelectedOption") == "S7O4") {
            S7O4.classList.add("optionSelected7");
        }
        else if (localStorage.getItem("s7SelectedOption") == "S7O5") {
            S7O5.classList.add("optionSelected7");
        }
    }

    if (S8O1 != null) {

        const selected8 = document.getElementsByClassName("optionSelected8");
        for(let i = 0 ; i < selected8.length ; i++) {
            selected8[i].classList.remove('optionSelected8'); 
        }
        
        if (localStorage.getItem("s8SelectedOption") == "S8O1") {
            S8O1.classList.add("optionSelected8");
        }
        else if (localStorage.getItem("s8SelectedOption") == "S8O2") {
            S8O2.classList.add("optionSelected8");
        }
        else if (localStorage.getItem("s8SelectedOption") == "S8O3") {
            S8O3.classList.add("optionSelected8");
        }
        else if (localStorage.getItem("s8SelectedOption") == "S8O4") {
            S8O4.classList.add("optionSelected8");
        }
        else if (localStorage.getItem("s8SelectedOption") == "S8O5") {
            S8O5.classList.add("optionSelected8");
        }
    }

    if (S9O1 != null) {

        const selected9 = document.getElementsByClassName("optionSelected9");
        for(let i = 0 ; i < selected9.length ; i++) {
            selected9[i].classList.remove('optionSelected9'); 
        }
        
        if (localStorage.getItem("s9SelectedOption") == "S9O1") {
            S9O1.classList.add("optionSelected9");
        }
        else if (localStorage.getItem("s9SelectedOption") == "S9O2") {
            S9O2.classList.add("optionSelected9");
        }
        else if (localStorage.getItem("s9SelectedOption") == "S9O3") {
            S9O3.classList.add("optionSelected9");
        }
        else if (localStorage.getItem("s9SelectedOption") == "S9O4") {
            S9O4.classList.add("optionSelected9");
        }
        else if (localStorage.getItem("s9SelectedOption") == "S9O5") {
            S9O5.classList.add("optionSelected9");
        }
    }

    if (S10O1 != null) {

        const selected10 = document.getElementsByClassName("optionSelected10");
        for(let i = 0 ; i < selected10.length ; i++) {
            selected10[i].classList.remove('optionSelected10'); 
        }
        
        if (localStorage.getItem("s10SelectedOption") == "S10O1") {
            S10O1.classList.add("optionSelected11");
        }
        else if (localStorage.getItem("s10SelectedOption") == "S10O2") {
            S10O2.classList.add("optionSelected11");
        }
        else if (localStorage.getItem("s10SelectedOption") == "S10O3") {
            S10O3.classList.add("optionSelected11");
        }
    }

    if (S11O1 != null) {

        const selected11 = document.getElementsByClassName("optionSelected11");
        for(let i = 0 ; i < selected11.length ; i++) {
            selected11[i].classList.remove('optionSelected11'); 
        }
        
        if (localStorage.getItem("s11SelectedOption") == "S11O1") {
            S11O1.classList.add("optionSelected11");
        }
        else if (localStorage.getItem("s11SelectedOption") == "S11O2") {
            S11O2.classList.add("optionSelected11");
        }
        else if (localStorage.getItem("s11SelectedOption") == "S11O3") {
            S11O3.classList.add("optionSelected11");
        }
        else if (localStorage.getItem("s11SelectedOption") == "S11O4") {
            S11O4.classList.add("optionSelected11");
        }
        else if (localStorage.getItem("s11SelectedOption") == "S11O5") {
            S11O5.classList.add("optionSelected11");
        }
    }

    if (S12O1 != null) {

        const selected12 = document.getElementsByClassName("optionSelected12");
        for(let i = 0 ; i < selected12.length ; i++) {
            selected12[i].classList.remove('optionSelected12'); 
        }
        
        if (localStorage.getItem("s12SelectedOption") == "S12O1") {
            S12O1.classList.add("optionSelected12");
        }
        else if (localStorage.getItem("s12SelectedOption") == "S12O2") {
            S12O2.classList.add("optionSelected12");
        }
        else if (localStorage.getItem("s12SelectedOption") == "S12O3") {
            S12O3.classList.add("optionSelected12");
        }
        else if (localStorage.getItem("s12SelectedOption") == "S12O4") {
            S12O4.classList.add("optionSelected12");
        }
        else if (localStorage.getItem("s12SelectedOption") == "S12O5") {
            S12O5.classList.add("optionSelected12");
        }
    }

    if (S13O1 != null) {

        const selected13 = document.getElementsByClassName("optionSelected13");
        for(let i = 0 ; i < selected13.length ; i++) {
            selected13[i].classList.remove('optionSelected13'); 
        }
        
        if (localStorage.getItem("s13SelectedOption") == "S13O1") {
            S13O1.classList.add("optionSelected13");
        }
        else if (localStorage.getItem("s13SelectedOption") == "S13O2") {
            S13O2.classList.add("optionSelected13");
        }
        else if (localStorage.getItem("s13SelectedOption") == "S13O3") {
            S13O3.classList.add("optionSelected13");
        }
        else if (localStorage.getItem("s13SelectedOption") == "S13O4") {
            S13O4.classList.add("optionSelected13");
        }
        else if (localStorage.getItem("s13SelectedOption") == "S13O5") {
            S13O5.classList.add("optionSelected13");
        }
    }

    if (S14O1 != null) {

        const selected14 = document.getElementsByClassName("optionSelected14");
        for(let i = 0 ; i < selected14.length ; i++) {
            selected14[i].classList.remove('optionSelected14'); 
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
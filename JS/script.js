let op1 = document.getElementById("option1");
let op2 = document.getElementById("option2");
let cal = document.getElementById("calculate");
let con = document.getElementById("conversion");

op1.addEventListener("click", () => {
    op1.classList.add("scale");
    op2.classList.add("descale");
    op2.classList.remove("scale");
    op1.classList.remove("descale");

    cal.classList.add("display");
    con.classList.add("displayN");
    cal.classList.remove("displayN");
    con.classList.remove("display");

    outputElement2.textContent = "Interest Earned: ";
    outputElement2.classList.remove("displayN")
    outputElement.textContent = "Present Value: ";
    selectElement.selectedIndex = 0;

    clearFields();
});

op2.addEventListener("click", () => {
    op2.classList.add("scale");
    op1.classList.add("descale");
    op1.classList.remove("scale");
    op2.classList.remove("descale");

    con.classList.add("display");
    cal.classList.add("displayN");
    con.classList.remove("displayN");
    cal.classList.remove("display");
});
function changeSelect(val) {
    if (val === "Y" /*|| val === "I" || val === "Cp"*/) {
        cur.textContent = "Choose: ";

        opt1.options[0].text = "Present Value of Anuity";
        opt1.options[0].value = "PVA";

        opt1.options[1].text = "Future Value of Anuity";
        opt1.options[1].value = "FVA";

        opt1.options[2].text = "Present Time Value of Money";
        opt1.options[2].value = "PTVM";

        opt1.options[3].text = "Future Time Value of Money";
        opt1.options[3].value = "FTVM";

        opt1.remove(4);
    } else {
        opt1.options[0].text = "Philippine Peso";
        opt1.options[0].value = "₱";

        opt1.options[1].text = "Americal Dollar";
        opt1.options[1].value = "$";

        opt1.options[2].text = "Japanese Yen";
        opt1.options[2].value = "¥";

        opt1.options[3].text = "Korean Won";
        opt1.options[3].value = "₩";

        if (opt1.options.length < 5) {
            newOption = document.createElement("option");
            newOption.value = "€";
            newOption.text = "British Euro";
            opt1.appendChild(newOption);
        }
    }
}

function clearFields(val) {
    val1a = document.getElementById("inptvalue1");
    val2a = document.getElementById("inptvalue2");
    val3a = document.getElementById("inptvalue3");
    val4a = document.getElementById("value5");
    if (val === 0) {
        opt1.selectedIndex = 0;
    }
    opt2.selectedIndex = 0;
    val1a.value = "";
    val2a.value = "";
    val3a.value = "";
    val4a.value = "";
}

// Handling Option Change
function handleOptionChange() {
    selectedOption = selectElement.value;

    clearFields(0);
    if (selectedOption === "PVA") {
        cur.textContent = "Currency: ";
        outputElement2.textContent = "Interest Earned: ";
        outputElement2.classList.remove("displayN")
        outputElement.textContent = "Present Value: ";

        val1.textContent = "Regular Deposit: ";
        val2.textContent = "Interest: ";
        val3.textContent = "Years: ";
        val4.classList.add("displayN");
        val4.classList.remove("displayG");
        val5.classList.add("displayN");
        val5.classList.remove("display");

        opt1.classList.remove("displayN");
        opt2.classList.remove("displayN");
        cur.classList.remove("displayN");
        com.classList.remove("displayN");

        changeSelect(selectedOption);
    } else if (selectedOption === "FVA") {
        cur.textContent = "Currency: ";
        outputElement2.textContent = "Interest Earned: ";
        outputElement2.classList.remove("displayN")
        outputElement.textContent = "Future Value: ";

        val1.textContent = "Regular Deposit: ";
        val2.textContent = "Interest: ";
        val3.textContent = "Years: ";
        val4.classList.add("displayN");
        val4.classList.remove("displayG");
        val5.classList.add("displayN");
        val5.classList.remove("display");

        opt1.classList.remove("displayN");
        opt2.classList.remove("displayN");
        cur.classList.remove("displayN");
        com.classList.remove("displayN");

        changeSelect(selectedOption);
    } else if (selectedOption === "PTVM") {
        cur.textContent = "Currency: ";
        outputElement2.classList.add("displayN")
        outputElement.textContent = "Present Value: ";

        val1.textContent = "Future Value: ";
        val2.textContent = "Interest: ";
        val3.textContent = "Years: ";
        val4.classList.add("displayN");
        val4.classList.remove("displayG");
        val5.classList.add("displayN");
        val5.classList.remove("display");

        opt1.classList.remove("displayN");
        opt2.classList.remove("displayN");
        cur.classList.remove("displayN");
        com.classList.remove("displayN");

        changeSelect(selectedOption);
    } else if (selectedOption === "FTVM") {
        cur.textContent = "Currency: ";
        outputElement2.classList.add("displayN")
        outputElement.textContent = "Future Value: ";

        val1.textContent = "Present Value: ";
        val2.textContent = "Interest: ";
        val3.textContent = "Years: ";
        val4.classList.add("displayN");
        val4.classList.remove("displayG");
        val5.classList.add("displayN");
        val5.classList.remove("display");

        opt1.classList.remove("displayN");
        opt2.classList.remove("displayN");
        cur.classList.remove("displayN");
        com.classList.remove("displayN");

        changeSelect(selectedOption);
    } else if (selectedOption === "PED") {
        outputElement2.classList.remove("displayN")
        outputElement2.textContent = "Elasticity: ";
        outputElement.textContent = "PED: ";

        val1.textContent = "Price 1: ";
        val2.textContent = "Price 2: ";
        val3.textContent = "Quantity 1: ";
        val4.classList.add("displayG");
        val4.classList.remove("displayN");
        val5.classList.remove("displayN");

        opt1.classList.add("displayN");
        opt2.classList.add("displayN");
        cur.classList.add("displayN");
        com.classList.add("displayN");
    } else if (selectedOption === "Y") {
        outputElement2.classList.add("displayN")
        outputElement.textContent = "Years: ";
        val1.textContent = "Regular Deposit: ";
        val2.textContent = "Interest: ";
        val3.textContent = "Present Value: ";
        val4.classList.add("displayN");
        val4.classList.remove("displayG");
        val5.classList.add("displayN");
        val5.classList.remove("display");

        opt1.classList.remove("displayN");
        opt2.classList.remove("displayN");
        cur.classList.remove("displayN");
        com.classList.remove("displayN");

        changeSelect(selectedOption);
    } /*else if (selectedOption === "I") {
        outputElement2.classList.add("displayN")
        outputElement.textContent = "Interest: ";
        val1.textContent = "Regular Deposit: ";
        val2.textContent = "Year: ";
        val3.textContent = "Present Value: ";
        val4.classList.add("displayN");
        val4.classList.remove("displayG");
        val5.classList.add("displayN");
        val5.classList.remove("display");

        opt1.classList.remove("displayN");
        opt2.classList.remove("displayN");
        cur.classList.remove("displayN");
        com.classList.remove("displayN");

        changeSelect(selectedOption);
    } else if (selectedOption === "Cp") {
        outputElement2.classList.remove("displayN")
        outputElement2.textContent = "Compounded: ";
        outputElement.textContent = "Compounded Value: ";

        val1.textContent = "Regular Deposit: ";
        val2.textContent = "Interest: ";
        val3.textContent = "Year: ";
        val4.textContent = "Present Value: ";
        val4.classList.remove("displayG");
        val4.classList.remove("displayN");
        val5.classList.remove("displayN");

        opt1.classList.remove("displayN");
        opt2.classList.add("displayN");
        cur.classList.remove("displayN");
        com.classList.add("displayN");

        changeSelect(selectedOption);
    }*/
}

function handleOptionChange2() {
    clearFields(1);
    if (selectElement.value == "Y" /*|| selectElement.value == "I" || selectElement.value == "Cp"*/) {
        if (opt1.value == "PVA") {
            val1.textContent = "Regular Deposit: ";
            if (selectElement.value != "Cp") {
                val3.textContent = "Present Value: ";
            } else {
                val4.textContent = "Present Value: ";
            }
        } else if (opt1.value == "FVA") {
            val1.textContent = "Regular Deposit: ";
            if (selectElement.value != "Cp") {
                val3.textContent = "Future Value: ";
            } else {
                val4.textContent = "Future Value: ";
            }
        } else if (opt1.value == "PTVM") {
            val1.textContent = "Future Value: ";
            if (selectElement.value != "Cp") {
                val3.textContent = "Present Value: ";
            } else {
                val4.textContent = "Present Value: ";
            }
        } else if (opt1.value == "FTVM") {
            val1.textContent = "Present Value: ";
            if (selectElement.value != "Cp") {
                val3.textContent = "Future Value: ";
            } else {
                val4.textContent = "Future Value: ";
            }
        }

        if (selectElement.value == "Y") {
            val2.textContent = "Interest: ";
        } /*else if (selectElement.value == "I") {
            val2.textContent = "Years: ";
        } else if (selectElement.value == "Cp") {
            val2.textContent = "Interest: ";
            val3.textContent = "Years: ";
        }*/
    }
}
selectElement.onchange = handleOptionChange;
opt1.onchange = handleOptionChange2;
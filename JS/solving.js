// Answer
function values(val1, val2, val3, val4, selEl) {
    let answer;
    val2 = val2/100;
    let ioverc = val2/val4;
    if (selEl === "Y" /*|| selEl === "I" || selEl === "Cp"*/) {
        if (selEl === "Y") {
            if (opt1.value === "PVA") {
                answer = Math.log(1/(1-(val3*(ioverc))/val1))/(-val4*Math.log(1+(ioverc)));
            } else if (opt1.value === "FVA") {
                answer = Math.round(Math.log(1 + ((val3 * (ioverc)) / val1)) / (val4 * Math.log(1 + (ioverc))));
            } else if (opt1.value === "PTVM") {
                answer = Math.round((Math.log(val3 / val1) / (Math.log(1 + (ioverc))))/2);
            } else if (opt1.value === "FTVM") {
                answer = Math.round(Math.log(val3/val1)/(val4*Math.log(1+ioverc)));
            }
        } /*else if (selEl === "I") {
            if (opt1.value === "PVA") {
                answer = cp * [R(1 - (1 + (i/cp))^(-n(cp))) / val3]
            } else if (opt1.value === "FVA") {
                answer = Math.round(Math.log(1 + ((val3 * (ioverc)) / val1)) / (val4 * Math.log(1 + (ioverc))));
            } else if (opt1.value === "PTVM") {
                answer = (val4 * (1 / ((val3 / val1)^(-1) - 1)));
            } else if (opt1.value === "FTVM") {
                answer = Math.round(Math.log(val3/val1)/(val4*Math.log(1+ioverc)));
            }
        } else if (selEl === "Cp") {
            answer = ((val4-val3)/(val4+val3))/((val2-val1)/(val2+val1))
        }*/
    } else {
        if (selEl === "PVA") {
            answer = (((val1*(1-Math.pow((1+ioverc),(-val3*val4))))/(ioverc))/val3)/val4;
        } else if (selEl === "FVA") {
            answer = (val1*(Math.pow((1+ioverc),(val3*val4))-1))/(ioverc);
        } else if (selEl === "PED") {
            val2 = val2*100;
            answer = ((val4-val3)/(val4+val3))/((val2-val1)/(val2+val1))
        } else if (selEl === "PTVM") {
            answer = (val1*(Math.pow((1+ioverc),(-val3*val4))))
        } else if (selEl === "FTVM") {
            answer = (val1*(Math.pow((1+ioverc),(val3*val4))))
        }
    }
    return answer;
}

//Solving
function solve() {
    outputElement = document.getElementById("answer");
    outputElement2 = document.getElementById("iEarned");
    curvalue = document.getElementById("Option1").value;
    cpvalue = parseFloat(document.getElementById("Option2").value);
    val1b = parseFloat(document.getElementById("inptvalue1").value);
    val2b = parseFloat(document.getElementById("inptvalue2").value);
    val3b = parseFloat(document.getElementById("inptvalue3").value);
    val4b = parseFloat(document.getElementById("value5").value);

    if (selectElement.value == "PVA") {
        ans = values(val1b, val2b, val3b, cpvalue, selectElement.value);
        iE = val1b-ans;

        outputElement2.textContent = "Interest Earned: "+curvalue+iE;
        outputElement.textContent = "Present Value: "+curvalue+ans;
    } else if (selectElement.value == "FVA") {
        ans = values(val1b, val2b, val3b, cpvalue, selectElement.value);
        iE = ans-((val1b*val3b)*cpvalue);

        outputElement2.textContent = "Interest Earned: "+curvalue+iE;
        outputElement.textContent = "Future Value: "+curvalue+ans;
    } else if (selectElement.value == "PTVM") {
        ans = values(val1b, val2b, val3b, cpvalue, selectElement.value);

        outputElement.textContent = "Present Value: "+curvalue+ans;
    } else if (selectElement.value == "FTVM") {
        ans = values(val1b, val2b, val3b, cpvalue, selectElement.value);

        outputElement.textContent = "Future Value: "+curvalue+ans;
    } else if (selectElement.value == "PED") {
        ans = Math.abs(values(val1b, val2b, val3b, val4b, selectElement.value));

        if (ans > 1) {
            outputElement2.textContent = "Elasticity: Elastic";
        } else if (ans < 1) {
            outputElement2.textContent = "Elasticity: Inelastic";
        } else if (ans === 1) {
            outputElement2.textContent = "Elasticity: Unitary Elastic";
        }
        outputElement.textContent = "PED: "+ans;
    } else if (selectElement.value == "Y") {
        ans = Math.abs(values(val1b, val2b, val3b, cpvalue, selectElement.value));

        outputElement.textContent = "Years: "+ans;
    } /*else if (selectElement.value == "I") {
        ans = Math.abs(values(val1b, val2b, val3b, cpvalue, selectElement.value));

        outputElement.textContent = "Years: "+ans+"%";
    } else if (selectElement.value == "Cp") {
        
    } */
}
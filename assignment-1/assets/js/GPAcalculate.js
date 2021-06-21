/*
********************************************************
* Individual Assignment (JS)				             		   *
* 			                                               *
* Name: ARIF AMIRUDDIN BIN SADIRAN             		     *
* Matric Number: A10EC0022                             *
* Section: 02                                          *
********************************************************
*/





/*Assessment item - Task 1*/
/*Based on your understanding, provide a detailed description of how function addNewSubject() works










*/
function addNewSubject() {
    var tbody = document.getElementById("table_body");
    var newTr = document.createElement("tr");
    for (var i = 0; i < 3; ++i) {
        var td = document.createElement("td");
        var input = document.createElement("input");

        if (i == 2 || i == 1) {
            input.type = "number";
            input.size = "5";
        }else{
            input.type = "text";
            input.size = "15";
            input.maxLength = "8";
        }

        td.appendChild(input);
        newTr.appendChild(td);
    }
    tbody.appendChild(newTr);
}




/*Assessment item - Task 2*/
/*Based on your understanding, provide a detailed description of how function deleteLastSubject() works










*/
function deleteLastSubject() {

    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        return false;
    }
    document.getElementById("myTable").deleteRow(x-1);
}




/*Assessment item - Task 3*/
/*Based on your understanding, provide a detailed description of how function sendElementToCalculate() works










*/
function sendElementToCalculate(){
    var tbody = document.getElementById("table_body");
    var elements = tbody.getElementsByTagName("input");
    CalculateGPA(elements);
}





/*Assessment item - Task 4*/
/*Based on your understanding, provide a detailed description of how function CalculateGPA() works.











*/
function CalculateGPA(elements) {

    var totalCredits = 0;
    var totalPoints = 0;
    var allOK = 0;
    var length = elements.length;



    for (var i = 0; i < length; i += 3) {

        if (elements[i].value == "") {
            alert("Please Enter The Name of The Subject!");
            elements[i].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i].style.borderColor = 'green';

        }

        if (elements[i+1].value == ""){
            alert("Please Insert Value of The Credit");
            elements[i+1].style.borderColor = 'red';
            return false;
        }else if (elements[i+1].value%1 != 0) {
            alert("The Value of Credit Must Be In Whole Number!");
            elements[i+1].style.borderColor = 'red';

        }
        else{
            elements[i+1].style.borderColor = 'green';
            var credit = parseFloat(elements[i+1].value);
            totalCredits += credit;
        }



        var grade = elements[i+2].value;
        if (grade == "") {
            alert("Please fill in the point");
            elements[i+2].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i+2].style.borderColor = 'green';
        }
        totalPoints += credit*getPoint(grade);


    }
    var GPA = totalPoints/totalCredits;

    document.results.total_credits.value = totalCredits;
    document.results.gpa.value = GPA.toPrecision(3);



}


function getPoint(grade) {

    if (grade >= 80) {
        return 4.00;
    }
    else if (grade >= 75){
        return 3.67;
    }
    else if (grade >= 70){
        return 3.33;
    }
    else if (grade >= 65){
        return 3.00;
    }
    else if (grade >= 60){
        return 2.67;
    }
    else if (grade >= 55){
        return 2.33;
    }
    else if (grade >= 50){
        return 2.00;
    }
    else if (grade >= 45){
        return 1.67;
    }
    else if (grade >= 40){
        return 1.33;
    }
    else if (grade >= 35){
        return 1.00;
    }
    else if (grade >= 30){
        return 0.67;
    }
    else if (grade >= 0){
        return 0.00;
    }
}

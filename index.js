function getEle(id) {
    return document.getElementById(id);
}

function confirmProcess() {
    var studentID = getEle("studentID").value;
    var studentName = getEle("studentName").value;
    var studentCondition = getEle("studentCondition").value;
    var math = getEle("math").value;
    var physic = getEle("physic").value;
    var chemistry = getEle("chemistry").value;
    var pointTraining = getEle("pointTraining").value;

    var averageMark = averageMarkCal(math, physic, chemistry).toFixed(2);

    var studentID_info = getEle("studentID_info")
    var studentName_info = getEle("studentName_info")
    var studentCondition_info = getEle("studentCondition_info")
    var averageMarkPrint = getEle("averageMark")
    var classification = getEle("classification")

    studentID_info.innerHTML = " : " + studentID
    studentName_info.innerHTML = " : " +studentName
    studentCondition_info.innerHTML = " : " +studentCondition
    averageMarkPrint.innerHTML = " : " +averageMark
    classification.innerHTML = " : " +markClassification(averageMark, pointTraining)
}

function averageMarkCal(math, physic, chemistry) {
    return (Number(math) + Number(physic) + Number(chemistry)) / 3;
}

function markClassification(mark, pointTraining) {
    var result; 
    if (pointTraining < 5) {
        result = "Fail";
    } else {
        if (mark >= 9) {
            result = "Excellent";
        }
        else if (mark >= 8) {
            result = "Good";
        }
        else if (mark >= 7) {
            result = "Fair";
        } else if (mark >= 6) {
            result = "Average fair";
        } else if (mark >= 5) {
            result = "Average";
        } else {
            result = "Fail";
        }
    }
    return result;
}

getEle("Confirm").onclick = confirmProcess
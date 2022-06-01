function getEle(id) {
    return document.getElementById(id);
}

var validation = new Validation();
var studentInput = new student();

var confirmProcess = function() {
    studentInput.studentID = getEle("studentID").value;
    studentInput.studentName = getEle("studentName").value;
    studentInput.studentCondition = getEle("studentCondition").value;
    studentInput.math = getEle("math").value;
    studentInput.physic = getEle("physic").value;
    studentInput.chemistry = getEle("chemistry").value;
    studentInput.pointTraining = getEle("pointTraining").value;

    var averageMark = studentInput.averageMarkCal();

    var studentID_info = getEle("studentID_info")
    var studentName_info = getEle("studentName_info")
    var studentCondition_info = getEle("studentCondition_info")
    var averageMarkPrint = getEle("averageMark")
    var classification = getEle("classification")

    var valid = true;

    valid &= validation.checkEmpty(studentInput.studentID, "#error_studentID") 
    & validation.checkEmpty(studentInput.studentName, "#error_studentName") 
    & validation.checkEmpty(studentInput.math, "#error_math") 
    & validation.checkEmpty(studentInput.physic, "#error_physic") 
    & validation.checkEmpty(studentInput.chemistry, "#error_chemistry") 
    & validation.checkEmpty(studentInput.pointTraining, "#error_pointTraining")  

    valid &= validation.checkLength(studentInput.studentID, "#error_studentID_length", 8, 20)

    valid &= validation.checkAllNum(studentInput.math, "#error_math_number")
    & validation.checkAllNum(studentInput.physic, "#error_physic_number")
    & validation.checkAllNum(studentInput.chemistry, "#error_chemistry_number")
    & validation.checkAllNum(studentInput.pointTraining, "#error_pointTraining_number")

    valid &= validation.checkValue(studentInput.math, "#error_math_value", 0, 10)
    & validation.checkValue(studentInput.physic, "#error_physic_value", 0, 10)
    & validation.checkValue(studentInput.chemistry, "#error_chemistry_value", 0, 10)
    & validation.checkValue(studentInput.pointTraining, "#error_pointTraining_value", 0, 10)

    valid &= validation.checkAllLetter(studentInput.studentName, "#error_studentName_letter")

    if (!valid) {
        return;
    }

    studentID_info.innerHTML = " : " + studentInput.studentID
    studentName_info.innerHTML = " : " +studentInput.studentName
    studentCondition_info.innerHTML = " : " +studentInput.studentCondition
    averageMarkPrint.innerHTML = " : " +averageMark.toFixed(2)
    classification.innerHTML = " : " + studentInput.markClassification();
}

getEle("Confirm").onclick = confirmProcess
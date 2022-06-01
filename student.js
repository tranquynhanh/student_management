var student = function() {
    this.studentID = '';
    this.studentName = '';
    this.math = '';
    this.studentCondition = '';
    this.physic = '';
    this.chemistry = '';
    this.pointTraining = '';
    this.averageMarkCal = function() {
        return (Number(this.math) + Number(this.physic) + Number(this.chemistry)) / 3;
    }
    this.markClassification = function() {
        var averageMark = this.averageMarkCal();
        var result; 
        if (this.pointTraining < 5) {
            result = "Fail";
        } else {
            if (averageMark >= 9) {
                result = "Excellent";
            }
            else if (averageMark >= 8) {
                result = "Good";
            }
            else if (averageMark >= 7) {
                result = "Fair";
            } else if (averageMark >= 6) {
                result = "Average fair";
            } else if (averageMark >= 5) {
                result = "Average";
            } else {
                result = "Fail";
            }
        }
        return result;
    }
}
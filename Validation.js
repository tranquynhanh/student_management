var Validation = function() {
    this.checkEmpty = function(value, error) {
        if (value.trim() === '') {
            document.querySelector(error).innerHTML = 'Please fill the blank'
            document.querySelector(error).style.display = 'block'
            return false;
        } else {
            document.querySelector(error).innerHTML = ''
            document.querySelector(error).style.display = 'none'
            return true;
        }
    }
    this.checkAllNum = function(value, error) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.querySelector(error).innerHTML = ''
            document.querySelector(error).style.display = 'none'
            return true;
        } else {
            document.querySelector(error).innerHTML = 'value must be a number'
            document.querySelector(error).style.display = 'block'
            return false;
        }
    }

    this.checkLength = function(value, error, minLength, maxLength) {
        if (value.trim().length < minLength || value.trim().length > maxLength) {
            document.querySelector(error).innerHTML = `value must have from ${minLength} to ${maxLength} characters`
            document.querySelector(error).style.display = 'block'
            return false
        }
        else {
            document.querySelector(error).innerHTML = ''
            document.querySelector(error).style.display = 'none'
            return true
        }
    }

    this.checkValue = function(value, error, minValue, maxValue) {
        if (value.trim() < minValue || value.trim() > maxValue) {
            document.querySelector(error).innerHTML = `value must have from ${minValue} to ${maxValue} characters`
            document.querySelector(error).style.display = 'block'
            return false
        }
        else {
            document.querySelector(error).innerHTML = ''
            document.querySelector(error).style.display = 'none'
            return true
        }
    }
    this.checkAllLetter = function(value, error) {
        var regexLetter = /^[A-Za-z ]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(error).innerHTML = ''
            document.querySelector(error).style.display = 'none'
            return true;
        } else {
            document.querySelector(error).innerHTML = 'value must be all letter'
            document.querySelector(error).style.display = 'block'
            return false;
        }
    }
}
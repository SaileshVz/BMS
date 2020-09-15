export const checkAlphabet = (event) => {
    let asciival = event.charCode;
    if ((asciival != 32 && asciival < 65) || (asciival > 90 && asciival < 97) || (asciival > 122))
        return true;

}

export const checkPassword = (event) => {
    let password = [...event.target.value];
    let specialCharValidation = false;
    let capsValidation = false
    let numbervalidation = false;
    let lengthValidation = false;
    if (password.length >= 8) {
        lengthValidation = true;
        for (let item in password) {
            let asciival = password[item].charCodeAt(0);
            if ((asciival >= 33 && asciival <= 47) || (asciival >= 58 && asciival <= 64)
                || (asciival >= 91 && asciival <= 96) || (asciival >= 123 && asciival <= 126)) {
                specialCharValidation = true;
            }
            if (asciival >= 65 && asciival <= 90)
                capsValidation = true;
            if (asciival >= 48 && asciival <= 57)
                numbervalidation = true
        }
    }
    return lengthValidation && numbervalidation && capsValidation && specialCharValidation;
}
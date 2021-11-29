const ValidateLengthInput = (value,  minimum) => {
    if(!minimum){
        minimum = 0;
    }
    return value.trim().length > minimum;
}

export default ValidateLengthInput
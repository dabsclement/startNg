let chaLength = function (field) {
    if (validity.typeMismatch) {
        if (field.type === 'email')
        return 'Please enter an email address.' ;
        if (field.type === 'text')
        return 'please enter text not number.';
    };
    if (validity.tooShort) 
    return 'please lengthen this text to' + field.getAttribute('minlength') + 'charcters or more. You are currently using ' + field.value.length + 'characters.' ;
} ;

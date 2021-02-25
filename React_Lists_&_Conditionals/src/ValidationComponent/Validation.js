import React from 'react';

const Validation = (props) => {
    let validationMessage ="Text is too long";
    if(props.inputTextLength <= 5)
        validationMessage = "Text is too small";

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default Validation;
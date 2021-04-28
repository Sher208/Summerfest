import React from 'react';
import Input from './Input';

const InputMapper = ({formData, setFormData}) => {
    
    const checkValidity = (value, rules, key) => {
        let isValid = true;
        let errorFirst = '';

        if(rules.matcher && isValid){
            let matcherType = rules.matcher;
            let matcherValue = formData.formFeild[rules.matcher].value
            console.log(matcherValue, value);
            if(value === matcherValue){
                isValid = true;
            }else{
                isValid = false;
                errorFirst = matcherType.charAt(0).toUpperCase() + matcherType.slice(1) +' doesnt match !';
            }
        }

        if(rules.required && isValid) {
            if(value.trim() !== '') {
                isValid = true;
            }else{
                isValid = false;
                errorFirst = key.charAt(0).toUpperCase() + key.slice(1) +' is required !';
            }
        }

        if(rules.minLength && isValid){
            if(value.length >= rules.minLength) {
                isValid = true;
            }else{
                isValid = false;
                errorFirst = key.charAt(0).toUpperCase() + key.slice(1) +' must contain atleast '+ rules.minLength+ ' characters !'; 
            }
        }
        
        if(rules.maxLength && isValid){
            if(value.length <= rules.maxLength) {
                isValid = true;
            }else{
                isValid = false;
                errorFirst = key.charAt(0).toUpperCase() + key.slice(1) +' cannot exceed '+ rules.maxLength+ ' characters !';
            }
            
        }

        if(rules.regrexType && isValid){
            // console.log('Hellllloooooooo-----------------');
            let regrex = '';
            switch(rules.regrexType){
                case 'password':
                    regrex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,}$/;
                    console.log(regrex.test('Ringworm9741#'));
                    if(regrex.test(value)){
                        isValid = true;
                    }else{
                        isValid = false;
                        errorFirst = key.charAt(0).toUpperCase() + key.slice(1) +' must include (uppercase, lowercase, number, special)';
                    }
                    break;
                case 'email':
                    regrex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
                    if(regrex.test(value)){
                        isValid = true;
                    }else{
                        isValid = false;
                        errorFirst = key.charAt(0).toUpperCase() + key.slice(1) +' Invalid';
                    }
                    break;
                default:
                    isValid = true;
            }
        }

        return {isValid, errorFirst};
    }


    const inputChanged = (e, key) => {
        const updatedFormData = {
            ...formData.formFeild
        };
        const updatedFormElement = {
            ...updatedFormData[key]
        }
        updatedFormElement.value = e.target.value;
        updatedFormElement.touched = true;
        const {isValid, errorFirst} = checkValidity(updatedFormElement.value, updatedFormElement.validation, key);
        updatedFormElement.valid = isValid;
        updatedFormElement.error = errorFirst;
        updatedFormData[key] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifiers in updatedFormData){
            formIsValid = updatedFormData[inputIdentifiers].valid && formIsValid;
        }
        setFormData({formFeild: updatedFormData, formValidity: formIsValid});
    }


    return (
        <>
            {
                Object.entries(formData.formFeild).map(([key, value]) => 
                    <Input 
                        key={key}
                        k={key}
                        formData={formData}
                        elementType={value.elementType}
                        elementConfig={value.elementConfig}
                        value={value.value}
                        isValid={!value.valid}
                        shouldValidate={value.validation}
                        isTouched={value.touched}
                        errorMessage={value.error}
                        hideShow = {value.hideShow}
                        setFormData = {setFormData}
                        changed={(e) => inputChanged(e, key)}
                    />
                )
            }
        </>
    )
}

export default InputMapper;
import React from 'react';
import classes from './Input.module.scss';


const Input = (props) => {
    
    let inputElement = null;
    let validationError = null;

    const classArray = [classes.InputElement];

    if(props.isValid && props.shouldValidate && props.isTouched){
        classArray.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
    }

    const eyeClick = () => {
        const updatedFormData = {
            ...props.formData.formFeild,
        };

        const updatedFormElement = {
            ...updatedFormData[props.k],
            hideShow: !props.formData.formFeild[props.k].hideShow
        }
        updatedFormData[props.k] = updatedFormElement;
        
        props.setFormData({formFeild: updatedFormData, formValidity: props.formData.formValidity})
    }
    
    switch(props.elementType){
        case('input'):
            if(props.elementConfig.type==='password'){
                inputElement = <div className={classes.ps_wrap}>
                                    <input className={classArray.join(' ')} 
                                            type={props.hideShow ? 'text' : 'password'}
                                            placeholder={props.elementConfig.placeholder}
                                            value={props.value}
                                            onChange={props.changed}
                                            />
                                    {
                                        props.hideShow ? (
                                            <i className='fa fa-eye-slash' onClick={eyeClick}/>
                                        ) : (
                                            <i className='fa fa-eye' onClick={eyeClick}/>
                                        )
                                    }
                                </div>;
            }else{
                inputElement = <input className={classArray.join(' ')} 
                                            {...props.elementConfig}
                                            value={props.value}
                                            onChange={props.changed}
                                            />;
            }
            break;
        case('textarea'):
            inputElement = <textarea className={classArray.join(' ')} 
                                                {...props.elementConfig}
                                                value={props.value}
                                                onChange={props.changed}
                                                />;
            break;
        default:
            inputElement = <input className={classArray.join(' ')} 
                                            {...props.elementConfig}
                                            value={props.value}
                                            onChange={props.changed}
                                            />;
            break;
    }


    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input;
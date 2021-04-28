import React, {useState, useEffect} from 'react';
import Button from '../../Layout/Button/Button';
import {connect} from 'react-redux';
import {login} from '../../../actions/auth';
import Modal from '../../Layout/Modal/Modal';
import Error from '../../Layout/Error/Error';
import './Login.scss';
import { Redirect } from 'react-router';
import InputMapper from '../../Layout/Input/InputMapper';

const Login = ({isAuthenticated, login, error}) => {

    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        formFeild: {
            name:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                error:''
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                error:''
            }
        },
        formValidity: false
    })

    useEffect(() => {
        console.log(error);
        if(error){
            setShow(true);
        }
    }, [error])

    const onSubmit = (e) => {
        e.preventDefault();
        const formDataSubmit = {};
        const {formFeild} = {...formData}
        for(let formElement in formFeild){
            formDataSubmit[formElement] = formFeild[formElement].value;
        }
        const {name, password} = formDataSubmit;
        // console.log({name, password});
        login({name, password});
    }

    const closeModal = () => {
        setShow(false)
    }

    if (isAuthenticated) {
        return <Redirect to='/'></Redirect>;
    }

    const acceptAndErrorBacklight = () => {
        const classArray = []
        const {formFeild} = {...formData}
        if(formData.formValidity){
            classArray.push('Valid');
        }else{
            for(let formElement in formFeild){
                if(formFeild[formElement].touched && !formFeild[formElement].valid){
                    classArray.push('Invalid');
                }
            }
        }
        return classArray.join(' ');
    }

    return (
        <>
            <Modal show={show} closed={closeModal}>
                <Error heading='Error' text={error && error.msg}/>
            </Modal>
            <div className="container-form">
            <form className={acceptAndErrorBacklight()} onSubmit={onSubmit}>
                <h1 className="form-heading text-center">Login</h1>
                <div className="form-group">
                    <InputMapper formData={formData} setFormData={setFormData}/>
                    <Button type="submit" disabled={!formData.formValidity}>Login</Button>
                </div>
            </form>
            </div>
        </>
       
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.getAuth.isAuthenticated,
    error: state.getAuth.error
});

const mapDispatchToProps = dispach => ({
    login: payload => dispach(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
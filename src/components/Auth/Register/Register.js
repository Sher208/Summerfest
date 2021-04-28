import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Button from '../../Layout/Button/Button';
import {register} from '../../../actions/auth';
import Modal from '../../Layout/Modal/Modal';
import Error from '../../Layout/Error/Error';
import InputMapper from '../../Layout/Input/InputMapper';
import './Register.scss';


const Register = ({register, isAuthenticated, isRegistered, history, error, loading}) => {

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
                    minLength: 6,
                    maxLength: 30
                },
                valid: false,
                touched: false,
                error:'',
                hideShow: false
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 30,
                    regrexType: 'password'
                },
                valid: false,
                touched: false,
                error:'',
                hideShow: false
            },
            password2:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                    matcher: 'password'
                },
                valid: false,
                touched: false,
                error:'',
                hideShow: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 30,
                    regrexType: 'email'
                },
                valid: false,
                touched: false,
                error:'',
                hideShow: false
            }
        },
        formValidity: false
    })

    const [appError, setAppError] = useState('');
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [redirectRegistered, setRedirectRegiter] = useState(false);

    useEffect(() => {
        setRedirect(isAuthenticated);
    }, [isAuthenticated])

    useEffect(() => {
        setRedirectRegiter(isRegistered);
    }, [isRegistered])

    useEffect(() => {
        if(error){
            setAppError(error.msg);
            setShow(true);
        }
    },[error, loading])


    const closeModal = () => {
        setShow(false)
    }

    if (redirect) {
        return <Redirect to='/'></Redirect>;
    }

    if (redirectRegistered) {
        history.push('/login');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formDataSubmit = {};
        const {formFeild} = {...formData}
        for(let formElement in formFeild){
            formDataSubmit[formElement] = formFeild[formElement].value;
        }
        const {name, password, email} = formDataSubmit;
        register({ name, password, email });
            // history.push('/login');
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
        <div>
            <Modal show={show} closed={closeModal}>
                <Error heading='Error' text={appError}/>
            </Modal>
            <div className="container-form">
            <form className={acceptAndErrorBacklight()} onSubmit={onSubmit}>
                <h1 className="form-heading text-center">Register</h1>
                <div className="form-group">
                    <InputMapper formData={formData} setFormData={setFormData}/>
                    <Button type="submit" disabled={!formData.formValidity}>Register</Button>
                </div>
            </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.getAuth.isAuthenticated,
    error: state.getAuth.error,
    loading: state.getAuth.loading,
    isRegistered: state.getAuth.isRegistered
})

const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(register(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
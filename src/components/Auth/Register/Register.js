import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Button from '../../Layout/Button/Button';
import {register} from '../../../actions/auth';
import './Register.scss';


const Register = ({register, isAuthenticated, history}) => {
    

    const [state, setState] = useState({
        name: '',
        password: '',
        password2: '',
        email: ''
    })

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setRedirect(isAuthenticated);
    }, [isAuthenticated])


    const {name, password, password2, email} = state;

    if (redirect) {
        return <Redirect to='/'></Redirect>;
    }

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value.trim()});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Password dont match');
        } else {
            register({ name, password, email });
            history.push('/login');
        }
    }

    

    return (
        <div>
            <div className="container-form">
            <form className="form" onSubmit={onSubmit}>
                <h1 className="form-heading text-center">Register</h1>
                <div className="form-group">
                    <div className="form-feild">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter name" name="name" id="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="form-feild">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter password" name="password" id="password" value={password} onChange={onChange} required />
                    </div>
                    <div className="form-feild">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" placeholder="Confirm password" name="password2" id="password2" value={password2} onChange={onChange} required />
                    </div>
                    <div className="form-feild">
                        <label htmlFor="password">Email</label>
                        <input type="email" placeholder="Enter email" name="email" id="email" value={email} onChange={onChange}/>
                    </div>
                    <Button type="submit">Register</Button>
                </div>
            </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.getAuth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(register(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
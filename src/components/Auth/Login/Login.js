import React, {useState} from 'react';
import Button from '../../Layout/Button/Button';
import {connect} from 'react-redux';
import {login} from '../../../actions/auth';
import './Login.scss';
import { Redirect } from 'react-router';

const Login = ({isAuthenticated, login}) => {

    const [state, setState] = useState({
        name: '',
        password: ''
    })

    const {name, password} = state;

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login({name, password});
    }

    if (isAuthenticated) {
        return <Redirect to='/'></Redirect>;
    }

    return (
        <>
            <div className="container-form">
            <form className="form" onSubmit={onSubmit}>
                <h1 className="form-heading text-center">Login</h1>
                <div className="form-group">
                    <div className="form-feild">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" name="name" id="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="form-feild">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter password" name="password" id="password" value={password} onChange={onChange} required />
                    </div>
                    <Button type="submit">Login</Button>
                </div>
            </form>
            </div>
        </>
       
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.getAuth.isAuthenticated
});

const mapDispatchToProps = dispach => ({
    login: payload => dispach(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
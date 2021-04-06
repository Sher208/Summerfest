import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import {loadCompetitionById, resetCompetition} from '../../actions/competition';
import Button from '../Layout/Button/Button';
import PageNotFound from '../PageNotFound/PageNotFound';
import './EventPage.scss';

const EventPage = ({competition,match,loadCompetitionById, error, resetCompetition}) => {

    const [errorState, setErrorState] = useState(false);
    const [name, setName] = useState('');
    const registerLocation = useRef();
    const register = useRef();

    useEffect(() => {
        if(error){
            setErrorState(true);
        }else{
            setErrorState(false);
            loadCompetitionById(match.params.id);
        }
        return () => {
            resetCompetition();
        }
    }, [loadCompetitionById, match.params.id, error])

    const takeToRegister = () => {
        registerLocation.current.focus();
    }

    const onRegister= (e) => {
        if(e.key == 'Enter'){
            let li = document.createElement("li");
            li.textContent = e.target.value;
            register.current.appendChild(li);
            e.target.value = ''
        }
    }

    if(errorState){
        return <PageNotFound/>
    }
        
    return (
        <div className="event-page-bg">
        {
            competition ? (
                <>
                <div className="container">
                    <h1 className="text-center mg-bottom">{competition.name}</h1>
                    <p className="text-center lead">{competition.desc}</p>
                    <div class="button-space">
                            <Button onClick={takeToRegister}>Register for {competition.name}</Button>
                    </div>
                </div>
                <div class="instuctions">
                        <p className="text-center lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <br/>
                        <br/>
                        <p className="text-center lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <br/>
                        <br/>
                        <p className="text-center lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <br/>
                        <br/>
                        <p className="text-center lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </>
            ):
            (
                <p>Loading....</p>
            )
        }
            <div class="registration-grid">
                <div class="register-name">
                    <p class="text-center">Name</p>
                    <input ref={registerLocation} onKeyDown={(e)=> onRegister(e)} name="register" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div class="register-display">
                    <h2>Registered People</h2>
                    <ul ref={register} class="registered">
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    competition: state.getCompetition.competition,
    error: state.getCompetition.error
});
  
const mapDispatchToProps = dispatch => ({
    loadCompetitionById: id => dispatch(loadCompetitionById(id)),
    resetCompetition: () => dispatch(resetCompetition()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
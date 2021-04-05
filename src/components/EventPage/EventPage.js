import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {loadCompetitionById, resetCompetition} from '../../actions/competition';
import Button from '../Layout/Button/Button';
import './EventPage.scss';

const EventPage = ({competition,match,loadCompetitionById, error, resetCompetition}) => {

    const [errorState, setErrorState] = useState(false);

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
        

    return (
        <>
        {
            errorState ? (<Redirect to='/err' />) : (null)
        }
        {
            competition ? (
            <div className="event-page-bg">
                <div className="container">
                    <h1 className="text-center mg-bottom">{competition.name}</h1>
                    <p className="text-center lead">{competition.desc}</p>
                    <div class="button-space">
                            <Button>Register for {competition.name}</Button>
                    </div>
                </div>
            </div>
            ):
            (
                <p>Loading....</p>
            )
        }
           
        </>
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
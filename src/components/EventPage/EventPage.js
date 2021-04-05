import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {loadCompetitionById, resetCompetitionAndError} from '../../actions/competition'

const EventPage = ({competition,match,loadCompetitionById, error, resetCompetitionAndError}) => {

    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        if(error){
            setErrorState(true);
        }else{
            setErrorState(false);
            loadCompetitionById(match.params.id);
        }
        return () => {
            resetCompetitionAndError();
        }
    }, [loadCompetitionById, match.params.id, error, resetCompetitionAndError])
        

    return (
        <>
        {
            errorState ? (<Redirect to='/err' />) : (null)
        }
        {
            competition ? (
            <div>
                <h1 className="text-center">{competition.name}</h1>
                <p className="text-center">{competition.desc}</p>
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
    resetCompetitionAndError: () => dispatch(resetCompetitionAndError()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {loadCompetitionById, resetCompetition} from '../../actions/competition'

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
    resetCompetition: () => dispatch(resetCompetition()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
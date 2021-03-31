import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadCompetitionById} from '../../actions/competition';

const EventPage = ({competition,match,loadCompetitionById}) => {

    useEffect(() => {
        loadCompetitionById(match.params.id)
      }, [loadCompetitionById, match.params.id])

    return (
        <>
        {
            competition ? (
            <div>
                <h1 class="text-center">{competition.name}</h1>
                <p class="text-center">{competition.desc}</p>
            </div>
            ):
            (<p>Loading....</p>)
        }
           
        </>
    )
}

const mapStateToProps = (state) => ({
    competition: state.getCompetition.competition
});
  
const mapDispatchToProps = dispatch => ({
    loadCompetitionById: id => dispatch(loadCompetitionById(id))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
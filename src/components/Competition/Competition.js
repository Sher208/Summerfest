import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {loadCompetitions} from '../../actions/competition';
import './Competition.scss';

const Competition = ({loadCompetitions, competition}) => {

  useEffect(() => {
    loadCompetitions()
  }, [loadCompetitions])


  return (
    <h1 className="text-center">{console.log(competition)}Hello</h1>
  );
}

const mapStateToProps = (state) => ({
  competition: state.getCompetition.competitions
});

const mapDispatchToProps = dispatch => ({
  loadCompetitions: () => dispatch(loadCompetitions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Competition);
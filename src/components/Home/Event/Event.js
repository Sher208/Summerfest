import React, { Fragment, useState, useEffect } from 'react';
import EventItem from './EventItem';
import {connect} from 'react-redux'
import Modal from '../../Layout/Modal/Modal';
import Prizes from '../Prizes/Prizes';
import {loadCompetitions} from '../../../actions/competition';
import './Event.scss';



const Event = ({loadCompetitions, competitions, loading}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        loadCompetitions()
      }, [loadCompetitions])

    const clickModal = () => {
        setShow(!show)
    }

    const closeModal = () => {
        setShow(false)
    }

    return(
        <Fragment>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Fragment>
                    {/* <Modal show={show} closed={closeModal}>
                        <Prizes />
                    </Modal> */}
                    <div className="eventContainer">
                        {competitions.map(event => <EventItem key={event.id} name={event.name} desc={event.desc} id={event._id} clickModal={clickModal}/>)}
                    </div>
                </Fragment>
            )}
        </Fragment>    
    )
}

const mapStateToProps = (state) => ({
    competitions: state.getCompetition.competitions,
    loading: state.getCompetition.loading
  });
  
  const mapDispatchToProps = dispatch => ({
    loadCompetitions: () => dispatch(loadCompetitions()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Event);
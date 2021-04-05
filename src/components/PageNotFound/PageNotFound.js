import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {resetError} from '../../actions/competition'
import './PageNotFound.scss';

export const PageNotFound = ({error, resetError}) => {
    console.log(error);
    useEffect(() => {
        return () => {
            resetError()
        }
    }, [])

    return (
        <div className="pagenotfound-page-bg">
            <div className="container-error">
                <div className="status">
                    {
                        error ? (<h1 className="text-center">{error.status}</h1>): (
                        <h1 className="text-center">
                            400
                        </h1>)
                    }
                </div>
                <div className="message">
                    {
                        error ? (<h2 className="text-center">{error.msg}</h2>): (
                        <h2 className="text-center">
                            Page Not Found
                        </h2>)
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.getCompetition.error
});

const mapDispatchToProps = dispatch => ({
    resetError: () => dispatch(resetError())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound);
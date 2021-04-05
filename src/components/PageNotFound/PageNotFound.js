import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {resetError} from '../../actions/competition'

export const PageNotFound = ({error, resetError}) => {
    console.log(error);
    useEffect(() => {
        return () => {
            resetError()
        }
    }, [])

    return (
        <div>
            {
                error ? (<h1 className="text-center">{error.msg}</h1>): (
                <h1 className="text-center">
                    Page Not Found
                </h1>)
            }
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
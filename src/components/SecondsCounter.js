import PropTypes from 'prop-types';

const SecondCounter = (props) => {
    return (
        <div className="btn-group" role="group" aria-label="Simple Counter">
            <div className="btn btn-secondary"><i class="far fa-clock"></i></div>
            <div className="btn btn-secondary">{props.counter6 % 10}</div>
            <div className="btn btn-secondary">{props.counter5 % 10}</div>
            <div className="btn btn-secondary">{props.counter4 % 10}</div>
            <div className="btn btn-secondary">{props.counter3 % 10}</div>
            <div className="btn btn-secondary">{props.counter2 % 10}</div>
            <div className="btn btn-secondary">{props.counter1 % 10}</div>
        </div>
    )
}



SecondCounter.propTypes = {
    counter1: PropTypes.number,
    counter2: PropTypes.number,
    counter3: PropTypes.number,
    counter4: PropTypes.number,
    counter5: PropTypes.number,
    counter6: PropTypes.number,
    
};



export default SecondCounter;
import PropTypes from 'prop-types';

const StopButton = (props) => {
    function detener() {
        return clearInterval(props.id);
    }
    /* const detener = props => {
        clearInterval(props.id);
    } */
    return (
        <button onClick={detener} type="button" class="btn btn-danger"><i class="far fa-stop-circle"></i></button>
    );

}

StopButton.propTypes = {
    varName: PropTypes.string
}
export default StopButton;
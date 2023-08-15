import PropTypes from 'prop-types';

export default function Alert({alerttype, message}) {
    return (
        <div className={`alert alert-${alerttype}`}>{message}</div>
    )
}

Alert.propTypes = {
    alerttype: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
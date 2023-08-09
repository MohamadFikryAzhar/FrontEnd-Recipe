import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Elephant from '/images/Ellipse 127.png';
import './../assets/css/styles.css';

export default function Navbar({firstlink, firstlinkto, secondlink, secondlinkto, thirdlink, thirdlinkto, props}) {
    if (props == "guest") {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-5 mt-4 gap-5">
                    <li className="nav-item">
                        <Link className="nav-link" to={firstlinkto}>{firstlink}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={secondlinkto}>{secondlink}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={thirdlinkto}>{thirdlink}</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    } else if (props == "account") {
        return (
            <nav className="navbar navbar-expand-lg mt-1">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse container-fluid ms-5 gap-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={firstlinkto}>{firstlink}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={secondlinkto}>{secondlink}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={thirdlinkto}>{thirdlink}</Link>
                    </li>
                    </ul>
                    <div className="vr bg-warning profile offset-md-6"></div>
                        <mark className="col bg-transparent profile-wrapper">
                            <a href="../profile/DetailProfile">
                                <img loading="eager" width="50" height="50" className="ms-5" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                            </a>
                        </mark>
                        <mark className="col bg-transparent logout-detail">
                            <p className="col">Karen</p>
                            <a className="fw-bold" role="button" id="logout-btn">Logout</a>
                        </mark>
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    firstlink: PropTypes.string.isRequired,
    firstlinkto: PropTypes.string.isRequired,
    secondlink: PropTypes.string.isRequired,
    secondlinkto: PropTypes.string.isRequired,
    thirdlink: PropTypes.string.isRequired,
    thirdlinkto: PropTypes.string.isRequired,
    props: PropTypes.string.isRequired
}
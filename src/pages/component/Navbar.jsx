import { Link, useNavigate } from "react-router-dom";
import './../assets/css/styles.css';

export default function Navbar() {
    const navigate = useNavigate();
    const defaultPhoto = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54fd7df2-8543-4f26-8482-d307d4fa144c/d2r2hul-2bceca79-e8db-4dd9-8835-af7a58cb4eec.jpg/v1/fill/w_1024,h_680,q_75,strp/facebook_default_picture_by_adnac_d2r2hul-fullview.jpg';
    function userLogout() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg mt-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 ms-5 container">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={localStorage.getItem("token") ? '/recipe' : '/'}>{localStorage.getItem("token") ? 'Recipe' : 'Home'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={localStorage.getItem("token") ? '/add-recipe' : '/auth/login'}>{localStorage.getItem("token") ? 'Add Recipe' : 'Login'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={localStorage.getItem("token") ? '/account' : '/recipe'}>{localStorage.getItem("token") ? 'Profile' : 'Recipe'}</Link>
                        </li>
                    </ul>
                    {
                        localStorage.getItem('token') ? (
                            <>
                                <div className="vr bg-warning profile d-flex"></div>
                                <mark className="col bg-transparent profile-wrapper me-2">
                                    <a href="../profile/detailprofile.html">
                                        <img loading="eager" width="50" height="50" className="ms-5" decoding="async" id="photo-profile" src={localStorage.getItem("photo") ? true : defaultPhoto} alt={localStorage.getItem("name")}/>
                                    </a>
                                </mark>
                                <mark className="col bg-transparent logout-detail me-5">
                                    <p className="col">{localStorage.getItem("name")}</p>
                                    <a className="fw-bold" role="button" id="logout-btn" onClick={userLogout}>Logout</a>
                                </mark>
                            </>
                        ) : undefined
                    }
                </div>
            </div>
        </nav>
    )
}
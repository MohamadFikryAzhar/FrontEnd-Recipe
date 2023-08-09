import './../assets/css/styles.css';

export default function Footer() {
    return (
        <footer>
            <h1 className="footer-motto">Eat, Cook, Repeat</h1>
            <p className="footer-sub-motto">Share Your Best Recipe By Uploading Here !</p>
            <nav className="container-fluid footer-nav">
                <a className="btn" href="#">Product</a>
                <a className="btn" href="#">Company</a>
                <a className="btn" href="#">Learn More</a>
                <a className="btn" href="#">Get in Touch</a>
            </nav>
            <h5 className="footer-company">Arkademy</h5>
        </footer>
    )
}
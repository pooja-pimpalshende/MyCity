import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 item">

                                <h3>Quick links</h3>
                                <ul>
                                    <li><a href="#">Colleges</a></li>
                                    <li><a href="#">Hostel</a></li>
                                    <li><a href="#">Library</a></li>
                                    <li><a href="#">Coaching</a></li>
                                    <li><a href="#">Stationary</a></li>
                                    <li><a href="#">Scholarship</a></li>
                                </ul>
                            </div>
                            <div className="col-4 item">
                                <h3>Find us on below links</h3>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/anup-sable-18040b179">Anup Sable</a></li>
                                    <li><a href="https://www.linkedin.com/in/rahul-golwe-16229b214">Rahul Golwe</a></li>
                                    <li><a>pooja </a></li>
                                    <li><a>krutuja </a></li>
                                </ul>
                            </div>
                            <div className="col-5 item text">
                                <h3>My-City</h3>
                                <p>MyCity is a web-based student portal used to store the details of a particular city and helps all the users who visit our website. This project gives information related to different college institutions, coaching centres available for various courses in the city, hostel for the students who are from different cities, libraries for students, various stationary stores for students, etc.</p>
                            </div>
                            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className="copyright">My-City © 2022</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
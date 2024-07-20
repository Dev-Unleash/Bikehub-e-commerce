import "./Footer.css"
import { Link, NavLink } from "react-router-dom";




const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="Footersection">
            <section className="home">
                <NavLink to="/">
                    <h2>Home</h2>
                </NavLink>
                <p>Welcome to Bikehub</p>
            </section>

            <section className="about">
                <h2>About</h2>
                <p>Welcome to Bikehub! We're dedicated to fueling your passion for motorcycles with a wide selection of top-quality bikes and accessories.
                     Our online store offers motorcycles for all riders, from beginners to seasoned enthusiasts. With a focus on quality, 
                     performance, and customer satisfaction, we make it easy to find your perfect ride. Explore our user-friendly website, 
                     enjoy secure checkout, and experience exceptional customer service. Join the Bikehub community and hit the road with confidence. Ride on!</p>
            </section>

            <section className="contact">
                <h2>Contact us</h2>
                <p>Get in touch with us.</p>
                <br />
                <form>
                    <input type="text" placeholder="name" name="name" required={true} />
                    <br />
                    <input type="email" placeholder="email" name="email" required={true} />
                    <br />
                    <textarea type="text" placeholder="message" name="message" rows="4" required={true}></textarea>
                    <br />
                    <button type="submit" className="btns">Send</button>
                </form>


            </section>
            <section className="Address">
                <h2>Address</h2>
                <p>Street:  962 Keyser Ridge Road
                    <br />
                    City:  Madison
                    State/province/area:   North Carolina
                    <br />
                    Phone number:  336-427-5499
                    <br />
                    Zip code:  27025
                    <br />
                    Country calling code:  +1
                    <br />
                    Country:  United States</p>
            </section>
            </div>

            <p className="copyright">&copy; 2024 Bikehub. All rights reserved.</p>



        </div>
    );
};

export default Footer

import react from "react";
import "./App.css";
import "./Contact.css";
import "./news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function contact() {
    return (
        <div className="Contact">
            <div className="newshead">
                <div>
                    Home &gt; <span>Contact Us</span>
                </div>
                <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
            </div>
            <div className="map">
                <img src={require("./assest/map.png")} alt="" />
            </div>
            <div className="data">
                <div className="follow">
                    <section>
                        <p> Follow us </p>
                        <img src={require("./assest/Group 12.png")} alt="" />
                    </section>
                </div>

                <img className="lines" src={require("./assest/Vector 14.png")} alt="" />

                <div className="call">
                    <img src={require("./assest/Group.png")} alt="" />
                    <p> +94 4444 5555 6</p>
                </div>

                <img className="lines" src={require("./assest/Vector 14.png")} alt="" />

                <div className="loc">
                    <img src={require("./assest/contact6.png")} alt="" />
                    <p>but also the leap into electronic typesetting</p>
                </div>
            </div>

            {/* Form */}

            <div id="myform" >
            <form>
                {/* <div id="line1">
                    <img src={require("./assest/line1.png")} alt=""/>
                </div> */}
                <div className="formhead" >
                    <h2>Say Hello</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing .</p>
                </div>
                <div className="forminput">
                    <div className="name">
                        <div id="name">
                            <label for="first">First Name</label><br />
                            <input id="first" type="text" name="first" value="" />
                        </div>
                        <div id="name" >
                            <label for="last">Last Name</label><br />
                            <input id="first" type="text" name="last" value="" />
                        </div>
                    </div>
                    <div id="mail">
                        <label for="email">Enter Email</label><br />
                        <input id="email" type="email" name="email" value="" />
                    </div>
                    <div id="mess">
                        <label for="message">Message</label><br />
                        <input id="message" type="text" name="last" value="" />
                    </div>
                    <div className="submit">
                        <input id="submit" type="submit" name="get in touch" value="Get in touch" />
                    </div>
                </div>

            </form>
            </div>

            <div className='contain3'>
                <span className='contain3head'>Lorem Ipsum</span>
                <span className='contain3detail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            </div>


            <div className='box'>
                <div className='inbox'>
                    <div className='inbox1'>
                        <span>Stay in the loop</span>
                        <p>Subscribe to receive the latest news and updates about TDA.We promise not to spam you! </p>
                    </div>
                    <div className='inbox2'>
                        <div>
                            <input type="email" name="" value="" placeholder='Enter your email'/>
                            <button type="submit"><p>Continue</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default contact;
import React from 'react';
import './App.css';
import './footer.css';

function footer(){
    return(
    <div className='footer'>
        <div className='space'>
            <div className='dev'>
                <div className='indev'>
                    <span id='footlogo'>LOGO</span>
                    <p className='line'><br/>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry.<br/><br/> @Logo </p>
                </div>
                <div className='indev'>
                    <span>About Us <br/></span>
                    <br/>
                    <ul>
                        <li>Zeux</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='indev'>
                    <span>Contact Us</span>
                    <ul>
                        <br/>
                        <li className='line'>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. </li>
                        <li>+908 89097 890</li>
                    </ul>
                </div>
                <div id='indevimg' className='indev'>
                    <img src={require("./assest/circle.png")} alt=""/>
                    <img src={require("./assest/circle.png")} alt=""/>
                    <img src={require("./assest/circle.png")} alt=""/>
                    <img src={require("./assest/circle.png")} alt=""/>
                </div>
            </div>
        </div>
        <hr color='grey'/>
        <div className='dev1'>
            <span>Copyright ® 2021 Lorem All rights Rcerved</span>
        </div>
    </div>
    );
}

export default footer
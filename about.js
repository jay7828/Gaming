import React from 'react';
import './App.css';
import './about.css';
import './home.css';

function about(){
    return(
        <div className='about'>
                    <div className='root'>
                        Home &gt; <span>About Us</span>
                    </div>
            <div className='top'>
                <div className='intop'>
                    <div className='intop0'>
                        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <h3>Get in touch &nbsp; &nbsp; →</h3>
                </div>
            
                <img src={require("./assest/Rectangle.png")} alt=""/>
                
            </div>
            <div className='tile'>
                <span>Why work with us</span>
                <div className='intile'>
                    <div className='tile1'>
                        <span id='tilehead1'>Lorem ipsum</span>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='tile1'>
                        <span id='tilehead2' >Lorem ipsum</span>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='tile1'>
                        <span id='tilehead3'>Lorem ipsum</span>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
            {/* middle */}
            <div className='middle'>
                    <img src={require("./assest/midd.png")} alt=""/>
                    <div className='inmid inmid1'>
                        <span>Lorem ipsum</span>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
            </div>
            {/* icontile */}
            <div className='icontile'>
                 <span>Our Team</span>
                 <div className='inicon'>
                    <div className='icon1'>
                        <img src={require("./assest/Avatar 1.png")} alt=""/>
                        <h3>John peter</h3>
                        <p>COO</p>
                    </div>
                    <div className='icon1'>
                    <img src={require("./assest/Claudia 1.png")} alt=""/>
                        <h3>John peter</h3>
                        <p>COO</p>
                    </div>
                    <div className='icon1'>
                    <img src={require("./assest/Beverly 1.png")} alt=""/>
                        <h3>john peter</h3>
                        <p>COO</p>
                    </div>
                    <div className='icon1'>
                    <img src={require("./assest/Bill 1.png")} alt=""/>
                        <h3>john peter</h3>
                        <p>COO</p>
                    </div>
                 </div>               
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

export default about
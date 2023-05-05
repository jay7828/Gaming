import React from 'react';
import './App.css';
import './home.css';
let unity = require("./assest/unity.png");
let unreal = require("./assest/unreal.png");
let cry = require("./assest/cry.png");
let game1 = require("./assest/game1.png");
let game2 = require("./assest/game2.png");
let game3 = require("./assest/game3.png");
let game4 = require("./assest/game4.png");
let vector = require("./assest/Vector.png");



function home() {
    return (
        <div className='home'>
            <div className='homeimg'>
                <div className='unity'>
                    <img src={unity} alt="" />
                </div>
                <div className='unreal'>
                    <img src={unreal} alt="" />
                </div>
                <div className='cry'>
                    <img src={cry} alt="" />
                </div>
            </div>
            <div className='contain'>
                <span className='homehead1'>3D game Dev  </span>
                <span className='homehead2'>Work that we produce for our clients</span>
                <span className='homehead3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</span>
                <span id='detailbutton'>Get More Details</span>
            </div>
            <div className='trending'>
                <div className='trendhead'>
                    <span>Currently Trending Games</span>
                    <button type="submit"> <span> SEE ALL</span></button>
                </div>
                <div className='games'>
                    <div className='game1'>
                        <img src={game1} alt="" />
                        <p><img src={vector} alt="" />
                            &nbsp; 	&nbsp;44 Followers</p>
                    </div>
                    <div className='game1'>
                        <img src={game2} alt="" />
                        <p><img src={vector} alt="" />
                            &nbsp; 	&nbsp;44 Followers</p>
                    </div>
                    <div className='game1'>
                        <img src={game3} alt="" />
                        <p><img src={vector} alt="" />
                            &nbsp; 	&nbsp;44 Followers</p>
                    </div>
                    <div className='game1'>
                        <img src={game4} alt="" />
                        <p><img src={vector} alt="" />
                            &nbsp; 	&nbsp;44 Followers</p>
                    </div>
                </div>
            </div>

            <div className='contain23'>

                <div className='contain2'>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                </div>
                <div className='contain3'>
                    <span className='contain3head'>Lorem Ipsum</span>
                    <span className='contain3detail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                </div>
                <div className='spider'>
                    <img src={require("./assest/spidder.png")} alt="" />
                </div>
            </div>


            <div className='contain4'>
                <div className='contains4'>

                    <span className='contain4head'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <span className='contain4detail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                    <div className='icons'>
                        <div className='inIcon'>
                            <img src={require("./assest/icon1.png")} alt="" />
                            <p>Mobile Game Development</p>
                            <img src={require("./assest/Arrow.png")} alt="" />
                        </div>
                        <div className='inIcon'>
                            <img src={require("./assest/icon2.png")} alt="" />
                            <p>PC Game Development</p>
                            <img src={require("./assest/Arrow.png")} alt="" />
                        </div>
                        <div className='inIcon'>
                            <img src={require("./assest/icon3.png")} alt="" />
                            <p>PS4 Game Development</p>
                            <img src={require("./assest/Arrow.png")} alt="" />
                        </div>
                        <div className='inIcon'>
                            <img src={require("./assest/icon4.png")} alt="" />
                            <p>AR?VR Solutions</p>
                            <img src={require("./assest/Arrow.png")} alt="" />
                        </div>
                    </div>
                    <div className='icons'>
                        <div className='inIcon' >
                            <img src={require("./assest/icon5.png")} alt="" />
                            <p>AR/VR Design</p>
                            <img src={require("./assest/Arrow.png")} alt="" />
                        </div>
                        <div className='inIcon'>
                            <img src={require("./assest/icon6.png")} alt="" />
                            <p>3D Modeling</p>
                            <img src={require("./assest/Arrow.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Grid'>
                <div className='grid1'>
                    <p id='gridhead'>Our Recent Projects</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className='grid2'>
                    <img src={require("./assest/Rectangle 15.png")} alt="" />
                    <img src={require("./assest/Rectangle 16.png")} alt="" />
                    <img src={require("./assest/Rectangle 17.png")} alt="" />
                    <img src={require("./assest/Rectangle 19.png")} alt="" />
                    <img src={require("./assest/Rectangle 18.png")} alt="" />
                    <img src={require("./assest/Rectangle 20.png")} alt="" />
                </div>
            </div>
            <div className='seebutton'>
                <p>SEE ALL</p>
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
                            <input type="email" name="" value="" placeholder='Enter your email' />
                            <button type="submit"><p>Continue</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home
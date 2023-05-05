import react from "react";
import './App.css';
import './news.css';
function news() {
    return (
        <div className="News">
            <div className="newshead">
                <div>
                    Home &gt; <span>News</span>
                </div>
                <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="searchbar">
                <input type="search" placeholder="search"></input>
            </div>
            <div className="content">
                <div id="incontent1" className="incontent">
                    <div className="in1">
                        <div>
                            <img src={require("./assest/game01.png")} />
                            <div className="button1">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                        </div>
                        <div className="para1">
                            <h2>Lorem Ipsum is simply dummy text dummy text </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <hr />
                    <div className="in1">
                        <div>
                            <img src={require("./assest/game02.png")} />
                            <div className="button1 ">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                        </div>
                        <div className="para1">
                            <h2>Lorem Ipsum is simply dummy text dummy text </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>
                <div className="incontent incontent2">
                    <div className="in2">
                        <img src={require("./assest/game03.png")} />
                        <div>
                            <div className="button2 pink">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
                    </div>
                    <div className="in2">
                        <img src={require("./assest/game04.png")} />
                        <div>
                            <div className="button2 blue">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
                    </div>
                    <div className="in2">
                        <img src={require("./assest/game05.png")} />
                        <div>
                            <div className="button2 orange">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
                    </div>
                    <div className="in2">
                        <img src={require("./assest/game06.png")} />
                        <div>
                            <div className="button2 blue">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
                    </div>
                    <div className="in2">
                        <img src={require("./assest/game07.png")} />
                        <div>
                            <div className="button2 green">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
                    </div>
                    <div className="in2">
                        <img src={require("./assest/game08.png")} />
                        <div>
                            <div className="button2 blue">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
                    </div>
                    <div className="in2">
                        <img src={require("./assest/game09.png")} />
                        <div>
                            <div className="button2 purple">
                                <button type="submit">John smash</button>
                                <span> &nbsp; &nbsp; .5min</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text dummy text ? </p>
                        </div>
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
                            <input type="email" name="" value="" placeholder='Enter your email' />
                            <button type="submit"><p>Continue</p></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default news
import React from "react";
import "./App.css";
import "./portfolio.css";
import "./nav.css"

function portfolio() {
  return (
    <div className="PortFolio">
      <div className="Port1">
        <div className="porthead">
          Home &gt; <span>PortFolio</span>
        </div>
        <div id="porthead">
          <span>Lorem Ipsum is simply dummy text of the printing and.</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="portblock1">
          <div className="porticon">
            <div className="portim">
              <img src={require("./assest/Porticon1.png")} alt="" />
            </div>
            <div>
              <span>90+</span>
              <p>Clients</p>
            </div>
          </div>

          <div className="line">
            <img src={require("./assest/Vector 14.png")} alt="" />
          </div>

          <div className="porticon">
            <div className="portim">
              <img src={require("./assest/porticon2.png")} alt="" />
            </div>
            <div>
              <span>30+</span>
              <p>Clients</p>
            </div>
          </div>

          <div className="line">
            <img src={require("./assest/Vector 14.png")} alt="" />
          </div>

          <div className="porticon">
            <div className="portim">
              <img src={require("./assest/porticon3.png")} alt="" />
            </div>
            <div>
              <span>50+</span>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* PortFolio Spider Images */}
      <div className="spider2">
        <img src={require("./assest/spider2.png")} alt="" className="img" />
        <div className="spidercontain">
          <span>Lorem Ipsum is simply dummy text.</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </p>
          <h4>
            <img src={require("./assest/checkmark.png")} alt="" /> Lorem Ipsum
            is simply
          </h4>
          <h4>
            <img src={require("./assest/checkmark.png")} alt="" /> Lorem Ipsum
            is simply
          </h4>
          <h4>
            <img src={require("./assest/checkmark.png")} alt="" /> Lorem Ipsum
            is simply
          </h4>
          <h4>
            <img src={require("./assest/checkmark.png")} alt="" /> Lorem Ipsum
            is simply
          </h4>
        </div>
      </div>

      {/* Images Section */}
      <div className="images">
        
      <div className="Portimage">
        <div className="imgcontain">
          <span>Lorem Ipsum is simply dummy text dummy text </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p id="readmore"> Readmore</p>
        </div>
        <img
          src={require("./assest/Rectangle 25.png")}
          alt=""
          className="img"
        />
      </div>
      <div className="Portimage" id="reverse">
      <img
          src={require("./assest/Rectangle 26.png")}
          alt=""
          className="img"
        />
        <div className="imgcontain">
          <span>Lorem Ipsum is simply dummy text dummy text </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p id="readmore"> Readmore</p>
        </div>
        
      </div>
      <div className="Portimage">
        <div className="imgcontain">
          <span>Lorem Ipsum is simply dummy text dummy text </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p id="readmore"> Readmore</p>
        </div>
        <img
          src={require("./assest/Rectangle 25 (1).png")}
          alt=""
          className="img"
          />
      </div>

    </div>
      {/* Feedback */}

      <div className="feedbackblock">
        <span id="first">Trusted by Thousands of Happy Customer</span>
        <p id="second">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy .
        </p>
        <div className="feedback">
          <div className="feedback1">
            <div className="Profile">
              <img
                id="profileimg"
                src={require("./assest/Profile1.png")}
                alt=""
              />
              <div className="Name">
                <span>Viezh Robert</span>
                <p>Warsaw, Poland</p>
              </div>
              <span id="rating">
                4.5 <img src={require("./assest/star.png")} alt="" />
              </span>
            </div>
            <span className="message">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </span>
          </div>

          <div className="feedback1 profile">
            <div className="Profile ">
              <img
                id="profileimg"
                src={require("./assest/Profile1.png")}
                alt=""
              />
              <div className="Name">
                <span>Viezh Robert</span>
                <p>Warsaw, Poland</p>
              </div>
              <span id="rating">
                4.5 <img src={require("./assest/star.png")} alt="" />
              </span>
            </div>
            <span className="message">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </span>
          </div>
          <div className="feedback1 profile">
            <div className="Profile">
              <img
                id="profileimg "
                src={require("./assest/Profile1.png")}
                alt=""
              />
              <div className="Name">
                <span>Viezh Robert</span>
                <p>Warsaw, Poland</p>
              </div>
              <span id="rating">
                4.5 <img src={require("./assest/star.png")} alt="" />
              </span>
            </div>
            <span className="message">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </span>
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

export default portfolio;

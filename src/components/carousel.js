import React, { Component } from 'react';
import '../carousel.css';

export default class Carousel extends Component {
    render() {
      return(
        <div>
          <div className="img-sticky">
            <div className="img">
              <img className="images" src="https://www.gravatar.com/userimage/126022818/de14299c6d5ddb2adf5a8855d69f30ef?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/2267e293a1c718b97b372a28e9a6b99b?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/fda1c4d62a8e6eb46d0050a6bf3f6b77?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/9c52829030d75d854cb0ad14729d3f9a?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/3e3544fd3e724c8f8c9c79b8e75ee5c5?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/6628fbd33bf67941e569ae4e6320aa1a?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/f11a41611dd609d11f4105e3ebd1efd1?size=120" alt="" />
              <img className="images" src="https://www.gravatar.com/userimage/126022818/06118b55062ffc5b469398f11a60d4dc?size=120" alt="" />
            </div>
          </div>
        </div>
      )
    }
}

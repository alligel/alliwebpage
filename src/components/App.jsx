import React, { Component } from "react";
import SplashAboutme from "./SplashAboutme";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatIDo from "./WhatIDo";
import Works from "./Works"


class App extends Component {
    render() {
      return (
          
            <div>
                <div>
                    <SplashAboutme />
                 </div>
                 <div>
                    <WhatIDo />
                 </div>
                 <div>
                    <Works />
                 </div>
                 <div>
                    <Footer />
                 </div>

            </div>
              );
             }
}

export default App;
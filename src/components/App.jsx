import React, { Component } from "react";
import FirstPage from "./FirstPage";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatIDo from "./WhatIDo";
import Works from "./Works"
import AboutMe from "./AboutMe";


class App extends Component {
    render() {
      return (
          
            <div>
                <div>
                    <FirstPage />
                 </div>
                 <div>
                    <AboutMe />
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
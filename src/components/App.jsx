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
                <section>
                    <SplashAboutme />
                 </section>
                 <section>
                    <WhatIDo />
                 </section>
                 <section>
                    <Works />
                 </section>
                 <section>
                    <Footer />
                 </section>

            </div>
              );
             }
}

export default App;
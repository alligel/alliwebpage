import React from "react";
import NBLads from "./img/NBLads.jpg";

function UXworks() {
  return (
    <section>

        <div className="text-center">
        <br/>
        <h2>NeighborLender Project</h2>
        </div>
        <div className="text-left">
        <br/>
        <p>A prototype of how to use the "BORROW" function (Not the final version): <button className="btn-link"><a href="https://alli38803.invisionapp.com/console/share/MB2KWCUZQ5/630036371" target="_blank">NBL Prototype</a></button></p>
        <p>More information about the NBL project : <button className="btn-link"><a href="https://drive.google.com/file/d/1I-zUG4Z1Nm-3kb20z1cO6z9YE7tIfzE8/view?usp=sharing" target="_blank">PDF File</a></button></p>
        <p>The NBL project still needs improvements such as adding process bar, adding more flow, and need to make usability test.</p>
        <br/>
        </div>
        <img className="ux-img" src={NBLads} alt="alli-uxwork"/>
        <br/>
        
        

    </section>
  );
}

export default UXworks;
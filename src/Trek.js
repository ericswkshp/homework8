import React, { Component } from 'react';
import Roscoe from "./roscoe.jpg"

class Trek extends Component {
  render () {
    return (
      <div>
        <h2>Trek</h2>
        <div className="imgBox">
          <img src={Roscoe} alt="Trek Roscoe 7" title="Trek Roscoe 7"/>
          <br/>
          <br/>
          <p>Image by Andrew Lloyd</p>
      
        </div>
        <p>Trek Bicycle Corporation was founded in 1975 by Dick Burck and Bevil Hogg. They originally start manufacturing steel touring frames in Waterloo, Wisconsin. Trek built their first mountain bike in 1984.</p>

        <p> Trek is amongst the top bike manufactures in the world today. They are known for making a high quality product and offering a wide range of price points. They are trusted by millions and their products are sold in stores and shops across the country. </p>
      </div>
    )
  }
}

export default Trek;
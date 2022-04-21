import React, { Component } from 'react';
import Meta from "./meta.jpg"

class Commencal extends Component {
  render () {
    return (
      <div>
        <h2>Commencal</h2>
        <div className='imgBox'>
        <img src={Meta} alt="Commencal Meta 29"/>
        <br/>
        <br/>
        <p>Image by Christoph Bayer</p>
        </div>
        <p>Commencal is a bike company that was founded in the year 2000 by Max Commencal. Commencal has become a major competitor with other mountain bike brands due to their image, quality, and prices. Unless you live nearby Colorado, you will have to order Commencal bikes online, as they do not stock their products in retail shops.</p>

        <p>Commencal notably took a stand against using carbon fiber to manufacture their bike frames, as it imposes a negative impact on the environment and the workers in the facilities. Commencal continues to be a dominant force in the mountain bike/downhill bike market and their athletes are very successful.</p>
      </div>
    )
  }
}

export default Commencal;
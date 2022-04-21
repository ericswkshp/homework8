import React, { Component } from 'react';
import Evo from './evo.jpg'

class Specialized extends Component {
  render () {
    return (
      <div>
        <h2>Specialized</h2>
        <div className='imgBox'>
          <img src={Evo} alt="Specialized Evo"/>
          <br/><br/>
          <p>Image by Flow MTB</p>
        </div>
        <p>Specialized Bicycle Components, Inc was founded in 1974 by Mike Sinyard. Specialized was the first company to fully produce mountain bikes. The first major product model was the Stumpjumper in 1981. Stumpjumpers are still made and very popular today.</p>

        <p> Specialized continues to be a leading bicycle brand with a wide range of products like road bikes, gravel bikes, cruisers, striders, and a vast array of components. </p>
      </div>
    )
  }
}

export default Specialized;
import React, { useState } from "react";
import PropTypes from 'prop-types';
import './flight.css';


export const Flight = () => {
  const [order, setOrder] = useState(true);  

  return (
    <div className="">
      <div id="c" class="inversePair">C</div>
      <div id="a" class="inversePair">A</div>
      <div id="b" class="inversePair">B</div>
    </div>
  );
}

Flight.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,  
}

Flight.defaultProps = {
  backgroundColor: null,
}

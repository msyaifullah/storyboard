import React, { useState } from "react";
import PropTypes from 'prop-types';
import './flight.css';


export const Flight = () => {
  const [order, setOrder] = useState(true);

  return (
    <div className="">
      <div class="ticket-left">
        <div class="ticket-left-content-wrapper">
          <span>testing</span>
        </div>
      </div>
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

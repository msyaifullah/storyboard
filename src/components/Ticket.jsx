import React from "react";
import PropTypes from 'prop-types';
import './ticket.css';


export const Ticket = () => {

  return (
    <div class="ticket">
      <div class="ticket-content-wrapper">
        <span>testing</span>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
}

Ticket.defaultProps = {
  backgroundColor: null,
}

import React, { useContext } from "react";
import { AppContext } from "../../../App";
import PropTypes from "prop-types";

function Button({ btnId, icon, activateStyle }) {
  const { setWeb } = useContext(AppContext);

  function handleClick(btnId) {
    setWeb({
      home: false,
      aboutMe: false,
      portfolio: false,
      contactMe: false,
      [btnId]: true,
    });
  }

  const activeStyle = {
    backgroundColor: "#27ae60",
    color: "#fff",
  };

  return (
    <div className="control" id={btnId}>
      <button
        onClick={() => {
          handleClick(btnId);
        }}
        style={activateStyle ? activeStyle : null}
      >
        {icon}
      </button>
    </div>
  );
}

Button.propTypes = {
  btnId: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  activateStyle: PropTypes.bool.isRequired,
};

export default Button;

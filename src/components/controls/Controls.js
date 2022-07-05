import React, { useContext } from "react";
import ControlButton from "./dependencies/ControlButton";
import { AppContext } from "../../App";
import { IoMdHome } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";
import { MdContacts } from "react-icons/md";

function Controls() {
  const { web } = useContext(AppContext);

  return (
    <div className="controls" data-testid="controls">
      <ControlButton
        btnId="home"
        icon={<IoMdHome className="control-icon" />}
        activateStyle={web.home}
      />
      <ControlButton
        btnId="aboutMe"
        icon={<RiContactsFill className="control-icon" />}
        activateStyle={web.aboutMe}
      />
      <ControlButton
        btnId="portfolio"
        icon={<IoMdCodeWorking className="control-icon" />}
        activateStyle={web.portfolio}
      />
      <ControlButton
        btnId="contactMe"
        icon={<MdContacts className="control-icon" />}
        activateStyle={web.contactMe}
      />
    </div>
  );
}

export default Controls;

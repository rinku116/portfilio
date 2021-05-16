import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-20">Follow me on: </span>
      <a className="socialLink" href="https://www.facebook.com/profile.php?id=100005579674213">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="https://www.instagram.com/rs_0116/">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="https://www.youtube.com/channel/UCcLCCL2h_8TgGW8SInFMUeQ">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/rinku-sharma-3b33601b7">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;

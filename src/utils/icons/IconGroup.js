import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTok,
  TwitterIcon,
} from "./SocialIcons";

const IconGroup = ({ color }) => {
  return (
    <div className="flex items-center gap-2">
      <FacebookIcon color={color} size="30" />
      <InstagramIcon color={color} size="30" />
      <TwitterIcon color={color} size="30" />
      <TikTok color={color} size="30" />
    </div>
  );
};

export default IconGroup;

import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import CodeIcon from "@mui/icons-material/Code";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ishita.kundi";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dwsoyxd7o/image/upload/v1672903835/Avatars/IMG_20221011_150354_erscaf.jpg"
              alt="Founder"
            />
            <Typography>Ishita</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              I am a MERN stack developer & a competitive programmer. I have
              made this MERN stack ecommerce wesbite Shoppy. For more info visit
              my github - <a href="https://github.com/ishita-kundi04">Github</a>
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>My other profiles</h2>
            <a href="https://instagram.com/ishita.kundi" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/ishita-kundi04" target="blank">
              <GitHubIcon className="gitHubSvgIcon" />
            </a>
            <a href="https://leetcode.com/ishita_kundi04/" target="blank">
              <CodeIcon className="leetcodeSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

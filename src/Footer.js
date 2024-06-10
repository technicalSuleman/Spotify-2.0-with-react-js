import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDNaRJpgmugbpjq9GtoRHvfGQkZxVxAawyOBnm4qJKuZcv-ik07VheBn1DlAbst_uH-c2pmmv84ePfT-WBBoF-DtxeDxzGUHyuW1chvGo"
        className="footer__albumLogo"
        alt="" />
        <div className="footer__songInfo">
        <h4>Yeah!</h4>
        <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <VideoLibraryTwoToneIcon />
          </Grid>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
          {/* <Grid item >
            <OpenInFullOutlinedIcon  />
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}

export default Footer;

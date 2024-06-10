import React from "react";
import "./body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleOutlineIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track = {item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

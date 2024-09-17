import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { meterMusica } from "../scripts/functions";

const tracks = [
    {
      url: "music/Battle At The Chain Of Balance.mp3",
      title: "Battle At The Chain Of Balance",
      tags: [""],
    },
    {
        url: "music/Brothers of Blood.mp3",
        title: "Brothers of Blood",
        tags: [""],
    },
    {
        url: "music/Rage of Sparta.mp3",
        title: "Rage of Sparta",
        tags: [""],
    },
  ];

const colors = {
    tagsBackground: "#3e32e4",
    tagsText: "#ffffff",
    tagsBackgroundHoverActive: "#6e65f1",
    tagsTextHoverActive: "#ffffff",
    searchBackground: "#18191f",
    searchText: "#ffffff",
    searchPlaceHolder: "#575a77",
    playerBackground: "#1a1a1a",
    titleColor: "#ffffff",
    timeColor: "#ffffff",
    progressSlider: "darkred",
    progressUsed: "#ffffff",
    progressLeft: "#151616",
    bufferLoaded: "#1f212b",
    volumeSlider: "darkred",
    volumeUsed: "#ffffff",
    volumeLeft: "#151616",
    playlistBackground: "#18191f",
    playlistText: "#575a77",
    playlistBackgroundHoverActive: "#18191f",
    playlistTextHoverActive: "#ffffff",
  };

export function Reproductor(){
    
    return(
        <div className="player-container">
            <input type="file" id="carpetaMusica" webkitdirectory="true" multiple onChange={() => meterMusica(tracks)}/>
            <Player
                trackList={tracks}
                includeTags={false}
                includeSearch={false}
                showPlaylist={false}
                customColorScheme={colors}
            />
        </div>
    )
}
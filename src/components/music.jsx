import React from "react";
import "../music.css"; // Importamos el CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Para los íconos de FontAwesome

const MusicPlayer = () => {
  return (
    <>
      <div id="player-bg-artwork"></div>
      <div id="player-bg-layer"></div>

      <div id="player-container">
        <div id="player">
          <div id="player-track">
            <div id="album-name">Nombre del álbum</div>
            <div id="track-name">Nombre de la canción</div>
            <div id="track-time">
              <div id="current-time">0:00</div>
              <div id="track-length">3:30</div>
            </div>

            <div id="seek-bar-container">
              <div id="seek-time"></div>
              <div id="s-hover"></div>
              <div id="seek-bar"></div>
            </div>
          </div>

          <div id="player-content">
            <div id="album-art" className="active">
              <img
                src="https://singhimalaya.github.io/Codepen/assets/img/album-arts/1.jpg"
                className="active"
                id="_1"
              />
              <img
                src="https://singhimalaya.github.io/Codepen/assets/img/album-arts/2.jpg"
                id="_2"
              />
              <img
                src="https://singhimalaya.github.io/Codepen/assets/img/album-arts/3.jpg"
                id="_3"
              />
              <img
                src="https://singhimalaya.github.io/Codepen/assets/img/album-arts/4.jpg"
                id="_4"
              />
              <img
                src="https://singhimalaya.github.io/Codepen/assets/img/album-arts/5.jpg"
                id="_5"
              />
              <div id="buffer-box">Buffering ...</div>
            </div>

            <div id="player-controls">
              <div className="control">
                <div className="button" id="play-previous">
                  <i className="fas fa-backward"></i>
                </div>
              </div>
              <div className="control">
                <div className="button" id="play-pause-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="control">
                <div className="button" id="play-next">
                  <i className="fas fa-forward"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;

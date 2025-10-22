import { useAudioPlayer } from "react-use-audio-player"


export default function Music() {
    const { togglePlayPause, isPlaying } = useAudioPlayer("public/music/SPIDER-MAN_ INTO THE SPIDER VERSE  MMV  Born For This.mp3", {
        autoplay: false,
        loop: false
    })

    return (
        
        <button onClick={togglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
        </button>
    )
}


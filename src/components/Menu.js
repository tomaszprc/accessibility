import { Link } from "react-router-dom"
import SpeechRecognition, { useSpeechRecognition, } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ContrastContext } from "../contexts/ContrastContext";

const Menu = () => {
    const {contrastMode, setContrastMode} = useContext(ContrastContext)


    SpeechRecognition.startListening({ continuous: true })
    let navigate = useNavigate();
    const commands = [
        {
          command: ['start'],
          callback: () => navigate(`/`)
        },
    ]

    const { transcript } = useSpeechRecognition({
        commands,
    })
 
    return (
        <>
        <nav className={`menu ${contrastMode ? 'contrastMode' : ''}`}>
            <Link to="/" className={`menu-link ${contrastMode ? 'contrastMode' : ''}`}>Home</Link>
             <button className={`contrast-button ${contrastMode ? 'contrastMode' : ''}`}  onClick={() => setContrastMode(!contrastMode)}>Enable contrast mode</button>
        </nav>
        {transcript && <div className="transcript">{transcript}</div>}
        </>
    )
}

export default Menu
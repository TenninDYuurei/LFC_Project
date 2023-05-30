import { React } from 'react';
import { useNavigate } from 'react-router-dom';


function VideoSkit() {
    let styles = {
        backgroundColor: "white",
        width:250,
        height:250
    }



    let navigate = useNavigate();

    return <div>
        <div style={styles}></div>
        <button onClick={()=>navigate(-1)}>Go back</button>
            </div>

}

export default VideoSkit
import './MainVideo.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MainVideoPage = () => {
    const [mainVideo, setMainVideo] = useState(null);
    const { videoId } = useParams();

function MainVideo() {
    return (
        <>
        <HomePage />
        <VideoDetails />
        </>
    )
}

export default MainVideo;
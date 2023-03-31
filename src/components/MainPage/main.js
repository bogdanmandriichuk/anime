import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider/slider'
import Text from "./Text/text";
import Video from "../Videoplayer/Videoplayer";
import CommentsSection from "../Comments/CommentSection";



let mainPage = () => {
    return (
        <>

            <Slider/>
            <Text/>
            <Video/>
            <CommentsSection/>
        </>
    )
}


export default mainPage;
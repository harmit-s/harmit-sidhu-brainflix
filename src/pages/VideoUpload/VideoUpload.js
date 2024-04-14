import { useNavigate } from "react-router-dom";
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';

import './VideoUpload.scss';

function VideoUploadPage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;

        if (title === "" || description === "") {
            alert("You must fill out all fields");
            return;
        }

        alert("Video Uploaded");

        navigate("/");
    };

    return (
        <section className='video-upload'>
            <h1 className='video-upload__title'>Upload Video</h1>
            <form className='video-upload__form' onSubmit={handleSubmit}>
                <label className='video-upload__label'>VIDEO THUMBNAIL</label>
                <img src={thumbnail} alt='thumbnail' className="video-upload__image" />
                <label className='video-upload__label'>TITLE YOUR VIDEO</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Add a title to your video"
                    className='video-upload__title-input'
                />
                <label className='video-upload__label'>ADD A VIDEO DESCRIPTION</label>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Add a description to your video"
                    className='video-upload__description-input'
                ></textarea>
            </form>
            <div className="video-upload__buttons">
                <button type="submit" className='video-upload__button'>
                    <img src={publishIcon} alt='publish icon' className='video-upload__publish-icon' />
                    PUBLISH
                </button>
                <button className='video-upload__button-two' onClick={() => navigate("/")}>
                    CANCEL
                </button>
            </div>
        </section>
    );
}

export default VideoUploadPage;
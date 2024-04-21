import { useNavigate } from "react-router-dom";
import axios from "axios";
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';


import './VideoUpload.scss';

function VideoUploadPage() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;

        if (title === "" || description === "") {
            alert("You must fill out all fields");
            return;
        }

        const videoData = {
            title,
            description,
        };

        try {
            const response = await axios.post("http://localhost:8080/videos", videoData);

            if (response.status === 201) {
                alert("Video uploaded successfully!");
                navigate("/");
            } else {
                alert("Failed to upload video. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading video:", error);
            alert("Failed to upload video. Please try again.");
        }

    };

    return (
        <section className='video-upload'>
            <h1 className='video-upload__title'>Upload Video</h1>
            <form className='video-upload__form-sub' onSubmit={handleSubmit}>
                <div className="video-upload__form">
                    <div className="video-upload__layout">
                        <label className='video-upload__label-one'>VIDEO THUMBNAIL</label>
                        <img src={thumbnail} alt='thumbnail' className="video-upload__image" />
                    </div>
                    <div className="video-upload__layout-2">
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
                    </div>
                </div>
                <div className="video-upload__buttons">
                    <button type="submit" className='video-upload__button'>
                        <img src={publishIcon} alt='publish icon' className='video-upload__publish-icon' />
                        PUBLISH
                    </button>
                    <button className='video-upload__button-two' onClick={() => navigate("/")}>
                        CANCEL
                    </button>
                </div>
            </form>
        </section>
    );
}

export default VideoUploadPage;
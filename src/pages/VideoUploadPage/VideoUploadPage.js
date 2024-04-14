import { useState } from "react";
import { useNavigate } from "react-router-dom";
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg';

import './VideoUploadPage.scss';

function VideoUploadPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const { title, description } = formData;
        if (title === "" || description === "") {
            alert("You must fill out all fields");
            return;
        }

        alert("Video Uploaded");

        navigate("/");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <label className='video-upload__label'>ADD A VIDEO DESCRIPTION</label>
                <input
                    type="text"
                    name="description"
                    placeholder="Add a description to your video"
                    className='video-upload__description-input'
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <button type="submit" className='header__button'>
                    <img src={publishIcon} alt='publish icon' className='video-upload__publish-icon' />
                    PUBLISH
                </button>
            </form>
            <button className='header__button-two' onClick={() => navigate("/")}>
                CANCEL
            </button>
        </section>
    );
}

export default VideoUploadPage;
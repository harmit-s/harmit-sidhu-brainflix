import './Hero.scss';

function Hero({image, video}) {
    return (
        <video className="hero" poster={image} controls>{video}</video>
    )
}

export default Hero;
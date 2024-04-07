function VideoItem({ id, name, changeVideo }) {
    // we invoke the changePlant() function passed by prop and that originates from App.js and passed down to this child by way of props
    // we DO NOT want to immediately invoke it though, so we have to pass it in an anonymous callback function
    // this click will pass this specific id for whatever plant is clicked in the list
    // because all these <li>s are coming from that .map() iteration, the click is 'mapped' to each indiviudal <li> and it's individual id

    return <li onClick={() => changeVideo(id)}>{name}</li>;
}

export default VideoItem;

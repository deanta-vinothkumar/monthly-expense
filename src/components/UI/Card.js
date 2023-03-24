import './Card.css';

const Card = (props) => {
    // Testing Cards
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;
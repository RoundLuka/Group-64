import Picture from './assets/Picture.jpg'

function Card(props) {
    
    return (
        <div className='card'>
            <img src={props.profile}/>
            <h2>{props.username}</h2>
            <p>I am learning react</p>
        </div>
    )
}

export default Card;
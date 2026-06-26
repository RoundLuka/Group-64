import Picture from './assets/Picture.jpg'

function Card() {

    return (
        <div className='card'>
            <img src={Picture}/>
            <h2>John Doe</h2>
            <p>I am learning react</p>
        </div>
    )
}

export default Card;
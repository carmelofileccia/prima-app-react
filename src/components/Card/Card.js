import styles from './styles.css';

function Card(props) {
    return (
        <div className="divCard">
           <h4 className='titleCard'>{props.title}</h4>
           <p className='paraCard'>{props.desc}</p>
        </div>
    )
}
export default Card;
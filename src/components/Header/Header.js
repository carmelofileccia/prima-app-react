import carmelo from '../../images/carmelo.jpeg';
import styles from './styles.css';

function Header () {
    return (
        <div>
            <img src={carmelo} className="img-profile" alt="..."/>
            <h1 className="name">Carmelo Fileccia</h1>
        </div>
    )
}

export default Header;
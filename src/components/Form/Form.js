import styles from './styles.css';

function Form () {
    return (
        <div className="divForm">
           <h2 className='titleForm'>Contattami</h2>

           <form className='form'>
                <label className='object'>Oggetto:<input type="text" name="oggetto" placeholder='Oggetto'/></label>
                <label className='message'>Messaggio:<textarea type="text-area" name="messaggio" placeholder='Messaggio'/></label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}
export default Form;
import './componentsTestdrive/testdrive.css'
import Book from "./componentsTestdrive/Book"
import Pick from "./componentsTestdrive/Calend"
import Deck from "./componentsTestdrive/Deck"

const TestDrive = () => {
    return(
        <div className='testDrive'>
            <br/><br/><br/><br/><br/><br/>
            <Pick></Pick>
            <Deck></Deck>
            <Book></Book>
        </div>
    )
}
export default TestDrive
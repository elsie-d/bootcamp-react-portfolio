// Application has a single Header component that appears 
// on multiple pages, with a Navigation component within it 
// that’s used to conditionally render 
// About Me, Portfolio, Contact, and Resume sections.
import'../styles/header.css'
import Nav from './Nav';

const styles = {
    headingStyle: {
        color: 'White',
        fontSize: '50px',
        padding: '15px 0px'

    },
};

function Header(){
return(
    <header className='header'>
        <Nav />
        <h1 style={styles.headingStyle}>Elsie Duarte</h1>
        <Nav /> 
    </header>
    
);
}

export default Header;
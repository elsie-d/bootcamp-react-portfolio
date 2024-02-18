// Application has a single Header component that appears 
// on multiple pages, with a Navigation component within it 
// that’s used to conditionally render 
// About Me, Portfolio, Contact, and Resume sections.
import'../styles/header.css'
import Nav from './Nav';

const styles = {
    headerStyle:{
        background: 'purple',
    },
    headingStyle: {
        color: 'white',
        fontSize: '50px',

    },
};

function Header(){
return(
    <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Welcome to the wonderful world of Elsieland</h1>
        <Nav />
    </header>
    
);
}

export default Header;
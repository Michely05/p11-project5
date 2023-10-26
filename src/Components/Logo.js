import logo from '../img/decathlonLogo.png';
import '../Components/Logo.css'

function Logo(){
    return(
    <img className="logo" src={logo} alt="Logo de Decathlon"/>
    );
}

export default Logo;
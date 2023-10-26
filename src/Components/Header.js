import Logo from './Logo';
import './Header.css';
import helpIcon from '../img/help_icon.svg'
import shopIcon from '../img/shop_icon.svg'
import userIcon from '../img/user_icon.svg'
import cartIcon from '../img/cart_icon.svg'

function Header(){
    return (
    <header>
        <Logo/>
        <div className = "menuIcons">
            <img className="helpIcon" src={helpIcon} alt="Botón de Ayuda"/>
            <img className="shopIcon" src={shopIcon} alt="Botón de Tienda"/>
            <img className="userIcon" src={userIcon} alt="Botón de Cuenta de usuario"/>
            <img className="cartIcon" src={cartIcon} alt="Botón de cesta de la compra"/>
        </div>

    </header>
    )
}

export default Header;
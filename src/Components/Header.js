import Logo from './Logo';
import './Header.css';
import helpIcon from '../img/help_icon.svg'
import ShopIcon from '../img/shop_icon.svg'
import userIcon from '../img/user_icon.svg'
import cartIcon from '../img/cart_icon.svg'

function Header(){
    return (
    <header>
        <Logo/>
        <div class = "menuIcons">
            <img class="helpIcon" src={helpIcon} alt="Botón de Ayuda"/>
            <img class="shopIcon" src={ShopIcon} alt="Botón de Tienda"/>
            <img class="userIcon" src={userIcon} alt="Botón de Cuenta de usuario"/>
            <img class="cartIcon" src={cartIcon} alt="Botón de cesta de la compra"/>
        </div>

    </header>
    )
}

export default Header;
import './Banner.css';
import banner from '../img/banner.jpg';

function Banner() {
    return (
        <div className="banner">
            <img src={banner} alt="Banner sobre App Days" />
        </div>
    )
}

export default Banner;
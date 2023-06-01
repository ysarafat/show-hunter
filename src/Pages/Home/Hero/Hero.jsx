import heroin from '../../../assets/Image/hero/pngwing.com.png';
import './Hero.css';
const Hero = () => {
    return (
        <div className='bg_img'>
            <div className='container d-flex align-items-center flex-column flex-sm-row py-5'>
            <div>
                <h1 className='text-light'>Welcome To Show Hunter</h1>
                <p className='text-light'>Download full HD movies, web series and short films
            HD movies refer to films that are available in high-definition resolution, providing a superior visual experience with sharper images, vibrant colors, and enhanced detail.</p>
            <button className='btn btn-primary'>See Show</button>
            </div>
            <div>
                <img src={heroin} alt="heroin" />
            </div>
            </div>
        </div>
    );
};

export default Hero;
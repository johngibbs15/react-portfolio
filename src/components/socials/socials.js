import './socials.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Socials = () => {
    return (
        <div className="container-socials">
            <FaFacebook
                size={30}
                style={{ color: 'white', marginRight: '1.5rem' }}
            />
            <FaInstagram
                size={30}
                style={{ color: 'white', marginRight: '1.5rem' }}
            />
            <FaLinkedin
                size={30}
                style={{ color: 'white', marginRight: '1.5rem' }}
            />
        </div>
    );
};

export default Socials;

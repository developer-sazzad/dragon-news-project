import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 my-5'>
            <div className='w-96'>
                <img src={logo} alt="" />
            </div>
            <h3 className='text-gray-400 text-lg'>Journalism Without Fear or Favour</h3>
            <p className='text-xl'>
                {
                    moment().format("dddd, MMMM Do YYYY")
                }
            </p>
        </div>
    );
};

export default Header;
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='flex justify-between w-[100%] bg-[#046A38] mx-auto text-white py-10 font-serif'>
            <h1 className='text-3xl pl-5'>RateMyCSExam</h1>
            <div className='flex space-x-4 pr-4'>
                <Link to='/about'><button className="text-2xl hover:underline uppercase">About</button></Link>
                <Link to='/begin'><button className="text-2xl hover:underline uppercase">Begin</button></Link>
            </div>
            <div className='flex space-x-4 pr-4'>
                <button className='text-xl hover:underline'>Log-in</button>
                <button className='text-xl bg-white text-[#046A38] py-2 px-4 rounded-lg hover:underline hover:bg-[#028a4a] hover:text-white transition duration-300'>
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default NavBar;


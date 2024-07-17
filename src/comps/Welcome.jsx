import {Link} from 'react-router-dom'
function Welcome() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#f4f4f4] py-20 px-10 text-center rounded-lg shadow-lg max-w-3xl mx-auto mt-10 font-mono">
            <h1 className="text-4xl font-bold mb-4 text-[#046A38]">
                Welcome to RateMyCSExam
            </h1>
            <p className="text-xl mb-4 italic">We want to make exams less stressful by letting you know what to expect!</p>
            <p className="text-xl italic pb-10">We also want to help you in making the right choice in picking a professor!</p>
            <Link to = '/begin'><button className='text-xl bg-white text-[#046A38] py-2 px-4 rounded-lg hover:underline hover:bg-[#028a4a] hover:text-white transition duration-300 font-bold'>Lets Begin!</button></Link>
        </div>
    )
}

export default Welcome;


import { Link } from 'react-router-dom'; 

function About() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                <Link to="/" className="text-[#046A38] font-bold text-lg mb-4 inline-block">&larr; Back to Home</Link>
                <h2 className="text-4xl font-bold text-[#046A38] mb-8 text-center">About Me</h2>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                    Hi, I'm Hunter Martin, a student at Eastern Michigan University. I am currently studying Computer Science in my third year. I created RateMyCSExam to help students like myself prepare for exams by providing insights from others who have already taken them.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                    RateMyCSExam was born out of my frustration in finding exam preparation resources. I wanted a platform where I could read about exam difficulty, topics covered, and tips from fellow students.
                </p>
            </div>
        </div>
    );
}

export default About;





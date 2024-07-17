import college1 from '../assets/college1.jpeg'
import college2 from '../assets/college2.jpeg'
import college3 from '../assets/college3.jpeg'
function Testimonials() {
    const testimonials = [
        {
            name: "Christopher Wainwright",
            school: "Eastern Michigan University",
            text: "This website has been incredibly helpful in preparing for my exams. I feel much more confident going into tests knowing what to expect!",
            image: college1 
        },
        {
            name: "Tiler Hill",
            school: "Central Michigan University",
            text: "The reviews of professors are spot on. It really helped me choose the right courses and instructors.",
            image: college2 
        },
        {
            name: "John Wall",
            school: "University of Michigan",
            text: "RateMyCSExam is a game-changer. The insights from other students have been invaluable.",
            image: college3 
        }
    ];

    return (
        <div className="bg-[#f4f4f4] py-20 px-10">
            <h2 className="text-4xl font-bold text-center text-[#046A38] mb-10">Testimonials</h2>
            <div className="flex flex-wrap justify-center gap-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                        <div className="flex items-center mb-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4"/>
                            <div>
                                <h3 className="text-xl font-semibold text-[#046A38]">{testimonial.name}</h3>
                                <p className="text-sm text-gray-600">{testimonial.school}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">{testimonial.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Testimonials;

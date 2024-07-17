import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Professor = () => {
    const { professorName, schoolName } = useParams();
    const [reviews, setReviews] = useState([]);
    const [userVotes, setUserVotes] = useState([]);
    const [newReview, setNewReview] = useState({
        courseName: '',
        examName: '',
        difficulty: 1,
        message: '',
        thumbsUp: 0, // initial thumbs up count
        thumbsDown: 0 // initial thumbs down count
    });

    useEffect(() => {
        // fetch reviews from localStorage
        const storedReviews = localStorage.getItem(professorName);
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        }

        // fetch user votes from localStorage
        const storedVotes = localStorage.getItem(`${professorName}_votes`);
        if (storedVotes) {
            setUserVotes(JSON.parse(storedVotes));
        }
    }, [professorName]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({
            ...newReview,
            [name]: value
        });
    };

    const handleAddReview = () => {
        // add new review to the existing reviews
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);

        // store updated reviews in localStorage
        localStorage.setItem(professorName, JSON.stringify(updatedReviews));

        // reset the new review form
        setNewReview({
            courseName: '',
            examName: '',
            difficulty: 1,
            message: '',
            thumbsUp: 0,
            thumbsDown: 0
        });
    };

    const handleThumbsUp = (index) => {
        // check if the user has already voted on this review
        if (!userVotes.includes(index)) {
            const updatedReviews = [...reviews];
            updatedReviews[index].thumbsUp += 1; // increment thumbs up count
            setReviews(updatedReviews);
            localStorage.setItem(professorName, JSON.stringify(updatedReviews));

            const updatedVotes = [...userVotes, index];
            setUserVotes(updatedVotes);
            localStorage.setItem(`${professorName}_votes`, JSON.stringify(updatedVotes));
        } else {
            alert('You have already voted on this review.');
        }
    };

    const handleThumbsDown = (index) => {
        // check if the user has already voted on this review
        if (!userVotes.includes(index)) {
            const updatedReviews = [...reviews];
            updatedReviews[index].thumbsDown += 1; // increment thumbs down count
            setReviews(updatedReviews);
            localStorage.setItem(professorName, JSON.stringify(updatedReviews));

            const updatedVotes = [...userVotes, index];
            setUserVotes(updatedVotes);
            localStorage.setItem(`${professorName}_votes`, JSON.stringify(updatedVotes));
        } else {
            alert('You have already voted on this review.');
        }
    };

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;
        const totalDifficulty = reviews.reduce((acc, review) => acc + parseInt(review.difficulty), 0);
        const averageRating = totalDifficulty / reviews.length;
        return averageRating.toFixed(1); // return average rating with one decimal point
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">

                {/* link to go back to the home page */}
                <Link to="/" className="text-[#046A38] font-bold text-lg mb-4 inline-block">&larr; Go Back to Home</Link>

                {/* heading for the professor's name */}
                <h1 className="text-4xl font-bold text-center text-[#046A38] mb-4">
                    Professor {professorName} <span className="text-2xl font-semibold">({calculateAverageRating()}/5)</span>
                </h1>

                {/* heading for the school name */}
                <h2 className="text-2xl font-semibold text-center text-[#046A38] mb-8">{schoolName}</h2>

                {/* display the list of reviews */}
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                            <p className="text-lg"><strong>Course:</strong> {review.courseName}</p>
                            <p className="text-lg"><strong>Exam:</strong> {review.examName}</p>
                            <p className="text-lg"><strong>Difficulty:</strong> {review.difficulty}</p>
                            <p className="text-lg"><strong>Message:</strong> {review.message}</p>
                            <div className="flex items-center mt-2">
                                {/* thumbs up button */}
                                <button
                                    onClick={() => handleThumbsUp(index)}
                                    className="mr-2 text-green-500"
                                >
                                    👍 {review.thumbsUp} {/* display thumbs up count */}
                                </button>
                                {/* thumbs down button */}
                                <button
                                    onClick={() => handleThumbsDown(index)}
                                    className="text-red-500"
                                >
                                    👎 {review.thumbsDown} {/* display thumbs down count */}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8">

                    {/* heading for adding a new review */}
                    <h3 className="text-2xl font-semibold text-center text-[#046A38] mb-4">Add a Review</h3>

                    {/* input for course name */}
                    <input
                        type="text"
                        name="courseName"
                        placeholder="Course Name"
                        value={newReview.courseName}
                        onChange={handleInputChange}
                        className="block w-full p-2 mb-4 border rounded-lg"
                    />

                    {/* input for exam name/topics */}
                    <input
                        type="text"
                        name="examName"
                        placeholder="Exam Name / Topics"
                        value={newReview.examName}
                        onChange={handleInputChange}
                        className="block w-full p-2 mb-4 border rounded-lg"
                    />

                    {/* input for difficulty level */}
                    <label className="block mb-2">Difficulty:</label>
                    <select
                        name="difficulty"
                        value={newReview.difficulty}
                        onChange={handleInputChange}
                        className="block w-full p-2 mb-4 border rounded-lg"
                    >
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>

                    {/* textarea for review message */}
                    <textarea
                        name="message"
                        placeholder="Message for future students"
                        value={newReview.message}
                        onChange={handleInputChange}
                        className="block w-full p-2 mb-4 border rounded-lg"
                        rows="4"
                    ></textarea>

                    {/* button to submit the review */}
                    <button
                        onClick={handleAddReview}
                        className="block w-full py-2 bg-[#046A38] text-white font-bold rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Submit Review
                    </button>
                </div>
            </div>
            <div className='py-10'></div>

            {/* link to go back to the professor selection page */}
            <Link to='/begin'>
                <button className='text-xl bg-white text-[#046A38] py-2 px-4 rounded-lg hover:underline hover:bg-[#028a4a] hover:text-white transition duration-300 font-bold'>
                    Pick a different Professor
                </button>
            </Link>
        </div>
    );
};

export default Professor;




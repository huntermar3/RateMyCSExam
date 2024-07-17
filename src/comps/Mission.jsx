function Mission() {
    return (
        <div className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-[#046A38] mb-12 text-center">Why RateMyCSExam</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#046A38]">Ratings are Anonymous</h3>
                    <p className="text-gray-700">Feel comfortable leaving honest reviews without revealing your identity.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#046A38]">Agree/Disagree with Posts</h3>
                    <p className="text-gray-700">Express your opinion by agreeing or disagreeing with existing reviews.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[#046A38]">Quick and Easy</h3>
                    <p className="text-gray-700">Browse posts without the hassle of creating an account.</p>
                </div>
            </div>
        </div>
    );
}

export default Mission;


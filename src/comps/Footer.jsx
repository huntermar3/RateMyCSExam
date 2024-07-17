function Footer() {
    return (
        <footer className="bg-[#046A38] text-white py-8 h-32">
            <div className="container mx-auto flex items-center justify-center">
                <button className="text-xl hover:underline  mx-6">About</button>
                <button className="text-xl hover:underline  mx-6">Begin</button>
                <a href="/terms" className="text-lg hover:underline mx-6">Terms of Service</a>
                <p className="text-lg mx-6">&copy; 2024 RateMyCSExam</p>
            </div>
        </footer>
    );
}

export default Footer;



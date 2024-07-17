import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Begin = () => {
    const navigate = useNavigate();
    const [selectedSchool, setSelectedSchool] = useState('');
    const [selectedProfessor, setSelectedProfessor] = useState('');

    // define the professors data
    const professors = {
        'Central Michigan University': [
            'Cragger', 'Eickholt', 'Gargees', 'Johnson', 'Kelly', 'Kinnicut', 'Li', 'Liao', 'Murthy', 'Seeling', 'Sun', 'Ugur', 'Zhang'
        ],
        'Eastern Michigan University': [
            'Evett', 'Francis III', 'Ikeji', 'Jiang', 'Kashliev', 'Maniccam', 'Mansour', 'Panja', 'Poh', 'Spantidi', 'Narayanan', 'Sverdilk', 'Zhang', 'Tehranipour'
        ],
        'University Of Michigan': [],
        'Wayne State University': [
            'Aidibi', 'Bosu', 'Brockmeyer', 'Castro Hernandez', 'Z.Dong', 'M.Dong', 'Fisher', 'Forouchi', 'Goel', 'Gross', 'Han', 'Hua', 'Lu', 'Nasser', 'Xu'
        ],
        'Schoolcraft College': [
            'Boron', 'Cesearz', 'Hailat', 'Lee', 'Laird', 'Ellis'
        ],
        'Henry Ford College': [
            'Banks', 'Black', 'Abdullah', 'Conner', 'Conti', 'Hassan', 'James', 'Jennings'
        ],
        'More coming soon!': []
    };

    // handle the search action
    const handleSearch = () => {
        if (selectedProfessor && professors[selectedSchool]?.includes(selectedProfessor)) {
            navigate(`/professors/${selectedSchool}/${selectedProfessor}`);
        } else {
            alert('Professor not found. Please select a valid professor.');
            setSelectedProfessor('');
        }
    };

    // get professors by selected school
    const getProfessorsBySchool = () => {
        return selectedSchool ? professors[selectedSchool].sort() : [];
    };

    const filteredProfessors = getProfessorsBySchool();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                {/* link to go back to the home page */}
                <Link to="/" className="text-[#046A38] font-bold text-lg mb-4 inline-block">&larr; Go Back to Home</Link>

                {/* heading for selecting a school */}
                <h2 className="text-4xl font-bold text-[#046A38] mb-8 text-center">Select a School</h2>
                <div className="mb-8">
                    {/* dropdown for selecting a school */}
                    <select
                        value={selectedSchool}
                        onChange={(e) => setSelectedSchool(e.target.value)}
                        className="block w-full p-4 rounded-lg bg-[#046A38] text-white font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-[#046A38] focus:bg-green-600"
                    >
                        <option value="">Select a school...</option>
                        {Object.keys(professors).map((school, index) => (
                            <option key={index} value={school} disabled={school === 'More coming soon!'}>
                                {school}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedSchool && (
                    <div className="mb-8">
                        {/* heading for selecting a professor */}
                        <h2 className="text-4xl font-bold text-[#046A38] mb-4 text-center">Select a Professor's Last Name</h2>

                        {/* dropdown for selecting a professor */}
                        <select
                            value={selectedProfessor}
                            onChange={(e) => setSelectedProfessor(e.target.value)}
                            className="block w-full p-4 rounded-lg bg-[#046A38] text-white font-semibold text-xl focus:outline-none focus:ring-2 focus:ring-[#046A38] focus:bg-green-600"
                        >
                            <option value="">Select a professor...</option>
                            {filteredProfessors.map((professor, index) => (
                                <option key={index} value={professor}>
                                    {professor}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* button to initiate search */}
                <button
                    onClick={handleSearch}
                    className="block w-full py-4 rounded-lg bg-[#046A38] text-white font-semibold text-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-[#046A38]"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Begin;






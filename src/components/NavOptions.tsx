import { useState } from 'react';

export default function NavOptions({selectedPageText}: {selectedPageText: string}) {
    const [selectedPage, setSelectedPage] = useState(selectedPageText);

    return (
        <div className="flex justify-center space-x-52">
            <div className="relative">
                <a href="#" className={`text-light-blue font-semibold ${selectedPage === "About" ? 'selected' : ''}`} onClick={() => setSelectedPage("About")}>About</a>
                {selectedPage === "About" && <hr className="absolute w-3/4 -bottom-1 left-0 h-0.5 bg-light-blue" />}
            </div>
            <div className="relative">
                <a href="#" className={`text-light-blue font-semibold ${selectedPage === "FAQ" ? 'selected' : ''}`} onClick={() => setSelectedPage("FAQ")}>FAQ</a>
                {selectedPage === "FAQ" && <hr className="absolute w-3/4 -bottom-1 left-0 h-0.5 bg-light-blue" />}
            </div>
            <div className="relative">
                <a href="#" className={`text-light-blue font-semibold ${selectedPage === "Home" ? 'selected' : ''}`} onClick={() => setSelectedPage("Home")}>Home</a>
                {selectedPage === "Home" && <hr className="absolute w-3/4 -bottom-1 left-0 h-0.5 bg-light-blue" />}
            </div>
        </div>
    )
}

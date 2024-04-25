export function Search_section() {
        return (
                <div>
                        <div className="flex w-3/4 m-auto mt-10  shadow-md py-5 px-2 rounded-full">
                                <div className="m-auto px-2 opacity-30" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                </div>
                                <input className="w-full outline-none" placeholder="Enter skills/designations/companies"></input>
                                <input placeholder="experience" list="experience" id="exp" className="outline-none"></input>
                                <datalist id="experience">
                                        <option value="Fresher"></option>
                                        <option value="1 year"></option>
                                        <option value="2 years"></option>
                                </datalist>
                                <input className="outline-none " placeholder="Enter location"></input>
                                <button className="text-xl px-6 py-2 bg-blue-600 text-white mx-2 rounded-full">Search</button>
                        </div>
                </div>
        )
}
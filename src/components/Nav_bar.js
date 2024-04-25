import naukri from './naukri_logo.svg'
export function Nav_bar() {
        return (
                <div className=' bg-slate-50   lg:flex px-28 py-3 sticky '>
                        < div className="logo">
                                <img src={naukri} alt="BigCo Inc. logo" />
                        </div>
                        <ul className="w-1/2 flex *:p-2">
                                <li className='mx-6'><a className='hover:border-b-4 border-red-500  pb-1' href="">Jobs</a></li>
                                <li className='mx-6'><a className='hover:border-b-4 border-red-500  pb-1' href="">Companies</a></li>
                                <li className='mx-6'><a className='hover:border-b-4 border-red-500  pb-1' href="">Services</a></li>
                        </ul>
                        <button className="w-20 rounded-full mx-5 login border border-blue-600 text-blue-600">Login</button>
                        <button className="register w-32 rounded-full mr-5 bg-red-500 text-white">Register</button>
                        <div className="p-2 foremployer">foremployers</div>

                </div>
        )
}
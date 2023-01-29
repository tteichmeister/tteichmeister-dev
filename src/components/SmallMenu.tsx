import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";



const SmallMenu: FunctionalComponent = () => {
    const [isOpen, setOpen] = useState(false); 

    function toggleMenu() {
        if (isOpen) {

        } else {

        }
        setOpen(!isOpen)
    }

    return (
        <>
            <button className="text-gray-700 w-10 h-10 relative focus:outline-none" aria-label="Toggle Menu" onClick={toggleMenu}>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className={`block absolute h-0.5 rounded-lg w-4 bg-gray-700 dark:bg-white transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span className={`block absolute h-0.5 rounded-lg w-4 bg-gray-700 dark:bg-white transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0': ''}`}></span>
                    <span className={`block absolute h-0.5 rounded-lg w-4 bg-gray-700 dark:bg-white transform  transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}` }></span>
                </div>
            </button>

            {isOpen ? 
                <div className="fixed h-screen w-full bg-gray-200 dark:bg-gray-900 z-50 left-0 ">
                    <ul className="flex flex-col items-center justify-center text-black dark:text-white my-auto h-3/4 space-y-24">
                        <li>
                            <a href={'/'} className="uppercase text-3xl underline decoration-solid decoration-6 decoration-teal-500">{'  '} Home {'  '}</a>
                        </li>
                        <li>
                            <a href={'/work'} className="uppercase text-3xl">Work</a>
                        </li>
                        <li>
                            <a href={'/projects'} className="uppercase text-3xl">Projects</a>
                        </li>
                        <li>
                            <a href={'/education'} className="uppercase text-3xl">Education</a>
                        </li>
                    </ul>
                </div> 
            : null}

        </>
    )
}
// translate-x-0 transition duration-700

export default SmallMenu;
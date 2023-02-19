

import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";



const SmallMenu: FunctionalComponent<{activeUrl: string}> = ({activeUrl}) => {
    const [isOpen, setOpen] = useState(false); 
    function toggleMenu() {
        if (isOpen) {

        } else {

        }
        setOpen(!isOpen)
    }
    function isActive(href: string){
        return href === activeUrl || href === activeUrl.replace(/\/$/, "")
    }
    function getLinkClass(href: string) {
        const defaultClass = "uppercase text-3xl "
        return isActive(href) ? defaultClass + "underline-text" : defaultClass;
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
                <div className={`fixed h-screen w-full  z-50 left-0 background-color`}>
                    <ul className={`flex flex-col items-center justify-center heading-3 my-auto h-3/4 space-y-24`}>
                        <li>
                            <a href={'/'} className={getLinkClass("/")}>{'  '} About {'  '}</a>
                        </li>
                        <li>
                            <a href={'/work'} className={getLinkClass("/work")}>Work</a>
                        </li>
                        <li>
                            <a href={'/projects'} className={getLinkClass("/projects")}>Projects</a>
                        </li>
                        <li>
                            <a href={'/education'} className={getLinkClass("/education")}>Education</a>
                        </li>
                    </ul>
                </div> 
            : null}

        </>
    )
}
// translate-x-0 transition duration-700

export default SmallMenu;
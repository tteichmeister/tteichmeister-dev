

import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";



const SmallMenu: FunctionalComponent<{activeUrl: string}> = ({activeUrl}) => {
    const [isOpen, setOpen] = useState(false); 
    function toggleMenu() {
        if (isOpen) {
            document.body.classList.remove('overflow-hidden');
        } else {
            document.body.classList.add('overflow-hidden');
        }
        setOpen(!isOpen)
    }
    function isActive(href: string){
        return href === activeUrl || href === activeUrl.replace(/\/$/, "")
    }
    function getLinkClass(href: string) {
        const defaultClass = "uppercase text-3xl "
        return isActive(href) ? defaultClass + "underline-text text-color-primary" : defaultClass;
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


            <div className={`fixed h-screen w-full z-50 left-0 background-color right-full transform ${isOpen ? '': 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
                <ul className={`flex flex-col items-center justify-center text-color-default my-auto h-3/4 space-y-24`}>
                    <li>
                        <a href={'/'} className={getLinkClass("/")}>{'  '} About {'  '}</a>
                    </li>
                    <li>
                        <a href={'/work'} className={getLinkClass("/work")}>Work</a>
                    </li>
                    <li>
                        <a href={'/projects'} className={getLinkClass("/projects")}>Projects</a>
                    </li>
                </ul>
            </div> 
        </>
    )
}

export default SmallMenu;
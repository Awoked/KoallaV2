import React from 'react'

const Menu = ({ isMenuActive, ...props }) => {
    return (
        <div className={`menu-wrapper transition-all absolute max-md:bottom-full md:left-full rounded-md bg-[#262428] bg-opacity-80 p-3 
            flex flex-col gap-y-2
            ${isMenuActive ? "visible max-md:-translate-y-5 md:translate-x-5 opacity-100" : "opacity-0 invisible pointer-events-none max-md:translate-y-20 md:-translate-x-20"}

        `}
        >
            {props.children}
        </div>
    )
}

export default Menu
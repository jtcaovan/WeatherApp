import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar(prop) {
    console.log(prop)
    return (
        <div className="absolute top-0 right-0 flex p-3 m-2 items-center">
            <form className="flex bg-white w-72 h-14 rounded-md ml-4 p-4">
                <FontAwesomeIcon onClick={prop.handleSubmit} className='text-2xl hover:text-gray-500 cursor-pointer"' icon={faSearch} />
                <label for="searchCity"></label>
                <input type="search" className="mx-3 h-auto w-full outline-none font-sans text-xl tracking-wide" placeholder="Search city..." autocomplete="off" />
            </form>
        </div>
    )
}

export default NavBar
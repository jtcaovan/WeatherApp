import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamation, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

function Search(prop) {
    const { register, handleSubmit, reset} = useForm()
    const onSubmit = (data) => {
        prop.setNewCity(data.city)
        reset()
    }

    return(
        <div className='flex flex-col absolute top-0 right-0'>
        <form className="shadow-xl flex p-4 mx-5 mt-5 items-center flex bg-white w-48 md:w-72 h-12 md:h-14 rounded-md" 
            onSubmit={handleSubmit(onSubmit)}>

        {prop.isLoading ?
            <FontAwesomeIcon 
                className='text-lg md:text-2xl text-black animate-spin' 
                icon={faCircleNotch} /> :

            <FontAwesomeIcon 
                className='text-lg md:text-2xl text-black hover:text-gray-500 cursor-pointer' 
                onClick={handleSubmit(onSubmit)} 
                icon={faSearch} />
            }

            <input 
                className="text-black mx-3 h-auto w-full outline-none font-sans text-base md:text-xl tracking-wide" 
                type="search"
                name="city"
                ref={register({ required: true })}
                placeholder="Search city..." 
                autocomplete="off" />
        </form>

        <div className={prop.error}>
            <div className="bg-red-500 mx-5 p-4 h-12 w-56 md:h-14 md:w-72 rounded-md text-white"> 
                <FontAwesomeIcon className='animate-bounce' icon={faExclamation}/> <span className="pl-4 font-light text-sm">Please enter a valid city name...</span>
            </div>
        </div>


    </div>
    )
}

export default Search
import React from 'react'

function AlertBox() {
    return(
        <div id="alertBox" className="absolute invisible bg-red-500 h-16 rounded-md text-white p-4">
            <div className=""><span className="fas fa-bell pr-4 text-xl"></span> Please enter a valid city name...</div>
        </div>
    )
}

export default AlertBox
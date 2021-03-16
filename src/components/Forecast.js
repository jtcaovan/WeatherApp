/* eslint-disable jsx-a11y/alt-text */
// import React from 'react'

// function Forecast(prop) {
//     console.log(prop)

//     for (let i = 1; i < 7; i++) {
//         let today = new Date()
//         today.setDate(today.getDate() + i);
//         forecastDate[i].textContent = today.toLocaleString('en-US', {weekday: 'long'});
//         forecastIcon[i].src = `http://openweathermap.org/img/w/${prop.data.list[i].weather[0].icon}`+ '.png';
//         forecastInfo[i].textContent = prop.data.list[i].weather[0].main;
//         forecastTemp[i].textContent = Math.round(prop.data.list[i].main.temp) + '°';
//     }

//     return(
//         <div>
//             <div className='forecast flex-shrink h-16 w-16'>
//                 <div className='forecastDate'></div>
//                 <img src="" className='forecastIcon' />
//                 <div className="forecastInfo"></div>
//                 <div className='forecastTemp'></div>
//             </div>
//         </div>
//     )
// }

// export default Forecast
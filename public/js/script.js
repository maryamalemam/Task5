

// let form = document.getElementById('form1')

// form.addEventListener('submet' , (e) =>{
//     e.preventDefault()
//     weatherFun()
//     form.reset
// })

// const errorF = document.getElementById(error)
// const locationF = document.getElementById(location)
// const forecastF = document.getElementById(forecast)
// const { latitudeF , longitudeF } = document.getElementById(latitude , longitude )

// let weatherFun = async() =>{
//     try{
//         const address = document.getElementById('address').value
//         const res = await fetch('http://localhost:3000/weather?address='+address)
//         const data = await res.json()
//         console.log(data)
//         if (data.error) {
//             errorF.innerText = data.error
//             locationF.innerText = ''
//             forecastF.innerText = ''
//             (latitudeF , longitudeF ).innerText =''
//         }
//         else {
//            locationF.innerText = data.location
//            forecastF.innerText = data.forecastF
//            (latitudeF , longitudeF ).innerText = data.latitudeF ,data.longitudeF 
//            errorF.innerText = ''
            
//         }
//     }
//     catch(e) {
//         console.log(e)
//     }
// }


let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    weatherFun()
   // form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const forecastF = document.getElementById('forecast')

let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/checkWeather?address='+address )
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error;
            locationF.innerText ="";
            forecastF.innerText ="";
            longitude.innerText ="";
            latitude.innerText ="";
        }
        else {
         setTimeout(() =>{
            locationF.innerText = data.location
         } , 500);
         setTimeout(() =>{
            forecastF.innerText = data.forecast
         } , 1000);
         setTimeout(() =>{
            longitude.innerText = data.longitude
         } , 1500);
         setTimeout(() =>{
            latitude.innerText = data.latitude
         } , 2000);
           
        }
    }
    catch(e){
        console.log(e)
    }
}
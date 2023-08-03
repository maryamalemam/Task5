 const express = require ("express")
 const path = require ("path")
 const app = express ()

 const port = process.env.PORT || 3000 

 app.set('view engine', 'hbs');

 var hbs = require ('hbs')

 const partialsPath = path.join(__dirname , "../temp/partials")
 app.use(express.static(path.join(__dirname,"../public")))

 hbs.registerPartials(partialsPath)

 app.get('/' , (req , res) => {
   res.render ('index' , {
      title : 'Home Bage' ,
       desc : "Welcome All !" ,
   })
 })

 app.get('/check' , (req , res) => {
   res.render ('check' , {
      title : 'Check Weather' ,
      latitude : '26.4941838299718',
      longitude : '29.871903452398',
      country : 'Egypt',
      weather : 'clear',
      temp : "33"
   })
 })

 app.get('/weather' , (req , res) => {
  res.render ('weather' , {
    title : 'weather Bage' ,
      desc : "To Check Weather" ,
      latitude : 'latitude',
      longitude : 'longitude',
  })
})

 const geocode = require('./tools/geocode')
 const forecast = require('./tools/forecastFile')
 
 app.get('/checkWeather',(req,res)=>{
   if(!req.query.address){
      return res.send({
            error:'You must provide address'
        })


     }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        else {
         forecast(data.latitude,data.longitude,(error,forecastData)=>{
        if(error){
            return res.send({error})
        }
        else {
            res.send({
            forecast: forecastData,
            location: req.query.address,
            latitude : data.latitude,
            longitude : data.longitude,
       })
      }
    })
  }
   })
 })

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})


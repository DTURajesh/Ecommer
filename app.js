const express= require('express');
const mongoose =require('mongoose');
var bodyParser = require('body-parser')

const User= require('./models/Customer');
const app= express();
const PORT= 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connect("mongodb://localhost:27017/Test")
.then(()=> console.log('Mongoose connected'))
.catch((err)=> console.log("Error in Mongoose"));




 // Create and save a document
 


app.post('/AddCustomer', async (req, res)=>{
   
   //console.log(req.body);
  // console.log(req.body);

  const result = await User.create({
      name: req.body.Name,
      
      email: req.body.email,
      phone_Number: req.body.number,
   })

 res.redirect('/')


})
 app.get('/AddCustomer', (req, res)=> {

      res.render('AddCustomer');

 })
app.get('/', (req, res)=>{

   var obj ={
      CompanyName: "Prem Kiryana Store",
      Products:"Items",
      item1:"Shoes",
      item2:"Clothes",
      item3:"Electronics Device"

   }
   res.render('index', obj);

})
app.get("/shoes", function(req, res){

      var arr=[
           {
              brand: "Bata",
              Price : 4555,
              img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  ,
           },
           {
            brand: "Woodland",
            Price : 6000,
            img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hvZXN8ZW58MHx8MHx8fDA%3D"
        },
         {
            brand: "Raxalo",
            Price : 3000,
            img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hvZXN8ZW58MHx8MHx8fDA%3D"
        }
         
      ];

      res.render('shoes', {arr});

})



app.get('/Customer', async (req, res)=>{

     const result= await  User.find();

     //console.log(result);

     var arr=[];

     result.forEach((item)=>{
      
        arr.pushgi(item.email);
     })
    
     console.log(arr);

     res.render('Customer', {arr});

})
app.listen(PORT, ()=> {

    console.log("server is start");
})


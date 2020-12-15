const date = require ('../generateDate.js');
const mongoose = require('mongoose');
const Number = mongoose.model("Number");

exports.getMainPage = (req, res) =>{
    let day = date.getDate();
    
    Number.find((error, numbers)=>{
        if(!error){
            res.render('index.ejs', {date: day, numberItems: numbers});
        } else {
            console.log('Failed to retrive data: ', error);
        }
    });
};

exports.postNewNumber = (req, res) =>{
    const item = req.body.name;
    const number = req.body.number;
    let newNumber = new Number();
    newNumber.name = item;
    newNumber.number = number;

    newNumber.save((error, response)=>{
        if(!error){
            res.redirect('/');
        }else {
            console.log(error);
        }
    });
};


exports.deleteNumber = (req, res) =>{
    console.log('Call from delete', req.body.checkbox);
    const checkedNumberId = req.body.checkbox;
    Number.findByIdAndRemove(checkedNumberId, function(error){
        if(!error){
            console.log('deleted item: ', checkedNumberId);
            res.redirect('/');
        }else {
            console.log('Error in deleting item from DB');
        }
    });
}
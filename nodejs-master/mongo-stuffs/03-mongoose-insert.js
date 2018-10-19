const mongoose = require('mongoose');
const url = 'mongodb://test:socgen123@ds161092.mlab.com:61092/node-mongo';

mongoose.connect(url);

const CatSchema = { 
    name: String, 
    color: String 
}
const Cat = mongoose.model('Cat', CatSchema);

const kitty = new Cat({ name: 'KittyKat', color: 'white' });

kitty.save().then(() => {
    console.log('meow')
    mongoose.disconnect()
}).catch(() => {
    console.log("Error Occured")
})
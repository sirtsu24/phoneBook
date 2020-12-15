const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/phoneBookBD',{useNewUrlParser: true, useUnifiedTopology:true});
require('./number');
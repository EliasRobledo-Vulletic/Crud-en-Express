const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/Users'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Conntected to mongo')
}).catch((error)=>{
    console.error('error connecting to mongo', error);
})


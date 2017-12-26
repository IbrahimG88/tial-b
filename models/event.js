var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

  // content: {type: String, required: true },
   // user: { type: Schema.Types.ObjectId, ref: 'User' },

    creator: {type: String, required: true},
    user: String,
    groupName: String,
    location: String,
    date: Number,
    startTime: Number,
    finishTime: Number,
    status: String,
    evaluation: String




});



module.exports = mongoose.model('Event', schema);

//mongoose.model expects 2 arguments:
//('Meassage'): is the name of that model
// then we may create a Message instance by: new Message();
//mongoose will use the model name as the collection name but in
// lowercase, plural form: messages
//2nd argument is: the schema we want to use for the model

// {Event } will be imported in routes/events
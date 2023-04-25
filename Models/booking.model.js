const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
     user : { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
	 flight : { type:mongoose.Schema.Types.ObjectId, ref: 'Flight' }
}, {
     timestamp: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Booking };

// bookings
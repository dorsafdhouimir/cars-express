const carSchema = new mongoose.Schema({
    name: String,
    color: String,
    milesRun: Number,
    forRent: Boolean,
    forSale: Boolean
});
const Car = mongoose.model('Car', carSchema);

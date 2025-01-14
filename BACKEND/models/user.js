const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { use } = require("../routes/places-routes");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, //to query faster unique is used here
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId,required:true,ref:'Place'}],//multiple places for onne user
});
userSchema.plugin(uniqueValidator); //to create only unique email
module.exports = mongoose.model("User", userSchema);//user will be the collection

const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// _id is automatically added by mongoose
const homeSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
});

homeSchema.pre("findOneAndDelete", async function (next) {
  const homeId = this.getQuery()["_id"];
  const Favourite = require("./favourites");
  await Favourite.deleteOne({ houseId: homeId });
});

module.exports = mongoose.model("Home", homeSchema);

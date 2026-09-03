const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Home",
    unique: true,
  },
});

module.exports = mongoose.model("Favourite", favSchema);

const mongoose = require("mongoose");

const allpetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    pet_type: { type: String, required: true },
    weight: { type: String, required: true },
    no_of_pets: { type: Number, required: true },
    no_of_days: { type: Number, required: true },
    approval_status: { type: String, required: true, default: "Pending" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("all_pet", allpetSchema);

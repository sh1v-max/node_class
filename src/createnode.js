const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
const studentSchema = new mongoose.Schema({
  regno: {
    type: Number,
    required: true,
  },
  class: String,
  address: String,
  Status: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
const Student = new mongoose.model("student", studentSchema);
const createDocument = async () => {
  try {
    const studentdetails = new Student({
      regno: 112212,
      class: "km032",
      address: "jalandhar",
      Status: true,
    });
    const result = await studentdetails.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();

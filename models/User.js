const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [20, "Username must be at most 20 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      trim: true,
      minlength: [6, "Password must be at least 6 characters long"],
      validate: {
        validator: function (value) {
          // Custom validation logic
          return (
            /[A-Z]/.test(value) && // At least one uppercase letter
            /[a-z]/.test(value) && // At least one lowercase letter
            /[0-9]/.test(value) && // At least one digit
            /[!@#$%^&*]/.test(value) // At least one special character
          );
        },
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character from !@#$%^&*",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);

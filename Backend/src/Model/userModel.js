const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "Please enter your name!"],
      },
      email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
      password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"],
        select: false,
      },
      phoneNumber:{
        type: Number,
      },
      addresses:[
        {
          country: {
            type: String,
          },
          city:{
            type: String,
          },
          address1:{
            type: String,
          },
          address2:{
            type: String,
          },
          zipCode:{
            type: Number,
          },
          addressType:{
            type: String,
          },
        }
      ],
      role:{
        type: String,
        default: "user",
      },
      avatar:{
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
     },
     createdAt:{
      type: Date,
      default: Date.now(),
     },
     resetPasswordToken: String,
     resetPasswordTime: Date,
});

const User = model('User', userSchema);

module.exports = userModel;

// const {model, Schema} = require('mongoose');

// const productModel = new Schema({
//   name:{
//     type:String,
//     required :[true,"please provide the Name"],
//   },
//   stock:{
//     type:String,
//     required :[true,"please provide the Details"],
//   },
//   dates:{
//     type:Date,
//     default :Date.now()
//   },
//   ID:{
//     type:String,
//     required :[true,"Please fill the Requirement"]
//   }
// });

// const product = model("product",productModel);
// module.exports = product;

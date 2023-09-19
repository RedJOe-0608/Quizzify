import mongoose from "mongoose";
// import bcrypt from 'bcryptjs'

let exercisesSchema = new mongoose.Schema({
    exerciseNumber: {type: Number, default: 1},
    exerciseScore: {type: Number, default: 0},
    exerciseStatus: {type: String, default: "not passed"},
})

const levelSchema = new mongoose.Schema({
    levelNo:{type: Number,default: 1},
    ex: [exercisesSchema],
    levelStatus: {type: String, default: "not passed"},
    levelScore:{type: Number,default: 0} // this is basically the addition of all the exercises scores.
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true, 
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    javascript:{
        progress: {type: Number, default:0},
        level: [levelSchema],
        overallScore: {type: Number, default:0}, // this is the addition of all the level scores.
    },
    python:{
        progress: {type: Number, default:0},
        level: [levelSchema],
        overallScore: {type: Number, default:0}, // this is the addition of all the level scores.
    },
    react:{
        progress: {type: Number, default:0},
        level: [levelSchema],
        overallScore: {type: Number, default:0}, // this is the addition of all the level scores.
    },
   
},{
    timestamps: true
})

// userSchema.methods.matchPassword =  async function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save',async function(next){
//     if(!this.isModified('password')){
//         next()
//     }

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password,salt)
// })

const User = mongoose.model('User', userSchema);

export default User;
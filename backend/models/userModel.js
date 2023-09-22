import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

let exercisesSchema = new mongoose.Schema({
    exerciseNo: {type: Number, default: 1},
    exerciseScore: {type: Number, default: 0},
    exerciseStatus: {type: String, default: "not passed"},
})

const levelSchema = new mongoose.Schema({
    levelNo:{type: Number,default: 1},
    ex: {type: [exercisesSchema],default: () => ({})},
    levelStatus: {type: String, default: "not passed"},
    levelScore:{type: Number,default: 0}, // this is basically the addition of all the exercises scores.
    isCompleted: {type: Boolean,required: true, default:false}
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
        level: {type: [levelSchema], default: () => ({})},
        overallScore: {type: Number, default:0}, // this is the addition of all the level scores.
    },
    python:{
        progress: {type: Number, default:0},
        level: {type: [levelSchema], default: () => ({})},
        overallScore: {type: Number, default:0}, // this is the addition of all the level scores.
    },
    react:{
        progress: {type: Number, default:0},
        level: {type: [levelSchema], default: () => ({})},
        overallScore: {type: Number, default:0}, // this is the addition of all the level scores.
    },
   
},{
    timestamps: true
})

userSchema.methods.matchPassword =  async function(enteredPassword) {
    //entered password is the plain text password. this.password is the encrypted password in the database.
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model('User', userSchema);

export default User;
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const ServerError = require.Schema;
const Schema = mongoose.Schema
const SchemaTypes = mongoose.SchemaTypes;

const options = { discriminatorKey: 'kind'};

const AccountSchema = new Schema ({
    lastName: {type: String, required: true },
    firstName: {type: String, required: true},
    middleName: String,

    email: {type: String, required: true, unique: true},
    password: String,
    photo: Buffer,
    photoType: String,
    joined: {type: Date, required: true, default: Date.now},
    activated: {type:Boolean, required: true, default: false},
    inactive: {type:Boolean, required: true, default: false},
    accessCode: String,
    locked: {type: Boolean, default: false},
    status: String,
    grade: String,
    remarks: String,

    schedules: [{ format: String, name: String, value: SchemaTypes.Mixed, upload: {type:Date, default: Date.now}}]
}, options);

AccountSchema.pre('save', function(next) {
    const account = this;
    if(account.password && (this.isModified('password') || this.isNew)) {
        bcrypt.hash(account.password, 10, function(err, hash) {
            if(err)
        })
    }
})

}
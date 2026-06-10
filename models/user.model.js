const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        // Basic Information
        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        username: {
            type: String,
            unique: true,
            sparse: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        profileImage: {
            type: String,
            default: ""
        },

        dateOfBirth: {
            type: Date
        },

        gender: {
            type: String,
            enum: ["male", "female", "other"]
        },

        // Roles
        role: {
            type: String,
            enum: ["user", "seller", "admin"],
            default: "user"
        },

        // Account Status
        isEmailVerified: {
            type: Boolean,
            default: true
        },

        isActive: {
            type: Boolean,
            default: true
        },

        isBlocked: {
            type: Boolean,
            default: false
        },

        lastLogin: {
            type: Date
        },

        // Address
        addresses: [
            {
                fullName: String,
                phone: String,
                addressLine1: String,
                addressLine2: String,
                city: String,
                state: String,
                country: String,
                postalCode: String,
                isDefault: {
                    type: Boolean,
                    default: false
                }
            }
        ],

        // Seller Information
        sellerInfo: {
            storeName: String,
            storeLogo: String,
            storeDescription: String,
            gstNumber: String,
            panNumber: String,
            businessEmail: String,
            businessPhone: String,

            bankDetails: {
                accountHolderName: String,
                accountNumber: String,
                ifscCode: String,
                bankName: String
            },

            isSellerVerified: {
                type: Boolean,
                default: false
            },

            sellerRating: {
                type: Number,
                default: 0
            },

            totalSales: {
                type: Number,
                default: 0
            }
        },
        // Audit
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    });

    
const User = mongoose.model("User", userSchema);

module.exports = User;
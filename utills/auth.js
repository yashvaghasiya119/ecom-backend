import User from "../models/user.model.js";

export async function findUserByEmail (email, username, phone) {
    const findUser = await User.findOne({ $or: [{ email }, { username }, { phone }] });
    return findUser;
}
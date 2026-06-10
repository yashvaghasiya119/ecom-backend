import User from "../models/user.model.ts";

export async function findUserByEmail (email: any, username: any, phone: any) {
    const findUser = await User.findOne({ $or: [{ email }, { username }, { phone }] });
    return findUser;
}
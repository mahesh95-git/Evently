"use server";
import { connectDB } from "../database";
import User from "@/models/user.model";
export const createUser = async (user) => {
  try {
    await connectDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateUser = async (user,id) => {
  try {
    await connectDB();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      user
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const deleteUser = async (id) => {
  try {
    await connectDB();
    const deletedUser = await User.findOneAndDelete({ clerkId: id });
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    console.log(error);
    return error;
  }
}
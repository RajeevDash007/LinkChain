"use server"
import { Page } from "@/models/Page";
import mongoose from "mongoose";


export default async function getUsername(formData) {
    const username = formData.get('username');
    mongoose.connect(process.env.MONGODB_URI);
    const existingPageDoc = await Page.findOne({uri:username});
    if (existingPageDoc) {
      return false;
    } else {
        const newPage = await Page.create({ uri: username });
        return JSON.parse(JSON.stringify(newPage)); 
    }
}

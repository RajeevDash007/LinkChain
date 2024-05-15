'use server'
import { Page } from "@/models/Page"
import mongoose from 'mongoose'

export default async function getUsername(formData) {
    const username = formData.get('username')
    mongoose.connect(process.env.MONGODB_URI)
    const PageDoc =  await Page.create({uri: username})
    return JSON.parse(JSON.stringify(PageDoc));
}


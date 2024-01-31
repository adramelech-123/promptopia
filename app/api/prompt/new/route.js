import { connectDB } from "@utils/database"

export const POST = async (req) => {
    const {userId, prompt, tag} = await req.json()

    try {
        await connectDB()
    } catch (error) {
        console.log(error);
    }
}
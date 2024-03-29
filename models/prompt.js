import {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: { 
        type: String,
        required: [true, 'Prompt is required']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required']
    }
})

// Create a new model instance called Prompt if it doesn't already exist
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt
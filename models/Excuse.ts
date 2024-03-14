import { Schema, model, models } from "mongoose";

// Generates an excuse schema for the db
const ExcuseSchema = new Schema({
http_code: {
    type: String, 
    required: [true, "Le code http est obligatoire"],
},
tag: {
    type: String,
    required: [true, "Le tag est obligatoire"],
},
message: {
    type: String,
    required: [true, "Le message est obligatoire"],
}
})

const Excuse = models.Excuse || model("Excuse", ExcuseSchema);

export default Excuse;
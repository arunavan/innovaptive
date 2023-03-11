const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        id: {
            type: Schema.Types.Number,
            required: false,
        },
        title: {
            type: Schema.Types.String,
            required: true,
        },
        description: {
            type: Schema.Types.String,
        },
        isCompleted: {
            type: Schema.Types.Boolean,
            required: false,
            default: false,
        },
        isDeleted: {
            type: Schema.Types.Boolean,
            required: false,
            default: false,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = {
    model: mongoose.model("Todo", TodoSchema),
};

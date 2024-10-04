import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Politics",
        "Sports",
        "Technology",
        "Entertainment",
        "Business",
        "Health",
        "Science",
      ],
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    imageUrl: {
      type: String,
    },
    tags: {
      type: [String], // Array of tags for news article
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const News = mongoose.models.users || mongoose.model("news", newsSchema);
export default News;

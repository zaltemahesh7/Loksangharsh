import connect from "@/dbConfig/dbConfig";
import News from "@/models/news.model";
// import { verifyToken } from "@/middleware/auth.middleware";

export default async function handler(req, res) {
  await connect(); // Connect to the database

  if (req.method === "POST") {
    const { title, content, category, tags, imageUrl } = req.body;

    try {
      // Create a new news article
      const news = new News({
        title,
        content,
        author: req.user.id || '',
        category,
        tags,
        imageUrl,
      });

      await news.save();
      res.status(201).json({ message: "News created successfully", news });
    } catch (error) {
      res.status(500).json({ message: "Error creating news", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

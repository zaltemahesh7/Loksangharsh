import connect from "@/dbConfig/dbConfig";
import News from "../../../models/News";

export default async function handler(req, res) {
  await connect();

  if (req.method === "GET") {
    try {
      const news = await News.find({ published: true }).populate(
        "author",
        "name email"
      ); // Populate author details
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ message: "Error fetching news", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

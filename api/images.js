import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.VITE_IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.VITE_IMAGEKIT_URL_ENDPOINT,
});

export default async function handler(req, res) {
  try {
    const files = await imagekit.listFiles({
      path: "/blueberry",
      limit: 50,
    });

    const formattedFiles = files.map((file) => ({
      id: file.fileId,
      title: file.name.split(".")[0].replace(/-/g, " "),
      category: "Archive",
      image: file.url,
      span: "",
    }));

    res.status(200).json(formattedFiles);
  } catch (error) {
    console.error("ImageKit Error:", error);
    res.status(500).json({ error: "Failed to fetch images", details: error.message });
  }
}

const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.VITE_IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.VITE_IMAGEKIT_URL_ENDPOINT,
});

module.exports = async (req, res) => {
  try {
    const files = await imagekit.listFiles({
      path: "/blueberry", // The folder name you created in ImageKit
      limit: 50,
    });

    // Map ImageKit response to our gallery format
    const formattedFiles = files.map((file) => ({
      id: file.fileId,
      title: file.name.split(".")[0].replace(/-/g, " "), // Use filename as title
      category: "Archive",
      image: file.url,
      span: "", // Default span
    }));

    res.status(200).json(formattedFiles);
  } catch (error) {
    console.error("ImageKit Error:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
};

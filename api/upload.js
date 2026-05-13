import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.VITE_IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.VITE_IMAGEKIT_URL_ENDPOINT,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, fileName } = req.body;

    if (!file || !fileName) {
      return res.status(400).json({ error: 'Missing file data' });
    }

    const uploadResponse = await imagekit.upload({
      file: file,
      fileName: fileName,
      folder: "/blueberry",
    });

    res.status(200).json(uploadResponse);
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Failed to upload to ImageKit", details: error.message });
  }
}

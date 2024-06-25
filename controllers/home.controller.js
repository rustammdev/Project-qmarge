import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const homeController = (req, res) => {
  try {
    res
      .status(201)
      .sendFile(path.join(__dirname, "..", "public", "index.html"));
  } catch (error) {
    res.status(400).send(error);
  }
};

export default homeController;

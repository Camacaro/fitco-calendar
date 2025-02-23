
export const serverHandler = () => ({
  notFound(req, res) {
    res.status(404).json({ message: "Not found" });
  },
  err(err, req, res) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });

  }
})

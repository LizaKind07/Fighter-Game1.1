const responseMiddleware = (req, res, next) => {
  const { error, data } = res;

  if (error) {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";

    if (status === 400 || status === 404) {
      return res.status(status).json({ error: true, message });
    }

    return res.status(status).json({ error: true, message: "Server Error" });
  }

  if (!data) {
    return res.status(404).json({ error: true, message: "Data not found" });
  }

  return res.status(200).json(data);
};

export { responseMiddleware };

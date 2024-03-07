function status(request, response) {
  response.status(200).json({ message: "You are a good studant!!!" });
}

export default status;

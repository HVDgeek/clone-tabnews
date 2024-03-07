test("GET /api/v1/status should return status 200", async () => {
  const response = await fetch(
    "https://vigilant-waffle-w9vwr5qp975f9r54-3000.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
});

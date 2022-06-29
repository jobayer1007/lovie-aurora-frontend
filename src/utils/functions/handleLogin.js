export const handleLogin = async (email, password) => {
  const res = await fetch("http://localhost:8000/api/login", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  return data;
};

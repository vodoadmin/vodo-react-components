export const setCookie = (name: any, value: any, days?: any) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
async function logIn(username: string, password: string) {
  const url = "https://accounts.vodoerp.com/api/login";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username,
        password: password,
      }),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    console.log(data);

    setCookie("token", data.access_token);
    setCookie("user_id", data.user_id);

    if (data.have_business) {
      setCookie("secure_key", data.business.business_data.secure_key);
      setCookie(
        "business_modules_route",
        JSON.stringify(data.business.business_modules_route)
      );
    }
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}
const handleLogin = (username: string, password: string) => {
  logIn(username, password);
};
export default handleLogin;

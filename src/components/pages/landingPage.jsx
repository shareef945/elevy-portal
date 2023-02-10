import { useState } from "react";
import env from "react-dotenv";

export default function LandingPage() {
  const [data, setData] = useState(null);

  const callApi = async () => {
    try {
      const response = await fetch(env.LOGIN_ROOT);
      if (response.status === 200) {
        setData(await response.json());
      } else if (response.status === 401) {
        const {
          error,
          data: { URL },
        } = await response.json();
        if (!error && URL) window.location.href = URL;
        else console.log("Invalid redirect URL");
      } else {
        console.log("handle other response status codes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  callApi();
  console.log(data);
}

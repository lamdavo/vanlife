import { useLoaderData, Form } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  console.log("action");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  return null;
}

const Login = () => {
  const message = useLoaderData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Log in</button>
      </Form>
    </div>
  );
};
export default Login;

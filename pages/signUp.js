import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !password2
    ) {
      alert("Please fill the registration form");
      return;
    }

    if(password != password2){
      alert('Passwords must match')
    }

    const form_data = {
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      password,
      password2,
    };

    // Submit form to backend
    const res = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form_data),
    });

    const data = await res.json();
    console.log(res)
    if (res.ok) {
      alert("Success");
    }

    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <Layout title="Real Estate | Create an account">
      <section className="h-screen flex justify-center items-center">
        <div className="mx-4 xl:w-[1280px] ">
          {/* <h1 className="font-bold text-2xl mb-4 xl:text-5xl">
            Create your free account
          </h1> */}
          <div className="sm:grid lg:grid-cols-2 shadow-lg xl:p-8 p-4 pb-8">
            <div className="hidden xl:block">
              <Image
                src="/sign-image.jpg"
                alt="signup-image"
                layout="responsive"
                height={356}
                width={356}
                objectFit="cover"
              />
            </div>
            <div className="xl:ml-8">
              <form className="flex-col gap-2" onSubmit={handleSubmit}>
                <h1 className="font-bold text-2xl mb-4 xl:text-5xl">
                  Create your free account
                </h1>

                <div className="mb-8 sm:flex flex-col gap-6">
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="password"
                    placeholder="Set a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="password"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="submit"
                    className="text-white bg-[#150F0A] px-8 py-2 text-lg"
                  >
                    Create Account
                  </button>
                  <p className="text-sm text-center">
                    Already have an account?{" "}
                    <Link href="/signIn"> Sign In </Link>
                    instead
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

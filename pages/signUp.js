import React from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function SignUp() {
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
              <form className="flex-col gap-2" action="">
                <h1 className="font-bold text-2xl mb-4 xl:text-5xl">
                  Create your free account
                </h1>

                <div className="mb-8 sm:flex flex-col gap-6">
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Set a password"
                  />
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="text-white bg-[#150F0A] px-8 py-2 text-lg">
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

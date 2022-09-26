import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Menu({ user, logoutUser }) {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "-100vh", opacity: 0 },
  };

  return (
    <div className="xl:hidden">
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 top-20 bg-white"
      >
        <div className="py-8 px-4 flex flex-col h-full justify-between">
          <div className="">
            <div className="mb-8 flex flex-row justify-between items-center ">
              <h1 className=" text-2xl font-bold">Menu</h1>

              {user ? (
                <h1 className="text-xl font-semibold">Hi, {user.first_name}</h1>
              ) : null}
            </div>
            <div className="space-y-4">
              <Link href="/">
                <h2 className="text-3xl">Home</h2>
              </Link>
              <Link href="/listings">
                <h2 className="text-3xl">Listings</h2>
              </Link>
              {user && (
                <Link href="dashboard">
                  <h2 className="text-3xl">Dashboard</h2>
                </Link>
              )}
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            {user ? null : (
              <Link href="/signUp">
                <button className=" px-2 py-4">SignUp</button>
              </Link>
            )}
            {user ? (
              <button
                onClick={logoutUser}
                className="text-white px-4 py-2 bg-[#150F0A]"
              >
                Log Out
              </button>
            ) : (
              <Link href="/signIn">
                <button className="text-white px-4 py-2 bg-[#150F0A]">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

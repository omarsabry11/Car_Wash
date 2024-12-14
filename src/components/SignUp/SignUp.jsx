import React, { useEffect, useState } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import registerImage from "../../assets/images/register.png";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
  
    // Create a new user object
    let user = {
      name,
      email,
      password,
      id: Date.now(),
    };
  
    // Update the users state
    setUsers((prev) => {
      const updatedUsers = [...prev, user];

      localStorage.setItem("Users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  
    setName("");
    setEmail("");
    setPassword("");
  }
  

  return (
    <>
      <section className="bg-hero min-h-lvh relative text-white ps-[3rem] max-lg:ps-0">
        <div className="z-3 relative w-[8rem] py-7 max-lg:ps-[3rem]">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        <div className="flex justify-center ">
          <div className="z-3 relative w-1/2 max-lg:w-[90%]">
            <div className="mb-5 text-center">
              <h1 className="text-[5rem] font-heading">Sign Up</h1>
              <p className="text-[1.6rem]">Enter your credentials below.</p>
            </div>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Name
                </label>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your Name..."
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your email..."
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your password..."
                  type="password"
                  required
                />
              </div>
              <button className="bg-main py-3 rounded-md mt-2">Sign up</button>
            </form>
            <div>
              <p className="mt-3 text-[1.15rem]">
                Already have an account?{" "}
                <Link to="/signin" className="text-main font-semibold ms-2">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

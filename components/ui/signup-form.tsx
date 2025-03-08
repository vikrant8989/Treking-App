"use client";
import type React from "react";
import { Button } from "./button";
import { Icons } from "./icons";

export function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full max-w-[700px] mx-auto border border-gray-200 rounded-lg p-6 bg-white">
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl font-semibold">Sign up for MadClub</h2>
        <p className="text-gray-500 text-sm">
          Register to explore the user-related dashboard
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Button size="sm" variant="outline" type="button" className="w-full">
          <Icons.google className="mr-2 size-4" />
          Google
          <BottomGradient />
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-400">OR</span>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="w-full p-2 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="Tyler"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            className="w-full p-2 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="Durden"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="emailSignup" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="emailSignup"
            type="email"
            required
            className="w-full p-2 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="projectmayhem@fc.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="passwordSignup" className="text-sm font-medium">
            Password
          </label>
          <input
            id="passwordSignup"
            type="password"
            required
            className="w-full p-2 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="••••••••"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            required
            className="w-full p-2 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="••••••••"
          />
        </div>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
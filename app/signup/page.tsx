"use client"

import Navbar from "../components/Navbar"
import { motion } from "framer-motion";

const Signup = () => {
    return <>
        <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
            <Navbar />
            <header className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
                    <h3 className='text-4xl font-black md:text-6xl'>
                        Sign up
                    </h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
                    <form className="w-full max-w-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white-700">First name</label>
                            <input type="name" id="fname" autoComplete="first-name" required className="mt-1 p-2 w-full rounded border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white-700">Last name</label>
                            <input type="name" id="lname" autoComplete="last-name" required className="mt-1 p-2 w-full rounded border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white-700">Email address</label>
                            <input type="email" id="email" name="email" autoComplete="email" required className="mt-1 p-2 w-full rounded border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-white-700">Password</label>
                            <input type="password" id="password" name="password" autoComplete="current-password" required className="mt-1 p-2 w-full rounded border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-white-700">Confirm Password</label>
                            <input type="password" id="password" name="password" autoComplete="current-password" required className="mt-1 p-2 w-full rounded border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">Sign in</button>
                    </form>
                </motion.div>
            </header>
        </main>
    </>
}

export default Signup
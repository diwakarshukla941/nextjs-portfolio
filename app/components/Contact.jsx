import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] bg-center'>
            <h4 className="text-center mb-2 text-lg font-ovo mt-20 sm:mt-0">
                connect with me
            </h4>
            <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
            <p className="text-center mx-auto mb-12 mt-5 max-w-2xl font-ovo">
                I'd love to hear from you! If you have any questions,comment or feedback please use the form.
            </p>

            <form className="max-w-2xl mx-auto mt-10 space-y-6">
                {/* Input fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white focus:border-black"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white focus:border-black"
                    />
                </div>

                {/* Textarea */}
                <textarea
                    rows="6"
                    placeholder="Enter your message"
                    required
                    className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white focus:border-black"
                ></textarea>

                {/* Submit button (centered with icon) */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-3xl hover:bg-black transition"
                    >
                        Submit Now
                        <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
                    </button>
                </div>
            </form>


        </div>
    )
}

export default Contact

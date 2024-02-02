import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col px-40 justify-between items-center pt-[13vh] mb-[10vh]"
    >
      <h2 className="text-4xl font-bold">Contact</h2>
      <div className="w-full flex justify-center items-center mt-5">
        <form className="flex flex-col items-center justify-center w-3/4 mt-10 shadow-md border rounded-md px-6 py-10">
					<div className="w-full flex flex-col my-3">
						<label htmlFor="name" className="text-base font-medium text-opacity-90">Name</label>
						<input type="text" name="name" placeholder="name" className="border rounded-md px-3 h-12 mt-1"/>
					</div>
					<div className="w-full flex flex-col my-3">
						<label htmlFor="email" className="text-base font-medium text-opacity-90">Email</label>
						<input type="email" name="email" placeholder="name@gmail.com" className="border rounded-md px-3 h-12 mt-1"/>
					</div>
					<div className="w-full flex flex-col my-3">
						<label htmlFor="message" className="text-base font-medium text-opacity-90">Message</label>
						<textarea name="message" rows="8" placeholder="enter a message.." className="border rounded-md px-3 mt-1 py-2"/>
					</div>
					<button className="flex justify-center items-center bg-black opacity-95 h-12 w-36 mt-3 rounded-md text-white text-opacity-90 font-medium hover:opacity-80">Send Message</button>
				</form>
      </div>
    </section>
  );
}

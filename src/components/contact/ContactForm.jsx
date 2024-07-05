import React, { useState } from "react";
function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6eba28e3-7ece-44d3-8d0e-9e4d7478535d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="px-4 mx-auto md:px-16">
      <form
        className="grid w-full max-w-lg gap-4 p-6 mx-auto text-center border-2 bg-slate-200 rounded-xl border-slate-800"
        onSubmit={onSubmit}
      >
        <label className="text-xl font-bold font-poppins" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Name"
          className="w-full h-10 p-2 rounded"
          type="text"
          name="name"
          required
        />
        <label className="text-xl font-bold font-poppins" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Email"
          className="w-full h-10 p-2 rounded"
          type="email"
          name="email"
          required
        />
        <label className="text-xl font-bold font-poppins" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Message"
          className="w-full h-20 p-2 rounded"
          name="message"
          required
        ></textarea>

        <button
          className="p-2 text-xl text-white bg-orange-500 rounded hover:bg-orange-700"
          type="submit"
        >
          Submit Form
        </button>
      </form>
      <span className="block mt-4 text-center">{result}</span>
    </div>
  );
}

export default ContactForm;

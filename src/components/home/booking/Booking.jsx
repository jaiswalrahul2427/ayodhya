import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faFileLines } from "@fortawesome/free-solid-svg-icons";

function Booking() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6eba28e3-7ece-44d3-8d0e-9e4d7478535d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div className="flex flex-wrap justify-between px-2 mt-12 sm:px-16">
      <div className="content-center w-full lg:w-1/2" data-aos="fade-right">
        <h1 className="pb-2 text-3xl font-bold text-orange-600 font-ubuntu">About Us</h1>
        <h3 className="text-2xl font-bold text-blue-950 font-poppins">Find Your Dream Vacation With Ayodhya Darshanam</h3>
        <p className="pt-2 mx-auto text-xl font-roboto max-w-prose">
          Ayodhya Darshanam is one of the best names when it comes to Ayodhya Tour and travels Packages. Ayodhya Darshanam knows the client’s needs, feeling and devotion towards Ayodhya and provides the most extensive selection of customizable Ayodhya Darshan packages. Don’t wait, book Ayodhya tour package now today! Select your tour package as per the days you want to spend as we provide a wide range of sightseeing, adventure, thrill, happiness, and most important satisfaction and devotion towards Ayodhya.
        </p>
        <div className="pt-10 space-y-4">
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon className="p-2 mt-2 text-3xl text-white bg-orange-600 rounded hover:bg-blue-950" icon={faHandshake} />
            <div>
              <h3 className="text-xl font-bold font-poppins text-blue-950">Get Best Deals</h3>
              <p className="text-xl font-roboto">Get the best deals on Ayodhya tour and travel packages and satisfying packages and deals with us which will be very helpful to explore Ayodhya Darshan.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FontAwesomeIcon className="p-3 mt-2 text-3xl text-white bg-orange-600 rounded hover:bg-blue-950" icon={faFileLines} />
            <div>
              <h3 className="text-xl font-bold font-poppins text-blue-950">Instant Confirmation</h3>
              <p className="text-xl font-roboto">Instant bookings of Ayodhya Mandir Darshan are confirmed automatically, which means you no longer have to accept manually or worry about expiring booking requests.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-first w-full mt-8 lg:w-1/2 lg:mt-0 lg:order-none" data-aos="fade-left">
        <form onSubmit={onSubmit} className="flex flex-col p-5 space-y-1 rounded" style={{ backgroundImage: 'radial-gradient(at center center, #f79301 25%, #f2295b 75%)' }}>
          <label htmlFor="name" className="text-xl text-slate-800 font-roboto">Name</label>
          <input className="p-2 text-xl rounded border-slate-400" type="text" name="name" required />

          <label className="text-xl text-slate-800 font-roboto" htmlFor="email">Email</label>
          <input className="p-2 text-xl rounded border-slate-400" type="email" name="email" required />

          <label className="text-xl text-slate-800 font-roboto" htmlFor="phone">Phone Number</label>
          <input className="p-2 text-xl rounded border-slate-400" type="number" name="phone" required />

          <label className="text-xl text-slate-800 font-roboto" htmlFor="date">Select Date</label>
          <input className="p-2 text-xl rounded border-slate-400" type="date" name="date" required />

          <label className="text-xl text-slate-800 font-roboto" htmlFor="number">Number of Guests</label>
          <input className="p-2 text-xl rounded border-slate-400" type="number" name="number" required />

          <label className="text-xl text-slate-800 font-roboto" htmlFor="tour">Select Tour</label>
          <select className="p-2 text-xl rounded border-slate-400" name="tour" required>
            <option value="day-1">Day 1</option>
            <option value="day-2">Day 2</option>
            <option value="day-3">Day 3</option>
          </select>

          <label className="text-xl text-slate-800 font-roboto" htmlFor="location">Pickup Location</label>
          <select className="p-2 text-xl rounded border-slate-400" name="location" required>
            <option value="railway_station">Railway Station</option>
            <option value="bus_station">Bus Station</option>
            <option value="airport">Airport</option>
          </select>

          <button type="submit" className="p-2 text-xl text-white bg-orange-500 rounded mt-7 hover:bg-orange-700">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Booking;

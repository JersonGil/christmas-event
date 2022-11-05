import React from "react";
import PropTypes from "prop-types";

// ** COMPONENTS
import { Input, Map } from "../components";

const contacts = (props) => {
  return (
    <section className="flex flex-col gap-14 sm:flex-row items-start w-full h-screen px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-64 pt-24 bg-white">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mt-8">Contact us</h1>
        <h3 className="mt-2 text-lg">
          Our friendly team will contact you for shipments
        </h3>
        <form
          className="my-7 flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col w-full sm:flex-row gap-4 items-center justify-center mb-4">
            <Input label="First Name" type="text" placeholder="First Name" />
            <Input label="Last Name" type="text" placeholder="Last Name" />
          </div>
          <Input label="Email" type="email" placeholder="youeremail@mail.com" />
          <div className="flex flex-col mt-4">
            <label className="text-base">Messages</label>
            <textarea
              className="border-slate-300 w-auto border-2 rounded-lg p-4 text-xs text-slate-500"
              rows="8"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white h-10 w-full p-2 mt-5 rounded-lg hover:bg-slate-800"
          >
            Send Message
          </button>
        </form>
      </div>
      <Map />
    </section>
  );
};

contacts.propTypes = {};

export default contacts;

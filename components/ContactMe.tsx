import React, { Suspense } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { getPageStaticInfo } from "next/dist/build/analysis/get-page-static-info";
import { SubmitHandler, useForm } from "react-hook-form";
import HeaderNav from "./HeaderNav";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:todd.lomas@hotmail.co.uk?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HeaderNav />
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-between py-[5rem] sm:justify-evenly mx-auto items-center">
        <h3 className="absolute top-[1rem] sm:top-24 uppercase tracking-[20px] text-gray-500 text-sm sm:text-2xl">
          Contact
        </h3>

        <div className="flex flex-col pt-5 space-y-5 sm:space-y-10">
          <h4 className="sm:text-4xl font-semibold text-center">
            Let&apos;s talk.
          </h4>
          <div className="space-y-5 sm:space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#ea5c1f] h-7 w-7 animate-pulse" />
              <p className="text-l sm:text-2xl">+447876820056</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#ea5c1f] h-7 w-7 animate-pulse" />
              <p className="text-l sm:text-2xl">todd.lomas@hotmail.co.uk</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#ea5c1f] h-7 w-7 animate-pulse" />
              <p className="text-l sm:text-2xl">London, UK</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="inline-block sm:flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="inline-block sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="Email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#ea5c1f] py-5 px-10 rounded-md text-black font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Suspense>
  );
}

export default ContactMe;

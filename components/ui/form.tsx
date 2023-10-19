/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from "react";
import fetch from "isomorphic-unfetch";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

const Forms: React.FC = () => {
  const [, setValues] = React.useState<string>("");
  const recaptchaRef = React.createRef<HTMLSelectElement>();
  const [wasSubmit, setWasSubmitted] = React.useState<boolean>(false);
  const [status] = React.useState<number>();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("form data :", { data });
    event.currentTarget.reset();
    if (wasSubmit === true) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/emails`, {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
    }

    if (status !== 200 && wasSubmit !== true) {
      return toast(() => (
        <span className="capitalize text-sbcs-dark">
          Your message failed to send please fill the captcha
        </span>
      ));
    }

    return router.push("/thankyou-page");

    // toast(() => (
    //   <span className="capitalize text-lm-dark">
    //     hello <strong>{`${fieldsValue.name}`}</strong> Your message was sent
    //     successfully
    //   </span>
    // ));
  };

  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    recaptchaRef.current;
    setWasSubmitted(true);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        className="mb-8 mx-0 md:mx-4 text-sbcs-light focus:text-sbcs-light w-full md:w-full p-4 
        bg-sbcs-green focus:bg-sbcs-green/30 border-b-2 focus:outline-white"
        type="text"
        placeholder="Name"
        name="Name"
        onChange={(event) => setValues(event.currentTarget.value)}
        required
      />
      <input
        className="mb-8 mx-0 md:mx-4 text-sbcs-light focus:text-sbcs-light w-full md:w-full p-4 
        bg-sbcs-green focus:bg-sbcs-green/30 border-b-2 focus:outline-white"
        type="text"
        placeholder="Company"
        name="Company"
        onChange={(event) => setValues(event.currentTarget.value)}
        required
      />
      <input
        className="mb-8 mx-0 md:mx-4 text-sbcs-light focus:text-sbcs-light w-full md:w-full p-4 
        bg-sbcs-green focus:bg-sbcs-green/30 border-b-2 focus:outline-white"
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        required
        name="Email"
        onChange={(event) => setValues(event.currentTarget.value)}
      />
      <input
        className="mb-8 mx-0 md:mx-4 text-sbcs-light focus:text-sbcs-light w-full md:w-full p-4 
        bg-sbcs-green focus:bg-sbcs-green/30 border-b-2 focus:outline-white"
        type="text"
        placeholder="Phone"
        required
        name="Phone"
        onChange={(event) => setValues(event.currentTarget.value)}
      />
      <textarea
        className="mb-8 mx-0 md:mx-4 text-sbcs-light focus:text-sbcs-light w-full h-auto md:h-36 md:w-full p-4 
        bg-sbcs-green focus:bg-sbcs-green/30 border-b-2 focus:outline-white"
        placeholder="Message"
        name="Message"
        required
        onChange={(event) => setValues(event.currentTarget.value)}
      />

      <div className="w-2/3 md:w-full mb-8 mx-0 md:mx-4">
        <ReCAPTCHA
          ref={() => recaptchaRef}
          size="normal"
          sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA}`}
          onChange={onReCAPTCHAChange}
          className=""
        />
      </div>

      <input
        className="mb-8 mx-0 md:mx-4 text-sbcs-light hover:text-sbcs-green focus:text-sbcs-light w-full md:w-full p-4 
        bg-sbcs-green hover:bg-sbcs-light focus:bg-sbcs-green/30 outline focus:outline-white "
        type="submit"
        name="sent"
      />
    </form>
  );
};

export default Forms;

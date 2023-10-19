/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import * as React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

export const FormHomepage: React.FC = () => {
  const [, setValues] = React.useState<string>("");
  const [wasSubmit, setWasSubmitted] = React.useState<boolean>(false);
  const recaptchaRef = React.createRef<HTMLSelectElement | any>();
  const [status] = React.useState<number>();
  const router = useRouter();
  // console.log(route);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("form data :", { data });
    event.currentTarget.reset();
    if (wasSubmit === true) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/bussiness-purposes`,
        {
          method: "POST",
          body: JSON.stringify({ data }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
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
  };

  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    recaptchaRef.current;
    setWasSubmitted(true);
  };
  return (
    <>
      <div className="mt-40 w-full h-full flex flex-col">
        <div className="relative w-full h-full flex-initial">
          <div className="aspect-w-3 md:aspect-w-16 aspect-h-2 md:aspect-h-4">
            <Image
              className="object-cover"
              src={`/assets/images/homepage/request-a-call-back-image-edited.webp`}
              layout="fill"
              alt="ecom-1"
              quality={85}
            />
          </div>

          <h3 className="text-center text-xl md:text-2xl lg:text-5xl font-semibold capitalize text-sbcs-light absolute inset-0 translate-y-1/2 bottom-20">
            We Are Here to Help Your Business
          </h3>
        </div>

        <div className="flex-none md:flex gap-5 bg-sbcs-green p-10 -mt-24 mb-20 mx-4 md:mx-[122px] w-sm max-w-[892px] z-10 space-y-4 md:space-y-0">
          {/* text */}
          <div className="flex-initial space-y-8 w-full max-w-[447px]">
            <h2 className="text-sbcs-light">Request a Call Back</h2>
            <div className="h-1 w-28 bg-sbcs-light"></div>
            <p className="text-sbcs-light whitespace-pre-line break-words">
              We’re here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </div>

          <div className="flex-initial w-full mx-auto md:mx-0 max-w-[345px]">
            {/* form */}
            <form className="" onSubmit={handleSubmit}>
              <input
                className="mb-8 mx-4 md:mx-0 text-sbcs-light focus:text-sbcs-light w-full p-4 
              bg-sbcs-green focus:bg-sbcs-green/30 outline focus:outline-white"
                type="text"
                placeholder="Your Name"
                required
                name="Name"
                onChange={(event) => setValues(event.currentTarget.value)}
              />
              <input
                className="mb-8 mx-4 md:mx-0 text-sbcs-light focus:text-sbcs-light w-full p-4 
              bg-sbcs-green focus:bg-sbcs-green/30 outline focus:outline-white"
                type="email"
                placeholder="Your Email"
                autoComplete="email"
                name="Email"
                onChange={(event) => setValues(event.currentTarget.value)}
                required
              />
              <input
                className="mb-8 mx-4 md:mx-0 text-sbcs-light focus:text-sbcs-light w-full p-4 
              bg-sbcs-green focus:bg-sbcs-green/30 outline focus:outline-white"
                type="text"
                placeholder="Your Phone Number"
                required
                name="Phone"
                onChange={(event) => setValues(event.currentTarget.value)}
              />

              <div className="w-full mb-8 mx-4 md:mx-0">
                <ReCAPTCHA
                  ref={() => recaptchaRef}
                  size="normal"
                  sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA}`}
                  onChange={onReCAPTCHAChange}
                  className="min-w-full"
                />
              </div>

              <input
                className="mb-8 mx-4 md:mx-0 text-sbcs-light focus:text-sbcs-light w-full p-4 
              bg-sbcs-green focus:bg-sbcs-light/30 outline focus:outline-white"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

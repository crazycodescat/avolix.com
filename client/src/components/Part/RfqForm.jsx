import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import RfqFormInput from "./RfqFormInput";
import { string } from "prop-types";
import useRFQ from "../../hooks/useRFQ";
import ReCAPTCHA from "react-google-recaptcha";
import BouncingCircles from "../BouncingCircles";

const RfqForm = () => {
  const { sendRFQ } = useRFQ();
  const captchaRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [onEmailSuccess, setOnEmailSuccess] = useState(null);
  const [RfqLoading, setRfqLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    partNumber: "",
    manufacturer: "",
    quantity: "",
    speacialInstructions: "",
    token: "",
  });
  function rfqFormToggler() {
    setOpen((prev) => !prev);
  }

  const handelChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    if (!token) {
      setError("reCaptcha field is required");
      return;
    }
    const isAllField =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.manufacturer &&
      formData.partNumber &&
      formData.quantity &&
      formData.speacialInstructions &&
      token;

    if (isAllField) {
      setOnEmailSuccess(null);
      setRfqLoading(true);
      formData.token = token;
      const { data, status } = await sendRFQ(formData);
      setRfqLoading(false);
      if (status === 200) {
        setOnEmailSuccess(data);
      }
    }
  };
  const handleOnChange = (value) => {
    setError(null);
  };

  useEffect(() => {
    console.log("hello");
    setOnEmailSuccess(null);
    setError(null);
  }, []);

  return (
    <div className="bg-white">
      <div
        className="flex justify-between items-center border border-solid border-red-400 p-2 bg-red-100 cursor-pointer"
        onClick={rfqFormToggler}
      >
        <h1 className="text-base font-semibold">Request Quotation</h1>
        <div className="p-1 rounded-full border border-solid border-red-400 bg-page-bg">
          <FaChevronDown
            className={
              open ? `rotate-180 duration-300` : `rotate-0 duration-300`
            }
            fontSize={12}
          />
        </div>
      </div>

      {/* RFQ Form */}
      {open && (
        <div className="px-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 mt-4">
              <div>
                <h1 className="text-sm font-semibold ">PERSONAL INFORMATION</h1>
              </div>
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                <RfqFormInput
                  name="firstName"
                  placeholder="First Name"
                  type="string"
                  required="required"
                  id={1}
                  handelChange={handelChange}
                />
                <RfqFormInput
                  name="lastName"
                  placeholder="Last Name"
                  type="string"
                  required="required"
                  id={2}
                  handelChange={handelChange}
                />
                <RfqFormInput
                  name="email"
                  placeholder="Email"
                  type="email"
                  id={3}
                  handelChange={handelChange}
                  required="required"
                />
                <RfqFormInput
                  name="phoneNumber"
                  placeholder="Phone"
                  type="tel"
                  id={4}
                  handelChange={handelChange}
                  required="required"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div>
                <h1 className="text-sm font-semibold ">PRODUCT INFORMATION</h1>
              </div>
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                <RfqFormInput
                  name="partNumber"
                  placeholder="Part Number"
                  type="string"
                  required="required"
                  id={5}
                  handelChange={handelChange}
                />
                <RfqFormInput
                  name="manufacturer"
                  placeholder="Manufacturer"
                  type="string"
                  id={6}
                  required="required"
                  handelChange={handelChange}
                />
                <RfqFormInput
                  name="quantity"
                  placeholder="Qty"
                  type="number"
                  required="required"
                  id={7}
                  handelChange={handelChange}
                />

                {/* ADD BUTTON */}
                {/* <div className="flex justify-center">
                  <button
                    type="button"
                    className="active:bg-red-800 p-2 bg-page-bg border border-solid border-neutral-400 rounded-full group active:border active:border-solid active:border-red-900"
                  >
                    <FaPlus className="text-lg text-green-900 group-active:text-white" />
                  </button>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div>
                <h1 className="text-sm font-semibold ">
                  ADDITIONAL INFORMATION
                </h1>
              </div>
              <div className="">
                <textarea
                  id="description"
                  name="speacialInstructions"
                  rows="5"
                  onChange={handelChange}
                  className="w-full placeholder:text-sm text-neutral-500 p-2 border-[1px] border-solid border-neutral-400 placeholder:tracking-widest focus:outline focus:outline-red-400 focus:border-none"
                  placeholder="Speacial Instructions"
                ></textarea>
              </div>
            </div>

            <ReCAPTCHA
              sitekey={import.meta.env.VITE_SITE_KEY}
              ref={captchaRef}
              size="normal"
              onChange={handleOnChange}
            />
            <p className="text-red-700 text-xs">{error}</p>
            <p className="text-red-700 text-xs">{onEmailSuccess}</p>
            <button
              type="submit"
              className="p-3 text-sm font-semibold text-white bg-red-700 px-8 tracking-[1px]"
            >
              {RfqLoading ? <BouncingCircles /> : "SUBMIT"}
              {/* <BouncingCircles /> */}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RfqForm;

"use client";
import GenericModal from "./GenericModal";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function ConnectionModal({ isOpen, onClose }: Props) {
  // Form Data
  const [accountAddress, setAccountAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  // useState Variables
  const [animate, setAnimate] = useState(false);

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  return (
    <GenericModal
      isOpen={isOpen}
      onClose={closeModal}
      animate={animate}
      className={`w-[90vw] mx-auto md:h-fit md:w-[45rem] text-white py-4 px-5 relative bg-black`}
    >
      <div className="absolute right-5 top-4">
        <button
          onClick={(e) => {
            closeModal(e);
            e.stopPropagation();
          }}
          className="w-8 h-8  grid place-content-center rounded-full bg-outline-grey  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
            />
          </svg>
        </button>
      </div>
      <h1 className="text-[24px] mb-2 font-semibold">Connect Account</h1>
      <form action="">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <h2>Private Key</h2>
            <input
              type="text"
              placeholder="Enter Private Key"
              className="w-full p-2 rounded text-black outline-none focus:border-[#3b81f6] border-[2px]"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <h2>Account Address</h2>
            <input
              type="text"
              placeholder="Enter Account Address"
              className="w-full p-2 rounded text-black outline-none focus:border-[#3b81f6] border-[2px]"
              value={accountAddress}
              onChange={(e) => setAccountAddress(e.target.value)}
            />
          </div>
        </div>

        <button className="w-full mt-7 py-3 bg-[#3b81f6] rounded font-bold flex items-center gap-x-2 justify-center disabled:cursor-not-allowed">
          Connect
        </button>
      </form>
    </GenericModal>
  );
}

export default ConnectionModal;

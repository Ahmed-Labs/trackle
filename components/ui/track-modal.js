import React, { useRef, useState } from "react";
import detectCarrier from "../../utils/logic";

function TrackModal({ onClose, onAdd }) {
  const [detectedCarrier, setDetectedCarrier] = useState("No Carrier Detected");
  const packageName = useRef();
  const inputTrackingNumber = useRef();

  function trackInputHandler(event) {
    const detectedCarrier = detectCarrier(event.target.value);
    detectedCarrier
      ? setDetectedCarrier(detectedCarrier)
      : setDetectedCarrier("No Carrier Detected");
  }

  function submitPackageHandler(event) {
    event.preventDefault();
    const inputPackage = {
      packageName: packageName.current.value,
      trackingNumber: inputTrackingNumber.current.value,
      carrier: detectedCarrier,
    };
    onAdd((prevArray) => [...prevArray, inputPackage]);
    onClose();
  }

  return (
    <div className="p-7 bg-white rounded-lg overflow-hidden dark:bg-slate-900 dark:text-gray-200">
      <div className="w-[400px]">
        <form
          onSubmit={submitPackageHandler}
          className="relative flex flex-col"
        >
          <button
            onClick={onClose}
            class="absolute right-0 top-0 text-gray-600 bg-gray-200 hover:bg-gray-300 outline-none font-medium rounded-lg text-xs px-2 py-2"
          >
            ESC
          </button>
          <div className="pt-14 font-medium text-lg text-center">
            <h1>Track a package</h1>
          </div>
          <div className="mt-5 flex flex-col justify-center">
            <div className="flex flex-col px-10 py-3">
              <label className="text-gray-600 font-medium mb-2 dark:text-gray-400">
                Name
              </label>
              <input
                id="tracking-number"
                class="p-4 w-full text-m text-gray-900 outline-none bg-gray-50 dark:bg-slate-800 rounded"
                placeholder="Enter package name"
                ref={packageName}
                required
              />
            </div>
            <div className="flex flex-col px-10 py-3">
              <label className="text-gray-600 font-medium mb-2 dark:text-gray-400">
                Tracking Number
              </label>
              <input
                id="tracking-number"
                class="p-4 w-full text-m text-gray-900 outline-none bg-gray-50 dark:bg-slate-800 rounded"
                placeholder="Enter a tracking number"
                required
                ref={inputTrackingNumber}
                onChange={trackInputHandler}
              />
            </div>
            <div className="flex flex-col px-10 py-3">
              <label className="text-gray-600 font-medium mb-2 dark:text-gray-400">
                Shipping Carrier (Auto-detect)
              </label>
              <input
                id="detected-carrier"
                class="p-4 w-full text-m text-gray-900 outline-none bg-gray-50 dark:bg-slate-800 rounded"
                placeholder={detectedCarrier}
                disabled
              />
            </div>

            <div className="text-center py-10">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Track
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrackModal;

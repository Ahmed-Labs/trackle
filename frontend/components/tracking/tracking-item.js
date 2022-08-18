import { useEffect, useState } from "react";
import ProgressBar from "../ui/progress-bar";
import { detectCarrier } from "../../backend/lib/carriers";

function TrackingItem(props) {
  const { item, index } = props;
  // const [ isLoading, setIsLoading] = useState(true);

  const carriers = ["Canada Post", "DHL", "UPS", "FedEx"];
  const status = ["In Transit"];
  const trackingNumber = "302637327299";

  // useEffect(() => {
  //   setIsLoading(true)
  //   const carrier = detectCarrier(trackingNumber)
  //   const shipmentData = '';
  // }, [])

  return (
    <div className="col-span-1">
      <div className="flex flex-col rounded border border-gray-300 p-6 hover:border-gray-400 transition-alldelay-200 cursor-pointer">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="font font-medium mb-2">Label</p>
            <p className="ml-auto">{Math.floor(Math.random() * 10) + 1}d</p>
          </div>
          <p>{trackingNumber}</p>
          <p className="text-gray-600 mb-2">
            {carriers[Math.floor(Math.random() * carriers.length)]}
          </p>
        </div>
        <p className="">{status[0]}</p>

        <div className="flex flex-row items-center">
          <div>
            <ProgressBar progress="55" />
          </div>
          <div className="px-3 ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingItem;

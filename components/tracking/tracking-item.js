import { useEffect, useState } from "react";
import ProgressBar from "../ui/progress-bar";
import Modal from "../ui/modal";
import PackageInfoModal from "../ui/package-info-modal";

function TrackingItem(props) {
  const { item, keyId } = props;
  const trackingNumber = item.trackingNumber;
  const [packageData, setPackageData] = useState({ ...item });
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchData(tr) {
    setIsLoading(true);
    const data = await fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({ trackingNumber: tr }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    console.log(packageData);
    console.log(json);
    setPackageData({ ...packageData, ...json });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData(trackingNumber).catch(console.error);
  }, []);

  return (
    <>
      <div className="col-span-1 mr-2">
        <div className="flex flex-col rounded border border-gray-300 dark:border-gray-600 dark:hover:border-gray-400 p-6 hover:border-gray-400 transition-alldelay-200 cursor-pointer">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font font-medium mb-2 dark:text-gray-300">
                {item.packageName}
              </p>
              {/* <p className="ml-auto">{Math.floor(Math.random() * 10) + 1}d</p> */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-auto px-3 py-1 rounded text-gray-700 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
              >
                Details
              </button>
            </div>
            <p className="dark:text-gray-400">{trackingNumber}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {item.carrier}
            </p>
          </div>
          <p className="dark:text-gray-300">
            {isLoading ? "Loading..." : packageData.status}
          </p>

          <div className="flex flex-row items-center">
            <div>
              <ProgressBar
                status={isLoading ? "Loading" : packageData.status}
              />
            </div>
            <button
              type="button"
              onClick={() => props.removeItem(keyId)}
              className="ml-auto p-1.5 rounded-lg hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
            >
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
            </button>
            <div
              onClick={() => {
                setPackageData({ ...item });
                fetchData(trackingNumber);
              }}
              className="z-10 p-1.5 ml-1 rounded-lg hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
            >
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
      <Modal open={isModalOpen}>
        <PackageInfoModal
          packageInfo={packageData}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}

export default TrackingItem;

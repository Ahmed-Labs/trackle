import React from "react";

function PackageInfoModal({ packageInfo, onClose }) {
  console.log(packageInfo);
  return (
    <div className="p-7 bg-white rounded-lg overflow-hidden dark:bg-slate-900">
      <div className="w-[400px]">
        <div className="relative flex flex-col">
          <button
            onClick={onClose}
            class="absolute right-0 top-0 text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 outline-none font-medium rounded-lg text-xs px-2 py-2"
          >
            ESC
          </button>
          <div className="mt-10 mb-10 dark:text-gray-300">
            <div>
              <div className="text-center">
                <p className="text font-semibold">Tracking Number</p>
                <p>
                  {packageInfo.trackingNumber} ({packageInfo.carrier})
                </p>
              </div>
            </div>
            <br />
            <div className="flex justify-center gap-10">
              <div>
                <div className="text-center">
                  <p className="text font-semibold">Status</p>
                  <p>{packageInfo.status}</p>
                </div>
                <br />
                <div className="text-center">
                  <p className="text font-semibold">Origin</p>
                  <p>{packageInfo.origin}</p>
                </div>
              </div>
              <div>
                <div className="text-center">
                  <p className="text font-semibold">
                    {packageInfo.delivered ? "Delivery Date" : "ETA"}
                  </p>
                  <p>
                    {packageInfo.delivered
                      ? packageInfo.deliveryDate
                      : packageInfo.expectedDeliveryTimestamp}
                  </p>
                </div>
                <br />
                <div className="text-center">
                  <p className="text font-semibold">Destination</p>
                  <p>{packageInfo.destination}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageInfoModal;

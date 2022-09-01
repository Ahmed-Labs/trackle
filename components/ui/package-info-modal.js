import React from "react";

function PackageInfoModal({ packageInfo, onClose }) {
  return (
    <div className="p-7 bg-white rounded-lg overflow-hidden">
      <div className="w-[400px]">
        <form
          className="relative flex flex-col"
        >
          <button
            onClick={onClose}
            class="absolute right-0 top-0 text-gray-600 bg-gray-200 hover:bg-gray-300 outline-none font-medium rounded-lg text-xs px-2 py-2"
          >
            ESC
          </button>
          <p>{packageInfo.status}</p>
          <p>{packageInfo.trackingNumber}</p>
        </form>
      </div>
    </div>
  );
}

export default PackageInfoModal;

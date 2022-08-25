import { useState } from "react";
import TrackingItem from "./tracking-item";
import Button from "../ui/button/main-button";
import Notifications from "../layout/notifications";
import Modal from "../ui/modal";

function Table() {
  const [userTableData, setUserTableData] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nonEmptyArray = userTableData.map((item, index) => {
    return <TrackingItem key={index} itemNumber={index} item={item} />;
  });

  const emptyArray = (
    <div className="flex justify-center items-center text-gray-500">
      0 Packages Found
    </div>
  );

  return (
    <>
      <div className="h-full md:h-screen flex">
        <div className="flex flex-col h-full p-10 flex-auto">
          <div className="flex h-20 items-center mb-6">
            <h1 className="font-semibold text-3xl">
              Tracking ({userTableData.length}) Packages
            </h1>
            <div className="ml-auto flex items-center">
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-[300px] bg-gray-200 rounded-lg border border-gray-300 flex items-center py-3 px-4 text-gray-700 hover:bg-gray-300 hover:text-black cursor-pointer"
              >
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Track a package
              </div>
              <div className="p-3 bg-blue-600 text-white ml-5 rounded-lg hover:bg-blue-700 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="overflow-y-scroll">
            {userTableData.length === 0 ? (
              emptyArray
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                {nonEmptyArray}
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col h-full max-w-[300px] border-l-2 justify-center">
          <Notifications />
          <div className="h-1/3 p-4">
            <div className="h-full rounded-md border-1 flex flex-col justify-center hover:border border-blue-600">
              <div className="py-8 px-3 text-center">
                <p className="text-lg font-medium pb-3">User Feedback</p>
                <p className="text-sm text-gray-600">
                  Give us feedback so we can improve your experience!
                </p>
              </div>
              <div className="text-center">
                <Button text="Feedback" direct="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </>
  );
}

export default Table;
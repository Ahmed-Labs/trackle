import { useContext, useEffect, useState } from "react";
import TrackingItem from "./tracking-item";
import Notifications from "../layout/notifications";
import Modal from "../ui/modal";
import Feedback from "../ui/feedback";
import TrackModal from "../ui/track-modal";
import { ThemeContext } from "../ui/themeContext";

function Table() {
  const [userTableData, setUserTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggle } = useContext(ThemeContext);

  useEffect(() => {
    const localData = JSON.parse(window.localStorage.getItem("localData"));
    if (localData !== null) {
      setUserTableData(localData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("localData", JSON.stringify(userTableData));
  }, [userTableData]);

  function removeItemHandler(keyId) {
    setUserTableData(
      userTableData.filter((item, index) => {
        return index != keyId;
      })
    );
  }
  const nonEmptyArray = userTableData.map((item, index) => {
    return (
      <TrackingItem
        key={index}
        keyId={index}
        item={item}
        removeItem={removeItemHandler}
      />
    );
  });

  const emptyArray = (
    <div className="flex justify-center items-center text-gray-500">
      0 Packages Found
    </div>
  );

  return (
    <>
      <div className={`bottom-0 top-0 left-0 right-0 fixed items-center justify-center lg:left-[200px] md:h-screen flex ${toggle && "dark"}`}>
        <div className="flex flex-col h-full p-10 flex-auto dark:bg-slate-900">
          <div className="flex flex-col md:flex-row items-center mb-7">
            <h1 className="font-semibold text-2xl lg:text-xl xl:text-2xl pb-6 md:pb-0 dark:text-slate-200">
              Tracking ({userTableData.length}){" "}
              {userTableData.length === 1 ? "Package" : "Packages"}
            </h1>
            <div className="md:ml-auto flex items-center">
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-[300px] bg-gray-200 rounded-lg border border-gray-300 flex items-center py-3 px-4 text-gray-700 hover:bg-gray-300 hover:text-black cursor-pointer dark:bg-slate-900 dark:border-gray-400 dark:text-gray-300 dark:hover:bg-slate-800"
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

          <div className="overflow-y-scroll scrollbar">
            {userTableData.length === 0 ? (
              emptyArray
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                {nonEmptyArray}
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col h-full max-w-[300px] border-l-2 justify-center dark:border-gray-600">
          <Notifications />
          <Feedback />
        </div>
      </div>
      <Modal open={isModalOpen}>
        <TrackModal
          onClose={() => setIsModalOpen(false)}
          onAdd={setUserTableData}
        />
      </Modal>
    </>
  );
}

export default Table;

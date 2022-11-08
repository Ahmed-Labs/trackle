import React, { useState, useContext } from "react";
import { ThemeContext } from "../../pages/themeContext";

function Notifications() {
  const [userNotifications, setUserNotifications] = useState([]);
  const numMap = new Array(5).fill(0);
  const { toggle } = useContext(ThemeContext);
  const notifObjects = [
    {
      title: "Welcome!",
      description: "Look around and try the app out yourself!",
      content: "Please report bugs or feedback below",
    },
    {
      title: "Try it out!",
      description: "Here are some test tracking numbers:",
      content: "GD406070717CA, BVH152613162, EB770489678CN",
    },
  ];
  const Notification = ({ notifObject }) => {
    <div className="m-2 p-2 border border-gray-400 rounded">
      <p className="p-2 font-semibold text-md">{notifObject.title}</p>
      <p className="p-2 text-md">{notifObject.description}</p>
      <p className="p-2 text-md text-gray-600">{notifObject.content}</p>
    </div>;
  };

  return (
    <div className="h-2/3 w-full border-b-2 border-b-gray-200 dark:bg-slate-900 dark:border-gray-600">
      <div className="flex flex-col items-center h-[100%]">
        <div className="flex items-center mt-12 mb-2 dark:text-gray-200">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          <h1 className="font-semibold text-xl pl-3 dark:text-gray-200">
            Notifications
          </h1>
        </div>
        <div className="h-[100%] mt-3 overflow-y-scroll">
          {/* <div>{
          notifObjects.map((notif) => <Notification key="" notifObject={notif}/>)
        }</div> */}

          {numMap.map((item) => {
            return (
              <div className="mt-1 w-full overflow-x-auto px-5 py-4 border-b border-gray-300 dark:text-gray-400">
                <p className="font-semibold text-md">{notifObjects[1].title}</p>
                <p className="text-md">{notifObjects[1].description}</p>
                <p className="text-md text-gray-600 dark:text-gray-500">
                  {notifObjects[1].content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notifications;

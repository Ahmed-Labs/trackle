import { useState } from "react";
import TrackingItem from "./tracking-item";
import Button from "../ui/button/main-button";
import Notifications from "../layout/notifications";

function Table() {
  const [userTableData, setUserTableData] = useState([
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]);

  const nonEmptyArray = (
    <div>
      <div>
        {userTableData.map((item, index) => {
          return <TrackingItem key={index} itemNumber={index} item={item} />;
        })}
      </div>
    </div>
  );

  const emptyArray = (
    <div className="flex h-full justify-center items-center">
      <Button text="Add" direct="/" />
    </div>
  );

  return (
    <div className="h-screen flex">
      <div className="flex flex-col h-full p-10 flex-auto">
        <div className="flex h-20 items-center mb-6">
          <h1 className="font-semibold text-3xl">
            Tracking ({userTableData.length}) Packages
          </h1>
          <div className="ml-auto">
            <Button text="Select All" direct="/" />
            <Button text="RR" direct="/" />
            <Button text="+" direct="/" />
            <Button text="-" direct="/" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-9 h-14 rounded items-center bg-gray-100 font-semibold ">
            <p className="col-span-2">Tracking No.</p>
            <p>Carrier</p>
            <p>Time added</p>
            <p>Status</p>
            <div>Progress</div>
            <div>Edit</div>
            <div>Delete</div>
            <div></div>
          </div>
        </div>

        <div className="overflow-y-scroll">
          {userTableData.length === 0 ? emptyArray : nonEmptyArray}
        </div>
      </div>
      <div className="h-full min-w-[300px] flex items-center justify-center border-l-2">
        Notifications
      </div>
    </div>
  );
}

export default Table;

import Button from "./button/main-button";
import { ThemeContext } from "../../pages/themeContext";
import { useContext } from "react";

function Feedback() {
  const { toggle } = useContext(ThemeContext);
  return (
    <div className="h-1/3 p-4 dark:bg-slate-900 dark:text-slate-100">
      <div className="h-full rounded-md border-1 flex flex-col justify-center">
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
  );
}

export default Feedback;

import Button from "./button/main-button"

function Feedback() {
  return (
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
  )
}

export default Feedback
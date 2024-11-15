import errorGif from "../../../../assets/images/gif/error.gif";
const ErrorModal = ({ close, message }) => {
  return (
    <div className="justify-center items-center flex fixed inset-y-0 inset-x-0 z-20">
      {/* Background Blur */}
      <div
        onClick={() => close(false)}
        className="bg-blue/85 fixed top-0 left-0 inset-y-0 inset-x-0 z-50 flex justify-center items-center"
      ></div>
      {/* Modal */}
      <div className="bg-white p-5 rounded-lg shadow-md shadow-red-500 z-[200]  w-1/3 mx-auto relative flex items-center justify-center flex-col h-[300px]">
        <img src={errorGif} alt="" className="w-4/12" />
        <p className="text-center">{message && message}</p>
        {/* <button
          onClick={() => close(false)}
          className="mt-5 bg-gradient-to-tr py-4 px-20 rounded-lg text-white font-semibold text-lg from-[#285ED6] to-[#153170]"
        >
          Done
        </button> */}
        <button
          onClick={() => close(false)}
          className="bg-red-500 top-0 right-0  text-white font-black text-3xl border-none py-2 px-8 rounded-tr-lg absolute "
        >
          x
        </button>
      </div>
    </div>
  );
};
export default ErrorModal;

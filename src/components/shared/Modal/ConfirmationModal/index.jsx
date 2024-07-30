const ConfirmationModal = ({ close, confirm }) => {
  return (
    <div className="justify-center items-center flex fixed inset-y-0 inset-x-0 z-[100]">
      {/* Background Blur */}
      <div
        onClick={() => close(false)}
        className="bg-blue/90 fixed top-0 left-0 inset-y-0 inset-x-0 z-50 flex justify-center items-center"
      ></div>
      {/* Modal */}
      <div className="bg-white rounded-lg shadow-md shadow-LightBlue z-[200]  w-1/3 mx-auto relative flex items-center justify-center flex-col h-[300px]">
        <h1 className="text-[#002F99] font-bold text-3xl text-center">
          Do you want to <br /> Delete?
        </h1>
        <button
          onClick={() => confirm(true)}
          className="mt-8 bg-gradient-to-tr py-3 px-14 rounded-lg text-white font-semibold text-base from-[#285ED6] to-[#153170]"
        >
          Confirm
        </button>
        <button
          onClick={() => close(false)}
          className="bg-red-500 top-0 right-0  text-white font-black text-2xl border-none py-2 px-8 rounded-tr-lg absolute "
        >
          x
        </button>
      </div>
    </div>
  );
};
export default ConfirmationModal;

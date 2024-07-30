import moment from "moment";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import ConfirmationModal from "../../components/shared/Modal/ConfirmationModal";
import SuccessFullyModal from "../../components/shared/Modal/SuccessfullyModal";
import QuickView from "../../components/AllUser/QuickView";

const AllUser = () => {
  const [users, setUsers] = useState(useLoaderData());
  const [showQuickView, setShowQuickView] = useState(false);
  const [deleteModal, setDeleModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [viewUser, setViewUser] = useState(null);

  // show quick view
  const handleShowQuickView = (id) => {
    setShowQuickView(!showQuickView);
    const findUser = users.find((user) => user._id === id);
    setViewUser(findUser);
  };

  // Delete User
  const handleDeleteUser = (confirm) => {
    console.log(confirm);
    console.log(deleteId);
    if (confirm) {
      fetch(`http://localhost:5000/api/v1/user/${deleteId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeleModal(false);
            setSuccess(true);
            setUsers(users.filter((user) => user._id !== deleteId));
            setTimeout(() => {
              setSuccess(false);
            }, 1000);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleShowDeleteConfirmation = (id) => {
    setDeleteId(id);
    setDeleModal(!deleteModal);
  };

  // console.log(viewUser);

  return (
    <div className="p-4 bg-[#E3E3E8] h-full overflow-auto ">
      {/* Heading */}
      <div className="bg-[#2C54AE] text-white gap-2 py-4 px-7 text-lg font-normal rounded-md shadow-md shadow-black grid grid-cols-12 ">
        <h3 className="col-span-3 ">Full Name</h3>
        <h3 className="col-span-4 ">Email</h3>
        <h3 className="col-span-2 ">Type</h3>
        <h3 className="col-span-1 ">Status</h3>
        <h3 className="col-span-2   text-right">Action</h3>
      </div>
      {/* User Table */}
      <div className="flex flex-col gap-0.5 mt-3 ">
        {users?.map((user) => (
          <div key={user._id} className=" bg-white py-2 px-5 relative ">
            <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="peer/dropdown absolute z-0 inset-y-0 inset-x-0 bg-orange-500 border-2 opacity-0 border-red-500   "
            />
            {/* row */}
            <div
              key={user?._id}
              className="grid grid-cols-12 rounded-sm text-[14px] text-navyBlue    items-center justify-between"
            >
              <p className="col-span-3 ">{user?.name}</p>
              <p className="col-span-4 ">{user?.email}</p>
              <p className="col-span-2 flex flex-row items-center ">
                {user?.userType}
              </p>
              <p className="col-span-2 flex flex-row items-center ">
                {user?.userStatus}
              </p>
              <div className="col-span-1 text-right  relative z-10 justify-end flex flex-row items-center gap-5 ">
                <Link to={`/dashboard/event/edit/${user?._id}`}>
                  <FaPen className="text-lg text-green cursor-pointer" />
                </Link>
                <Link onClick={() => handleShowQuickView(user?._id)}>
                  <PiEyeFill className="text-lg text-LightBlue cursor-pointer" />
                </Link>

                <FaTrash
                  onClick={() => handleShowDeleteConfirmation(user?._id)}
                  className="text-lg text-red-500 cursor-pointer"
                />
                {/* <BsFillPlusSquareFill className="text-lg text-blue4 cursor-pointer " /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Delete Modal */}
      {deleteModal && (
        <ConfirmationModal close={setDeleModal} confirm={handleDeleteUser} />
      )}
      {/* Success Modal */}
      {/* <SuccessFullyModal /> */}
      {success && <SuccessFullyModal close={setSuccess} />}
      {/* Quick View */}
      {showQuickView && <QuickView user={viewUser} close={setShowQuickView} />}
    </div>
  );
};
export default AllUser;

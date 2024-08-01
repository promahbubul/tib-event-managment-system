import { useContext } from "react";
import { CreateUserContext } from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(CreateUserContext);
  return (
    <div className="p-4  h-full overflow-auto flex justify-center items-center">
      Profile:
    </div>
  );
};
export default Profile;

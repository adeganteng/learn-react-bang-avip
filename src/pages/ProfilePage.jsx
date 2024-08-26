import { useLogin } from "../hooks/useLogin";
import Button from "../components/elements/button/Button";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { handleLogout } = useLogout();
  const user = useLogin();
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center bg-teal-600 border border-b-teal-600 py-8 px-6 lg:px-36">
        <h1 className="text-4xl font-extrabold">
          My<span className="text-white">Store</span>
        </h1>

        <div className="flex gap-4 items-center">
          <p className="bg-white text-black text-xl p-4 py-2 rounded-full font-bold">
            {user}
          </p>

          <Link to="/products" className="text-black font-bold underline">
            Products
          </Link>

          <Button
            type="button"
            text="Logout"
            variant="bg-red-500 text-white rounded-full px-4 py-2 font-bold hover:bg-red-600 transtion-all"
            onclick={handleLogout}
          />
        </div>
      </header>

      <div className="w-full min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">My name is {user}</h1>
      </div>
    </>
  );
};

export default ProfilePage;

import { useSelector } from "react-redux";

function Username() {
  //STEP4 USE STORE.USER.USERNAME TO ACCESS IT ACROSS APP
  const username = useSelector((state) => state.user.username);
  if (!username) {
    return null;
  }
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;

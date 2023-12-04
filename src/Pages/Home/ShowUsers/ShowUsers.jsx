import useAllClasses from "../../../hooks/useAllClasses";
import useUsers from "../../../hooks/useUsers";


const ShowUsers = () => {
  const [users] = useUsers();
  const [allClass] = useAllClasses()
  return (
    <div className="py-10">
      <div className="text-3xl font-bold pb-5 text-center">
        Some <span className="text-orange-500">Details</span> Of Our Program
      </div>
      <div className="stats shadow w-full">

        <div className="stat place-items-center">
          <div className="stat-title"> Total User</div>
          <div className="stat-value">{users.length}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title"> Total Class</div>
          <div className="stat-value text-secondary">{allClass.length}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title"> Total enrollment</div>
          <div className="stat-value">54</div>
        </div>

      </div>

    </div>
  );
};

export default ShowUsers;


const ShowUsers = () => {
    return (
        <div className="py-10">
            <div className="text-3xl font-bold pb-5 text-center">
                Some <span className="text-orange-500">Details</span> Of Our Program
            </div>
            <div className="stats shadow w-full">
  
  <div className="stat place-items-center">
    <div className="stat-title"> Total User</div>
    <div className="stat-value">31K</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title"> Total Class</div>
    <div className="stat-value text-secondary">42K</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title"> Total enrollment</div>
    <div className="stat-value">1,200</div>
  </div>
  
</div>
            
        </div>
    );
};

export default ShowUsers;
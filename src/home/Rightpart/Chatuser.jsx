import React from "react";
import useConversation from "../../zustand/useConversation.js";

function Chatuser() {
  const { selectedConversation } = useConversation();
  console.log("con",selectedConversation)
  return (
    <div className=" flex items-center">
      <div className="avatar online">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className=" text-xl">
        {selectedConversation?.fullname}
        <div className=" text-sm text-blue-300">Offline</div>
      </div>
    </div>
  );
}

export default Chatuser;

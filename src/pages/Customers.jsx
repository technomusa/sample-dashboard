import React, { useState } from "react";

const Customers = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex m-3">
        {!open ? (
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="bg-green-500 text-white px-1 rounded-lg"
          >
            dropdowmn
          </button>
        ) : (
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="bg-green-500 text-white px-1 rounded-lg"
          >
            dropdowmn
          </button>
        )}

        <div className="uppercase gap-2">
          <ul className={`${open ? "translate-x-0" : "-translate-y-64"}`}>
            <li>carsss</li>
            <li>tyrsss</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Customers;

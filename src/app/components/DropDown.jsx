import { useState } from "react";

function DropDown() {

  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }
    return (
      <div>
        <div className="dropDown" onClick={toggleMenu}>
          DropDown
        </div>
        {toggle && (
    
    <ul>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </ul>
  
)}
  
      </div>
    );
  }

export default DropDown;


import { Outlet } from "react-router";


function Sehifeleme() {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 gap-5">

        <Outlet />
      
    
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/category">Category</a>
          </li>

          <li>
            <a href="/service">Service</a>
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default Sehifeleme;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [hideBar, setHideBar] = useState(true);

  const hideSidebar = () => {
    setHideBar(!hideBar);
  }



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHideBar(true);
      } else if (window.innerWidth > 768) {
        setHideBar(false); // Ensure sidebar is visible if window width is greater than 768px
      }
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [hideBar]); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <>
      <div className={`sidebar nav-item d-flex flex-column min-vh-100 ${hideBar ? 'hide-sidebar' : ''}`}>
        {!hideBar ?









          <div style={{ width: "10em" }}>
            <div style={{ marginLeft: "9em", }}>

              <i className="bi bi-arrow-left-square-fill" onClick={hideSidebar}></i>
            </div>


            <ul className='nav nav-pills flex-column mt-1' >
              {[1, 2, 3].map((item) => (
                <li key={item} className={active === item ? 'active nav-item p-2 ' : 'nav-item p-2'} onClick={() => setActive(item)}>
                  {item === 1 && <Link to="/" className='text-dark p-1 text-decoration-none'><i className="bi bi-bag-heart-fill me-2"></i><span>Best Sellers</span></Link>}
                  {item === 2 && <Link to="/" className='text-dark p-1 text-decoration-none'><i className="bi bi-plus-square-dotted me-2"></i><span>New Releases</span></Link>}

                  {item === 3 && <Link to="/cart" className='text-dark p-1 text-decoration-none'><i className="bi bi-bag-fill me-2"></i><span>Carts</span></Link>}


                </li>
              ))}
            </ul>



          </div >

          :

          <div>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: " center",
              padding: "5px"

            }}>
              {!hideBar ? <i className="bi bi-arrow-left-circle-fill ml-3  text-dark" onClick={hideSidebar}></i> :
                <i className="bi bi-arrow-right-circle-fill text-dark toggle ml-2 " style={{ cursor: "pointer" }} onClick={hideSidebar}></i>}

            </div>







            <ul className='nav nav-pills flex-column mt-2'>
              {[1, 2, 3].map((item) => (
                <li key={item} className={active === item ? 'active nav-item p-2 ' : 'nav-item p-2 '} onClick={() => setActive(item)}>
                  {item === 1 && <Link to="/" className='text-dark'><i className="bi bi-bag-heart-fill text-dark"></i></Link>}
                  {item === 2 && <Link to="/" className='text-dark'><i className="bi bi-plus-square-dotted text-dark"></i></Link>}

                  {item === 3 && <Link to="/cart" className='text-dark'><i className="bi bi-bag-fill text-dark"></i></Link>}


                </li>
              ))}
            </ul>
          </div>







        }
      </div>
    </>
  );
}

export default Sidebar;



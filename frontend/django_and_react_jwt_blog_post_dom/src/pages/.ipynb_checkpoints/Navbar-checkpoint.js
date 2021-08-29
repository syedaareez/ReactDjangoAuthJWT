import React,{useState} from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };

  const onClickOutsideListener = () => {
    setIsOpen(false);
    document.removeEventListener("click", onClickOutsideListener);
  };
  return (
    <div>
      <nav>
        <button className="hamburger" onClick={() => openMenu()}>
          <GiHamburgerMenu />
        </button>
        <p>Classroom</p>
        <div
          className={isOpen ? "nav-links open" : "nav-links"}
          onMouseLeave={() => {
            document.addEventListener("click", onClickOutsideListener);
          }}
        >
          <div className="main-links">
            <Link>
              {" "}
              <AiFillHome className="icon" /> Classroom
            </Link>
            <Link>
              <MdDashboard className="icon" />
              Dashboard
            </Link>
          </div>
          <div className="subject-links">
            <Link>one</Link>
            <Link>two</Link>
            <Link>three</Link>
            <Link>four</Link>
          </div>
            <div>
              <Link onClick={props.logout} to="/">Log out</Link>
              </div>
        </div>
      </nav>
    </div>
  );
};

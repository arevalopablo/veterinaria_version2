import React from "react";
import { Link } from "react-router-dom";

const Nabvar = (props) => {
  const { navLink, page } = props;
  

  return (
    <header className="header">
      <nav className="nav">
        <Link className="title" style={{fontSize: '1.5em'}} to={'/'}>Vet-App</Link >
        <Link className="title" style={{fontSize: '1.2em'}} to={page}>{navLink}</Link>
      </nav>
    </header>
  );
};

export default Nabvar;

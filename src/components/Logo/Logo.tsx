import { Link, Route, Routes } from "react-router-dom";

type propsLogoType = {
  imgSrc: string,
  textLogo: string, 
}

function Logo(props: propsLogoType) {
  if (props.imgSrc != "" ) {
    return (
      <div className="logo">
        <a href="/">
          <img src={props.imgSrc} alt="" />
        </a>
      </div>
    );
  } else {
    return (
      <div className="logo">
        <Link to="/">
          <span className="text-2xl font-semibold">{props.textLogo}</span>
        </Link>
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    );
  }
}

export default Logo;
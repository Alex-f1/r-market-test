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
        <a href="/">
          <span className="text-2xl font-semibold">{props.textLogo}</span>
        </a>
      </div>
    );
  }
}

export default Logo;
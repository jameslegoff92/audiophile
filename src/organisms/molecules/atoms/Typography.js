//SCSS
import scss from "./Typography.module.scss";

function Typography({ styles, type, children, color }) {
  let element;

  switch (type) {
    case "h1":
      element = (
        <h1 className={scss.h1 + " " + styles}>
          {children}
        </h1>
      );
      break;

    case "h2":
      element = (
        <h2 className={scss.h2 + " " + styles}>
          {children}
        </h2>
      );
      break;

    case "h3":
      element = (
        <h3 className={scss.h3 + " " + styles}>
          {children}
        </h3>
      );
      break;

    case "h4":
      element = (
        <h4 className={scss.h4 + " " + styles}>
          {children}
        </h4>
      );
      break;

    case "h5":
      element = (
        <h5 className={scss.h5 + " " + styles}>
          {children}
        </h5>
      );
      break;

    case "h6":
      element = (
        <h6 className={scss.h6 + " " + styles}>
          {children}
        </h6>
      );
      break;

    case "p":
      if (color === "light") {
          let classes = `${scss['text']} ${scss['text--light']}`;
        element = (
          <p className={classes + " " + styles}>
            {children}
          </p>
        );
      } else {
        element = (
          <p className={scss.text + " " + styles}>
            {children}
          </p>
        );
      }
      break;

    case "subtitle":
      element = (
        <p className={scss.subtitle + " " + styles}>
          {children}
        </p>
      );
      break;

    default:
      element = undefined;
  }

  return <>{element}</>;
}

export default Typography;

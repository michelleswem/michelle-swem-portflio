import Link from "next/link";

const Button = (props) => {
  const classNames = "btn " + props.className;

  if (props.link) {
    return (
      <Link className={classNames} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={classNames}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;

import Link from "next/link";
import classes from "./Socials.module.scss";

export const Socials = () => {
  return (
    <div className={classes["socials"]}>
      <Link href="https://twitter.com/PreciselyMiche1">
        <a className={classes["socials__link"]}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#ffffff"
          >
            <title>twitter</title>
            <path
              d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
      </Link>
      <Link href="https://github.com/michelleswem">
        <a className={classes["socials__link"]}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="#ffffff"
          >
            <title>github</title>
            <path
              d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
      </Link>
      <Link href="https://codepen.io/swemmichelle990">
        <a className={classes["socials__link"]}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#ffffff"
          >
            <title>codepen</title>
            <path
              fill="#ffffff"
              d="M3.375 18.266l9.422 6.281v-5.609l-5.219-3.484zM2.406 16.016l3.016-2.016-3.016-2.016v4.031zM15.203 24.547l9.422-6.281-4.203-2.812-5.219 3.484v5.609zM14 16.844l4.25-2.844-4.25-2.844-4.25 2.844zM7.578 12.547l5.219-3.484v-5.609l-9.422 6.281zM22.578 14l3.016 2.016v-4.031zM20.422 12.547l4.203-2.812-9.422-6.281v5.609zM28 9.734v8.531c0 0.391-0.203 0.781-0.531 1l-12.797 8.531c-0.203 0.125-0.438 0.203-0.672 0.203s-0.469-0.078-0.672-0.203l-12.797-8.531c-0.328-0.219-0.531-0.609-0.531-1v-8.531c0-0.391 0.203-0.781 0.531-1l12.797-8.531c0.203-0.125 0.438-0.203 0.672-0.203s0.469 0.078 0.672 0.203l12.797 8.531c0.328 0.219 0.531 0.609 0.531 1z"
            ></path>
          </svg>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/michelle-swem-b7812b183/">
        <a className={classes["socials__link"]}>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path
              d="M21.375 0H5.625C2.51888 0 0 2.42558 0 5.41667V20.5833C0 23.5744 2.51888 26 5.625 26H21.375C24.4823 26 27 23.5744 27 20.5833V5.41667C27 2.42558 24.4823 0 21.375 0ZM9 20.5833H5.625V8.66667H9V20.5833ZM7.3125 7.293C6.22575 7.293 5.34375 6.43717 5.34375 5.382C5.34375 4.32683 6.22575 3.471 7.3125 3.471C8.39925 3.471 9.28125 4.32683 9.28125 5.382C9.28125 6.43717 8.40038 7.293 7.3125 7.293ZM22.5 20.5833H19.125V14.5123C19.125 10.8637 14.625 11.1399 14.625 14.5123V20.5833H11.25V8.66667H14.625V10.5788C16.1955 7.77725 22.5 7.57033 22.5 13.2611V20.5833Z"
              fill="#ffffff"
            />
          </svg>
        </a>
      </Link>
      <Link href="mailto:https://swemmichelle990@gmail.com">
        <a className={classes["socials__link"]}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#ffffff"
          >
            <title>E-mail</title>
            <path
              fill="#ffffff"
              d="M28 11.094v12.406c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-12.406c0.469 0.516 1 0.969 1.578 1.359 2.594 1.766 5.219 3.531 7.766 5.391 1.313 0.969 2.938 2.156 4.641 2.156h0.031c1.703 0 3.328-1.188 4.641-2.156 2.547-1.844 5.172-3.625 7.781-5.391 0.562-0.391 1.094-0.844 1.563-1.359zM28 6.5c0 1.75-1.297 3.328-2.672 4.281-2.438 1.687-4.891 3.375-7.313 5.078-1.016 0.703-2.734 2.141-4 2.141h-0.031c-1.266 0-2.984-1.437-4-2.141-2.422-1.703-4.875-3.391-7.297-5.078-1.109-0.75-2.688-2.516-2.688-3.938 0-1.531 0.828-2.844 2.5-2.844h23c1.359 0 2.5 1.125 2.5 2.5z"
            ></path>
          </svg>
        </a>
      </Link>
    </div>
  );
};

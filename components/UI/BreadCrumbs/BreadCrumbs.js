import Link from "next/link";

export const BreadCrumbs = (props) => {
  return (
    <section>
      <div className="row">
        <div>
          <h1 className="heading-primary heading-primary__white">
            {props.heading}
          </h1>
          <ul>
            <li>
              <Link>
                <a></a>
              </Link>
            </li>
            <li>
              <span>{props.title}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

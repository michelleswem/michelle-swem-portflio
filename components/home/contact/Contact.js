import classes from "./Contact.module.scss";
import { Form } from "./form";
export const Contact = () => {
  return (
    <section className={classes.contact}>
      <div className="text-center margin-bottom">
        <h1 className="heading-primary heading-primary__white">Say Hello</h1>
      </div>
      <div className="row">
        <Form />
      </div>
    </section>
  );
};

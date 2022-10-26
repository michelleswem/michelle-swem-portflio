import { Form } from './form';
export const Contact = () => {
  return (
    <section>
      <div className="text-center margin-bottom">
        <h2 className="heading-secondary heading-secondary__white">
          Say Hello
        </h2>
      </div>
      <div className="row">
        <Form />
      </div>
    </section>
  );
};

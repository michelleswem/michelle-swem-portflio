import { Button } from '../../../UI/Button';
import { isEmail, isNotEmpty } from '../../../../utils';
import { useForm } from '../../../../hooks/use-form';
import classes from './Form.module.scss';
import { useState } from 'react';

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useForm(isNotEmpty);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useForm(isEmail);

  const {
    value: enteredSubject,
    hasError: subjectHasError,
    isValid: subjectIsValid,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useForm(isNotEmpty);

  const {
    value: enteredMessage,
    hasError: messageHasError,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useForm(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsLoading(true);

    console.log(enteredName, enteredEmail, enteredSubject, enteredMessage);

    setIsLoading(false);
    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.form__box}>
        <div className={` ${classes.form__group} ${classes.form__name}`}>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={classes.form__input}
          />
          {nameHasError && (
            <p className={classes.form__error}>Please Enter Your Name</p>
          )}
        </div>
        <div className={` ${classes.form__group} ${classes.form__email}`}>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={classes.form__input}
          />

          {emailHasError && (
            <p className={classes.form__error}>Please Enter a valid Email</p>
          )}
        </div>
      </div>

      <div className={classes.form__group}>
        <input
          id="subject"
          type="text"
          placeholder="Your Subject"
          value={enteredSubject}
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
          className={classes.form__input}
        />

        {subjectHasError && (
          <p className={classes.form__error}>Please Enter Your subject</p>
        )}
      </div>
      <div className={classes.form__group}>
        <textarea
          id="message"
          type="text"
          placeholder="Your Message"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          className={`${classes.form__input} ${classes.form__textarea}`}
        />

        {messageHasError && (
          <p className={classes.form__error}>Please Enter Your Message</p>
        )}
      </div>
      <div className={classes.form__action}>
        <Button type="submit" className="btnround btnround--red btnround--lg">
          Send Message
        </Button>
        {isLoading && <span className={classes.spinner}></span>}
      </div>
    </form>
  );
};

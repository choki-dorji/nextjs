import React, { useState } from "react";
import classes from "./search.module.css";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { addItem, searchItem } from "@/store/reducers";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
let id = 1;
interface user {
  username: string;
}
function Search() {
  const dispatch = useDispatch();
  const [value1, setValue] = useState("");
  const click = () => {};
  const search = () => {
    dispatch(searchItem(value1));
  };
  const onSubmit = (values: user) => {
    console.log(values);
    dispatch(
      addItem({ id: id++, task: value1, description: value1, completed: false })
    );
  };

  const validated = (values: user) => {
    const errors: Partial<user> = {};
    if (!value1) {
      errors.username = "The Task should not be empty";
    }
    return errors;
  };
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Task Manager</h1>
      <div className={classes.searchcontainer}>
        <Form
          onSubmit={onSubmit}
          validate={validated}
          render={({ handleSubmit }) => (
            <form
              onSubmit={(event) => {
                handleSubmit(event);
                event.preventDefault();
              }}
            >
              <Field name="username" component="input" type="text">
                {({ input, meta }) => (
                  <div className={classes.inputWrapper}>
                    <input
                      {...input}
                      type="text"
                      value={value1}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Enter Task"
                      className={classes.input}
                    />

                    {meta.touched && meta.error ? (
                      <FontAwesomeIcon
                        className={classes.errorIcon}
                        icon={faExclamationCircle}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className={classes.successIcon}
                        icon={faCheck}
                      />
                    )}
                  </div>
                )}
              </Field>

              <button type="submit" className={classes.button}>
                Add{" "}
              </button>
              <button
                onClick={search}
                type="button"
                className={classes.button1}
              >
                Search{" "}
              </button>
            </form>
          )}
        />

        {/* <input
          className={classes.input}
          type="text"
          id="search"
          value={value1}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search tasks..."
        />
        <button onClick={click} type="button" className={classes.button}>
          Add{" "}
        </button>
        <button onClick={search} type="button" className={classes.button1}>
          Search{" "}
        </button> */}
      </div>
    </header>
  );
}

export default Search;

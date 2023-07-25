import React from "react";
import classes from "../search/search.module.css";
import { markComplete, deleteItems } from "@/store/reducers";
import { useDispatch } from "react-redux";
import store from "@/store/store";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Search {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function Data(props: Search) {
  const dispatch = useDispatch();
  const clickhandler = (id: number) => {
    console.log("ghjkl");
    dispatch(markComplete({ id: id }));
  };
  console.log("clickha", store.getState().item);

  // const
  const deletehandler = (id: number) => {
    dispatch(deleteItems(id));
  };
  return (
    <main className={classes.main}>
      <div className={classes.tasklist}>
        <div className={classes.taskitem}>
          <h2 className={classes.h2}>{props.title}</h2>
          <p className={classes.p}>{props.description}</p>
          <span className={classes.duedate}>{props.completed}</span>
          {}
          {!props.completed && (
            <button
              className={classes.button}
              onClick={(id) => clickhandler(props.id)}
              type="button"
            >
              Mark as Completed
            </button>
          )}
          {props.completed && <p style={{ color: "#4f4f4f" }}>completed</p>}
          <button
            onClick={() => deletehandler(props.id)}
            className={classes.trashButton}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Data;

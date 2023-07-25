import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/reducers";
import store from "@/store/store";

let id = 0;

interface ShopItem {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  // Add other properties as needed
}

// Define the type for the initial state of your reducer
interface InitialState {
  shop: ShopItem[];
  loading: boolean;
}

interface Root {
  item: InitialState;
}

function Index() {
  const dispatch = useDispatch();
  const [value1, setValue] = useState("");
  const [result, setResult] = useState<ShopItem[]>([]);

  // console.log(value1);
  const addtask = () => {
    console.log("ghj");
    console.log(
      dispatch(
        addItem({
          id: id++,
          task: value1,
          description: value1,
          completed: false,
        })
      )
    );
    setValue("");
  };

  const search = () => {
    setResult(data.filter((d) => d.task === value1));
  };
  const data = useSelector((state: Root) => state.item.shop);
  console.log("data", data);
  console.log(store.getState().item);
  // if (data) {
  //   data1 = data;
  // }
  return (
    <div>
      <input value={value1} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addtask}>Add</button>
      <button onClick={search}>Search</button>

      {result.length > 0
        ? result.map((task) => task.task)
        : data.map((data) => data.task)}
    </div>
  );
}

export default Index;

import React from "react";

import reducers from "@/store/reducers";
import Search from "@/component/search/Search";
import Data from "@/component/data/Data";
import { useDispatch, useSelector } from "react-redux";

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
function Apple() {
  const dispatch = useDispatch();
  const data = useSelector((state: Root) => state.item.shop);
  return (
    <div>
      <Search />
      <hr />
      {data.map((item) => (
        <Data
          id={item.id}
          title={item.task}
          description={item.description}
          completed={item.completed}
        />
      ))}
    </div>
  );
}

export default Apple;

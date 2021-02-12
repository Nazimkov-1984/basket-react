import React, { useCallback, useState } from "react";
import store from "../../store";

const scss = require("./input.module.scss");

const Input = (props: { id: number }) => {
  const [inputValue, getValue] = useState('');

  const clearInput = useCallback(() => {
    store.clearInput(props.id);
  }, [props.id]);

  const defaultQuantity = useCallback(() => {
    store.defaultQuantity(props.id);
  }, [props.id]);


  return (
    <input
      className={scss.quantityInput}
      value={
        store.dataCards[store.dataCards.findIndex((x) => x.id === props.id)]
          .quantity
      }
      onFocus={clearInput}
      onBlur={defaultQuantity}
      onInput = {() => getValue({ inputValue =  'Kolya'}) }
    ></input>
  );
};

export default Input;

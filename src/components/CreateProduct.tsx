import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { Error } from "./Error";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 33,
    count: 12,
  },
};

interface CreateProductProps {
  onCreate: () => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;
    const result = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />
      {error && <Error error={error} />}
      <Button type="submit">Create</Button>
    </form>
  );
};

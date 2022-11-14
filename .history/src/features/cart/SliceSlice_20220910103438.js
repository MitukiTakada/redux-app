import { createSlice } from "@reduxjs/toolkit";
import AllItems from "../../Items/AllItems";

const initialState ={
  Allitems: AllItems
}

const SliceSlice = createSlice({
  name: "slice"
})
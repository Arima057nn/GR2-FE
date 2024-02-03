"use client";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import withUserAuth from "@/app/components/withUserAuth";

function CreateRequest() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between mb-8">
        <p className="text-xl font-bold">Create Request</p>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Contained
        </Button>
      </div>
      <TextField
        placeholder="Title..."
        id="outlined-basic"
        variant="outlined"
      />

      <div className="p-4 flex flex-col border-2 border-gray-200 rounded mt-4">
        <textarea
          placeholder="Add a description"
          className="border-2 border-gray-200 rounded h-40 p-4"
        ></textarea>
        <div className="flex">
          <div className="flex flex-1 items-center justify-between mr-28 my-4">
            <p className="text-sm font-semibold">Category</p>
            <div className="w-72">
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between mr-28 my-4">
            <p className="text-sm font-semibold">Assign</p>
            <div className="w-72">
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-between my-4">
          <p className="text-sm font-semibold">Due Date</p>
          <div className="w-72 mr-28"></div>
        </div>
      </div>
    </div>
  );
}

export default withUserAuth(CreateRequest);

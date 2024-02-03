"use client";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import withUserAuth from "@/app/components/withUserAuth";
import { categoryApi } from "@/app/services/category-api";
import { CatetoryInterface } from "@/app/models/category";
import { UserContext } from "@/app/contexts/UserContext";
import { requestApi } from "@/app/services/request-api";
import { useRouter } from "next/navigation";

function CreateRequest() {
  const [request, setRequest] = useState({
    title: "",
    content: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState<CatetoryInterface[]>();
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let res = await categoryApi.getCategories();
    setCategories(res?.data);
  };

  const handleCreateRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && user.role === 3) {
      try {
        let status = 1;
        if (
          request.categoryId !== "" &&
          request.title !== "" &&
          request.content !== ""
        ) {
          const res = await requestApi.createNewRequest(
            request.title,
            request.content,
            user.userId,
            status,
            request.categoryId
          );
          setRequest({ title: "", content: "", categoryId: "" });
          console.log("res", res);
        }
        // toast.success(res.data);
      } catch (error) {
        console.error("Error adding book to borrow:", error);
      }
    } else {
      // toast.error("Please log in as user !");
      if (!user) {
        router.push("/login");
      }
    }
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between mb-8">
        <p className="text-xl font-bold">Create Request</p>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleCreateRequest}
        >
          Create
        </Button>
      </div>
      <TextField
        placeholder="Title..."
        id="outlined-basic"
        variant="outlined"
        value={request.title}
        required
        onChange={(e) => setRequest({ ...request, title: e.target.value })}
      />

      <div className="p-4 flex flex-col border-2 border-gray-200 rounded mt-4">
        <textarea
          placeholder="Add a description"
          className="border-2 border-gray-200 rounded h-40 p-4"
          value={request.content}
          required
          onChange={(e) => setRequest({ ...request, content: e.target.value })}
        ></textarea>
        <div className="flex">
          <div className="flex flex-1 items-center justify-between mr-28 my-4">
            <p className="text-sm font-semibold">Category</p>
            <div className="w-72">
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={request.categoryId}
                  required
                  onChange={(e: SelectChangeEvent) =>
                    setRequest({ ...request, categoryId: e.target.value })
                  }
                >
                  {categories?.map((category: CatetoryInterface) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between mr-28 my-4"></div>
        </div>
      </div>
    </div>
  );
}

export default withUserAuth(CreateRequest);

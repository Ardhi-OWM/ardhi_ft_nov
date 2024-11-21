import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@components/ui/dialog";
import { Plus } from "lucide-react";

const AddDataset = () => {
  const [datasetLink, setDatasetLink] = useState("");

  const handleSave = () => {
    console.log("Dataset Link:", datasetLink); // Replace with saving logic
    setDatasetLink(""); // Clear the input after saving
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center space-x-2 px-4 py-2 hover:underline">
            <Plus />
            <span>Add Geodata Set</span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add a Geodata Set</DialogTitle>
          <DialogDescription>
            Please provide the URL for your geodata set.
          </DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <input
              type="url"
              placeholder="https://example.com/geodata"
              value={datasetLink}
              onChange={(e) => setDatasetLink(e.target.value)}
              className="w-full p-2 mt-2 border rounded"
              required
            />
            <div className="mt-4 flex justify-end space-x-2">
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded">
                  Cancel
                </button>
              </DialogClose>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Add
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddDataset;

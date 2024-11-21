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

const AddModel = () => {
  const [modelLink, setModelLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSave = () => {
    if (selectedFile) {
      console.log("Uploaded File:", selectedFile.name); // Handle file upload logic
    } else if (modelLink) {
      console.log("Model Link:", modelLink); // Handle link submission logic
    } else {
      console.log("No input provided");
    }
    setModelLink("");
    setSelectedFile(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center space-x-2 px-4 py-2 hover:underline">
            <Plus />
            <span>Add Model</span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add a Machine Learning Model</DialogTitle>
          <DialogDescription>
            Upload a model file (e.g., .py, .R) or provide a link to your
            analytics resource.
          </DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <div className="mt-4">
              <label className="block text-sm font-medium">Model File:</label>
              <input
                type="file"
                accept=".py,.R,.ipynb"
                onChange={handleFileChange}
                className="block w-full p-2 mt-2 border rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Model Link:</label>
              <input
                type="url"
                placeholder="https://example.com/model"
                value={modelLink}
                onChange={(e) => setModelLink(e.target.value)}
                className="w-full p-2 mt-2 border rounded"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded">
                  Cancel
                </button>
              </DialogClose>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddModel;

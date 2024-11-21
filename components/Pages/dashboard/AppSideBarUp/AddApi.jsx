// component/Pages/dashboard/MapComponent
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@components/ui/dialog";
import { Plus } from 'lucide-react';

const AppSideBarUpper = () => {
    const [apiLink, setApiLink] = useState("");

    const handleSave = () => {
        console.log("API Link:", apiLink); // Handle saving or submitting the API link
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="flex items-center space-x-2 px-4 py-2 hover:underline">
                        <Plus/>
                        <span>Open API Input</span>
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Enter API Link</DialogTitle>
                    <DialogDescription>
                        Please provide the URL for your API endpoint.
                    </DialogDescription>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSave();
                        }}
                    >
                        <input
                            type="url"
                            placeholder="https://api.example.com/endpoint"
                            value={apiLink}
                            onChange={(e) => setApiLink(e.target.value)}
                            className="w-full p-2 mt-2 border rounded"
                            required
                        />
                        <div className="mt-4 flex justify-end space-x-2">
                            <DialogClose asChild>
                                <button type="button" className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                            </DialogClose>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AppSideBarUpper;

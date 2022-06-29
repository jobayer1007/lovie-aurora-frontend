import React from "react";
import { Add } from "react-ionicons";
import Button from "./Button";

const ImageUpload = () => {
  return (
    <div>
      <Button
        type="submit"
        text="Upload Files"
        color="bg-coolDarkGreen"
        margin="mt-3"
        padding="py-1.5 px-4"
      />
    </div>
  );
};

export default ImageUpload;

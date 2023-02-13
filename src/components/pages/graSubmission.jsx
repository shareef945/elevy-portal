import React, { useState } from "react";
import { Card } from "@tremor/react";
import { Text } from "@tremor/react";
import { Button } from "@tremor/react";

const GraSubmission = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <div style={{ width: "40%" }}>
        <Card
          maxWidth="max-w-none"
          hFull={false}
          shadow={true}
          decoration=""
          decorationColor="blue"
          marginTop="mt-0">
          <Text
            color="gray"
            textAlignment="text-left"
            truncate={false}
            height=""
            marginTop="mt-0">
            Please Upload File
          </Text>

          <Button
            type="button"
            size="sm"
            color="gray"
            variant="secondary"
            onClick={undefined}
            marginTop="mt-6">
            <input type="file" onChange={handleFileUpload} />
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default GraSubmission
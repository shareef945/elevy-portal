import React, { useState } from "react";
import { Card } from "@tremor/react";
import { Text } from "@tremor/react";
import { Button } from "@tremor/react";


export default function graSubmission() {
  const [accountNumber, setAccountNumber] = useState("");

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
            color="blue"
            variant="secondary"
            onClick={undefined}
            marginTop="mt-6">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Card>
      </div>
    </div>
  );
}

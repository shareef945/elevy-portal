import React, { useState } from "react";
import { Card } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { Text } from "@tremor/react";
import { Button } from "@tremor/react";

export default function graSimulation() {
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
            Sender's Account Number
          </Text>
          <TextInput
            placeholder=""
            value=""
            onChange={undefined}
            maxWidth="max-w-none"
            marginTop="mt-3"
          />
          <Text
            color="gray"
            textAlignment="text-left"
            height=""
            marginTop="mt-3">
            Beneficiary's Bank
          </Text>
          <TextInput
            value=""
            onChange={undefined}
            placeholder=""
            maxWidth="max-w-none"
            marginTop="mt-3"
          />
          <Text color="gray" textAlignment="text-left" marginTop="mt-5">
            Beneficiary's Account Number
          </Text>
          <TextInput
            value=""
            onChange={undefined}
            placeholder=""
            maxWidth="max-w-none"
            marginTop="mt-3"
          />
          <Text
            color="gray"
            textAlignment="text-left"
            truncate={false}
            height=""
            marginTop="mt-3">
            Amount{" "}
          </Text>
          <TextInput
            value=""
            onChange={undefined}
            placeholder=""
            maxWidth="max-w-none"
            marginTop="mt-3"
          />
          <Text
            color="gray"
            textAlignment="text-left"
            truncate={false}
            height=""
            marginTop="mt-3">
            e-Levy
          </Text>
          <TextInput
            value=""
            onChange={undefined}
            placeholder=""
            maxWidth="max-w-none"
            marginTop="mt-3"
          />
          <Button
            type="button"
            size="sm"
            color="gray"
            variant="secondary"
            onClick={undefined}
            marginTop="mt-6">
            Submit
          </Button>
        </Card>
      </div>
    </div>
  );
}

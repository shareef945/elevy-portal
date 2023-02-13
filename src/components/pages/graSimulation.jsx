import React, { useState } from "react";
import { Card } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { Text } from "@tremor/react";
import { Button } from "@tremor/react";

const GraSimulation = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [sendersAccount, setSendersAccount] = useState("");
  const [beneficiarysBank, setBeneficiarysBank] = useState("");
  const [beneficiarysAccount, setBeneficiarysAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [eLevy, setElevy] = useState("");

  function getElevy() {}

  return (
    <div>
      <div style={{ width: "40%" }}>
        <Card>
          <Text color="gray">Sender's Account Number</Text>
          <TextInput
            value={sendersAccount}
            onChange={(e) => setSendersAccount(e.target.value)}
            marginTop="mt-3"
            placeholder=""
          />
          <Text color="gray" marginTop="mt-3">
            Beneficiary's Bank
          </Text>
          <TextInput
            value={beneficiarysBank}
            onChange={(e) => setBeneficiarysBank(e.target.value)}
            placeholder=""
            marginTop="mt-3"
          />
          <Text color="gray" marginTop="mt-5">
            Beneficiary's Account Number
          </Text>
          <TextInput
            value={beneficiarysAccount}
            onChange={(e) => setBeneficiarysAccount(e.target.value)}
            placeholder=""
            marginTop="mt-3"
          />
          <Text color="gray" marginTop="mt-3">
            Amount
          </Text>
          <TextInput
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=""
            marginTop="mt-3"
          />
          <Text color="gray" marginTop="mt-3">
            e-Levy
          </Text>
          <TextInput value={eLevy} placeholder="" marginTop="mt-3" />
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
};

export default GraSimulation
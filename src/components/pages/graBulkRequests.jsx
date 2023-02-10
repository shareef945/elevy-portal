import React, { useState } from "react";
import { Card } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { Text } from "@tremor/react";
import { DateRangePicker, DateRangePickerValue } from "@tremor/react";
import enUS from "date-fns/locale/en-US";
import { Button } from "@tremor/react";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Title,
  Badge,
} from "@tremor/react";
import { Dropdown, DropdownItem } from "@tremor/react";

export default function graBulkRequest() {
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
            Request Type
          </Text>
          <Dropdown
            value={undefined}
            defaultValue={undefined}
            onValueChange={undefined}
            placeholder="Select..."
            icon={undefined}
            maxWidth="max-w-none"
            marginTop="mt-3">
            <DropdownItem value={undefined} text="Reversal" icon={undefined} />
            <DropdownItem
              value={undefined}
              text="Confirm Pending Reservation "
              icon={undefined}
            />
          </Dropdown>
          <Text
            color="gray"
            textAlignment="text-left"
            truncate={false}
            height=""
            marginTop="mt-5">
            Format: (elevy_id, client_id, flexcube_id, account_no,
            amount_to_reverse, reversal_reason)
          </Text>
          <TextInput
            id=""
            name=""
            defaultValue=""
            value=""
            onChange={undefined}
            placeholder="Notes / Comments"
            icon={undefined}
            error={false}
            errorMessage=""
            disabled={false}
            maxWidth="max-w-none"
            marginTop="mt-5"
          />
          <Button
            type="button"
            size="sm"
            color="blue"
            variant="secondary"
            onClick={undefined}
            marginTop="mt-6">
            Upload
          </Button>
        </Card>
      </div>
      <div style={{ marginTop: "5%" }}></div>
    </div>
  );
}

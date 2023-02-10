import React, { useState } from "react";
import { Card } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { Text } from "@tremor/react";
import { Button } from "@tremor/react";
import { Dropdown, DropdownItem } from "@tremor/react";

export default function graBulkRequest() {
  const [dropdown, setDropdown] = useState("");
  const [notes, setNotes] = useState("");

  function upload() {}

  return (
    <div>
      <div style={{ width: "40%" }}>
        <Card>
          <Text color="gray">Request Type</Text>
          <Dropdown
            value={dropdown}
            onValueChange={(e) => setDropdown(e)}
            placeholder="Select..."
            marginTop="mt-3">
            <DropdownItem value={"reversal"} text="Reversal" icon={undefined} />
            <DropdownItem
              value={"confirm"}
              text="Confirm Pending Reservation "
              icon={undefined}
            />
          </Dropdown>
          <Text color="gray" height="" marginTop="mt-5">
            Format: (elevy_id, client_id, flexcube_id, account_no,
            amount_to_reverse, reversal_reason)
          </Text>
          <TextInput
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes / Comments"
            marginTop="mt-5"
          />
          <Button
            type="button"
            size="sm"
            color="gray"
            variant="secondary"
            onClick={upload}
            marginTop="mt-6">
            <input type="file" />
          </Button>
        </Card>
      </div>
    </div>
  );
}

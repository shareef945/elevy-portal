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

export default function graTinStatus() {
  const [accountNumber, setAccountNumber] = useState("");
  const data = [
    {
      name: "Viola Amherd",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
      status: "active",
    },
    {
      name: "Simonetta Sommaruga",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
      status: "active",
    },
    {
      name: "Alain Berset",
      Role: "Federal Councillor",
      departement: "The Federal Department of Home Affairs (FDHA)",
      status: "active",
    },
    {
      name: "Ignazio Cassis",
      Role: "Federal Councillor",
      departement: "The Federal Department of Foreign Affairs (FDFA)",
      status: "active",
    },
  ];

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
            Paste All TIN's Below
          </Text>
          <textarea
            id=""
            cols="37"
            rows="5"
            style={{ border: "solid 1px gray" }}></textarea>
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
      <div style={{ marginTop: "5%" }}>
        {" "}
        <Card>
          <Table marginTop="mt-3">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Department</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Text>{item.Role}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.departement}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge text={item.status} color="emerald" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Card } from "@tremor/react";
import { Text } from "@tremor/react";
import { Button } from "@tremor/react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from "@tremor/react";

const GraTinStatus = () => {
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

  function getTinStatus() {}

  return (
    <div>
      <div style={{ width: "40%" }}>
        <Card>
          <Text color="gray">Paste All TIN's Below</Text>
          <textarea
            id=""
            cols="37"
            rows="5"
            style={{ border: "solid 1px gray" }}></textarea>
          <Button
            type="button"
            size="sm"
            color="gray"
            variant="secondary"
            onClick={getTinStatus}
            marginTop="mt-6">
            Submit
          </Button>
        </Card>
      </div>
      <div style={{ marginTop: "5%" }}>
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
};

export default GraTinStatus
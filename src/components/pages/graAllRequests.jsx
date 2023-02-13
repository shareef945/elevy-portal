import React, { useState } from "react";
import { Card } from "@tremor/react";
import { Text } from "@tremor/react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";
import { Button } from "@tremor/react";

const GraAllRequests = () => {
  const dummData = {
    status_code: 2000,
    status_reason: "",
    account: "",
    national_id: "",
    earliest_successful_gra_update: "0001-01-01T00:00:00Z",
    transactions: [
      {
        trn_ref_no: "",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: "",
        lcy_amount: "",
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: "",
        trn_date: "",
        value_dt: "",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "561452707",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-01T00:51:45.222765Z",
        narration: "",
        elevy_id: "",
        can_raise_reversal: "",
        notes: "",
      },
    ],
  };

  function getRequests() {}
  const [data, setData] = useState(dummData);

  return (
    <div>
      <div style={{ width: "15%", marginBottom: "3%" }}>
        <Card>
          <Button
            type="button"
            size="sm"
            color="gray"
            variant="secondary"
            onClick={getRequests}>
            Get Requests
          </Button>
        </Card>
      </div>
      <div>
        <Card>
          <Table marginTop="mt-3">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Transaction Ref No</TableHeaderCell>
                <TableHeaderCell>Narration</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Transaction Date</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.transactions.map((item) => (
                <TableRow key={item.trn_ref_no}>
                  <TableCell>{item.trn_ref_no}</TableCell>
                  <TableCell>
                    <Text>{item.narration}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.lcy_amount}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.trn_date}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.can_raise_reversal}</Text>
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

export default GraAllRequests;

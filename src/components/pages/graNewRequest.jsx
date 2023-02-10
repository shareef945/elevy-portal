import React, { useState } from "react";
import { Card } from "@tremor/react";
import { TextInput } from "@tremor/react";
import { Text } from "@tremor/react";
import { DateRangePicker } from "@tremor/react";
import enUS from "date-fns/locale/en-US";
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
import dayjs from "dayjs";

export default function graNewRequest() {
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
  const [accountNumber, setAccountNumber] = useState("");
  const today = new Date();
  const [date, setDate] = useState(dayjs(today).format("DD-MMM-YYYY"));
  const getTransactions = `https://eghportal-03/backends/elevy_portal/api/get_customer_txns?ac=${accountNumber}&dt=${date}`;
  const [data, setData] = useState(dummData);

  const handleInput = (event) => {
    setAccountNumber(event.target.value);
  };


  const submitButton = (params) => {
    return (
      <strong>
        {params.row.can_raise_reversal === true ? (
          <Button
            type="button"
            variant="secondary"
            color="gray"
            size="sm"
            marginTop="mt-6">
            Request Refund
          </Button>
        ) : (
          ""
        )}
      </strong>
    );
  };

  const callApi = () => {
    fetch(getTransactions, { credentials: "include" })
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  return (
    <div>
      <div style={{ width: "40%", height: "10%" }}>
        <Card
          maxWidth="max-w-none"
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
            Account Number
          </Text>
          <TextInput
            value={accountNumber}
            placeholder=""
            onChange={handleInput}
            maxWidth="max-w-none"
            marginTop="mt-3"
          />
          <Text
            color="gray"
            textAlignment="text-left"
            truncate={false}
            height=""
            marginTop="mt-5">
            Transaction Date
          </Text>
          <DateRangePicker
            onValueChange={(e) => setDate(dayjs(e[0]).format("DD-MMM-YYYY"))}
            enableDropdown={false}
            placeholder="Select Transaction Date"
            locale={enUS} // enUS is the default value, hence it is not specifically imported.
            color="blue"
            maxWidth="max-w-none"
            marginTop="mt-3"
          />

          <Button
            type="button"
            size="sm"
            color="gray"
            variant="secondary"
            onClick={callApi}
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
                <TableHeaderCell>Transaction Ref No</TableHeaderCell>
                <TableHeaderCell>Narration</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Transaction Date</TableHeaderCell>
                <TableHeaderCell>Reversal?</TableHeaderCell>
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
}

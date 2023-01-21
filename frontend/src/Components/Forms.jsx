import Form from "react-bootstrap/Form";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Forms() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Role</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Start Date</Form.Label>
        </Form.Group>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>End Date</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Skill</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
      </Form>
    </>
  );
}

export default Forms;

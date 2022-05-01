import React from "react";
import { fields } from "./config";
export default function TableHeader() {
  return (
    <thead>
      <tr>
        {fields.map((field, index) => (
          <th key={index} scope="col">
            {field}
          </th>
        ))}
      </tr>
    </thead>
  );
}

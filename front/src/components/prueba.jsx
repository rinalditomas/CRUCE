import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

const Prueba = () => {

  const [items, setItems] = useState([]);

  const readExcel = (file) => {

    const promise = new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames;

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      setItems(data);
    });
  };

  const upload = () => {
    console.log(items)
      axios.post("http://localhost:8000/api/order", {items
      });
    };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <button onClick={upload}>subir a la base de datos</button>
    </div>
  );
};

export default Prueba;

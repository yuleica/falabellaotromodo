
import React, { useState } from 'react';

import XLSX from 'xlsx';
import Form from './Componentes/Form';


const EXTENSIONS = ['xlsx', 'xls', 'csv']

const App = () => {

     const [data, setData] = useState([])

    const getExtension = (file) => {
        const parts = file.name.split('.')
        const extension = parts[parts.length - 1]
        return EXTENSIONS.includes(extension)
    }

    const convertToJson = (headers, data) => {
        const rows = []
        data.forEach(row => {
            let rowData = {}
            row.forEach((element, index) => {
                rowData[headers[index]] = element
            })
            rows.push(rowData)
        })
        return rows
    }

       const importExcel = (e) => {


        const file = e.target.files[0]

        const reader = new FileReader()
        reader.onload = (event) => {
            // parse data

            const bstr = event.target.result
            const workBook = XLSX.read(bstr, { type: "binary" })

            //Obtener primer documento
            const workSheetName = workBook.SheetNames[0]
            const workSheet = workBook.Sheets[workSheetName]

            // Convertir en array 
            const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })

            const headers = fileData[0]
            
            //removing header
            fileData.splice(0, 1)
            // remove table data

            setData(convertToJson(headers, fileData))
        }

        if (file) {
            if (getExtension(file)) {
                reader.readAsBinaryString(file)
            }
            else {
                alert("Invalid file input, Select Excel, CSV file")
            }
        }
        else {
            setData([])
        }

    }

   

    return (
        <div>
            <input type="file" onChange={importExcel} />
            <Form data={data}/>
        </div>
    )
}

export default App;

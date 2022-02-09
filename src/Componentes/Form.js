import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


import XLSX from 'xlsx';

//import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, Box, Select, InputLabel, FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@material-ui/core';

import { consts } from '../Helpers/consts';



const Form = ({ data }) => {

    const findInitDate = (data = []) => {
        const res = []
        for(let i = 0; i < data.length; i++){
            const obj = data[i]
            const {
                FechaInicioLlamado
            } = obj;
            if(FechaInicioLlamado) {
                res.push(FechaInicioLlamado)
            }
        }
        return res
    }

 
    const {
        register,
        handleSubmit,
    } = useForm();

    const {
        basetipollamadodiscador, 
        basecontactoejecutivo, 
        basetipollamado, 
        basecruceseguros, 
        contactos,
        ejecutivos
    } = consts();

    const [newRows, setnewRows] = useState([
        ...data
    ]);
    

    const validaTipoLlamado = (vtipollamado,x,y) => {

        let resultado = '';
         
 
        switch (vtipollamado) {
                case 'ejecutivo':
                    resultado = basecontactoejecutivo[x].respuesta
                    break;
                
                case 'discador':
                    resultado = basetipollamadodiscador[y]
                    break;

                case 'bot':
                    resultado = basetipollamadodiscador[y]
                    break;

                default:
                    resultado = 'undefined';
                    
        };
            return resultado
    
    };

    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [producto, setProducto] = useState();
    let vproducto = '';

    
    if (producto === 1) {vproducto = 'CONSUMO'} 
    else if (producto === 2) {vproducto = 'SAV'}
    else if (producto === 3) {vproducto = 'CTACTE'}
    else if (producto === 4) {vproducto = 'CMR'}



    const handleOnSubmit = (e) => {

        const tamano = data.length;
        let illamado = 0;
        let icontacto = 0;
        let iejecutivo = 0;
        let x = 0;
        let y = 0;
        let vUsuario = 0;
        let vNombre = '';
        let vId = '';
        let vRut = '';
        let vDv = '';
   

        if (tamano<min){

             for (let index = tamano+1; index < max; index++) {

                illamado !== basetipollamado.length - 1 ? illamado = illamado + 1 : illamado = 0;
                icontacto !== contactos.length - 1 ? icontacto = icontacto + 1 : icontacto = 0;
                iejecutivo !== ejecutivos.length - 1 ? iejecutivo = iejecutivo + 1 : iejecutivo = 0;
                x !== basecontactoejecutivo.length - 1 ? x = x + 1 : x = 0;
                y !== basetipollamadodiscador.length -1 ? y = y + 1 : y = 0;


                let vtipollamado = basetipollamado[illamado];
                let fechaInicio = new Date()
                let textInicio = fechaInicio.toString();
                let fechaTermino = new Date();


                if (basetipollamado[illamado] !== 'ejecutivo') {
                    vUsuario = 1001;
                    vNombre = '1001';
                    vId = '1001';
                    vRut = '10000001';
                    vDv = '1'
                }else {
                    vUsuario = ejecutivos[iejecutivo].usuario;
                    vNombre = ejecutivos[iejecutivo].nombreEjecutivo;
                    vId = ejecutivos[iejecutivo].idEjecutivo;
                    vRut = ejecutivos[iejecutivo].rutEjecutivo;
                    vDv = ejecutivos[iejecutivo].dvEjecutivo
                    let fechaT = fechaTermino.setSeconds(fechaInicio.getSeconds() + basecontactoejecutivo[x].segundos)
                    
                }
               
                let resultado = validaTipoLlamado(vtipollamado,x,y);
                

                data.push({
                    FechaInicioLlamado: fechaInicio,
                    FechaTerminoLlamado: fechaTermino,
                    Usuario: vUsuario,
                    NombreEjecutivo: vNombre,
                    IdEjecutivo: vId,
                    IdCliente: '1',
                    RutCliente: '+',
                    DvCliente: '+',
                    RutEjecutivo: vRut,
                    DvEjecutivo: vDv,
                    Celular: ' ',
                    BaseGestion: 'frio',
                    Producto: vproducto, 
                    CruceSeguros: 1,
                    TipoDeLlamado: vtipollamado,
                    Contacto: contactos[icontacto],
                    ResultadoLlamado: resultado
                });
            };

        };
        setnewRows([data]); 
    };  

        

    const downloadExcel = () => {

        const newData=data.map(row=>{
            
            delete row.tableData;
            return row 
        })

        const workSheet = XLSX.utils.json_to_sheet(newData)
        const workBook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook, workSheet, "Base_Resultante")

        // Buffer
        XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
        //Binary string
        XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
        //Download
        XLSX.writeFile(workBook, "BaseResultanteConsolidada.xlsx")
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <Box sx={{ mt: 1, display: 'flex', gap: 5 }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Cantidad de registros cargados en el archivo:
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        {data.length}
                    </Typography>
                </Box>
                <Box sx={{ mt: 1, display: 'flex', gap: 5 }}>
                    <TextField
                        margin='normal'
                        required
                        id="min"
                        type="number"
                        label="Valor minimo"
                        name="min"
                        autoComplete="min"
                        autoFocus
                        {...register("min", { required: true, min: 1, max: 15000 })}
                        onChange={(e) => setMin(e.target.value) }
   
                    />

                    <TextField
                        margin='normal'
                        required
                        id="max"
                        type="number"
                        label="Valor maximo"
                        name="max"
                        autoComplete="Max"
                        {...register("max", { required: true, max: 20000 })}
                        onChange={(e) => setMax(e.target.value) }
 
                        
                    />
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel id="product-label">Producto</InputLabel>
                            <Select value={producto} 
                                    onChange={(e) => setProducto(e.target.value)} 
                                    label="Producto" 
                                    ondisplayEmpty
                                    id='product-label'>
                                <MenuItem value={1}>CONSUMO</MenuItem>
                                <MenuItem value={2}>SAV</MenuItem>
                                <MenuItem value={3}>CTACTE</MenuItem>
                                <MenuItem value={4}>CMR</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>


                    <Button
                        type="submit"
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}

                    >
                        Agregar
                    </Button>

                    <Button
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                        onClick={()=> downloadExcel()}
                    >
                        Exportar a Excel
                    </Button>

                </Box>
            </form>
        </>
    );
};

export default Form

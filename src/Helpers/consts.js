import React from 'react';

export const consts = () => {
    
    const basetipollamadodiscador = ['Fuera de servicio','N° equivocado','No contesta','No contacto','Buzon de voz','Volver a llamar','Contesta tercero'];
  
    const basetipollamado = ['ejecutivo','discador','bot'];

    const basecontactoejecutivo = [
        { respuesta: 'No contesta', segundos:  17},
        { respuesta: 'N° equivocado', segundos: 37},
        { respuesta: 'Cotiza', segundos: 162},
        { respuesta: 'Ya lo contrato', segundos: 91 },
        { respuesta: 'Lo pensara', segundos: 200},
        { respuesta: 'Cliente Inubicable', segundos: 48},
        { respuesta: 'Buzón de Voz', segundos: 25},
        { respuesta: 'Solicita nuevo llamado', segundos: 97},
        { respuesta: 'Venta en línea /web/app', segundos: 308},
        { respuesta: 'Venta sucursal/call interno', segundos: 63},
        { respuesta: 'Seguimiento', segundos: 66},
        { respuesta: 'Atendido por otro ejecutivo', segundos: 59},
        { respuesta: 'Venta/ descarga fallida', segundos: 125},
        { respuesta: 'No Califica', segundos: 206},
        { respuesta: 'Otros', segundos: 53},
        { respuesta: 'Rechazo Cliente', segundos: 49},
        { respuesta: 'Volver a Llamar', segundos: 39}
      ];

    const basecruceseguros = [0,1];

    const contactos = ['Si Titular','No contacto','Si Tercero'];

    const ejecutivos = [
          {usuario:1037, nombreEjecutivo:'Manuel Martinez',	idEjecutivo: '69496555',	rutEjecutivo: '6949655', dvEjecutivo: '5'},
          {usuario: 1113, nombreEjecutivo: 'Juan Porma', idEjecutivo: '135664448', rutEjecutivo: '13566444', dvEjecutivo: '8'},
          {usuario: 1130, nombreEjecutivo: 'Jonathan Campos', idEjecutivo: '189621957', rutEjecutivo: '18962195', dvEjecutivo: '7'},
          {usuario: 1254, nombreEjecutivo: 'Patricia Retamal', idEjecutivo: '93906055', rutEjecutivo: '9390605', dvEjecutivo: '5'},
          {usuario: 1277, nombreEjecutivo: 'Aaron Salazar', idEjecutivo: '182466433', rutEjecutivo: '18246643', dvEjecutivo: '3'},
          {usuario: 1499, nombreEjecutivo: 'Yessenia Parra', idEjecutivo: '271720955', rutEjecutivo: '27172095', dvEjecutivo: '5'},		
          {usuario: 1600, nombreEjecutivo: 'Edith Barra', idEjecutivo: '74745422', rutEjecutivo: '7474542', dvEjecutivo: '2'},		
          {usuario: 1730, nombreEjecutivo: 'Camila Arredondo', idEjecutivo: '193934013', rutEjecutivo: '19393401', dvEjecutivo: '3'},		
          {usuario: 1744, nombreEjecutivo: 'Ximena Correa', idEjecutivo: '177819921', rutEjecutivo: '17781992', dvEjecutivo: '1'},
          {usuario: 1747, nombreEjecutivo: 'Dariana Avila', idEjecutivo: '268108009', rutEjecutivo: '26810800', dvEjecutivo: '9'},		
          {usuario: 1823, nombreEjecutivo: 'Luis Rincones', idEjecutivo: '253605022', rutEjecutivo: '25360502', dvEjecutivo: '2'},		
          {usuario: 1959, nombreEjecutivo: 'Maria Leyton', idEjecutivo: '112988009', rutEjecutivo: '11298800', dvEjecutivo: '9'},		
          {usuario: 2083, nombreEjecutivo: 'Cesar Castro', idEjecutivo: '274530502', rutEjecutivo: '27453050', dvEjecutivo: '2'},
          {usuario: 2111, nombreEjecutivo: 'Vielka Guerrero', idEjecutivo: '255855859', rutEjecutivo: '25585585', dvEjecutivo: '9'},	
          {usuario: 2122, nombreEjecutivo: 'Leidy Cortes', idEjecutivo: '270698492', rutEjecutivo: '27069849', dvEjecutivo: '2'},
          {usuario: 2161, nombreEjecutivo: 'Nancy Gallegos', idEjecutivo: '89250455', rutEjecutivo:'8925045', dvEjecutivo: '5'},
          {usuario: 2186, nombreEjecutivo: 'Mario Medina', idEjecutivo: '274138793', rutEjecutivo: '27413879', dvEjecutivo: '3'},
          {usuario: 2219, nombreEjecutivo: 'Luis Gil', idEjecutivo: '271306814', rutEjecutivo: '27130681', dvEjecutivo: '4'},		
          {usuario: 2250, nombreEjecutivo: 'Fraymar Garcia', idEjecutivo: '266865694', rutEjecutivo: '26686569', dvEjecutivo: '4'},		
          {usuario: 2251, nombreEjecutivo: 'Gonzalo Perez', idEjecutivo: '13448117k',	rutEjecutivo: '13448117', dvEjecutivo: 'K'},
          {usuario: 2267, nombreEjecutivo: '	Patricio Rifo', idEjecutivo: '126660162', rutEjecutivo: '12666016', dvEjecutivo: '2'},
          {usuario: 2268, nombreEjecutivo: 'Milagros Riera', idEjecutivo: '270508820', rutEjecutivo: '2705088', dvEjecutivo: '0'},
          {usuario: 2271, nombreEjecutivo: 'Rita Salas', idEjecutivo: '90231596', rutEjecutivo: '9023159', dvEjecutivo: '6'},
          {usuario: 2324, nombreEjecutivo: 'Carolina Alveal', idEjecutivo: '270409547', rutEjecutivo: '27040954', dvEjecutivo: '7'},
          {usuario: 2328, nombreEjecutivo: 'Damaris Manque', idEjecutivo: '192316472', rutEjecutivo: '19231647', dvEjecutivo: '2'},
          {usuario: 2348, nombreEjecutivo: 'Yarlimar Gomez', idEjecutivo: '265436676', rutEjecutivo: '26543667', dvEjecutivo: '6'},
          {usuario: 2349, nombreEjecutivo: 'Federico Chañu', idEjecutivo: '269019638', rutEjecutivo: '26901963', dvEjecutivo: '8'},
          {usuario: 2354, nombreEjecutivo: 'Ramiro Reid', idEjecutivo: '184588471', rutEjecutivo: '18458847', dvEjecutivo: '1'},
          {usuario: 2358, nombreEjecutivo: 'Johana Delgado', idEjecutivo: '261508230', rutEjecutivo: '26150823', dvEjecutivo: '0'},
          {usuario: 2362, nombreEjecutivo: 'Karen Caicedo', idEjecutivo: '248790660', rutEjecutivo: '24879066', dvEjecutivo: '0'},
          {usuario: 2363, nombreEjecutivo: 'Francelis Pinto', idEjecutivo: '269088478', rutEjecutivo: '26908847', dvEjecutivo: '8'},
          {usuario: 2368,	nombreEjecutivo: 'Rodrigo Fernandez', idEjecutivo: '182999946', rutEjecutivo: '18299994', dvEjecutivo: '6'},
          {usuario:	2393,	nombreEjecutivo: 'Luisa Zapata', idEjecutivo: '268995544', rutEjecutivo: '26899554', dvEjecutivo: '4'},
          {usuario: 2394,	nombreEjecutivo: 'Karolyn Perdomo', idEjecutivo: '273217304', rutEjecutivo: '27321730', dvEjecutivo: '4'},
          {usuario: 2395,	nombreEjecutivo: 'Janett Gutierrez', idEjecutivo: '442426783', rutEjecutivo: '44242678',  dvEjecutivo: '3'},
          {usuario: 2397,	nombreEjecutivo: 'Jose Catalan', idEjecutivo: '260726528', rutEjecutivo: '26072652', dvEjecutivo: '8'},
          {usuario: 2399,	nombreEjecutivo: 'Flor Naveda', idEjecutivo: '157902695', rutEjecutivo: '15790269', dvEjecutivo: '5'},
          {usuario: 2403,	nombreEjecutivo: 'Anara Gonzalez', idEjecutivo: '268909273', rutEjecutivo: '26890927', dvEjecutivo: '3'},
          {usuario: 404,	nombreEjecutivo: 'Cristopher Maidana', idEjecutivo: '157902695', rutEjecutivo: '15790269', dvEjecutivo: '5'},
          {usuario: 2406,	nombreEjecutivo: 'Julia Caro', idEjecutivo: '159601498', rutEjecutivo: '15960149', dvEjecutivo: '8'},
          {usuario: 2407,	nombreEjecutivo: 'Jorge Youssef', idEjecutivo: '268909516', rutEjecutivo: '26890951', dvEjecutivo: '6'},
          {usuario: 2408,	nombreEjecutivo: 'Maria Carrasco', idEjecutivo: '190256243', rutEjecutivo: '19025624', dvEjecutivo: '3'},
          {usuario: 2409,	nombreEjecutivo: 'Laura Duarte', idEjecutivo: '270819702', rutEjecutivo: '27081970', dvEjecutivo: '2'},
          {usuario: 2410,	nombreEjecutivo: 'Vanesa Cabrera', idEjecutivo: '273753478', rutEjecutivo: '27375347', dvEjecutivo: '8'},
          {usuario: 2411,	nombreEjecutivo: 'Nairobi Francois', idEjecutivo: '268845909', rutEjecutivo: '26884590', dvEjecutivo: '9'}, 
          {usuario: 2412,	nombreEjecutivo: 'Elizabeth Hidalgo', idEjecutivo: '137575825', rutEjecutivo: '13757582', dvEjecutivo: '5'},
          {usuario: 2413,	nombreEjecutivo: 'Dayana Lopez', idEjecutivo: '257259595', rutEjecutivo: '25725959', dvEjecutivo: '5'},
          {usuario: 2414,	nombreEjecutivo: 'Shamanda Abarca', idEjecutivo: '157005308', rutEjecutivo: '15700530', dvEjecutivo: '8'},
          {usuario: 2415,	nombreEjecutivo: 'Carlos Narvaez', idEjecutivo: '189971311', rutEjecutivo: '18997131', dvEjecutivo: '1'},
          {usuario: 2416,	nombreEjecutivo: 'Carlos Dugarte', idEjecutivo: '268235205', rutEjecutivo: '26823520', dvEjecutivo: '5'},
          {usuario: 2417,	nombreEjecutivo: 'Petra Herrera', idEjecutivo: '267929467', rutEjecutivo: '26792946', dvEjecutivo: '7'},
          {usuario: 2420,	nombreEjecutivo: 'Wuilmary Chirino', idEjecutivo: '271152485', rutEjecutivo: '27115248', dvEjecutivo: '5'},
          {usuario: 2422,	nombreEjecutivo: 'Maria Rincon', idEjecutivo: '27173607K', rutEjecutivo: '27173607', dvEjecutivo: 'K'},
          {usuario: 2423,	nombreEjecutivo: 'Jesus Veroes', idEjecutivo: '271604459', rutEjecutivo: '27160445', dvEjecutivo: '9'},
          {usuario: 2424,	nombreEjecutivo: 'Ignacio Montenegro', idEjecutivo: '18914895K', rutEjecutivo: '18914895', dvEjecutivo: 'K'},
          {usuario: 2426,	nombreEjecutivo: 'Denis Arancibia', idEjecutivo: '185022110', rutEjecutivo: '18502211', dvEjecutivo: '0'},
          {usuario: 2427,	nombreEjecutivo: 'Melanie Gauti', idEjecutivo: '270339433', rutEjecutivo: '27033943', dvEjecutivo: '3'},
          {usuario: 2428,	nombreEjecutivo: 'Yaritza Castillo', idEjecutivo: '171898226', rutEjecutivo: '17189822', dvEjecutivo: '6'},
          {usuario: 2266,	nombreEjecutivo: 'Jenny Castro', idEjecutivo: '268453415', rutEjecutivo: '26845341', dvEjecutivo: '5'},
          {usuario: 2270,	nombreEjecutivo: 'Daniel Riquelme', idEjecutivo: '185584739', rutEjecutivo: '18558473', dvEjecutivo: '9'},
          {usuario: 2398,	nombreEjecutivo: 'Gabriel Alfaro', idEjecutivo: '442426783', rutEjecutivo: '44242678', dvEjecutivo: '3'},
          {usuario: 2425,	nombreEjecutivo: 'Jose Lozada', idEjecutivo: '271589751', rutEjecutivo: '27158975', dvEjecutivo: '1'},
          {usuario: 2429,	nombreEjecutivo: 'Yanira Gauti', idEjecutivo: '269365501', rutEjecutivo: '26936550', dvEjecutivo: '1'}
        ];

  return {basetipollamadodiscador, basecontactoejecutivo, basetipollamado, basecruceseguros, contactos, ejecutivos};
};

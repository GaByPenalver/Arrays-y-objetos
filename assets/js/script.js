document.write('<h1>Estadísticas Centro Médico Ñuñoa</h1>');
document.write('<table>');

let consultaRadiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];


let consultaTraumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
];

let consultaDental = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];


document.write(
    `<table border='1'>
    <tr><th colspan="5" style="text-align: center;">CONSULTAS RADIOLOGÍA</th></tr>
    <tr>
    <th>Hora</th>
    <th>Especialista</th>
    <th>Paciente</th>
    <th>RUT</th>
    <th>Previsión</th>
    </tr>`
);

consultaRadiologia.forEach((consulta) => {
    document.write(`<tr>
        <td>${consulta.hora}</td>
        <td>${consulta.especialista}</td>
        <td>${consulta.paciente}</td>
        <td>${consulta.rut}</td>
        <td>${consulta.prevision}</td>
    </tr>`);
});

document.write("</table>");


document.write(
    `<p style="text-align: center;"><strong>PRIMERA ATENCIÓN RADIOLOGÍA:</strong> ${consultaRadiologia[0].paciente} - ${consultaRadiologia[0].prevision}</p>`
);
document.write(
    `<p style="text-align: center;"><strong>ÚLTIMA ATENCIÓN RADIOLOGÍA:</strong> ${consultaRadiologia[consultaRadiologia.length - 1].paciente} - ${consultaRadiologia[consultaRadiologia.length - 1].prevision}</p>`
);







document.write(
    `<table border='1'>
    <tr><th colspan="5" style="text-align: center;">CONSULTAS TRAUMATOLOGÍA</th></tr>
    <tr>
    <th>Hora</th>
    <th>Especialista</th>
    <th>Paciente</th>
    <th>RUT</th>
    <th>Previsión</th>
    </tr>`
);

consultaTraumatologia.forEach((consulta) => {
    document.write(`<tr>
        <td>${consulta.hora}</td>
        <td>${consulta.especialista}</td>
        <td>${consulta.paciente}</td>
        <td>${consulta.rut}</td>
        <td>${consulta.prevision}</td>
    </tr>`);
});

document.write("</table>");




document.write(`<p style="text-align: center;"><strong>PRIMERA ATENCIÓN TRAUMATOLOGÍA:</strong> ${consultaTraumatologia[0].paciente} - ${consultaTraumatologia[0].prevision}</p>`);
document.write(`<p style="text-align: center;"><strong>ÚLTIMA ATENCIÓN TRAUMATOLOGÍA:</strong> ${consultaTraumatologia[consultaTraumatologia.length - 1].paciente} - ${consultaTraumatologia[consultaTraumatologia.length - 1].prevision}</p>`);


document.write(
    `<table border='1'>
    <tr><th colspan="5" style="text-align: center;">CONSULTAS DENTAL</th></tr>
    <tr>
    <th>Hora</th>
    <th>Especialista</th>
    <th>Paciente</th>
    <th>RUT</th>
    <th>Previsión</th>
    </tr>`
);

for (let i = 0; i < consultaDental.length; i++) {
    document.write(`<tr>
        <td>${consultaDental[i].hora}</td>
        <td>${consultaDental[i].especialista}</td>
        <td>${consultaDental[i].paciente}</td>
        <td>${consultaDental[i].rut}</td>
        <td>${consultaDental[i].prevision}</td>
    </tr>`);
}


document.write("</table>");
document.write(`<p style="text-align: center;"><strong>PRIMERA ATENCIÓN DENTAL:</strong> ${consultaDental[0].paciente} - ${consultaDental[0].prevision}</p>`);
document.write(`<p style="text-align: center;"><strong>ÚLTIMA ATENCIÓN DENTAL:</strong> ${consultaDental[consultaDental.length - 1].paciente} - ${consultaDental[consultaDental.length - 1].prevision}</p>`);

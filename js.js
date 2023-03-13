alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);

eleccionDelUsuario = prompt("digite la opcion deseada: ")


if(eleccionDelUsuario == 1){
    datos = prompt("digite su lista de compras separada por comas");
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
}


supermercado ={};
if (eleccionDelUsuario == 2){ 
        supermercado.nombreSupermercado = prompt("ingrese el nombre del supermercado")
        { 
            listaSecundaria = []
        }
    
        supermercado.craSupermercado = prompt("ingrese la direccion del supermercado")
        alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
        eleccionDelUsuario = prompt("digite la opcion deseada: ")


    }
 
if(eleccionDelUsuario == 3){
    console.log(("supermercado: ")+supermercado.nombreSupermercado +("direccion: ")+ supermercado.craSupermercado);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
}

    let listaCompras = []
 
if (eleccionDelUsuario==5){
    listaCompras = datos.split(",")
    for (let i = 0; i < listaCompras.length; i++) {
        console.log("su lista de compras es:"+listaCompras[i]); }
        alert(`----Menu----
        1. lectura de datos 
        2 crear objeto
        3 mostrar objeto
        5 mostrar array
        6 elimine primer elemento del array
        7 elimine ultimo elemento del array
        8 elimine cualquier elemento del array
        9 agregar elemento al comienzo del array
        10 agregar elemento al final del array
        11 crear array en objetos
        12 iterar array con objetos con for
        13 iterar array con odjetos con foreach
        14 iterar array con odjetos con map y crear copia
        15 proceso personal
        0 para salir del programa`);
            eleccionDelUsuario = prompt("digite la opcion deseada: ")

}

if(eleccionDelUsuario==6){
    listaCompras.shift();
    console.log(listaCompras);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
}
if(eleccionDelUsuario==7){
    listaCompras.pop(),
    console.log(listaCompras);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
}
if(eleccionDelUsuario==8){
    listaCompras.splice();
    console.log(listaCompras);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
}if(eleccionDelUsuario==9){
    nuevoElemnto = prompt("digite el nuevo objeto a colocar al incio de la lista")
    listaCompras.unshift(nuevoElemnto);
    console.log(listaCompras);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}if(eleccionDelUsuario==10){
    nuevoElemntoFinal = prompt("digite el nuevo objeto a colocar al final de la lista")
    listaCompras.push(nuevoElemntoFinal);
    console.log(listaCompras);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}if(eleccionDelUsuario==11){
    listaSecundaria = prompt("ingrese otras cosas a comprara no muy relevantes separados por comas");
    
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}if(eleccionDelUsuario==12){
    
    for (let i = 0; i < listaSecundaria.length; i++) {
        console.log(listaSecundaria);
    }
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}if(eleccionDelUsuario==13){
    listaSecundaria.forEach(nose=> {
        console.log(nose.listaSecundaria);
    });
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}if(eleccionDelUsuario==14){
    listaSecundaria.map((nose)=>{
        console.log(nose.listaSecundaria);
    })
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}
if(eleccionDelUsuario==15){
    listaSecundaria.length
    console.log(listaSecundaria);
    alert(`----Menu----
1. lectura de datos 
2 crear objeto
3 mostrar objeto
5 mostrar array
6 elimine primer elemento del array
7 elimine ultimo elemento del array
8 elimine cualquier elemento del array
9 agregar elemento al comienzo del array
10 agregar elemento al final del array
11 crear array en objetos
12 iterar array con objetos con for
13 iterar array con odjetos con foreach
14 iterar array con odjetos con map y crear copia
15 proceso personal
0 para salir del programa`);
    eleccionDelUsuario = prompt("digite la opcion deseada: ")
    
}

if(eleccionDelUsuario ==0){
    console.log("fin del programa");
}




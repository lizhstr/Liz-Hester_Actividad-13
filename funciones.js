const amigos = [];

while (true) {
   let nombre = prompt('Inregesa el nombre de tu amig@');

   if (nombre !== 'fin') {
       amigos.push(nombre);
   } else {
       break;
   }
}

console.table(amigos);
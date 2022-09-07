// funcion de numeros aleatorios
const random = () => Math.floor(Math.random() * 9);

// generador de mensajes
const message = () => {
  let num = random();
  switch (num) {
    case 0:
      return "";
  }
};

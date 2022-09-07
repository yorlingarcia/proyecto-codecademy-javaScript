// funcion de numeros aleatorios
const random = (num) => Math.floor(Math.random() * num);

// Frases de motivacion personal
const professional_motivation = () => {
  let num = random(6);
  switch (num) {
    case 0:
      return "El único modo de hacer un gran trabajo es amar lo que haces - Steve Jobs";
    case 1:
      return "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo - Michael Jordan";
    case 2:
      return "El dinero no es la clave del éxito; la libertad para poder crear lo es - Nelson Mandela";
    case 3:
      return "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica - Aristóteles";
    case 4:
      return "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida - Confucio";
    case 5:
      return "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro - Colin Powell";
  }
};

// frases motivadoras cortas
const short_motivation = () => {
  let num = random(5);
  switch (num) {
    case 0:
      return "Cuando pierdas, no pierdas la lección - Dalai Lama ";
    case 1:
      return "La vida es una aventura, atrévete - Teresa de Calcuta";
    case 2:
      return "Siempre parece imposible... hasta que se hace - Nelson Mandela";
    case 3:
      return "No dejes que el miedo se interponga en tu camino - Babe Ruth";
    case 4:
      return "El mejor momento del día es ahora - Pierre Bonnard";
  }
};

// generador de mensajes
const message = () => {
  let num = random(2);
  switch (num) {
    case 0:
      console.log(professional_motivation());
      break;
    case 1:
      console.log(short_motivation());
      break;
  }
};

message();

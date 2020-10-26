const pattern = /^[ABC]/; // new Regexp("^m")
const result = pattern.test("Comenzando con las expresiones regulares"); // true
result
  ? console.log("Patron aprobado")
  : console.log("no se cumplió el patron");

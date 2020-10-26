const validateNA = (e) => {
  const { value: string, id } = e.target;
  const pattern = /^[a-zA-Z]{1}[a-z]{1,16}/;
  validate(pattern, string, `l${id}`);
};

const validateEmail = (e) => {
  const { value: string, id } = e.target;
  const pattern = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})/;
  validate(pattern, string, `l${id}`);
};
const validateTel = (e) => {
  const { value: string, id } = e.target;
  const pattern = /(\+54)\s?\d{2}\s?-?\d{4}\s?-?\d{4}$/;
  validate(pattern, string, `l${id}`);
};
const validateDate = (e) => {
  const { value: string, id } = e.target;
  const pattern = /([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
  validate(pattern, string, `l${id}`);
};

// validatePassword()
const validate = (pattern, string, id) => {
  console.log(pattern, string, id);
  pattern.test(string)
    ? (document.getElementById(id).innerHTML = "")
    : (document.getElementById(id).innerHTML = "Campo invalido");
};

const start = () => {
  document.getElementById("nombre").addEventListener("blur", validateNA);
  document.getElementById("apellido").addEventListener("blur", validateNA);
  document.getElementById("mail").addEventListener("blur", validateEmail);
  document.getElementById("tel").addEventListener("blur", validateTel);
  document.getElementById("date").addEventListener("blur", validateDate);
  document.getElementById("patente").addEventListener("blur", validateDate);
};

window.onload = start;

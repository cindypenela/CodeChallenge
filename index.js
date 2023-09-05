document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const Button = document.getElementById("enviar");

  Button.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha").value;

    const formData = {
      valor1: nombre,
      valor2: apellido,
      valor3: fechaNacimiento,
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos enviados correctamente:");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
  });
});

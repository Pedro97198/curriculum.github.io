// Get the submit button and success message elements
const submitButton = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');

// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate form submission (replace this with your actual submission logic)
  console.log('Form submitted!');

  // Show the success message
  successMessage.style.display = 'block';
});

// Obtener la referencia al contenedor principal y al botón de flecha de regreso
const container = document.querySelector('.container');
const backArrow = document.querySelector('.back-arrow');

// Agregar un evento de clic al botón de flecha de regreso
backArrow.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
  // Ocultar el contenedor principal con animación
  container.classList.add('hidden');
  
  // Redirigir a la página principal después de la animación
  setTimeout(function() {
    window.location.href = '../index.html';
  }, 500); // 500 milisegundos (0.5 segundos) corresponden a la duración de la animación
});

// Obtener el elemento del campo de teléfono
const phoneInput = document.getElementById('phone');

// Agregar un evento de escucha para el evento "input"
phoneInput.addEventListener('input', function(event) {
  // Obtener el valor actual del campo de teléfono
  let currentValue = phoneInput.value;

  // Filtrar solo los dígitos numéricos
  let newValue = currentValue.replace(/\D/g, '');

  // Actualizar el valor del campo de teléfono con solo dígitos numéricos
  phoneInput.value = newValue;
});

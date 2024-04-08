document.addEventListener('DOMContentLoaded', function() {
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentsContainer = document.getElementById('appointments');

  appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    if (patientName.trim() === '' || appointmentTime.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const appointment = document.createElement('div');
    appointment.classList.add('appointment');
    appointment.innerHTML = `
      <strong>Patient Name:</strong> ${patientName}<br>
      <strong>Appointment Time:</strong> ${appointmentTime}
    `;
    appointmentsContainer.appendChild(appointment);

    // Clear form fields
    document.getElementById('patientName').value = '';
    document.getElementById('appointmentTime').value = '';
  });
});

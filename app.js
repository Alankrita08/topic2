const Devices = JSON.parse(localStorage.getItem('devices')) || [];

Devices.forEach(function (device) {
  $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.email}</td>
        <td>${device.date}</td>
        <td>${device.name}</td>
        <td>${device.version}</td>
      </tr>`
  );
});

$('#add-device').on('click', function () {
  const user = $('#user').val();
  const email = $('#email').val();
  const date = $('#date').val();
  const name = $('#name').val();
  const version = $('#version').val();
  Devices.push({ user, email, date, name, version });
  localStorage.setItem('devices', JSON.stringify(Devices));
  location.href = 'device-list.html';
});


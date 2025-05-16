function getFormvalue(event) {
  event.preventDefault(); 
  const form = document.getElementById('nameForm');
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  const fullName = `${firstName} ${lastName}`.trim();

  alert(fullName);
}

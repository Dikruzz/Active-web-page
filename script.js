function addetails() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.getElementById("gender").value;
    let food = document.getElementById("food").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
  
    let tbody = document.getElementsByTagName("tbody");
    let tablerow = document.createElement("TR");
    tablerow.innerHTML = `<td>${firstname}</td>
  <td>${lastname}</td>
  <td>${address}</td>
  <td>${pincode}</td>
  <td>${gender}</td>
  <td>${food}</td>
  <td>${state}</td>
  <td>${country}</td>`;
    tbody[0].appendChild(tablerow);
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
  }
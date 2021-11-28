const form = document.querySelector("#form");
//const table = document.querySelector("#tableContent");
const submit = document.querySelector("#submit");

let row = 1;

submit.addEventListener("click", (event) => {
	event.preventDefault();

	const fullName = document.querySelector("#fullname").value;
	const email = document.querySelector("#email").value;
	const city = document.querySelector("#city").value;
	const country = document.querySelector("#country").value;
	const table = document.querySelector("#tableContent");
	const newRow = table.insertRow(row);
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	const cell3 = newRow.insertCell(2);
	const cell4 = newRow.insertCell(3);
	const cell5 = newRow.insertCell(4);

	cell1.innerHTML = fullName;
	cell2.innerHTML = email;
	cell3.innerHTML = city;
	cell4.innerHTML = country;
	cell5.innerHTML = `<button id="update"> Update</button>  
    <button id="delete"> Delete<button>`;
	row++;
});

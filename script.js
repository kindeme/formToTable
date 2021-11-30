let selectRow = null;

function onFormSubmit(event) {
	event.preventDefault();
	let formData = readFormData();
	// if ((selectRow = null)) {
	insertNewRecord(formData);
	//} else {
	//updateRecords(formData);
	resetForm();
	//}
	resetForm();
}

function readFormData() {
	let formData = {};
	formData["fullname"] = document.querySelector("#fullname").value;
	formData["email"] = document.querySelector("#email").value;
	formData["city"] = document.querySelector("#city").value;
	formData["country"] = document.querySelector("#country").value;
	return formData;
}

function insertNewRecord(data) {
	const table = document
		.querySelector("#tableContent")
		.getElementsByTagName("tbody")[0];
	const newRow = table.insertRow(table.length);
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	const cell3 = newRow.insertCell(2);
	const cell4 = newRow.insertCell(3);
	const cell5 = newRow.insertCell(4);

	cell1.innerHTML = data.fullname;
	cell2.innerHTML = data.email;
	cell3.innerHTML = data.city;
	cell4.innerHTML = data.country;
	cell5.innerHTML = `<a href="#" onclick="onEdit(this)"> Edit </a>  &nbsp&nbsp
    <a href="#" onclick="onDelete(this)"> Delete </a>`;
}

function resetForm() {
	document.querySelector("#fullname").value = "";
	document.querySelector("#email").value = "";
	document.querySelector("#city").value = "";
	document.querySelector("#country").value = "";
	selectRow = null;
}

function onEdit(td) {
	selectRow = td.parentElement.parentElement;
	document.querySelector("#fullname").value = selectRow.cells[0].innerHTML;
	document.querySelector("#email").value = selectRow.cells[1].innerHTML;
	document.querySelector("#city").value = selectRow.cells[2].innerHTML;
	document.querySelector("#country").value = selectRow.cells[3].innerHTML;
}

// function updateRecords(formData) {
// 	selectRow.cells[0].innerHTML = formData.fullName;
// 	selectRow.cells[1].innerHTML = formData.email;
// 	selectRow.cells[2].innerHTML = formData.city;
// 	selectRow.cells[3].innerHTML = formData.country;
// }

function onDelete(td) {
	if (confirm("Are you sure to delete this record ?")) {
		let row = td.parentElement.parentElement;
		document.querySelector("#tableContent").deleteRow(row.rowIndex);
		resetForm();
	}
}

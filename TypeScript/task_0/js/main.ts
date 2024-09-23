interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'Bordeaux'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 35,
    location: 'Paris'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const header = table.createTHead();
const row = header.insertRow();
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';

row.appendChild(th1);
row.appendChild(th2);

const tableBody = table.createTBody();
studentsList.forEach(student => {
    const row = tableBody.insertRow();
    const td1 = row.insertCell();
    const td2 = row.insertCell();
    td1.textContent = student.firstName;
    td2.textContent = student.location;
});

document.body.appendChild(table);

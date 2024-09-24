interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher: Teacher = {
  firstName: 'Jimmy',
  lastName: 'Hendrix',
  fullTimeEmployee: false,
  yearsOfExperience: 12,
  location: 'Washington',
  contract: false,
};

console.log(teacher);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
  firstName: 'Jimmy',
  lastName: 'Hendrix',
  location: 'Washington',
  fullTimeEmployee: true,
  contract: true,
  numberOfReports: 17,
};
console.log(director);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentConstructorClass {
    new (firstName: string, lastName: string): StudentInterfaceClass;
}

interface StudentInterfaceClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements StudentInterfaceClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass('Jimmy', 'Hendrix');
console.log(student.workOnHomework());
console.log(student.displayName());

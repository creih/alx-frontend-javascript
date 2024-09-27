/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// Create and export constants for each subject
export const cpp = new Subjects.Cpp(new Subjects.Teacher('John', 'Doe'));
export const java = new Subjects.Java(new Subjects.Teacher('Jane', 'Smith'));
export const react = new Subjects.React(new Subjects.Teacher('James', 'Brown'));

// Create and export a Teacher object with experienceTeachingC
export const cTeacher: Subjects.Teacher = { firstName: 'Guillaume', lastName: 'Salva', experienceTeachingC: 10 };

// Test the Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Test the Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Test the React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

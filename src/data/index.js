//example user
export const users = {
  id: 1, //user id will be auto generated
  name: "John Doe",
  email: "johndoe@example.com",
  phoneNumber: "123-456-7890",
  password: "hashedpassword", //passwords will be hashed
};

//example student
export const students = {
  id: 1,
  userId: 1, //Associate student with user
  name: "Jane Doe",
  address: "123 Main St, Anytown, USA",
  birthDate: "01-01-1995",
};

// example class
export const classes = {
  id: 1,
  name: "Math 101",
  subject: "Mathematics",
  schedule: "MWF 08:00-09:00",
};

//example hours
export const hours = {
  id: 1,
  studentId: 1, //Associate hours with student
  classId: 1, //Associate hours with class
  date: "08-13-2024",
  hours: 2,
  grade: "A",
};

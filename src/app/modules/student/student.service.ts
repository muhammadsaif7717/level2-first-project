import { Student } from './student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {


  if (await Student.isUserExists(studentData.id)) {
    throw new Error(`User alrady exists!`)
  }


  const result = await Student.create(studentData);

  



  // const student = new Student(studentData); // create nstance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error(`User alrady exists!`)
  // }

  // const result = await student.save()//built in method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};

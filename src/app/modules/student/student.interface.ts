export type TAddress = {
  street: string;
  city: string;
  zipCode: string;
};

export type TLocalGuardian = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
export type TStudent = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber?: string;
  studentID: number;
  major: string;
  enrolledCourses: string[];
  address: TAddress;
  isInternationalStudent: boolean;
  graduationYear: number;
  bloodGroup: string;
  permanentAddress: TAddress;
  localGuardian?: TLocalGuardian;
};

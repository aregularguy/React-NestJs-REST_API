export interface User {
    id?: string;
    name: string;
    email: string;
    phoneNumber: string; // Assuming phone number is a string (it can also be stored as a number if needed)
    dateOfBirth: string; // Assuming date of birth is stored as a Date object
  }
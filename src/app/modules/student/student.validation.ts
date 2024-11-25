import Joi from 'joi';
import { z } from 'zod';

// creatimg a scema vallidation using joy

export const studentJoiValidationSchema = Joi.object({
  id: Joi.string().min(5).max(20).required().messages({
    'string.base': 'ID must be a string.',
    'string.min': 'ID must be at least 5 characters long.',
    'string.max': 'ID cannot exceed 20 characters.',
    'any.required': 'ID is required.',
  }),
  name: Joi.object({
    firstName: Joi.string().max(50).min(2).required().messages({
      'string.base': 'First name must be a string.',
      'string.max': 'First name cannot exceed 50 characters.',
      'string.min': 'First name must be at least 2 characters long.',
      'any.required': 'First name is required.',
    }),
    middleName: Joi.string().max(50).allow('').messages({
      'string.base': 'Middle name must be a string.',
      'string.max': 'Middle name cannot exceed 50 characters.',
    }),
    lastName: Joi.string().max(50).min(2).required().messages({
      'string.base': 'Last name must be a string.',
      'string.max': 'Last name cannot exceed 50 characters.',
      'string.min': 'Last name must be at least 2 characters long.',
      'any.required': 'Last name is required.',
    }),
  })
    .required()
    .messages({
      'object.base': 'Name must be an object.',
      'any.required': 'Name is required.',
    }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not a valid gender.',
    'any.required': 'Gender is required.',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.base': 'Date of birth must be a string.',
    'any.required': 'Date of birth is required.',
  }),
  email: Joi.string().email().required().max(100).messages({
    'string.email': 'Email must be a valid email address.',
    'string.max': 'Email cannot exceed 100 characters.',
    'any.required': 'Email is required.',
  }),
  contactNo: Joi.string().min(10).max(15).required().messages({
    'string.base': 'Contact number must be a string.',
    'string.min': 'Contact number must be at least 10 characters long.',
    'string.max': 'Contact number cannot exceed 15 characters.',
    'any.required': 'Contact number is required.',
  }),
  emergencyContactNo: Joi.string().min(10).max(15).required().messages({
    'string.base': 'Emergency contact number must be a string.',
    'string.min':
      'Emergency contact number must be at least 10 characters long.',
    'string.max': 'Emergency contact number cannot exceed 15 characters.',
    'any.required': 'Emergency contact number is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': '{#value} is not a valid blood group.',
      'any.required': 'Blood group is required.',
    }),
  presentAddress: Joi.string().max(100).required().messages({
    'string.base': 'Present address must be a string.',
    'string.max': 'Present address cannot exceed 100 characters.',
    'any.required': 'Present address is required.',
  }),
  parmanentAddress: Joi.string().max(100).required().messages({
    'string.base': 'Permanent address must be a string.',
    'string.max': 'Permanent address cannot exceed 100 characters.',
    'any.required': 'Permanent address is required.',
  }),
  guardian: Joi.object({
    fatherName: Joi.string().max(50).required().messages({
      'string.base': "Father's name must be a string.",
      'string.max': "Father's name cannot exceed 50 characters.",
      'any.required': "Father's name is required.",
    }),
    fatherOccupation: Joi.string().max(50).required().messages({
      'string.base': "Father's occupation must be a string.",
      'string.max': "Father's occupation cannot exceed 50 characters.",
      'any.required': "Father's occupation is required.",
    }),
    fatherContactNo: Joi.string().min(10).max(15).required().messages({
      'string.base': "Father's contact number must be a string.",
      'string.min':
        "Father's contact number must be at least 10 characters long.",
      'string.max': "Father's contact number cannot exceed 15 characters.",
      'any.required': "Father's contact number is required.",
    }),
    motherName: Joi.string().max(50).required().messages({
      'string.base': "Mother's name must be a string.",
      'string.max': "Mother's name cannot exceed 50 characters.",
      'any.required': "Mother's name is required.",
    }),
    motherOccupation: Joi.string().max(50).required().messages({
      'string.base': "Mother's occupation must be a string.",
      'string.max': "Mother's occupation cannot exceed 50 characters.",
      'any.required': "Mother's occupation is required.",
    }),
    motherContactNo: Joi.string().min(10).max(15).required().messages({
      'string.base': "Mother's contact number must be a string.",
      'string.min':
        "Mother's contact number must be at least 10 characters long.",
      'string.max': "Mother's contact number cannot exceed 15 characters.",
      'any.required': "Mother's contact number is required.",
    }),
  })
    .required()
    .messages({
      'object.base': 'Guardian must be an object.',
      'any.required': 'Guardian is required.',
    }),
  localGuardian: Joi.object({
    name: Joi.string().max(50).required().messages({
      'string.base': "Local guardian's name must be a string.",
      'string.max': "Local guardian's name cannot exceed 50 characters.",
      'any.required': "Local guardian's name is required.",
    }),
    occupation: Joi.string().max(50).required().messages({
      'string.base': "Local guardian's occupation must be a string.",
      'string.max': "Local guardian's occupation cannot exceed 50 characters.",
      'any.required': "Local guardian's occupation is required.",
    }),
    contactNo: Joi.string().min(10).max(15).required().messages({
      'string.base': "Local guardian's contact number must be a string.",
      'string.min':
        "Local guardian's contact number must be at least 10 characters long.",
      'string.max':
        "Local guardian's contact number cannot exceed 15 characters.",
      'any.required': "Local guardian's contact number is required.",
    }),
    address: Joi.string().max(100).required().messages({
      'string.base': "Local guardian's address must be a string.",
      'string.max': "Local guardian's address cannot exceed 100 characters.",
      'any.required': "Local guardian's address is required.",
    }),
  })
    .required()
    .messages({
      'object.base': 'Local guardian must be an object.',
      'any.required': 'Local guardian is required.',
    }),
  profileImage: Joi.string().max(200).required().messages({
    'string.base': 'Profile image must be a string.',
    'string.max': 'Profile image URL cannot exceed 200 characters.',
    'any.required': 'Profile image is required.',
  }),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': '{#value} is not a valid status.',
  }),
});

// creatimg a scema vallidation using zod

export const studentZodValidationSchema = z.object({
  id: z
    .string()
    .min(5, { message: 'ID must be at least 5 characters long.' })
    .max(20, { message: 'ID cannot exceed 20 characters.' }),
  password: z
    .string()
    .min(5, { message: 'password must be at least 5 characters long.' })
    .max(20, { message: 'password cannot exceed 20 characters.' }),
  name: z.object({
    firstName: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters long.' })
      .max(50, { message: 'First name cannot exceed 50 characters.' }),
    middleName: z
      .string()
      .max(50, { message: 'Middle name cannot exceed 50 characters.' })
      .optional(),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters long.' })
      .max(50, { message: 'Last name cannot exceed 50 characters.' }),
  }),
  gender: z.enum(['male', 'female', 'other'], {
    invalid_type_error: '{#value} is not a valid gender.',
  }),
  dateOfBirth: z.string(),
  email: z
    .string()
    .email({ message: 'Email must be a valid email address.' })
    .max(100, { message: 'Email cannot exceed 100 characters.' }),
  contactNo: z
    .string()
    .min(10, { message: 'Contact number must be at least 10 characters long.' })
    .max(15, { message: 'Contact number cannot exceed 15 characters.' }),
  emergencyContactNo: z
    .string()
    .min(10, {
      message: 'Emergency contact number must be at least 10 characters long.',
    })
    .max(15, {
      message: 'Emergency contact number cannot exceed 15 characters.',
    }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z
    .string()
    .max(100, { message: 'Present address cannot exceed 100 characters.' }),
  parmanentAddress: z
    .string()
    .max(100, { message: 'Permanent address cannot exceed 100 characters.' }),
  guardian: z.object({
    fatherName: z
      .string()
      .max(50, { message: "Father's name cannot exceed 50 characters." }),
    fatherOccupation: z
      .string()
      .max(50, { message: "Father's occupation cannot exceed 50 characters." }),
    fatherContactNo: z
      .string()
      .min(10, {
        message: "Father's contact number must be at least 10 characters long.",
      })
      .max(15, {
        message: "Father's contact number cannot exceed 15 characters.",
      }),
    motherName: z
      .string()
      .max(50, { message: "Mother's name cannot exceed 50 characters." }),
    motherOccupation: z
      .string()
      .max(50, { message: "Mother's occupation cannot exceed 50 characters." }),
    motherContactNo: z
      .string()
      .min(10, {
        message: "Mother's contact number must be at least 10 characters long.",
      })
      .max(15, {
        message: "Mother's contact number cannot exceed 15 characters.",
      }),
  }),
  localGuardian: z.object({
    name: z
      .string()
      .max(50, {
        message: "Local guardian's name cannot exceed 50 characters.",
      }),
    occupation: z
      .string()
      .max(50, {
        message: "Local guardian's occupation cannot exceed 50 characters.",
      }),
    contactNo: z
      .string()
      .min(10, {
        message:
          "Local guardian's contact number must be at least 10 characters long.",
      })
      .max(15, {
        message: "Local guardian's contact number cannot exceed 15 characters.",
      }),
    address: z
      .string()
      .max(100, {
        message: "Local guardian's address cannot exceed 100 characters.",
      }),
  }),
  profileImage: z
    .string()
    .max(200, { message: 'Profile image URL cannot exceed 200 characters.' }),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false),
});

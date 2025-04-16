import { z } from "zod";
import { FormFieldsEnum } from "../types/contactForm";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const FIELD_LENGTHS = {
  [FormFieldsEnum.FULLNAME]: { min: 1, max: 40 },
  [FormFieldsEnum.EMAIL]: { min: 1, max: 100 },
  [FormFieldsEnum.SUBJECT]: { min: 1, max: 80 },
  [FormFieldsEnum.MESSAGE]: { min: 30 },
};

export const validationSchemaContactForm = z.object({
  [FormFieldsEnum.FULLNAME]: z
    .string()
    .min(FIELD_LENGTHS[FormFieldsEnum.FULLNAME].min)
    .max(FIELD_LENGTHS[FormFieldsEnum.FULLNAME].max),
  [FormFieldsEnum.EMAIL]: z
    .string()
    .regex(EMAIL_REGEX)
    .min(FIELD_LENGTHS[FormFieldsEnum.EMAIL].min)
    .max(FIELD_LENGTHS[FormFieldsEnum.EMAIL].max),
  [FormFieldsEnum.SUBJECT]: z
    .string()
    .min(FIELD_LENGTHS[FormFieldsEnum.SUBJECT].min)
    .max(FIELD_LENGTHS[FormFieldsEnum.SUBJECT].max),
  [FormFieldsEnum.MESSAGE]: z
    .string()
    .min(FIELD_LENGTHS[FormFieldsEnum.MESSAGE].min),
});

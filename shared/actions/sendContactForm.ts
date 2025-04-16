"use server";

import { validationSchemaContactForm } from "../schemas/validationSchemaContactForm";
import { FormFieldsEnum, FormMessageState } from "../types/contactForm";

const GoogleFormIds = {
  [FormFieldsEnum.FULLNAME]: process.env.GOOGLE_FORM_FULLNAME_ID,
  [FormFieldsEnum.EMAIL]: process.env.GOOGLE_FORM_EMAIL_ID,
  [FormFieldsEnum.SUBJECT]: process.env.GOOGLE_FORM_SUBJECT_ID,
  [FormFieldsEnum.MESSAGE]: process.env.GOOGLE_FORM_MESSAGE_ID,
};

const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL || "";

export const sendContactForm = async (
  _prevState: FormMessageState,
  formData: FormData,
): Promise<FormMessageState> => {
  const newFormData = new FormData();

  Object.values(FormFieldsEnum).filter((field) => {
    const value = formData.get(field);
    const googleFormFieldId = GoogleFormIds[field];

    if (typeof value === "string" && googleFormFieldId) {
      newFormData.append(googleFormFieldId, value);
    }
  });

  try {
    const validation = validationSchemaContactForm.safeParse(
      Object.fromEntries(formData),
    );
    const invalidFields: string[] =
      validation.error?.issues.map((issue) => issue.path[0].toString()) || [];
    const invalidSetFields = new Set(invalidFields);
    const isValid = validation.success;

    if (!isValid) {
      return {
        status: "warning",
        timestamp: Date.now(),
        invalidFields: Array.from(invalidSetFields),
      };
    }

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: newFormData,
    });

    return { status: "success", timestamp: Date.now() };
  } catch {
    return { status: "error", timestamp: Date.now() };
  }
};

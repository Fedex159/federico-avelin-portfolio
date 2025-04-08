"use server";

import { FormFieldsEnum } from "../types/contactForm";

const GoogleFormIds = {
  [FormFieldsEnum.FULLNAME]: process.env.GOOGLE_FORM_FULLNAME_ID,
  [FormFieldsEnum.EMAIL]: process.env.GOOGLE_FORM_EMAIL_ID,
  [FormFieldsEnum.SUBJECT]: process.env.GOOGLE_FORM_SUBJECT_ID,
  [FormFieldsEnum.MESSAGE]: process.env.GOOGLE_FORM_MESSAGE_ID,
};

const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL || "";

export const sendContactForm = async (formData: FormData) => {
  const newFormData = new FormData();

  Object.values(FormFieldsEnum).filter((field) => {
    const value = formData.get(field);
    const googleFormFieldId = GoogleFormIds[field];

    if (typeof value === "string" && googleFormFieldId) {
      newFormData.append(googleFormFieldId, value);
    }
  });

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: newFormData,
    });

    return { message: "success" };
  } catch {
    return { message: "error" };
  }
};

"use server";

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
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: newFormData,
    });

    return { status: "success", timestamp: Date.now() };
  } catch {
    return { status: "error", timestamp: Date.now() };
  }
};

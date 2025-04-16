export enum FormFieldsEnum {
  FULLNAME = "fullName",
  EMAIL = "email",
  SUBJECT = "subject",
  MESSAGE = "message",
}

export type FormMessageState = {
  invalidFields?: string[];
  status: "error" | "success" | "warning" | null;
  timestamp: number;
};

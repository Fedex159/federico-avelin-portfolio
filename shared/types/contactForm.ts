export enum FormFieldsEnum {
  FULLNAME = "fullName",
  EMAIL = "email",
  SUBJECT = "subject",
  MESSAGE = "message",
}

export type FormMessageState = {
  status: "success" | "error" | null;
  timestamp: number;
};

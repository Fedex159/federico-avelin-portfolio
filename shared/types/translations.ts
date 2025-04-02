import { createTranslator, Messages } from "next-intl";

export type Translations = Parameters<
  ReturnType<typeof createTranslator<Messages>>
>[0];

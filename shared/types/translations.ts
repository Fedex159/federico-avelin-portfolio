import {
  createTranslator,
  Messages,
  NamespaceKeys,
  NestedKeyOf,
} from "next-intl";

export type Translations<
  T extends NamespaceKeys<Messages, NestedKeyOf<Messages>> = never,
> = Parameters<ReturnType<typeof createTranslator<Messages, T>>>[0];

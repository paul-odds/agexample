export class ErrorContent {
  title: string;
  messages: string[];

  constructor(errorContent?: Partial<ErrorContent>) {
    this.title = errorContent?.title ?? '';
    this.messages = errorContent?.messages ?? [];
  }
}

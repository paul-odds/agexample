interface IErrorContent {
  title: string;
  messages: string[];
}

export class ErrorContent implements IErrorContent {
  title: string;
  messages: string[];

  constructor(errorContent?: Partial<IErrorContent>) {
    this.title = errorContent?.title ?? '';
    this.messages = errorContent?.messages ?? [];
  }
}

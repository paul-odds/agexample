import { ErrorContent } from './error-content.model';

describe('ErrorContent', () => {
  test('should create an instance with zero value when new instance without value', () => {
    const errorContent = new ErrorContent();

    expect(errorContent.title).toEqual('');
    expect(errorContent.messages).toEqual([]);
  });

  test('should create an instance with value when new instance with value', () => {
    const data = {
      title: 'title',
      messages: ['message 1'],
    };
    const errorContent = new ErrorContent(data);

    expect(errorContent.title).toEqual(data.title);
    expect(errorContent.messages).toEqual(data.messages);
  });
});

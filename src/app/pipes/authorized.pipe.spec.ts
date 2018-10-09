import { AuthorizedPipe } from './authorized.pipe';

describe('AuthorizedPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorizedPipe();
    expect(pipe).toBeTruthy();
  });
});

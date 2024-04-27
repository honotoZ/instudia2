import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    // Provide the required arguments here
    expect(new Login('Honoto@gmail.com', 'Honoto@456', 'token')).toBeTruthy();
  });
});

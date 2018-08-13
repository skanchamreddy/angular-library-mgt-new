const key = 'AIzaSyDz1z_adQRc_kJ9dV5Y8hnhTbQAGZ23BE8';
export const environment = {
  production: false,
  baseUrl: 'https://library-mgt-22339.firebaseio.com/',
  apiKey: key,
  signUpUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key,
  SignInUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key
};
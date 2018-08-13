// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const key = 'AIzaSyDz1z_adQRc_kJ9dV5Y8hnhTbQAGZ23BE8';
export const environment = {
  production: false,
  baseUrl: 'https://library-mgt-22339.firebaseio.com/',
  apiKey: key,
  signUpUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key,
  SignInUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key
};

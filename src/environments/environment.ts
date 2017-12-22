// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  region: 'us-east-1',

    identityPoolId: 'us-east-1:09ad77c5-ca16-42a1-8f06-8dd046f62091',
    userPoolId: 'us-east-1_fFDKbWvTC',
    clientId: 'r0eeg9scp5voo1ugm3q37omci',

    rekognitionBucket: 'rekognition-pics',
    albumName: "usercontent",
    bucketRegion: 'us-east-1',

    //ng build
    ddbTableName: 'LoginTrail'
};

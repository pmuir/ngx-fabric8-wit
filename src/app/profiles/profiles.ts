import { Profile } from 'ngx-login-client';

export class Profiles {

  get current(): Profile {
    return {} as Profile;
  }

  save(): void {
    console.log('Not implemented');
  }

}

import { atom } from 'recoil';
export namespace Recoil {
  export namespace left {
    export namespace Types {
      export type Search = string;
    }

    export const ASearch = atom<Types.Search>({
      key: 'ASearch',
      default: '',
    });
  }
}

import { atom, useRecoilState } from 'recoil';

export const EditModeAtom = atom({
  key: 'EditModeAtom',
  default: false,
});
export function useEditMode(editAtom) {
  return useRecoilState(editAtom);
}

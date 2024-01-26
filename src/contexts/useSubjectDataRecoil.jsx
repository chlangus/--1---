import { atom, useRecoilState } from 'recoil';

const subjectData = atom({
  key: 'subjectData',
  default: {
    imageSource: '',
    name: '',
    questionCount: '',
  },
});

const useSubjectDataRecoil = () => {
  const [subjectDataRecoil, setSubjectDataRecoil] = useRecoilState(subjectData);
  return [subjectDataRecoil, setSubjectDataRecoil];
};

export default useSubjectDataRecoil;

export const teamNameGenerate = () => {
  const adjectiveList = ['예쁜', '멋진', '신비한', '행운의', '화려한'];
  const nounList = ['호랑이', '강아지', '별', '바다', '무지개'];

  const randomAdjectiveIndex = Math.floor(Math.random() * adjectiveList.length);
  const randomNounIndex = Math.floor(Math.random() * nounList.length);

  const teamName = `${adjectiveList[randomAdjectiveIndex]} ${nounList[randomNounIndex]}`;
  return teamName;
};

export const teamNameGenerate = () => {
  const adjectiveList = ['예쁜', '멋진', '신비한', '행운의', '화려한'];
  const nounList = ['호랑이', '강아지', '별', '바다', '무지개'];

  const randomAdjectiveIndex = Math.floor(Math.random() * adjectiveList.length);
  const randomNounIndex = Math.floor(Math.random() * nounList.length);

  const teamName = `${adjectiveList[randomAdjectiveIndex]} ${nounList[randomNounIndex]}`;
  return teamName;
};

export const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear().toString().substring(2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hour = now.getHours();
  let stringHour = String(hour);
  if (hour < 10) {
    stringHour = String(hour).padStart(2, '0');
  }

  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}${month}${day}-${stringHour}:${minutes}`;
};

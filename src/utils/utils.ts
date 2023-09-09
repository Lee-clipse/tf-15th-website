export const teamNameGenerate = () => {
  const adjectiveList = [
    '비장의',
    '냄새나는',
    '눈에 띄는',
    '중후한',
    '어엄청난',
    '배고픈',
    '츤츤거리는',
    '꾸민듯 안꾸민',
    '조금 낯선',
    '어색어색한',
    '환경을 생각하는',
    '텀블러를 손에 든',
    '남는 게 시간인',
    '사랑 넘치는',
    '은혜받은',
  ];
  const nounList = [
    '하입보이',
    '틱톡커들',
    '유튜버들',
    '소비자들',
    '헬창',
    '떡잎마을 방범대',
    '예배자들',
    '광신도들',
    '회원들',
    '손님들',
    '심심이들',
    '그녀석들',
    '막내아들',
    '내부자들',
    '여러분',
    '애송이들',
  ];

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

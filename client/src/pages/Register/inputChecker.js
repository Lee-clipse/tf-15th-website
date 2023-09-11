export const inputChecker = (formData) => {
  const { name, age, phoneNumber, location, agreePI, donation } = formData;

  // 이름 검증: 한글 또는 영어만 허용
  const namePattern = /^[가-힣a-zA-Z]+$/;
  if (!namePattern.test(name) || !name) {
    return returnMaker(false, "입력 오류!", "이름은 한글 또는 영어만 입력 가능합니다.", "error");
  }

  // 나이 검증: 숫자만 허용
  const agePattern = /^\d+$/;
  if (!agePattern.test(age)) {
    return returnMaker(false, "입력 오류!", "나이는 숫자만 입력 가능합니다.", "error");
  }

  // 전화번호 검증: 숫자, '.', '-'만 허용
  const phonePattern = /^[0-9.-]+$/;
  if (!phonePattern.test(phoneNumber)) {
    return returnMaker(false, "입력 오류!", "전화번호는 숫자만 입력 가능합니다.", "error");
  }

  // 기부금 검증: 숫자만 허용
  const donationPattern = /^\d+$/;
  if (!donationPattern.test(donation) || isNaN(Number(donation))) {
    return returnMaker(false, "입력 오류!", "기부금은 숫자만 입력 가능합니다.", "error");
  }

  // 모든 값 입력만 허용
  if (!name || !age || !phoneNumber || !location || !agreePI || !donation) {
    console.log(name, age, phoneNumber, location, agreePI, donation);
    return returnMaker(false, "입력 오류!", "모든 항목을 입력해주세요.", "error");
  }

  return returnMaker(true);
};

const returnMaker = (isValid, title, comment, type) => {
  return { isValid, title, comment, type };
};

export default inputChecker;

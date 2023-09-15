import Swal from "sweetalert2";

export const renderDiceRollEvent = (prevIndex, nextIndex) => {
  const prevIndexNumber = Number(prevIndex);
  const nextIndexNumber = Number(nextIndex);
  console.log(prevIndexNumber, nextIndexNumber);

  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  // 이미 팀원이 주사위를 굴린 경우
  if (nextIndexNumber === prevIndexNumber) {
    const alertTitle =
      nextIndexNumber % 10 === 0
        ? "영상 시청 후 스텝의 안내를 기다려주세요!"
        : "부스 체험 후 스텝의 안내를 기다려주세요!";
    Toast.fire({ icon: "info", title: alertTitle });
    return;
  }
  const alertTitle =
    nextIndexNumber % 10 === 0
      ? "전방의 대기소로 이동!"
      : `${nextIndexNumber - prevIndexNumber}칸 앞으로 이동!`;
  Toast.fire({ icon: "success", title: alertTitle });
};

export const rollConfirmEvent = async () => {
  let result = false;
  await Swal.fire({
    title: "팀의 주사위를 굴리시겠습니까?",
    text: "다음 부스로 이동하실 수 있습니다!",
    icon: "info",

    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "가자!",
    cancelButtonText: "취소",

    reverseButtons: true,
  }).then((swalResult) => {
    if (swalResult.isConfirmed) {
      result = true;
    }
  });
  return result;
};

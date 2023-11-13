# 청건부산 웹 사이트

# 프로젝트 정보

<b>15회 TF 청건부산 행사를 위한 모바일 전용 웹 사이트</b>

- 개발 기간: 2023.08.27 ~ 2023.09.22
- 홈페이지 배포: 2023.09.01
- 개발 인원: 이진재 (FE & BE & DevOps)

## 청건부산이란?

Together Festival 15주년을 맞이하여 열리는 행사입니다.

부산의 20~30대 부산 청년들 100여명이 중심이 되어, 모든 기획과 재정, 운영 및 홍보까지 직접 준비하는 행사입니다.

행사 장소인 송상현 광장은 예로부터 모너머 고개 불렸으며, 부산의 다양한 정체성이 나뉘는 경계지점이자, 다시 하나로 모여드는 중심지였습니다.

이 지역에서 9월 23일 부산 청년들이 모여, 삶, 환경, 부산의 미래에 대한 목소리를 내며 청년으로서의 정체성인 자유, 진취, 도전의 메세지를 던지고자 합니다.

현재의 붉어지는 사회문제 중 청년과 환경, 그리고 부산을 주제로한 여러 체험 부스와 토크콘서트를 진행하며 소통합니다.

정책 제안 동아리, 새활용 제품 메이킹 클래스, 북 클럽 등의 소규모 활동들을 지속하고 있습니다.

- 공식 블로그: https://m.blog.naver.com/14th_tf
- 인스타그램: https://www.instagram.com/together_festival52/
- 유튜브: https://www.youtube.com/@togefes

## 단체

- [부산광역시](https://www.busan.go.kr/index)
- [(사)십대의벗청소년교육센터](http://m.octm1318.com/)
- [LSD 엔터테인먼트](https://www.instagram.com/lsd_ent_official/)
- [함께하는 교회](https://togetherch.org/)

## 배포 주소

- 모바일 전용: https://busan-tf.n-e.kr/

## 행사 결과

> 아래 수치는 데이터베이스, Naver Cloud 모니터링 자료를 기반으로 합니다.<br>
> 현장 모니터링은 2023년 9월 23일 15시 30분부터 20시 30분까지의 측정 데이터입니다.

- 총 접속자 수: 1729명
- 청건부산 접수 인원: 722명
- 제로게임 참가 인원: 302명

분당 동시 접속자 수

> 16시 46분 00초 ~ 16시 46분 59초 기준 43명

서비스 가용성

# 주요 기능

## 행사 소개

QR 코드를 통해 접근한 사용자들에게 전반적인 행사를 소개합니다.

신청 폼, 컨텐츠 소개, 행사 취지 등을 소개합니다.

## 현장 스텝 관리

스텝들은 참가자들의 개인 식별 QR 코드를 통해 참가자들을 관리합니다.

팀 생성, 팀 참가, 팀 탈퇴, 점수 추가, 굿즈 수령 등의 기능을 수행합니다.

사전에 모집한 스텝들은 별도의 교육을 받으며, 등록 절차를 수행하여 인증합니다.

## 제로게임 운영

부루마블 형태의 팀 게임을 통해 12개의 부스를 체험하는 게임입니다.

스텝이 참가자들의 개인 QR 코드를 통해 대기소 입장 순서대로 팀을 편성합니다.

팀은 주사위를 굴려 부스로 이동, 특정 부스에서의 게임 결과에 따라 점수를 획득합니다.

- 현 시각 부스 별 게임 진행 중인 팀, 대기 인원, 1 vs 1 배틀 게임 등의 변수를 고려하여 주사위 알고리즘을 구현했습니다.

- 원활한 행사를 위해 진짜 랜덤 주사위가 아니라 의도한 부스로 팀이 이동하도록 구현했습니다.

부스 내 스텝은 팀 QR 코드를 통해 팀 점수를 추가할 수 있습니다.

-100 점에서 시작하며, 0점을 만드는 데 성공한 팀은 굿즈를 수령할 수 있습니다.

# 아키텍쳐

# 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white">
<img src="https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=white">

# 기타

- 청건부산 행사 후기 및 데이터 보고: https://half-straw-a69.notion.site/a952b786daff462b9b43c0ad1cf580eb?pvs=4
- API 명세: https://half-straw-a69.notion.site/API-88afd4762c63498aa0d0c2d6d14ebebd?pvs=4

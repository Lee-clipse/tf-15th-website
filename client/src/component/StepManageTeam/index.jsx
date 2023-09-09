import React from "react";
import * as s from "./style";

const StepManageTeam = ({ userInfo, teamList }) => {
  //! FOR DEV
  const teamName = "무슨무슨";
  return (
    <s.StepWrapper>
      <s.TeamScoreSection>
        <s.ScoreTitle>{teamName} 팀</s.ScoreTitle>
        {teamName !== "-" && (
          <s.ScorePlusSection>
            <s.ScoreInput type="text" placeholder="점수 입력" />
            <s.ScoreButton>점수 추가</s.ScoreButton>
          </s.ScorePlusSection>
        )}
      </s.TeamScoreSection>

      <s.TeamListSection>
        <s.ListTitle>참가 가능 팀 목록</s.ListTitle>
        <s.TeamList>
          {teamList.map((row, index) => (
            <s.TeamRow key={index}>
              <s.TeamName>{row.name} 팀</s.TeamName>
              <s.MemberCount>
                <s.CountText>{row.count}</s.CountText> / 5
              </s.MemberCount>
              <s.JoinButton>참가</s.JoinButton>
            </s.TeamRow>
          ))}
        </s.TeamList>
      </s.TeamListSection>
    </s.StepWrapper>
  );
};

export default StepManageTeam;

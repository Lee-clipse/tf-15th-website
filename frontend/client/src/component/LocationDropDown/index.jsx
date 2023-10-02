import React, { useState } from "react";
import * as s from "./style";

const LocationDropDown = ({ onSelectLocation }) => {
  const locations = [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
    "기타",
  ];

  const [showInput, setShowInput] = useState(false);
  const [otherLocation, setOtherLocation] = useState("");

  const handleSelect = (selectedLocation) => {
    if (selectedLocation === "기타") {
      setShowInput(true);
    } else {
      onSelectLocation(selectedLocation);
      setShowInput(false);
    }
  };

  const handleInput = (event) => {
    setOtherLocation(event.target.value);
    onSelectLocation(event.target.value);
  };

  return (
    <s.Wrapper>
      <s.Title>4. 본인이 사는 지역을 선택해주세요.</s.Title>
      <s.Select onChange={(e) => handleSelect(e.target.value)}>
        <option value="">지역 선택</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </s.Select>
      {showInput && (
        <s.Input
          type="text"
          value={otherLocation}
          placeholder="지역명 입력"
          onChange={handleInput}
        />
      )}
    </s.Wrapper>
  );
};

export default LocationDropDown;

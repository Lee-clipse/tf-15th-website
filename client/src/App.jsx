import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import { Suspense, lazy } from "react";
import React from "react";

const MainPage = lazy(() => import("./pages/Main/index"));
const RegisterPage = lazy(() => import("./pages/Register/index"));
const IntroducePage = lazy(() => import("./pages/Introduce/index"));
const RuleChoosePage = lazy(() => import("./pages/RuleChoose/index"));
const QRPage = lazy(() => import("./pages/QR/index"));
const EventPage = lazy(() => import("./pages/Event/index"));
const EventGroupPage = lazy(() => import("./pages/EventGroup/index"));
const EventStagePage = lazy(() => import("./pages/EventStage/index"));
const MissionPage = lazy(() => import("./pages/Mission/index"));
const QRReconfirmPage = lazy(() => import("./pages/QRReconfirm/index"));
const StepPage = lazy(() => import("./pages/Step/index"));
const ZerogamePage = lazy(() => import("./pages/Zerogame/index"));
const DonateUsagePage = lazy(() => import("./pages/DonateUsage/index"));
const TeamQRPage = lazy(() => import("./pages/TeamQR/index"));
const VoiceAgreePage = lazy(() => import("./pages/VoiceAgree/index"));
const ZerogameViewerPage = lazy(() => import("./pages/ZerogameViewer/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path={RoutePath.MAIN} element={<MainPage />}></Route>
          <Route path={RoutePath.REGISTER} element={<RegisterPage />}></Route>
          <Route path={RoutePath.INTRODUCE} element={<IntroducePage />}></Route>
          <Route path={RoutePath.RULE_CHOOSE} element={<RuleChoosePage />}></Route>
          <Route path={RoutePath.QR} element={<QRPage />}></Route>
          <Route path={RoutePath.RECONFIRM_QR} element={<QRReconfirmPage />}></Route>
          <Route path={RoutePath.EVENT} element={<EventPage />}></Route>
          <Route path={RoutePath.EVENT_GROUP} element={<EventGroupPage />}></Route>
          <Route path={RoutePath.EVENT_STAGE} element={<EventStagePage />}></Route>
          <Route path={RoutePath.DONATE_USAGE} element={<DonateUsagePage />}></Route>
          <Route path={RoutePath.MISSION} element={<MissionPage />}></Route>
          <Route path={RoutePath.STEP} element={<StepPage />}></Route>
          <Route path={RoutePath.ZEROGAME} element={<ZerogamePage />}></Route>
          <Route path={RoutePath.TEAM_QR} element={<TeamQRPage />}></Route>
          <Route path={RoutePath.VOICE_AGREE} element={<VoiceAgreePage />}></Route>
          <Route path={RoutePath.ZEROGAME_VIEWER} element={<ZerogameViewerPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

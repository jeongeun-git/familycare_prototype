import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MedicationSuccessModal from "../components/MedicationSuccessModal";

function StatusBar() {
  return (
    <div className="bg-white h-[40px] shrink-0 sticky top-0 w-full z-20">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[24px] py-[10px] relative w-full">
          <p className="text-[#1d1b20] text-[14px] leading-[20px] tracking-[0.14px]">
            9:30
          </p>
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="relative shrink-0 size-[24px]"
      onClick={() => navigate("/medication")}
    >
      <ChevronLeft
        size={24}
        style={{ color: "var(--neutral-800)" }}
        strokeWidth={1.5}
      />
    </button>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <BackButton />
      <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
        <h1 className="font-medium text-[16px] text-neutral-800 tracking-[-0.32px] leading-[22px]">
          복약 등록
        </h1>
      </div>
      <div className="shrink-0 size-[24px]" />
    </div>
  );
}

function DetailHeaders() {
  return (
    <div className="sticky top-0 z-10 box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[16px] py-[8px] shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] w-full bg-white">
      <HeaderContainer />
    </div>
  );
}

export default function MedicationResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // MedicationRegisterPage에서 전달받은 데이터
  const medications = location.state?.medications;

  useEffect(() => {
    // 데이터가 없으면 복약 페이지로 리다이렉트
    if (!medications || medications.length === 0) {
      navigate("/medication", { replace: true });
      return;
    }

    // 성공 모달 표시
    setShowSuccessModal(true);
  }, [medications, navigate]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // 모달 닫으면 복약 페이지로 이동
    navigate("/medication");
  };

  if (!medications || medications.length === 0) {
    return null;
  }

  return (
    <div className="bg-neutral-50 h-screen w-full flex flex-col overflow-hidden">
      <StatusBar />
      <DetailHeaders />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-[16px]">
          <p className="font-medium text-[16px] text-neutral-700 tracking-[-0.32px] leading-[22px]">
            복약이 등록되었습니다
          </p>
        </div>
      </div>

      {/* Success Modal */}
      <MedicationSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
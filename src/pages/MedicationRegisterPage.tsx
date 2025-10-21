import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Info as InfoIcon, X } from "lucide-react";
import svgPaths from "../imports/svg-2x9qdf13yv";
import svgPaths2 from "../imports/svg-mmelwruxao";
import svgPathsInfo from "../imports/svg-rom6zhuvkt";
import TimePicker from "../components/TimePicker";
import { saveMedication } from "../utils/medicationStorage";

// Status Bar Component
function StatusBar() {
  return (
    <div className="bg-white h-[40px] shrink-0 sticky top-0 w-full z-20">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[24px] py-[10px] relative w-full">
          <p className="text-[#1d1b20] text-[14px] leading-[20px] tracking-[0.14px]">
            9:30
          </p>
          <div className="flex gap-[6px] items-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d={svgPaths.p34567080}
                fill="#1D1B20"
                opacity="0.1"
              />
            </svg>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path d={svgPaths.p112c6500} fill="#1D1B20" />
            </svg>
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
            >
              <path
                d={svgPaths.p2dfd100}
                fill="#1D1B20"
                opacity="0.3"
              />
              <path d={svgPaths.p2657cc00} fill="#1D1B20" />
            </svg>
          </div>
          <div className="absolute left-1/2 size-[24px] top-[7px] translate-x-[-50%]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p34df7200}
                fill="#1D1B20"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Detail Header Component
function DetailHeaders() {
  const navigate = useNavigate();

  return (
    <div className="bg-white sticky top-[40px] z-10 shadow-[0px_4px_11px_0px_rgba(232,232,232,0.2)] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-start px-[16px] py-[8px] w-full">
          <div className="content-stretch flex h-[32px] items-center justify-between w-full">
            <button
              onClick={() => navigate(-1)}
              className="relative shrink-0 size-[24px]"
            >
              <ChevronLeft
                size={24}
                className="text-neutral-800"
                strokeWidth={1.5}
              />
            </button>
            <h1 className="text-neutral-800 tracking-[-0.32px] leading-[22px]">
              내 약 추가
            </h1>
            <div className="shrink-0 size-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Input Field Component with variants
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error = false,
  errorMessage,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error
    ? "#FF3B30"
    : isFocused
      ? "neutral-700"
      : "neutral-300";
  const labelColor = error ? "#FF3B30" : "neutral-700";

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <div className="flex flex-col gap-[15px] items-center w-full">
        <p
          className={`leading-[22px] text-[16px] tracking-[-0.32px] w-full font-bold`}
          style={{
            color: error ? "#FF3B30" : "var(--neutral-700)",
          }}
        >
          {label}
        </p>
      </div>
      <div className="h-[48px] w-full relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderBottom: `1px solid ${error ? "#FF3B30" : isFocused ? "var(--primary-500)" : "var(--neutral-300)"}`,
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="box-border flex flex-col h-[48px] items-start justify-center p-[16px] w-full outline-none bg-transparent font-medium leading-[20px] text-[14px] text-neutral-700 tracking-[-0.28px] placeholder:text-neutral-400"
        />
      </div>
      {error && errorMessage && (
        <div className="content-stretch flex gap-[8px] items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 6V8.66667M8 11.3333H8.00667M14.4867 12L9.15333 2.66667C9.03704 2.46147 8.8684 2.29079 8.66462 2.17205C8.46083 2.0533 8.22919 1.99074 7.99333 1.99074C7.75747 1.99074 7.52584 2.0533 7.32205 2.17205C7.11826 2.29079 6.94962 2.46147 6.83333 2.66667L1.5 12C1.38245 12.2036 1.32082 12.4346 1.32134 12.6697C1.32186 12.9047 1.38452 13.1355 1.50296 13.3385C1.62141 13.5416 1.79143 13.7097 1.9958 13.8259C2.20016 13.942 2.4316 14.0021 2.66667 14H13.3333C13.5673 13.9998 13.797 13.938 13.9995 13.8209C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6039 13.1301 14.6654 12.9003 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4867 12Z"
              stroke="#FF3B30"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-medium leading-[20px] text-[14px] text-[#FF3B30] tracking-[-0.28px]">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}

// Input Quantity Component
interface InputQuantityProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  step?: number;
  minValue?: number;
}

function InputQuantity({
  label,
  value,
  onChange,
  unit = "번",
  step = 1,
  minValue = 1,
}: InputQuantityProps) {
  const canDecrease = value > minValue;

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <p className="leading-[22px] text-[16px] text-neutral-700 tracking-[-0.32px] font-bold">
        {label}
      </p>
      <div className="h-[48px] rounded-[12px] w-full">
        <div className="flex flex-col items-center size-full">
          <div className="box-border flex flex-col h-[48px] items-center justify-between p-[8px] w-full">
            <div className="flex items-center justify-between w-full">
              <button
                onClick={() =>
                  canDecrease && onChange(value - step)
                }
                className="box-border flex flex-col gap-[10px] items-start overflow-clip p-[2px] size-[30px]"
              >
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[99px] w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border flex gap-[10px] items-center justify-center p-[2px] size-full">
                      <svg
                        width="11"
                        height="2"
                        viewBox="0 0 11 2"
                        fill="none"
                      >
                        <path
                          d={svgPaths2.p1b5c3f00}
                          fill={
                            canDecrease ? "#022C22" : "#E5E5E5"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              <p className="leading-[22px] text-[16px] text-neutral-700 tracking-[-0.32px]">
                {value}
                {unit}
              </p>
              <button
                onClick={() => onChange(value + step)}
                className="box-border flex gap-[10px] items-center overflow-clip p-[2px] size-[30px]"
              >
                <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[99px]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border flex gap-[10px] items-center justify-center p-[2px] size-full">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d={svgPaths2.p196ef80}
                          fill="#022C22"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Time Add Item Component
interface TimeAddItemProps {
  time: string;
  onTimeChange: (time: string) => void;
  onRemove: () => void;
}

function TimeAddItem({
  time,
  onTimeChange,
  onRemove,
}: TimeAddItemProps) {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleTimeSelect = (timeData: {
    hour: number;
    minute: number;
    period: "오전" | "오후";
  }) => {
    const timeString = `${timeData.period} ${timeData.hour.toString().padStart(2, "0")}:${timeData.minute.toString().padStart(2, "0")}`;
    onTimeChange(timeString);
  };

  // Parse existing time
  const parseTime = (timeStr: string) => {
    const match = timeStr.match(/(오전|오후)\s(\d+):(\d+)/);
    if (match) {
      return {
        period: match[1] as "오전" | "오후",
        hour: parseInt(match[2]),
        minute: parseInt(match[3]),
      };
    }
    return {
      period: "오전" as "오전" | "오후",
      hour: 8,
      minute: 0,
    };
  };

  return (
    <>
      <div className="flex gap-[8px] items-center w-full">
        <button
          onClick={onRemove}
          className="bg-neutral-300 box-border flex items-center p-[2px] rounded-[9999px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33333 8H12.6667"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
          </svg>
        </button>
        <button
          onClick={() => setIsPickerOpen(true)}
          className="basis-0 bg-neutral-50 grow h-[48px] min-h-px min-w-px rounded-[8px]"
        >
          <div className="flex flex-col items-end justify-center size-full">
            <div className="box-border flex flex-col h-[48px] items-end justify-center p-[16px] w-full">
              <p className="font-medium leading-[20px] text-[14px] text-neutral-700 tracking-[-0.28px]">
                {time}
              </p>
            </div>
          </div>
        </button>
      </div>

      <TimePicker
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSave={handleTimeSelect}
        initialTime={parseTime(time)}
      />
    </>
  );
}

// Radio Button Component
interface RadioButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function RadioButton({
  label,
  selected,
  onClick,
}: RadioButtonProps) {
  return (
    <button
      onClick={onClick}
      className="basis-0 box-border flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[8px]"
    >
      {selected ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <rect
            x="0.75"
            y="0.75"
            width="18.5"
            height="18.5"
            rx="9.25"
            stroke="#10B981"
            strokeWidth="1.5"
          />
          <circle cx="10" cy="10" r="6" fill="#10B981" />
        </svg>
      ) : (
        <div className="rounded-[9999px] size-[20px] border-[1.5px] border-neutral-200" />
      )}
      <p className="font-medium leading-[20px] text-[14px] text-neutral-700 tracking-[-0.28px]">
        {label}
      </p>
    </button>
  );
}

// Square Radio Button Component
interface SquareRadioProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function SquareRadio({
  label,
  selected,
  onClick,
}: SquareRadioProps) {
  return (
    <button
      onClick={onClick}
      className={`basis-0 grow h-[48px] min-h-px min-w-px rounded-[8px] ${
        selected ? "bg-neutral-700" : "bg-neutral-100"
      }`}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border flex items-center justify-center px-[16px] py-[13px] w-full">
          <p
            className={`font-medium leading-[20px] text-[14px] tracking-[-0.28px] ${
              selected ? "text-white" : "text-neutral-600"
            }`}
          >
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}

// Day Chip Component
interface DayChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function DayChip({ label, selected, onClick }: DayChipProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[44px] relative rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] shrink-0 w-[35.571px] ${
        selected ? "bg-emerald-900" : "bg-neutral-100"
      }`}
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[44px] items-center justify-center px-[8px] py-[10px] relative w-[35.571px]">
          <p
            className={`font-medium leading-[24px] text-[16px] tracking-[-0.32px] ${
              selected ? "text-white" : "text-neutral-400"
            }`}
          >
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function MedicationRegisterPage() {
  const navigate = useNavigate();
  const [medicationName, setMedicationName] = useState("");
  const [frequency, setFrequency] = useState<
    "매일" | "요일 선택"
  >("매일");
  const [selectedDays, setSelectedDays] = useState<string[]>(
    [],
  );
  const [dailyDose, setDailyDose] = useState(1);
  const [times, setTimes] = useState<string[]>(["오전 8:00"]);
  const [doseAmount, setDoseAmount] = useState(1);
  const [doseUnit, setDoseUnit] = useState<
    "캡슐" | "정" | "ml"
  >("캡슐");
  const [memo, setMemo] = useState("");
  const [notification, setNotification] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [savedMedications, setSavedMedications] = useState<
    string[]
  >([]);

  const handleDailyDoseChange = (value: number) => {
    setDailyDose(value);
    if (value > times.length) {
      const newTimes = [...times];
      for (let i = times.length; i < value; i++) {
        newTimes.push("오전 8:00");
      }
      setTimes(newTimes);
    } else if (value < times.length) {
      setTimes(times.slice(0, value));
    }
  };

  const handleTimeChange = (index: number, time: string) => {
    const newTimes = [...times];
    newTimes[index] = time;
    setTimes(newTimes);
  };

  const handleRemoveTime = (index: number) => {
    if (times.length > 1) {
      const newTimes = times.filter((_, i) => i !== index);
      setTimes(newTimes);
      setDailyDose(dailyDose - 1);
    }
  };

  const handleDoseUnitChange = (unit: "캡슐" | "정" | "ml") => {
    setDoseUnit(unit);
    if (unit === "ml") {
      setDoseAmount(5); // ml starts at 5
    } else {
      setDoseAmount(1); // 캡슐 and 정 start at 1
    }
  };

  const handleDoseAmountChange = (value: number) => {
    if (doseUnit === "ml") {
      // For ml, minimum is 5 and increment by 5
      const newValue = Math.max(5, value);
      setDoseAmount(newValue);
    } else {
      // For 캡슐 and 정, minimum is 1
      const newValue = Math.max(1, value);
      setDoseAmount(newValue);
    }
  };

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const validateAndSave = (continueAdding: boolean) => {
    if (continueAdding) {
      // '저장 후 계속 추가' 버튼: 약물명 필수
      if (!medicationName.trim()) {
        setShowError(true);
        setToastMessage("약 정보를 입력해주세요");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
        return false;
      }

      setShowError(false);

      // Save to temporary list
      setSavedMedications([
        ...savedMedications,
        medicationName,
      ]);
      setToastMessage("약이 추가되었어요");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);

      // Reset form
      setMedicationName("");
      setDailyDose(1);
      setTimes(["오전 8:00"]);
      setDoseAmount(1);
      setDoseUnit("캡슐");
      setMemo("");
    } else {
      // '등록완료' 버튼: 이미 저장된 약이 있으면 현재 약물명 없어도 OK
      if (savedMedications.length === 0 && !medicationName.trim()) {
        setShowError(true);
        setToastMessage("약 정보를 입력해주세요");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
        return false;
      }

      setShowError(false);

      // Final save - save all medications including current one
      const allMedications = [...savedMedications];
      if (medicationName.trim()) {
        allMedications.push(medicationName);
      }

      allMedications.forEach((name) => {
        const medication = {
          id: Date.now().toString() + Math.random(),
          name,
          dosage: `${doseAmount}${doseUnit}`,
          frequency: frequency,
          times: times,
          startDate: new Date().toISOString().split("T")[0],
        };
        saveMedication(medication);
      });

      // Set success flag in localStorage
      localStorage.setItem("medication_registered", "true");
      // Navigate to medication page
      navigate("/medication");
    }

    return true;
  };

  return (
    <div className="bg-neutral-50 min-h-screen w-full flex flex-col">
      <StatusBar />
      <DetailHeaders />

      <div className="flex-1 p-[16px] pb-[160px]">
        <div className="flex flex-col gap-[16px] items-start w-full max-w-[328px] mx-auto">
          {/* Form Box */}
          <div className="bg-white rounded-[16px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] w-full">
            <div className="box-border flex flex-col gap-[24px] items-start p-[16px] w-full">
              {/* Medication Name */}
              <InputField
                label="약물명"
                value={medicationName}
                onChange={setMedicationName}
                placeholder="ex) 고혈압 약"
                required
                error={showError}
                errorMessage="필수로 입력해주세요!"
              />

              {/* Frequency */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="leading-[22px] text-[16px] text-neutral-700 tracking-[-0.32px] font-semibold font-bold">
                  복용 주기
                </p>
                <div className="flex gap-[8px] items-start w-full">
                  <RadioButton
                    label="매일"
                    selected={frequency === "매일"}
                    onClick={() => setFrequency("매일")}
                  />
                  <RadioButton
                    label="요일 선택"
                    selected={frequency === "요일 선택"}
                    onClick={() => setFrequency("요일 선택")}
                  />
                </div>
                {frequency === "요일 선택" && (
                  <div className="flex gap-[8px] items-center w-full flex-nowrap">
                    {[
                      "월",
                      "화",
                      "수",
                      "목",
                      "금",
                      "토",
                      "일",
                    ].map((day) => (
                      <DayChip
                        key={day}
                        label={day}
                        selected={selectedDays.includes(day)}
                        onClick={() => toggleDay(day)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Daily Dose */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <InputQuantity
                  label="하루 복용 횟수"
                  value={dailyDose}
                  onChange={handleDailyDoseChange}
                />
                {times.map((time, index) => (
                  <TimeAddItem
                    key={index}
                    time={time}
                    onTimeChange={(newTime) =>
                      handleTimeChange(index, newTime)
                    }
                    onRemove={() => handleRemoveTime(index)}
                  />
                ))}
              </div>

              {/* Dose Amount */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <InputQuantity
                  label="1회 복용량"
                  value={doseAmount}
                  onChange={handleDoseAmountChange}
                  unit=""
                  step={doseUnit === "ml" ? 5 : 1}
                  minValue={doseUnit === "ml" ? 5 : 1}
                />
                <div className="flex gap-[8px] items-center justify-center w-full">
                  <SquareRadio
                    label="캡슐"
                    selected={doseUnit === "캡슐"}
                    onClick={() => handleDoseUnitChange("캡슐")}
                  />
                  <SquareRadio
                    label="정"
                    selected={doseUnit === "정"}
                    onClick={() => handleDoseUnitChange("정")}
                  />
                  <SquareRadio
                    label="ml"
                    selected={doseUnit === "ml"}
                    onClick={() => handleDoseUnitChange("ml")}
                  />
                </div>
              </div>

              {/* Memo */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="leading-[22px] text-[16px] text-neutral-700 tracking-[-0.32px] font-bold">
                  메모 (선택)
                </p>
                <div className="w-full">
                  <div className="border border-neutral-100 rounded-[12px]">
                    <textarea
                      value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                      placeholder="특이사항이 있다면 입력해주세요."
                      className="h-[104px] w-full resize-none p-[16px] outline-none bg-transparent font-medium leading-[20px] text-[14px] text-neutral-700 tracking-[-0.28px] placeholder:text-neutral-400 rounded-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notification */}
          <div className="bg-white box-border flex flex-col gap-[16px] items-start overflow-clip p-[16px] rounded-[16px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.04)] w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-[4px] items-start">
                <div className="flex gap-[8px] items-start w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d={svgPaths2.p24c3f000}
                      fill="#FACC15"
                    />
                  </svg>
                  <p className="leading-[24px] text-[16px] text-neutral-700 tracking-[-0.32px] font-bold">
                    알림 받기
                  </p>
                </div>
                <p className="font-medium leading-[20px] text-[14px] text-neutral-400 tracking-[-0.28px]">
                  복용 시간에 맞춰 알려드릴게요!
                </p>
              </div>
              <button
                onClick={() => setNotification(!notification)}
                className="h-[23px] relative w-[38px]"
              >
                <div
                  className={`absolute inset-0 rounded-[30px] ${
                    notification
                      ? "bg-emerald-900"
                      : "bg-neutral-300"
                  }`}
                />
                <div
                  className={`absolute aspect-[22/22] bg-white box-border flex flex-col gap-[10px] items-center justify-center px-[3px] py-[4px] rounded-[99px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] top-1/2 translate-y-[-50%] transition-all ${
                    notification
                      ? "left-[42.1%] right-[2.63%]"
                      : "left-[2.63%] right-[42.1%]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Info + Buttons */}
      <div className="fixed bottom-[0] bg-white box-border flex flex-col items-center pb-0 pt-[16px] px-0 w-full border-t border-[rgba(0,0,0,0.05)]">
        {/* Info */}
        <div className="bg-[rgba(163,163,163,0.14)] box-border content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative rounded-[999px] shrink-0">
          <div className="relative shrink-0 size-[16px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g clipPath="url(#clip0_34_4249)">
                <path
                  d={svgPathsInfo.p3b51300}
                  stroke="#059669"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_4249">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-emerald-600 text-nowrap tracking-[-0.28px] whitespace-pre">
            {` 여러 약을 한번에 추가할 수 있어요!`}
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border flex gap-[10px] items-center p-[16px] w-full">
              <button
                onClick={() => validateAndSave(false)}
                className="basis-0 grow h-[48px] min-h-px min-w-px rounded-[12px]"
                style={{
                  backgroundColor: "var(--primary-100)", // ✅ 배경색 변경
                }}
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border flex gap-[10px] h-[48px] items-center justify-center px-[20px] py-[8px] w-full">
                    <div className="flex gap-[4px] items-center">
                      <p
                        className="font-medium leading-[24px] text-[16px] tracking-[-0.32px]"
                        style={{
                          color: "var(--primary-600)", // ✅ 글자색 변경
                        }}
                      >
                        등록 완료
                      </p>
                    </div>
                  </div>
                </div>
              </button>
              <button
                onClick={() => validateAndSave(true)}
                className="basis-0 bg-gradient-to-b from-[#2cd5a5] via-50% via-[#41d395] to-[#56d284] grow h-[48px] min-h-px min-w-px rounded-[12px]"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border flex gap-[10px] h-[48px] items-center justify-center px-[20px] py-[8px] w-full">
                    <div className="flex gap-[4px] items-center">
                      <p className="font-medium leading-[24px] text-[16px] text-white tracking-[-0.32px]">
                        저장 후 계속 추가
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Medications List */}
      {savedMedications.length > 0 && (
        <div className="fixed bottom-[80px] left-0 right-0 flex flex-col items-center pb-0 pt-[16px] border-t border-[rgba(0,0,0,0.05)] bg-[rgb(255,255,255)]">
          <div className="flex gap-[10px] items-start w-[328px] pb-[16px]">
            {savedMedications.map((med, index) => (
              <div
                key={index}
                className="bg-[#e0f0e9] box-border flex gap-[10px] h-[34px] items-center justify-center px-[16px] py-[6px] rounded-[12px]"
              >
                <p className="font-medium leading-[20px] text-[#464646] text-[14px] tracking-[-0.28px]">
                  {med}
                </p>
                <button
                  onClick={() =>
                    setSavedMedications(
                      savedMedications.filter(
                        (_, i) => i !== index,
                      ),
                    )
                  }
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M9.64286 0.357143L0.357143 9.64286M0.357143 0.357143L9.64286 9.64286"
                      stroke="#464646"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toast Message */}
      {showToast && (
        <div className="fixed bottom-[112px] left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div
            className={`box-border flex gap-[8px] h-[48px] items-center px-[16px] py-0 rounded-[999px] border border-[rgba(255,255,255,0.1)] ${
              showError
                ? "bg-[rgba(236,91,68,0.8)]"
                : "bg-[rgba(0,0,0,0.6)]"
            }`}
          >
            {showError ? (
              <X
                size={24}
                className="text-neutral-50"
                strokeWidth={1.5}
              />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.10397 12.2539L14.6808 6.21381C14.836 6.07127 15.017 6 15.224 6C15.4309 6 15.612 6.07127 15.7672 6.21381C15.9224 6.35635 16 6.52573 16 6.72196C16 6.91819 15.9224 7.08734 15.7672 7.2294L8.64718 13.7862C8.49198 13.9287 8.31091 14 8.10397 14C7.89703 14 7.71596 13.9287 7.56075 13.7862L4.22385 10.7216C4.06865 10.5791 3.99415 10.4099 4.00036 10.2142C4.00657 10.0184 4.08753 9.84903 4.24325 9.70601C4.39898 9.563 4.58341 9.49173 4.79656 9.4922C5.00971 9.49268 5.19388 9.56395 5.34909 9.70601L8.10397 12.2539Z"
                  fill="#FAFAFA"
                />
              </svg>
            )}
            <p className="font-medium leading-[20px] text-[14px] text-neutral-50 tracking-[-0.28px]">
              {toastMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
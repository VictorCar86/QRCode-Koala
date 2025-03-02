"use client";

export type SwitchTabsType = "PREVIEW" | "QR";

const SwitchTabs = ({
  currentTab,
  setCurrentTab,
  onClick,
  disabled = false,
  disabledCallback,
  className,
}: {
  currentTab: SwitchTabsType;
  setCurrentTab: (tab: SwitchTabsType) => void;
  onClick?: () => void;
  disabled?: boolean;
  disabledCallback?: () => void;
  className?: string;
}) => {
  const handleTabClick = (tab: SwitchTabsType) => {
    if (disabled) {
      disabledCallback?.();
      return;
    }
    if (tab === "QR") {
      onClick?.();
    }
    setCurrentTab(tab);
  };

  return (
    <div
      className={`relative inline-flex w-[186px] h-[43px] rounded-full border-2 border-primary p-1 bg-white ${className}`}
    >
      {/* Sliding circle background */}
      <div
        className={`absolute top-1 h-8 w-[87px] bg-black rounded-full transition-transform duration-300 ease-in-out ${
          currentTab === "PREVIEW" ? "translate-x-0" : "translate-x-[5.5rem]"
        }`}
      />

      {/* Buttons */}
      <button
        className={`relative z-10 px-4 py-1.5 min-w-16 text-sm font-medium rounded-full transition-colors ${
          currentTab === "PREVIEW" ? "text-white" : "text-gray-500"
        }`}
        disabled={disabled}
        onClick={() => handleTabClick("PREVIEW")}
      >
        Preview
      </button>
      <button
        className={`relative z-10 w-[90px] px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
          currentTab === "QR" ? "text-white" : "text-gray-500"
        }`}
        onClick={() => handleTabClick("QR")}
      >
        QR
      </button>
    </div>
  );
};

export default SwitchTabs;

import { create } from "zustand";

interface QRState {
  qrCodeValue: string;
  setQrCodeValue: (value: string) => void;
  isCreating: boolean;
  setIsCreating: (value: boolean) => void;
}

export const useQRState = create<QRState>((set) => ({
  qrCodeValue: "",
  setQrCodeValue: (value) => set({ qrCodeValue: value }),
  isCreating: false,
  setIsCreating: (value) => set({ isCreating: value }),
}));

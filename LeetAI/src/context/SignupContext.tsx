import { createContext, useContext, useState } from "react";

type SignupData = {
  name: string;
  email: string;
  password: string;
};

type SignupContextType = {
  signupData: SignupData;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  clearSignupData: () => void;
};

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const value = {
    signupData,
    setName: (name: string) => setSignupData((prev) => ({ ...prev, name })),
    setEmail: (email: string) => setSignupData((prev) => ({ ...prev, email })),
    setPassword: (password: string) =>
      setSignupData((prev) => ({ ...prev, password })),
    clearSignupData: () => setSignupData({ name: "", email: "", password: "" }),
  };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within SignupProvider");
  }
  return context;
};

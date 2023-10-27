"use client";

import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Knob, KnobChangeEvent } from "primereact/knob";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import styles from "./page.module.css";

const PasswordGeneratorPage = () => {
  const [rangeInputValue, setRangeInputValue] = useState<number>(8);
  const [password, setPassword] = useState<string>("");
  const toast = useRef(null);

  // Checkboxes
  const [enableUppercaseLetters, setUppercaseLetters] = useState<boolean>(false);
  const [enableNumbers, setEnableNumbers] = useState<boolean>(false);
  const [enableSpecialCharacters, setEnableSpecialCharacters] = useState<boolean>(false);

  // Validation
  const [validPassword, setValidPassword] = useState<boolean>(false);

  // functions
  const checkNumbers = (password: string) => {
    return Boolean(password.match(/[0-9]/))
  }

  const checkUppercase = (password: string) => {
    return Boolean(password.match(/[A-Z]/));
  }

  const checkSpecialCharacters = (password: string) => {
    return Boolean(password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
  }

  const copyText = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      showToast()
    }
  }

  const generatePassword = () => {
    const allowedNumbers = "0123456789";
    const allowedLetters = "abcdefghijklmnopqrstuvwxyz";
    const allowedUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const allowedSpecialCharacters = "!@#$%^&*()";
    let allowedCharacters = allowedLetters;

    if (enableNumbers) {
      allowedCharacters += allowedNumbers
    }

    if (enableUppercaseLetters) {
      allowedCharacters += allowedUppercaseLetters
    }

    if (enableSpecialCharacters) {
      allowedCharacters += allowedSpecialCharacters;
    }

    setPassword("")

    let generatedPassword = "";

    for (let i = 0; i < rangeInputValue; i++) {
      let randomNumber = Math.floor(Math.random() * allowedCharacters.length)
      generatedPassword += allowedCharacters.substring(randomNumber, randomNumber + 1)
    }
    setPassword(generatedPassword)
    validatePassword(password)
  }

  const validatePassword = (password: string) => {
    if (checkNumbers(password)
        || checkUppercase(password)
        || checkSpecialCharacters(password)) {
          setValidPassword(!validPassword)
        }
  }

  const showToast = () => {
    toast.current.show({ severity: "info", summary: "Info", detail: "Password copied to clipboard."});
  }

  return(
    <main className="surface-0" data-testid="password-generator-page">
      <div className="text-900 font-bold text-6xl mb-4 text-center">Password Generator</div>

      <div className="grid">
        <div className="col-12 lg:col-4"></div>
        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div className="shadow-2 p-3 h-full flex flex-column">
              <InputText 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.password}
                data-testid="password-field"
              />
              <Button
                label="Copy password"
                icon="pi pi-copy"
                className="mt-3"
                onClick={copyText}
              />
              <div className="flex align-items-center mt-3">
                <Checkbox 
                  inputId="uppercaseLetters"
                  checked={enableUppercaseLetters}
                  onChange={() => setUppercaseLetters(!enableUppercaseLetters)}
                />
                <label htmlFor="uppercaseLetters" className="ml-2">Enable Uppercase Letters</label>
              B</div>
              <div className="flex align-items-center mt-3">
                <Checkbox
                  inputId="numbers"
                  checked={enableNumbers}
                  onChange={() => setEnableNumbers(!enableNumbers)}
                />
                <label htmlFor="numbers" className="ml-2">Enable Numbers</label>
              </div>
              <div className="flex align-items-center mt-3">
                <Checkbox
                  inputId="specialCharacters"
                  checked={enableSpecialCharacters}
                  onChange={() => setEnableSpecialCharacters(!enableSpecialCharacters)}
                />
                <label htmlFor="specialCharacters" className="ml-2">Enable Special Characters</label>
              </div>
              <div className="flex align-items-center mt-3 ml-2 justify-content-center">
                <Knob
                  value={rangeInputValue}
                  onChange={(e: KnobChangeEvent) => setRangeInputValue(e.value)}
                  min={8}
                  max={36}
                />
              </div>
              <div className="flex align-item-center mt-3 justify-content-around">
                <Button
                  label="Generate Password"
                  onClick={generatePassword}
                  icon="pi pi-replay"
                  data-testid="generate-password-btn"
                />
                <Button
                  label="Clear Password"
                  onClick={() => setPassword("")}
                  icon="pi pi-ban"
                />
                <Toast ref={toast} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PasswordGeneratorPage;
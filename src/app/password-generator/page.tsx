"use client";

import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Knob, KnobChangeEvent } from "primereact/knob";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import styles from "./page.module.css";
import usePasswordGenerator from '../hooks/usePasswordGenerator';

const PasswordGeneratorPage = () => {
  
  const { 
    rangeInputValue, 
    setRangeInputValue,
    password, 
    setPassword,
    enableUppercaseLetters, 
    setUppercaseLetters,
    enableNumbers, 
    setEnableNumbers,
    enableSpecialCharacters, 
    setEnableSpecialCharacters,
    checkNumbers,
    checkSpecialCharacters,
    checkUppercase,
    generatePassword,
    validatePassword,
  } = usePasswordGenerator();

  const toast = useRef<Toast>(null);
  
  const showToast = () => {
    toast.current?.show({ severity: "info", summary: "Info", detail: "Password copied to clipboard."});
  }

  const copyText = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      showToast()
    }
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
                <label htmlFor="uppercaseLetters" className="ml-2">
                  Enable Uppercase Letters
                </label>
              </div>
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
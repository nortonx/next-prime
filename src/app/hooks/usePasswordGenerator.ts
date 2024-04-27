import React, { useState } from "react"

export default function usePasswordGenerator() {
  // elements (????)
  const [rangeInputValue, setRangeInputValue] = useState<number>(8);
  const [password, setPassword] = useState<string>("");

  const [enableUppercaseLetters, setUppercaseLetters] = useState<boolean>(false);
  const [enableNumbers, setEnableNumbers] = useState<boolean>(false);
  const [enableSpecialCharacters, setEnableSpecialCharacters] = useState<boolean>(false);

  // Validation
  const [validPassword, setValidPassword] = useState<boolean>(false);

  // functions
  const checkNumbers = (password: string) => {
    return Boolean(password.match(/\d/))
  }

  const checkUppercase = (password: string) => {
    return Boolean(password.match(/[A-Z]/));
  }

  const checkSpecialCharacters = (password: string) => {
    return Boolean(password.match(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?~]/))
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

  return {
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
    validPassword,
    checkNumbers,
    checkUppercase,
    checkSpecialCharacters,
    generatePassword,
    validatePassword,
  }
}
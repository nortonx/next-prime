"use client";

import { InputText } from "primereact/inputtext";

const AboutPage = () => {
  return(
    <main className="flex align-items-center justify-content-center" data-testid="about-page">
      <h1>About Page</h1>
      <div className="form-row">
        <label htmlFor="city">City:</label>
        <InputText
          list="cities"
          id="city"
          name="city"
        />
        <datalist id="cities">
          <option value="bh"></option>
          <option value="sp"></option>
          <option value="rj"></option>
        </datalist>
      </div>
    </main>
  )
}

export default AboutPage;
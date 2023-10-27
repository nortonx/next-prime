import { render, screen, fireEvent } from "@testing-library/react"
import PasswordGeneratorPage from "@/app/password-generator/page"

describe("Password Generator Page", () => {
  it("renders page and match snapshot", async () => {
    const { container } = render(<PasswordGeneratorPage/>)
    const page = await screen.findByTestId("password-generator-page")
    expect(page).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it("should generate page when 'Generate Password' button is clicked", async () => {
    render(<PasswordGeneratorPage/>) 
    const passwordField = await screen.findByTestId("password-field")
    expect(passwordField.nodeValue).toBeFalsy()
    const generatePasswordBtn = await screen.findByTestId("generate-password-btn")
    fireEvent.click(generatePasswordBtn)
    expect(passwordField.nodeValue).toBeDefined()
  })
})
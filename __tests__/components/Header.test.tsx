import { render, screen } from "@testing-library/react"
import Header from "@/app/components/Header"

describe("Header", () => {
  it("should render and match snapshot", async () => {
    const { container } = render(<Header/>)
    const page = await screen.findByTestId("header");
    expect(page).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
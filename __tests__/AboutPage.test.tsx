import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/about/page"

describe("About Page", () => {
  it("should render and match snapshot", async () => {
    const { container } = render(<AboutPage/>)
    const page = await screen.findByTestId("about-page")
    expect(page).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
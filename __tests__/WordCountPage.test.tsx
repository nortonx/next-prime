import { render, screen } from  "@testing-library/react"
import WordCountPage from "@/app/word-count/page"

describe("Wound Count Page", () => {
  it("should render page and match snapshot", async () => {
    const { container } = render(<WordCountPage/>)
    const page = await screen.findByTestId("word-count-page");
    expect(page).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
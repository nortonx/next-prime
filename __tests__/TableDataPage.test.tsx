import { render, screen} from '@testing-library/react';
import TableDataPage from '@/app/table-data/page';

describe("Table Data Page", () => {
  it("should render and match snapshot", async () => {
    const { container } = render(<TableDataPage/>);
    const page = await screen.findByTestId("table-data");
    expect(page).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

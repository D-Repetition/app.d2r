export const repeat = (count: number, render: (index: number) => React.ReactNode) =>
    Array.from({ length: count }, (_, i) => render(i));
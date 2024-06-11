export default function Tabs({ children, buttons, BtnsContainer = "menu" }) {
  return (
    <>
      <BtnsContainer>{buttons}</BtnsContainer>
      {children}
    </>
  );
}

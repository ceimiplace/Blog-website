export default function MainContainer({ children }) {
  return (
    <div className="grow flex flex-col border-2 border-slate-400 p-2 mb-2  ">
      {children}
    </div>
  );
}

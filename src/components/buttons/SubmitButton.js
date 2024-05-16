export default function SubmitButton({ children }) {
  return (
    <>
      <button
        type="submit"
        className="bg-slate-700 p-1 px-7 shadow-sm hover:shadow-xl text-white rounded-full hover:bg-slate-900 dark:hover:bg-slate-500 block mx-auto"
      >
        {children}
      </button>
    </>
  );
}

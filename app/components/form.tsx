import React from "react";

interface FormProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Form: React.FC<FormProps> = ({ inputValue, setInputValue }) => {
  const Password = 1234;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    if (inputValue === Password.toString()) {
      alert("GOOD PASSWORD");
    } else {
      alert("BAD PASSWORD");
    }
  };
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className=" flex flex-col h-60 justify-between"
    >
      <input
        type="password"
        className="bg-gray-300 text-black text-4xl border-none h-40 w-96 rounded-xl px-3 outline-none"
        value={inputValue}
        readOnly
      />
      <div className="flex justify-between flex-row-reverse">
        <button
          disabled={inputValue.length < 1 && true}
          type="submit"
          className="bg-green-200 text-gray-600 text-xl font font-extrabold w-36 h-12 border-none rounded-xl active:translate-y-1"
        >
          unlock
        </button>

        <button
          type="reset"
          onClick={() => setInputValue("")}
          className="bg-red-300 text-gray-600 text-xl font-semibold w-36 h-12  border-none rounded-xl active:translate-y-1"
        >
          delete
        </button>
      </div>
    </form>
  );
};

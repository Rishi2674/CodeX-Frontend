import React, { useState } from "react";
import axios from "axios";
const Test_case_card = ({ visible, onClose, id }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  function handleSave(event) {
    event.preventDefault();
    // Convert string to Blob
    const blob = new Blob([input], { type: "text/plain" });

    // Wrap Blob in a File object (optional, but may be useful if your server expects a File)
    const file = new File([blob], "filename.txt", { type: "text/plain" });
    const form = new FormData();
    form.append("input", file);
    form.append("output", output);
    form.append("problem", id);
    axios
      .post("http://localhost:6969/api/testcase", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        console.log(response.data);
        
      });
  }
  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[#22243E] bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <form className="bg-[#22243E] p-2 rounded h-[20rem] w-[25rem] flex flex-col justify-around" onSubmit={handleSave}>
        <div>
          <div className="text-[#F59837] font-semibold text-2xl mb-1">
            Input*
          </div>
          <input
            className="bg-[#22243E] w-[90%] mx-4 py-2 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
            placeholder="Input"
            required
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="text-[#F59837] font-semibold text-2xl mb-1">
            Output*
          </div>
          <input
            className="bg-[#22243E] w-[90%] mx-4 py-2 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
            placeholder="Output"
            required
            value={output}
            onChange={(e) => {
              setOutput(e.target.value);
            }}
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            className="bg-[#22243E] text-[#F59837] px-9 py-1 w-[50%] rounded-md border-[1px] border-[#F59837] flex justify-center"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Test_case_card;

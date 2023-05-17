import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const inputHandler = async () => {
    try {
      JSON.parse(input);
    } catch (e) {
      console.log("invalid json");
      return;
    }

    await axios
      .post("/api/sagemaker", {
        input,
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.response);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-emerald-200">
        <h1 className="text-center">Enter your json input here:</h1>
        <textarea
          cols={50}
          rows={10}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          onClick={inputHandler}
        >
          Submit
        </button>
        <h1 className="text-center">Output: </h1>
        {output && <p>{output}</p>}
      </div>
    </>
  );
}

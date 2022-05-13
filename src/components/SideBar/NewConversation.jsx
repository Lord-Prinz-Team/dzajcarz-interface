import { useEffect, useState } from "react";

const NewConversation = () => {
  const [id, setId] = useState("");

  const updateId = (ID) => {
    setId(ID);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (id.length !== 18) {
      return;
    }

    const result = await fetch(`http://localhost:4761/chat/${id}`);
    console.log(result);
    if (!result.ok) {
      console.log("Nie znaleziono użytkownika");
    }
  };

  return (
    <div className="bg-gray-700 w-full">
      <h1 className="text-gray-400 font-semibold text-2xl p-14 mb-3 uppercase">
        Nowa Konwersacja
      </h1>
      <form className="w-full px-14 h-16 relative" onSubmit={submitHandler}>
        <input
          type="text"
          maxLength={18}
          className="w-full h-full bg-gray-900 outline-none placeholder-gray-600 text-gray-400 pl-5 text-xl rounded-md"
          pattern="[0-9]{18}"
          placeholder="ID Użytkownika"
          onInput={(e) => {
            updateId(e.target.value);
          }}
        />
        <input
          type="submit"
          className="absolute h-3/5 text-lg bg-blue-900 right-20 -mr-3 px-5 text-gray-300 top-1/2 -translate-y-1/2  rounded-md"
          value="Stwórz konserwację"
        />
      </form>
    </div>
  );
};

export default NewConversation;

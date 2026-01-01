import { useState } from "react";

export default function TodoList() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [status, setStatus] = useState(false);

  const addItems = (e) => {
    e.preventDefault();
    //  const newStatus= e.status.checked
    if (Todo === "") return;
    setTodos([...Todos, { text: Todo, status: status }]);
    setTodo("");
    setStatus(false);
  };

  const deleteTodo = (indexToDelete) => {
    const newTodos = Todos.filter((el, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  const openEditPopUp = (index) => {
    setShowPopup(true);
    setEditText(Todos[index].text);
    setEditIndex(index);
  };

  const saveEdit = () => {
    if (editIndex === null) return;
    const newTodos = [...Todos];
    newTodos[editIndex].text = editText;

    setTodos(newTodos);
    setEditIndex(null);
    setShowPopup(false);
    setEditText("");
  };

  return (
    <>
      <div className="ml-15 mt-20">
        <form onSubmit={addItems}>
          <input
            type="checkbox"
            name="status"
            className="border w-6 h-8 mr-10"
            checked={status}
            onChange={(e) => {
              setStatus(e.target.checked);
            }}
          />
          <input
            type="text"
            placeholder="Enter ToDo list here"
            className="border-2 py-2 px-5"
            value={Todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 ml-4 px-8 py-2 hover:bg-sky-700 rounded-2xl text-[18px] "
          >
            Submit
          </button>

          <table className="border-collapse border border-gray-400 mt-10 text-center">
            <thead>
              <tr>
                <th className="border px-4">S.N</th>
                <th className="border px-4">Tasks</th>
                <th className="border px-4">Edit item</th>
                <th className="border px-4">Delete Item</th>
                <th className="border px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {Todos.map((element, index) => {
                return (
                  <tr>
                    <td className="border">{index + 1}</td>
                    <td className="border">{element.text}</td>
                    <td
                      className="border text-blue-600 hover:underline underline-offset-2 cursor-pointer"
                      onClick={() => openEditPopUp(index)}
                    >
                      Edit
                    </td>
                    <td className="border">
                      <button
                        className="hover:bg-red-700 rounded-2 cursor-pointer"
                        onClick={() => {
                          deleteTodo(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="border px-2 py-1">
                      {element.status ? "yes" : "no"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>

      {showPopup && (
        <div className="bg-green-500 flex items-center justify-center mt-20 text-center gap-y-5 ">
          <div className="gap-y-5">
            <h1>Edit Todo</h1>
            <input
              type="text"
              className="border-2 px-10 py-3"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <div>
              <button
                className="border-2 ml-4 px-8 py-2 hover:bg-sky-700 rounded-2xl text-[18px]"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                className="border-2 ml-4 px-8 py-2 hover:bg-sky-700 rounded-2xl text-[18px]"
                onClick={saveEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

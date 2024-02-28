import NewTask from "./NewTask";

export default function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-4">
        This project does not have any tasks yet.
      </p>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        <li className="flex justify-between my-4">
          <span>Text</span>
          <button className="text-stone-700 hover:text-red-500">Clear</button>
        </li>
      </ul>
    </section>
  );
}

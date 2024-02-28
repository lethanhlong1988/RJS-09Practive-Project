export default function SelectedProject({ project }) {
  const formattedDate = new Date().toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <div>SelectedProject</div>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">Tille</h1>
          <button className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">Date</p>
        <p className="text-stone-600 whitespace-pre-wrap">description</p>
      </header>
      TASKS
    </div>
  );
}

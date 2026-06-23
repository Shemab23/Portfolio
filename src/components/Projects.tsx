export default function Projects() {
  return (
    <div className="z-index-10 w-full p-14 text-txt">
      <h1>featured Projects</h1>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <>
            <div className="h-100 w-80 bg-gray-500">
              <p>image</p>
              <h2>name {i}</h2>
              <p>description</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

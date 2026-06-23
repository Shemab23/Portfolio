export default function Tool() {
  return (
    <div className="z-index-10 flex w-full gap-2 p-14 text-txt">
      <div className="flex w-[10%] gap-2">
        <p>icon</p>
        <h2 className="">Who am i?</h2>
      </div>
      <div className="flex w-[90%] gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <p>icon{i + 1}</p>
        ))}
      </div>
    </div>
  )
}

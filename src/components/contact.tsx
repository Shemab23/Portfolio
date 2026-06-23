export default function Contact() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div className="boder-white h-170 w-170 rounded-md border border-2 bg-gray-400/60">
        <h1>contact us</h1>

        <div>
          <p>Name</p>
          <div className="ml-1.5 h-6 w-80 bg-gray-300" />
        </div>
        <div className="flex gap-2 pt-2">
          <>
            <p>email</p>
            <div className="ml-1.5 h-6 w-80 bg-gray-300" />
          </>
          <>
            <p>phone</p>
            <div className="ml-1.5 h-6 w-80 bg-gray-300" />
          </>
        </div>
        <div>
          <p>message</p>
          <div className="ml-1.5 h-60 w-100 bg-gray-300" />
        </div>
      </div>
    </div>
  )
}

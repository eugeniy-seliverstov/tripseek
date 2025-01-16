
function Banner() {
  return (
    <div
      style={{ background: '#250963' }}
      className="inline-flex items-center p-4 gap-24 rounded-lg text-white text-sm font-semibold leading-4"
    >
      <span className="max-w-40">Want to build your own Skratch map?</span>
      <a
        href="https://www.skratch.world"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: '#5626f4' }}
        className="inline-flex items-center rounded-lg px-4 py-2.5 hover:text-sky-500 transition duration-300 ease-in-out"
      >
        Get Skratch
      </a>
    </div>
  )
}

export default Banner
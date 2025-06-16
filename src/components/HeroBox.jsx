import mec from "../assets/mec.png";

const HeroBox = () => {
  return (
    <div className="flex items-center justify-center flex-col sm:flex-row lg:flex-col shrink-0 lg:w-1/3 lg:my-4">
      <div
        className={`size-44 relative my-4 sm:mx-3 before:absolute 
         before:size-44 before:rounded-full before:bg-gradient-to-tr before:from-red-400 before:via-orange-400 before:to-rose-400 before:transition-opacity before:duration-500 `}
      >
        <img
          src={mec}
          alt="Zahran Liyasdeen"
          className={`size-44 rounded-full border border-zinc-500`}
          style={{
            filter: "hue-rotate(5deg)",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-zinc-400 text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-rose-400">
            Zahran Liyasdeen
          </span>
        </div>
        <div className="text-zinc-500">&#64;jallu_dev</div>
        <div className="text-zinc-400 whitespace-nowrap w-full overflow-hidden text-ellipsis text-center">
          Software & ML Engineer
        </div>
      </div>
    </div>
  );
};

export default HeroBox;

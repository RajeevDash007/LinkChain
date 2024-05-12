import Link from "next/link";


export default function Home() {
  return (
    <main>    
      <section className="flex flex-col justify-center items-center pt-40">
        <div className="">
          <h1 className="text-6xl font-bold text-center">
            LINK<span className="text-yellow-400">Chain</span>
          </h1>
          <p className="text-center mt-4 font-semibold text-slate-600">
            LinkChain is a powerful platform that allows you to easily
            manage,share and analyze all your links in one place.
          </p>
        </div>
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mt-10">
          <div className="mx-auto w-full space-y-4">
            <form className="flex flex-col lg:flex-row space-x-2 items-center gap-4">
              <div className="flex">
                <span className="">linkchain.to/</span>
                <input
                  className="max-w-lg flex-1 shadow-xl border-yellow-400 rounded-md border-2 outline-sky-500"
                  placeholder="username"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="bg-slate-700 p-1 px-7 shadow-sm hover:shadow-xl text-white rounded-full hover:bg-slate-900"
              >
                create
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By signing up, you agree to our {"  "}
              <Link className="underline underline-offset-2" href="#">
                 Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

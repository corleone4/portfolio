export default function Social() {
  return (
    <>
      <section id="social" className="py-12 bg-slate-950 sm:py-16 lg:py-20">
        <div
          className="px-4 mx-auto bg-slate-800 p-6 max-w-7xl sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="flex flex-row max-w-7xl">
            <div className="flex flex-rowm-4">
              <div className="w-64 h-64">
                {" "}
                <img src={"./img/github_pfp.jpeg"}></img>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center w-full">
              <div className="flex flex-row w-3/4 items-start h-1/2">
                <h2 className="mt-2 text-3xl font-bold text-gray-200 sm:text-4xl xl:text-5xl font-pj">
                  Me encontre nas redes sociais
                </h2>
              </div>
              <div className="flex flex-row w-3/4 items-start h-3/4">
                <div className="flex flex-row gap-22 space-between text-gray-200 text-2xl">
                  <div>
                    <h2>Github: corleone4</h2>
                    <h2>LinkedIn: corleone4</h2>
                    <h2>Twitter: corleone4</h2>
                    <h2>Instagram: corleone4</h2>
                  </div>
                  <div>
                    Outras:
                  </div>
                  <div>
                    <h2>Facebook: corleone4</h2>
                    <h2>YouTube: corleone4</h2>
                    <h2>Discord: corleone4</h2>
                    <h2>Telegram: corleone4</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

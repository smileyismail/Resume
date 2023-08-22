import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import Bio from "./components/Bio";
import Contacts from "./components/Contacts";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import Courses from "./components/Courses";

const App = () => {
  const componentRef: any = useRef();

  return (
    <main className="bg-red-300 p-16 font-roboto text-black overflow-scroll">
      <section
        ref={componentRef}
        className=" bg-white p-1.5 w-[21cm] h-[29.7cm] min-w-[21cm] min-h-[29.7cm] max-w-[21cm] max-h-[29.7cm] overflow-hidden mx-auto flex flex-col gap-1.5"
      >
        <section className="h-[25%] max-h-[25%] overflow-hidden flex gap-1.5">
          <div className="w-[70%] bg-primary rounded-md p-1.5">
            <Bio />
          </div>

          <div className="w-[30%] bg-secondary rounded-md p-1.5 text-primary">
            <Contacts />
          </div>
        </section>

        <section className="h-full overflow-hidden flex gap-1.5">
          <div className="w-[70%] bg-white rounded-md p-1.5 flex flex-col gap-1.5">
            <Experiences />
            <hr />
            <Projects />
          </div>

          <div className="w-[30%] bg-primary rounded-md p-1.5 flex flex-col gap-1.5">
            <Skills />
            <hr />
            <Educations />
            <hr />
            <Courses />
          </div>
        </section>
      </section>

      <ReactToPrint
        trigger={() => {
          return (
            <div className="flex justify-center">
              <button className="bg-accent rounded-md text-black900 font-bold px-6 py-2 mt-5 mx-auto">
                Print
              </button>
            </div>
          );
        }}
        content={(): any => componentRef.current}
        documentTitle="Syed Ismailuddin"
        pageStyle="print"
      />
    </main>
  );
};

export default App;

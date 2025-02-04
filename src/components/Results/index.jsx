import React from "react";
import { FaFilePdf } from "react-icons/fa";
export default function Results() {
  return (
    <div>
      <div className="heading playwrite-us-trad-annocment text-left text-2xl font-bold text-orange-400">
        Recruitment Results
        </div>
        {/* <div className="underline w-[150px] h-[4px] mt-1  bg-orange-500"></div> */}
        <div className="Recruitment_results text-left mt-10">
          <table class="table-auto w-full text-xl ">
            <thead className="text-xs  uppercase ">
              <tr className="text-xl">
                <th>Domain</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr>
                <td className="py-2 text-xl">Marketing and Public Relations</td>
                <td className="py-2 text-2xl px-6">
                <a href="https://drive.google.com/file/d/1Aha17F3ku67CdfTCwf52Go3wB1awRyx-/view?usp=sharing" target="_blank">
                    <FaFilePdf className="cursor-pointer text-orange-700" />
                    </a>
                </td>
   
              </tr>
          
            </tbody>
          </table>
        </div>
   
    </div>
  );
}

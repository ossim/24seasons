import Head from 'next/head';
import getYear from 'date-fns/getYear';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import Header from '../components/header';
import seasons from "../components/seasons";

const today = new Date();
const currYear = getYear(today);

const currSeason = seasons.reduce(
  (acc, curr, index) => {
    if (
      isAfter(today, new Date(currYear, curr.start.mon, curr.start.day)) &&
      isBefore(today, new Date(currYear, curr.end.mon, curr.end.day))
    ) {
      return index;
    } else {
      return acc
    }
  }, -1
);

const currHou = currSeason && seasons[currSeason].hou.reduce(
  (acc, curr, index) => {
    if (
      isAfter(today, new Date(currYear, curr.start.mon, curr.start.day)) &&
      isBefore(today, new Date(currYear, curr.end.mon, curr.end.day))
    ) {
      return index;
    } else {
      return acc
    }
  }, -1
)

export default function Home() {
  return (
    <div className="flex flex-col items-start text-lg antialiased font-medium text-gray-900 font-body">
      <Head>
        <title>24 Seasons, 72 Hou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row flex-wrap justify-center w-screen px-0 py-12 mx-auto text-left md:px-12 2xl:max-w-screen-2xl">
        <div className="flex flex-col justify-start flex-grow flex-shrink-0 px-4 mb-20 w-96">
          <div>24 Seasons, <span className="text-gray-500">72 Hou</span></div>
          <div>A Classical Chinese Calendar of Natural Phenomena</div>
          <div className="mt-8 italic text-gray-500">Today's season and hòu:</div>
          <div>{seasons[currSeason].chi} {seasons[currSeason].eng}</div>
          <div>{seasons[currSeason].hou[currHou].chi} {seasons[currSeason].hou[currHou].eng}</div>

          <div className="my-8 text-gray-500">
            <div className="italic">About Seasons:</div>
            <div>
              The cycle of 24 Seasons was a method of calendar-keeping in ancient East Asia, millennia before the adoption of the Gregorian calendar.
              Each Season is divided into 3 unique <i>Hòu</i>, or five-day weeks.
            </div>
            <div className="mt-4">
              These seasons and weeks were named after the cyclical machinations of nature, and proved to be a useful tool for farmers by the banks
              of the Yellow River to orchestrate the sowing and reaping of crops.
            </div>
            <div className="mt-4">
              The calendar of Seasons then spread across East Asia, and its use expanded past agriculture. Festivals, ceremonies, and daily life were
              timed around this cycle.
            </div>
          </div>
          <hr/>
          <div className="my-8 text-gray-500">
            <div className="italic">About Hòu:</div>
            <div>
              Each Season is divided into 3 Hòu, that defined an even more granular description of the passage of time. These hòu are considerably
              more obscure than the Seasons, with wider variations between nations.
            </div>
          </div>
          <hr/>
        </div>
        <table className="w-full mx-0 lg:mx-20 lg:w-auto">
          <thead>
            <tr>
              <th className="px-4 pb-2 font-normal text-gray-500">Name</th>
              <th className="hidden md:table-cell"></th>
              <th className="hidden px-4 pb-2 font-normal text-gray-500 sm:table-cell w-96">Translation</th>
              <th className="px-4 pb-2 font-normal text-gray-500">Date</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((season, sI) => {
              return (
                <React.Fragment key={sI}>
                <tr>
                  <td className="hidden px-4 pt-4 pb-2 align-top md:table-cell font-upright whitespace-nowrap">
                    {sI === currSeason && (
                      <div className="inline-block w-3 h-3 mr-2 -ml-6 rounded-full bg-gradient-to-b from-yellow-300 to-red-600"/>
                    )} {season.py}
                  </td>
                  <td className="hidden px-4 pt-4 pb-2 align-top sm:table-cell whitespace-nowrap">{season.chi}</td>
                  <td className="px-4 pt-4 pb-2 align-top">{season.eng}</td>
                  {/* <td className="px-4 pt-4 pb-2">{format(new Date(currYear, season.start.mon, season.start.day), "MMM d")}</td> */}
                </tr>
                {season.hou.map((hou, hI) => {
                  return (
                    <tr className="text-gray-500" key={hI}>
                      <td className="hidden px-4 py-2 align-top md:table-cell font-upright whitespace-nowrap">{sI === currSeason && hI === currHou && (
                        <div className="inline-block w-3 h-3 mr-2 -ml-6 rounded-full bg-gradient-to-b from-yellow-200 to-red-500"/>
                      )} {hou.py}</td>
                      <td className="hidden px-4 py-2 align-top sm:table-cell whitespace-nowrap">{hou.chi}</td>
                      <td className="px-4 py-2 align-top">{hou.eng}</td>
                      <td className="px-4 py-2 align-top whitespace-nowrap">{format(new Date(currYear, hou.start.mon, hou.start.day), "MMM d")}</td>
                    </tr>
                  )
                })}
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}

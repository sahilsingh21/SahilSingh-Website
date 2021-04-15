import Head from 'next/head'
import Avatar from "../components/Avatar";
import {MicrophoneIcon, DotsVerticalIcon} from "@heroicons/react/solid"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header */}
      <header className="flex w-full p-5 text-sm text-gray-700 justify-end">
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link"> Images</p>

          {/* Icon */}
            <DotsVerticalIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>



          {/* Avatar */}
          <Avatar url= "/home/sahil/Pictures/profile_pic/pic.jpg" />
        </div>
      </header>


      {/* body */}



      {/*footer */}
    </div>
  )
}

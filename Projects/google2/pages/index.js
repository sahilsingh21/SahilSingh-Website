import Head from 'next/head'
import Avatar from "../components/Avatar";
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

          {/* Avatar */}
          <Avatar url= "/home/sahil/Pictures/profile_pic/pic.jpg" />
        </div>
      </header>


      {/* body */}



      {/*footer */}
    </div>
  )
}

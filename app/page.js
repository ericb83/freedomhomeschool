import Image from "next/image";
import homeschool from "../public/homeschool.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <section className="flex flex-col lg:flex-row items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold capitalize leading-wide mb-6">
            The perfect hours tracking solution for Homeschoolers.
          </h1>
          <p>
            Introducing "Freedom Homeschool", the essential companion for modern
            homeschooling families. Designed with flexibility and functionality
            in mind, Freedom Homeschool empowers users to effortlessly track
            student learning hours and milestones. Whether you're managing
            multiple children's schedules or documenting progress for
            transcripts, this intuitive app streamlines the entire process.
            Customize study logs, monitor curriculum completion, and generate
            detailed transcripts with ease, ensuring compliance and clarity for
            academic records. Embrace the freedom to educate on your terms with
            the comprehensive tools of Freedom Homeschool, your partner in
            educational excellence.
          </p>
        </div>
        <Image
          src={homeschool}
          alt="homeschool picture"
          className="ml-4 mt-6 w-1/2"
        />
      </section>
      <div className="flex flex-row gap-10 mt-4">
        <Link href="/signup">
          <button className="btn btn-primary">Signup</button>
        </Link>

        <button className="btn btn-ghost">Login</button>
      </div>
    </main>
  );
}

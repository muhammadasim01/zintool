import Link from "next/link";

const SecondaryNavbar = ({ open }: { open: boolean }) => {
  return (
    <div className="bg-white md:my-4">
      <div className="container mx-auto px-4 py-2  md:justify-start md:space-x-8 md:overflow-x-auto hidden md:flex">
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/stock-video"
        >
          Stock Video
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/video-templates"
        >
          Video Templates
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/music"
        >
          Music
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/sound-effects"
        >
          Sound Effects
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/graphic-templates"
        >
          Graphic Templates
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/graphics"
        >
          Graphics
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/presentation-templates"
        >
          Presentation Templates
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/photos"
        >
          Photos
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/fonts"
        >
          Fonts
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/add-ons"
        >
          Add-ons
        </Link>
        <Link
          className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
          href="/more"
        >
          More
        </Link>
      </div>
      {open && (
        <>
          <div className="flex flex-col space-y-3 bg-white items-center  md:hidden">
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/stock-video"
            >
              Stock Video
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/video-templates"
            >
              Video Templates
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/music"
            >
              Music
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/sound-effects"
            >
              Sound Effects
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/graphic-templates"
            >
              Graphic Templates
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/graphics"
            >
              Graphics
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/presentation-templates"
            >
              Presentation Templates
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/photos"
            >
              Photos
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/fonts"
            >
              Fonts
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/add-ons"
            >
              Add-ons
            </Link>
            <Link
              className="text-black hover:text-blue-700 font-semibold whitespace-nowrap"
              href="/more"
            >
              More
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SecondaryNavbar;

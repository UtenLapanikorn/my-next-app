import Link from "next/link";

type MenuBarProps = {
    page: string;
}

export default function MenuBar(props: MenuBarProps) {
  return (
    <div>
      <div className=" flex justify-around bg-blue-500 p-4 text-3xl">
        <Link href="/" className="menu-item mitr-semibold">
          หน้าแรก
        </Link>
        <Link href="/state" className="menu-item mitr-semibold">
          เรียนรู้ State
        </Link>
        <Link href="/props" className="menu-item mitr-semibold">
          เรียนรู้ Props
        </Link>
        <Link href="/use-effect" className="menu-item mitr-semibold">
          เรียนรู้ UseEffect
        </Link>
      </div>
      <div className="p-4 bg-green-700">
        <p className="text-2xl mitr-medium text-center">
          ตอนนี้คุณอยู่ที่หน้า {props.page}
        </p>
      </div>
    </div>
  );
}

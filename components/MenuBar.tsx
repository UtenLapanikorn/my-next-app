import Link from "next/link";

export default function MenuBar() {
    return (
        <div className=" flex justify-around bg-blue-500 p-4 text-3xl">
            <Link href='/' className="menu-item mitr-semibold" >หน้าแรก</Link>
            <Link href='/state'className="menu-item mitr-semibold">เรียนรู้ State</Link>
        </div>
    );
}

import Link from "next/link";

export default function Bottom() {
  return (
    <div>
      <hr />
      <p className="text-center pt-3">
        <Link href="https://status.singer.systems" className="font-bold italic">Servers Status</Link>
      </p>
    </div>
  );
}

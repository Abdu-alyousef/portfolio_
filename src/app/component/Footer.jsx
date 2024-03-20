"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-2 pb-3 shadow-md bg-neutral-300">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-8">
          <div className="p-2 rounded-md hover:bg-yellow-700 transition">
            <Link href="#">
              <Image src="/linkedin.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-yellow-700 transition">
            <Link href="#">
              <Image src="/git.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-yellow-700 transition">
            <Link href="#">
              <Image src="/insta.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-yellow-700 transition">
            <Link href="#">
              <Image src="/x.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; 2024 Abdu Alyousef. All rights reserved.
        </p>
      </div>
    </div>
  );
}

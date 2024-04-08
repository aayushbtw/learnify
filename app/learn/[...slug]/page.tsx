import { Link } from "@nextui-org/react";

import fs from "node:fs";
import path from "node:path";

export default function Home({ params }: { params: { slug: string[] } }) {
  const grade = params.slug[0];
  const subject = params.slug[1];

  const folderPath = path.join(process.cwd(), "public", grade, subject);
  const filenames = fs.readdirSync(folderPath);

  const pdfsList = filenames
    .filter((filename) => filename.endsWith(".pdf"))
    .map((filename) => ({
      name: filename,
      path: `${process.env.NEXT_PUBLIC_BASE_PATH}/${grade}/${subject}/${filename}`,
    }));

  return (
    <>
      <section className="w-full py-6 grid gap-4">
        <h1 className="text-xl font-bold">
          PDFs for {grade}/{subject}
        </h1>
        <div className="grid grid-cols-5 gap-6 mt-3">
          {pdfsList.map((item, idx) => (
            <Link href={`/${grade}/${subject}/${item.name}`} key={idx}>
              Chapter {item.name.replace(".pdf", "")}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

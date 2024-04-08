import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

const classList = {
  Twelfth: [
    { subject: "Math", modules: 10, cover: "/math.jpg" },
    { subject: "Science", modules: 13, cover: "/science.jpg" },
    { subject: "English", modules: 12, cover: "/english.jpg" },
    { subject: "Hindi", modules: 8, cover: "/hindi.jpg" },
  ],
  Eleventh: [
    { subject: "Math", modules: 10, cover: "/math.jpg" },
    { subject: "Science", modules: 13, cover: "/science.jpg" },
    { subject: "English", modules: 12, cover: "/english.jpg" },
    { subject: "Hindi", modules: 8, cover: "/hindi.jpg" },
  ],
  Tenth: [
    { subject: "Math", modules: 10, cover: "/math.jpg" },
    { subject: "Science", modules: 13, cover: "/science.jpg" },
    { subject: "English", modules: 12, cover: "/english.jpg" },
    { subject: "Hindi", modules: 8, cover: "/hindi.jpg" },
  ],
  Ninth: [
    { subject: "Math", modules: 10, cover: "/math.jpg" },
    { subject: "Science", modules: 13, cover: "/science.jpg" },
    { subject: "English", modules: 12, cover: "/english.jpg" },
    { subject: "Hindi", modules: 8, cover: "/hindi.jpg" },
  ],
  // Eighth: [
  //   { subject: "Math", modules: 10, cover: "/maths.jpeg" },
  //   { subject: "Science", modules: 10, cover: "/maths.jpeg" },
  //   { subject: "English", modules: 10, cover: "/maths.jpeg" },
  //   { subject: "Hindi", modules: 10, cover: "/maths.jpeg" },
  // ],
  // Seventh: [
  //   { subject: "Math", modules: 10, cover: "/maths.jpeg" },
  //   { subject: "Science", modules: 10, cover: "/maths.jpeg" },
  //   { subject: "English", modules: 10, cover: "/maths.jpeg" },
  //   { subject: "Hindi", modules: 10, cover: "/maths.jpeg" },
  // ],
};

export default function Home() {
  return (
    <>
      <section className="w-full py-6 grid gap-4">
        {Object.keys(classList).map((grade, idx) => (
          <div key={idx}>
            <h1 className="text-xl font-bold">Grade {grade}</h1>
            <div className="grid grid-cols-4 gap-6 mt-3">
              {classList[grade].map((item, idx) => (
                <Link href={`/learn/${grade}/${item.subject}`} key={idx}>
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <div className="flex gap-2 items-center text-tiny justify-between w-full">
                        <p className="uppercase font-bold">NCERT</p>
                        <small className="text-primary-foreground bg-primary px-2 rounded-lg">
                          {item.modules} modules
                        </small>
                      </div>
                      <h4 className="font-bold text-large">{item.subject}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={"/cover/" + item.cover}
                        width={270}
                      />
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

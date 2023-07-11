import Image from "next/image";

export function MyProfilePic() {
  return (
    <section className="fixed top-0 mx-auto w-full">
      <Image
        className="mx-auto rounded-3xl"
        src="/images/beech-hill-me.jpg"
        width={1000}
        height={1000}
        alt="Kelley Sharp"
        priority={true}
      />
    </section>
  );
}

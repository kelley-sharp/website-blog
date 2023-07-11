import Image from "next/image";

export function MyProfilePic() {
  return (
    <section className="fixed top-0 mx-auto w-full">
      <Image
        className="mx-auto rounded-3xl"
        src="/images/me.png"
        width={200}
        height={200}
        alt="Kelley Sharp"
        priority={true}
      />
    </section>
  );
}

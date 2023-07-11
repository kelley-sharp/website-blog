import Image from "next/image";

export function MyProfilePic() {
  return (
    <section className="mx-auto w-full">
      <Image
        className="mx-auto border-b-8"
        src="/images/me.png"
        width={200}
        height={200}
        alt="Kelley Sharp"
        priority={true}
      />
    </section>
  );
}

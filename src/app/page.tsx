import { CenterPiece } from "src/app/components/center-piece";
import { PostsList } from "src/app/components/posts-list";

export const revalidate = 0; //86400 one day in seconds

export default function Home() {
  return (
    <>
      <CenterPiece />
      <PostsList />
    </>
  );
}

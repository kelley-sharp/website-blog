import { CenterPiece } from "./components/center-piece";
import { PostsList } from "./components/posts-list";

export const revalidate = 86400; //86400 one day in seconds

export default function Home() {
  return (
    <>
      <CenterPiece />
      <PostsList />
    </>
  );
}

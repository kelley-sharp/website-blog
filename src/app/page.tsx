import { CenterPiece } from "src/app/components/center-piece";
import { PostsList } from "src/app/components/posts-list";

export default function Home() {
  return (
    <>
      <CenterPiece />
      <PostsList className="max-h-24 overflow-y-scroll" />
    </>
  );
}

import PostList from "./post-list";
import { client } from "@/base/tina/__generated__/client";

export default async function Page() {
  const pages = await client.queries.postConnection();

  return <PostList {...pages} />;
}

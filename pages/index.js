import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import FeaturedPost from "../sections/FeaturedPost";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 bg-grey-500">
      <FeaturedPost />
      <Head>
        <title>BLOG</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts &&
            posts.map((post, i) => <PostCard post={post.node} key={i} />)}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

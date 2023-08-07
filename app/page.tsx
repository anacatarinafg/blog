import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";

async function getSanityData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);
  return data;
}

export default async function Index() {
  const data = (await getSanityData()) as Post[];
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold text-center leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
          — Dive into my life —
        </h1>
      </div>
      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="xl:col-span-4">
                <p className="text-end font-medium leading-6 text-warmMidGray">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>
              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-5 xl:col-span-4"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                </div>
                <p className="prose-zinc max-w-none text-gray-500 text-justify dark:text-gray-400 line-clamp-2">
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

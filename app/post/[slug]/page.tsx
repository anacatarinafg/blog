import { client } from "@/app/lib/sanity";
import { Post } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanityImage";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getSanityData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`; // By adding && we are making sure that we only get the slug and not all the information about the posts; And by adding [0] we are getting an object and not all the array

  const data = await client.fetch(query);
  return data;
}

export default async function Slug({ params }: { params: { slug: string } }) {
  const data = (await getSanityData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt={data.title}
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
          </div>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

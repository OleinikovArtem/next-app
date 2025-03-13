import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupCardType } from "@/components/StartupCard"

import { client } from "@/sanity/lib/client"
import { STARTUPS_QUERY } from "@/sanity/lib/queries"

type HomePageProps = {
  searchParams: Promise<{ query?: string}>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const query = (await searchParams).query

  const posts = await client.fetch<StartupCardType[]>(
    STARTUPS_QUERY,
    { search: query || null },
  )

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for '${query}'` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? posts.map((post) => (
            <StartupCard post={post} key={post._id} />
          )) : <p className="no-results">No startups found</p>}
        </ul>
      </section>
    </>
  )
}

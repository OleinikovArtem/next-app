import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupCardType } from "@/components/StartupCard"

import { STARTUPS_QUERY } from "@/sanity/lib/queries"
import { sanityFetch, SanityLive } from '@/sanity/lib/live'

type HomePageProps = {
  searchParams: Promise<{ query?: string}>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const query = (await searchParams).query

  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params: { search: query || null },
  })


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
          {posts?.length > 0 ? posts.map((post: StartupCardType) => (
            <StartupCard post={post} key={post._id} />
          )) : <p className="no-results">No startups found</p>}
        </ul>
      </section>

      <SanityLive />
    </>
  )
}

import SearchForm from "@/components/SearchForm"
import StartupCard from '@/components/StartupCard'

import { StartupCardType } from "@/types"

type HomePageProps = {
  searchParams: Promise<{ query?: string}>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const query = (await searchParams).query

  const posts: StartupCardType[] = [{
    _createdAt: new Date(),
    _id: 1,
    views: 55,
    author: { _id: 1, name: "Adrian" },
    description: "This is a description.",
    category: "Robots",
    title: "We Robots",
    image: "https://images.unsplash.com/photo-1724452588657-9ab0f8865a2e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }]

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
  );
}

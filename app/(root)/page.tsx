import SearchForm from "@/components/SearchForm"

type HomePageProps = {
  searchParams: Promise<{ query?: string}>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const query = (await searchParams).query

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}

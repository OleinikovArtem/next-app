import Hello from '@/app/components/hello';

export default function Home() {
  console.log('log')

  return (
    <>
      <h1 className="text-3xl">Welcome</h1>
      <Hello />
    </>
  );
}

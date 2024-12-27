import Search from "./components/search";
import Result from "./components/result";
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense>
      <div className="max-w-7xl flex flex-col items-center mx-auto p-4">
        <Search />
        <Result />
      </div>
    </Suspense>
  );
}

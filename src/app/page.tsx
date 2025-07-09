import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow px-11 sm:px-10 md:px-16 lg:px-54 pl-[30px] pr-[30px]">
        <Hero />
      </main>
    </div>
  );
}

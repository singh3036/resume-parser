import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuScan" },
    {
      name: "description",
      content: "Smarter Hiring Starts with Smarter Resume Parsing",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your applications and Resume Ratings</h1>
          <h2>Review your applications and check AI-powered feedback</h2>
        </div>
      </section>
    </main>
  );
}

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import JournalCard from "@/components/journal/JournalCard";
import { journalPosts } from "@/data/journal";

export const metadata = {
  title: "Journal & Stories | HARRA Coffee",
  description:
    "Coffee brewing guides, origin stories, roasting insights, and industry stories from HARRA Coffee Roastery.",
};

export default function JournalPage() {
  return (
    <section className="pt-32 pb-24 lg:pb-32 bg-light-cream min-h-screen">
      <Container>
        <SectionHeading
          subtitle="Journal"
          title="Stories & Insights"
          description="Brewing guides, coffee origins, roasting insights, and stories from the world of specialty coffee."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journalPosts.map((post, index) => (
            <JournalCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

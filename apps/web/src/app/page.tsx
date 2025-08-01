import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ChallengeCards from "@/components/ChallengeCards";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ChallengeCards />
      <Features />
      <Footer />
    </Layout>
  );
}

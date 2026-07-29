import Hero from "@/src/components/hero/Hero";
import About from "@/src/components/about/About";
import Services from "@/src/components/services/Service";
import Skill from '@/src/components/skills/Skill'
import Resume from '@/src/components/resume/Resume'
import Project from '@/src/components/project/Project'
import Contact from "@/src/components/contacts/Contact";
import Divider from "@/src/components/Divider";
export default function Home() {
  return (
<>
<Hero />
<About />
<Divider />
<Services />
<Divider />
<Skill />
<Divider />
<Resume />
<Divider />
<Project />
<Divider />
<Contact />
</>
  );
}
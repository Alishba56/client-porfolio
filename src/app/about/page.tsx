import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";


const About = () => {
  return (
    <div>
      <Navbar />

      <section id="about" className="py-20 mt-20 container mx-auto px-4">
        <h1 className="text-6xl font-bold justify-center flex mb-10">
          About Me
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
            <Image
              width={500}
              height={500}
              src="/image.jpeg"
              alt="Our Chef"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover sm:h-[700px] h-[300px]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold"></h2>
            <h3 className="font-bold  text-lg leading-relaxed">
              "I'm Yaseen
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A filmmaker with a strong interest in direction and
              cinematography, driven by curiosity and a deep passion for visual
              storytelling.
              <br /> I enjoy exploring creative framing, dynamic camera
              movement, and expressive compositions to capture meaningful
              moments that enhance narrative impact.
              <br />
              My experience includes working on horror short films such as
              Cursed and The Last Voice, where I experimented with atmosphere,
              lighting, and suspense to strengthen visual mood and storytelling.
              <br />
              I have also worked on a Hublot Watch TVC, showcasing both the
              sporty and luxurious identity of the brand through polished
              visuals and clear, impactful storytelling.
              <br />
              Alongside filmmaking, I practice photography as a storytelling
              medium. My project Whispers of Hope documents Abdullah Shah
              Ghazi’s Mazar, capturing people, rituals, faith, and cultural
              atmosphere through intimate imagery.
              <br />
              In the TV commercial industry, I have worked as a 2nd Assistant
              Director on a ZIC Motor Oil TVC and as an Assistant Producer on a
              Kashmir Basmati Waadi TVC, gaining hands-on experience in
              professional set workflows, teamwork, and production coordination.
              <br />I am skilled in Adobe Photoshop and Adobe Premiere Pro,
              which I use for visual design, photo editing, and post-production
              workflows.{" "}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

import { photo_long } from "../assets";
import { Tag }from "../components";

const About = () => {
  return (
    <div className="about-container">
      <div className="gap-y-4">
        <Tag label={"About me"} />
      </div>
      <div className="about-container-inside">
        <div className="w-[584px] h-[694px] max-tablet:w-[320px] max-tablet:h-[380px]">
          <div className="about-pic-container">
            <img src={photo_long} alt="Profile Image" className="about-pic" />
            <div className="about-background-box"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 w-[584px] h-[694px] max-sm:w-[300px] max-md:h-auto">
          <p className="align-top inline text-left text-gray-50 text-3xl font-semibold">
            Curious about me? Here you have it:
          </p>
          <div className="flex flex-col gap-y-4">
            <p className="text-gray-300 align-top inline text-left font-normal text-base">
              I&apos;m a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              software products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matter to me.
            </p>
            <p className="text-gray-300 align-top inline text-left font-normal text-base">
              I first got into web development in 2022 during college training,
              which really ignited my passion for creating interactive websites.
              I began with HTML, CSS, and Bootstrap, and then moved on to
              JavaScript to add more functionality. After focusing on front-end
              development, I expanded my skills to the backend with Node.js,
              Express.js, and MongoDB. My growing curiosity led me to machine
              learning in my third year. I dove into Python, explored essential
              math concepts, and worked with libraries like NumPy, Pandas, and
              TensorFlow. Although machine learning is vast and challenging,
              it’s become one of my favorite fields to explore.
            </p>
            <p className="text-gray-300 align-top inline text-left font-normal text-base">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="text-gray-300 align-top inline text-left font-normal text-base">
              When I&apos;m not immersed in development projects, you can find
              me exploring new tech trends or working on personal projects. I
              enjoy staying updated and sharing insights, so feel free to follow
              me on{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/chnvdprashanth/"
                  className="underline"
                >
                  Linkedin
                </a>
              </span>{" "}
              /{" "}
              <span>
                <a
                  href="https://github.com/chnvdprashanth"
                  className="underline"
                >
                  GitHub
                </a>
              </span>{" "}
              where I post about my latest work and interests. I&apos;m always
              open to connecting with others, so don&apos;t hesitate to reach
              out if you&apos;d like to chat or collaborate!
            </p>
            <p className="text-gray-300 align-top inline text-left font-normal text-base">
              Finally, some quick bits about me.
            </p>
            <div className="flex gap-x-[10px] text-gray-300 align-top text-left font-normal text-base">
              <div className="flex flex-col gap-y-[10px]">
                <li className="list-disc">B.Tech in Information Technology</li>
                <li className="list-disc">Aspiring Software Developer</li>
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <li className="list-disc">Curious About New Technologies</li>
                <li className="list-disc">Skilled in Coding</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

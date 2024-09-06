import { Button, Tag } from "../components";
import { viewpoint, docs, birdImageClassifier } from "../assets";

const viewpoint_url = "https://viewpoint0614.netlify.app/login"
const docs_url = "https://docs-playground-client.vercel.app/login"
const birdImageClassifier_url = "https://bird-image-classifier-alexnet.streamlit.app/"

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-y-12 max-tablet:gap-y-6 px-8 max-tablet:px-4">
      <div className="column-1">
        <Tag label={"Projects"} />
        <p className="text-gray-300 text-center align-top text-xl font-normal inline">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      <div className="w-full flex max-tablet:flex-col rounded-xl shadow-lg">
        <div className="flex items-center bg-gray-700 w-full tablet:w-1/2 px-6 py-12 max-sm:py-6 max-sm:px-4 max-tablet:p-6 tablet:rounded-s-xl max-tablet:rounded-t-xl">
          <img
            src={viewpoint}
            alt="Viewpoint Website Image"
            className="rounded-md shadow-lg tablet:h-64 lg:h-72"
          />
        </div>
        <div className="bg-gray-800 tablet:w-1/2 flex flex-col gap-y-6 p-12 max-tablet:p-8 tablet:rounded-e-xl max-tablet:rounded-b-xl">
          <p className="text-left align-top inline font-semibold text-xl">
            Viewpoint
          </p>
          <p className="text-left align-top inline font-normal text-base">
            I built a social media application inspired by Pinterest that
            enables users to share and discover images across various
            categories. The platform offers an intuitive user interface with
            features like efficient search, category filters, and interactive
            image pins. The backend infrastructure was modernized using Sanity,
            a Headless Content Management System, to enhance content management
            and scalability.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label={"React.js"} />
            <Tag label={"Tailwindcss"} />
            <Tag label={"OAuth"} />
            <Tag label={"Sanity"} />
            <Tag label={"Git"} />
          </div>
          <div className="flex items-center gap-x-3 text-gray-400">
            <Button label={"Visit"} urlLink={viewpoint_url} />
          </div>
        </div>
      </div>

      <div className="w-full flex max-tablet:flex-col rounded-xl shadow-lg">
        <div className="bg-gray-800 tablet:w-1/2 flex flex-col gap-y-6 p-12 max-tablet:p-8 tablet:rounded-s-xl max-tablet:rounded-t-xl">
          <p className="text-left align-top inline font-semibold text-xl">
            Docs Playground
          </p>
          <p className="text-left align-top inline font-normal text-base">
            I developed a note-taking application with a captivating interactive
            interface and engaging animations. Users can take and save notes
            within a playful environment, enhanced by dynamic animations using
            the Framer Motion library and React. Additionally, I implemented a
            sophisticated backend to handle CRUD operations, ensuring secure and
            efficient storage and management of notes.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label={"React.js"} />
            <Tag label={"Tailwindcss"} />
            <Tag label={"Framer Motion"} />
            <Tag label={"OAuth"} />
            <Tag label={"Node.js"} />
            <Tag label={"Express.js"} />
            <Tag label={"MongoDB"} />
            <Tag label={"Git"} />
          </div>
          <div className="flex items-center gap-x-3 text-gray-400">
            <Button label={"Visit"} urlLink={docs_url} />
          </div>
        </div>
        <div className="flex items-center bg-gray-700 tablet:w-1/2 px-6 py-12 max-sm:py-6 max-sm:px-4 max-tablet:p-6 tablet:rounded-e-xl max-tablet:rounded-b-xl">
          <img
            src={docs}
            alt="Viewpoint Website Image"
            className="rounded-md shadow-lg tablet:h-64 lg:h-72"
          />
        </div>
      </div>

      <div className="w-full flex max-tablet:flex-col rounded-xl shadow-lg">
        <div className="flex items-center bg-gray-700 tablet:w-1/2 px-6 py-12 max-sm:py-6 max-sm:px-4 max-tablet:p-6 tablet:rounded-s-xl max-tablet:rounded-t-xl">
          <img
            src={birdImageClassifier}
            alt="Viewpoint Website Image"
            className="rounded-md shadow-lg tablet:h-64 lg:h-80"
          />
        </div>
        <div className="bg-gray-800 tablet:w-1/2 flex flex-col gap-y-6 p-12 max-tablet:p-8 tablet:rounded-e-xl max-tablet:rounded-b-xl">
          <p className="text-left align-top inline font-semibold text-xl">
            Bird Image Classifier
          </p>
          <p className="text-left align-top inline font-normal text-base">
            I developed a Bird Image Classifier inspired by the AlexNet
            architecture, using a dataset of 20 bird species with approximately
            3100 images. My involvement in this project was driven by a deep
            interest in machine learning and computer vision. I implemented
            advanced deep learning techniques with TensorFlow and Python to
            achieve precise species classification, showcasing my dedication to
            applying cutting-edge technology and refining model accuracy.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label={"Python"} />
            <Tag label={"Numpy"} />
            <Tag label={"Scikit-learn"} />
            <Tag label={"Matplotlib"} />
            <Tag label={"Tensorflow"} />
            <Tag label={"Streamlit"} />
            <Tag label={"Git"} />
            <Tag label={"Kaggle"} />
          </div>
          <div className="flex items-center gap-x-3 text-gray-400">
            <Button label={"Visit"} urlLink={birdImageClassifier_url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { RxEnvelopeClosed } from "react-icons/rx";
import Tag from "../components/Tag";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import CopyButton from "../components/CopyButton";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-y-12 max-tablet:gap-y-6 px-8 max-tablet:px-4">
      <div className="column-1">
        <Tag label={"Get in Touch"} />
        <p className="text-gray-300 text-center align-top text-xl font-normal inline">
          What next? Feel free to reach out to me if your are looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex items-end max-tablet:items-center gap-x-2">
          <RxEnvelopeClosed className="w-8 h-8 max-tablet:w-5 max-tablet:h-5" />
          <p className="font-semibold text-4xl max-tablet:text-xl text-center inline align-top">
            chnvdprashanth@gmail.com
          </p>
          <CopyButton textToCopy={"chnvdprashanth@gmail.com"} />
        </div>
        <div className="flex items-end max-tablet:items-center gap-x-2">
          <FiPhone className="w-8 h-8 max-tablet:w-5 max-tablet:h-5" />
          <p className="font-semibold text-4xl max-tablet:text-xl text-center inline align-top">
            +91 9014513998
          </p>
          <CopyButton textToCopy={"+91 9014513998"} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-base text-left inline align-top">
          You may also find me on these platforms:
        </p>
        <div className="flex gap-x-1 text-gray-300">
          <a href="https://github.com/chnvdprashanth" target="_blank">
            <FiGithub className="p-[6px] w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/chnvdprashanth" target="_blank">
            <FiLinkedin className="p-[6px] w-8 h-8" />
          </a>
          <a href="https://x.com/NVD44874726" target="_blank">
            <BsTwitterX className="p-[6px] w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

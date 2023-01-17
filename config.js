import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Memorizer",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1063953537173835847&permissions=8&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "Fun",
      description:
        "Having fun is the life to live. Memorizer has just that!",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Automation describes a wide range of technologies that reduce  human intervention in processes.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Adventure",
      description:
        "Adventures are a great way to learn new things.",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 7, //-  - Your
  memberCount: 430, //--   - Bot
  executedCommand: 1500, //--  - Stats
  availableCommand: 400, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  discordLink: "https://discord.gg/G4SxWZ63z5",
};

export default config;

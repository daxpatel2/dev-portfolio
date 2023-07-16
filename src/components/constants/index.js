import twitterGif from "../../assets/twitter.gif";
import trelloGif from "../../assets/trello.gif";

const projects = [
  {
    name: "Twitter Clone",
    description:
      "Created a clone of the social-media site twitter.com. Implemented functionalaty like tweeting, adding friends, sharing posts, interacting with posts, and exploring new AI generated posts based on what the user likes.",
    gif: {
      image: twitterGif,
    },
    source_code_link: "https://github.com/UnmarkedBanshee/twitter-clone",
  },
  {
    name: "Trello Clone",
    description:
      "Created a clone of team management app Trello.com. Added ability to create tasks that are saved in a cloud database, drag and drop images and move around task to diffrent sections. Makes for a great SCRUM board!",
    gif: {
      image: trelloGif,
    },
    source_code_link: "https://github.com/UnmarkedBanshee/trello-clone",
  },
  {
    name: "File System",
    description:
      "A comprehensive file system built in C/C++. Allows for user to create a file structure from scratch using MDADM storage systems. Incorparated caching functionltiy to fully cache tasks like reading from a file to speed up application.",
    gif: {
      image: null,
    },
    source_code_link: "https://github.com/UnmarkedBanshee/file-system",
  },
];

export { projects };

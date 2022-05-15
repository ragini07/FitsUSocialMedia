import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ragini",
    lastName: "Singh",
    username: "test@gmail.com",
    password: bcrypt.hashSync("Test@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioURL : 'https://portfolio-ragini.netlify.app/',
    bio : 'Software Engineer',
    userHandle : 'ragini1177' ,
    profilePhoto : 'https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&w=192&h=192'
  },
  {
    _id: uuid(),
    firstName: "Kristien",
    lastName: "Stewart",
    username: "krist@gmail.com",
    password: bcrypt.hashSync("krist@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioURL : 'https://portfolio-krist.netlify.app/',
    bio : 'Business Analyst',
    userHandle : 'krist17' ,
    profilePhoto : 'https://i.pravatar.cc/400?img=32'
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "jdoe@gmail.com",
    password: bcrypt.hashSync("jdoe@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioURL : 'https://portfolio-jdoe.netlify.app/',
    bio : 'Lead Engineer',
    userHandle : 'john12' ,
    profilePhoto : 'https://i.pravatar.cc/400?img=13'
  },
  {
    _id: uuid(),
    firstName: "Amber",
    lastName: "Heard",
    username: "amhrd@gmail.com",
    password: bcrypt.hashSync("amhrd@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioURL : 'https://portfolio-amhrd.netlify.app/',
    bio : 'Enthusiast Learner',
    userHandle : 'amber25' ,
    profilePhoto : 'https://i.pravatar.cc/400?img=5'
  },
  {
    _id: uuid(),
    firstName: "Bela",
    lastName: "Watson",
    username: "bela@gmail.com",
    password: bcrypt.hashSync("bela@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolioURL : 'https://portfolio-bela.netlify.app/',
    bio : 'HR Executive',
    userHandle : 'bela18' ,
    profilePhoto : 'https://i.pravatar.cc/400?img=26'
  },
];

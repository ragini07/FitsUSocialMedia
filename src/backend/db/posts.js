import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "When you want to know how things really work, study them when they're coming apart.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark : [],
    username: "jdoe@gmail.com",
    createdAt: "02 January 2022",
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username: "test@gmail.com",
        text: "This really works!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        }},
    ]
  },
  {
    _id: uuid(),
    content:
      "The most beautiful things are not associated with money; they are memories and moments. If you don't celebrate those, they can pass you by!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark : [],
    username: "test@gmail.com",
   
    createdAt: "18 July 2021",
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username: "krist@gmail.com",
        text: "great to see you enjoying",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        }},
    ]
    
  },


  {
    _id: uuid(),
    content:
      "Success is no accident.It is hard work,perseverance,learning and the sacrifice of your comfort zone.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark : [],
    username: "bela@gmail.com",
   
    createdAt: "21 March 2022",
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username: "krist@gmail.com",
        text: "Absolutely right!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        }},
    ]
    
  },

  {
    _id: uuid(),
    content:
      "Good Advertising kills a bad product faster.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark : [],
    username: "amhrd@gmail.com",
   
    createdAt: "21 March 2022",
    updatedAt: formatDate(),
    comments : [
      {
        _id: uuid(),
        username: "jdoe@gmail.com",
        text: "Example",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        }},
    ]
    
  },
  
  {
    _id: uuid(),
    content:
      "Going to have an amazing dinner tonight.Any Guess?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmark : [],
    username: "test@gmail.com",
   
    createdAt: "06 December 2021",
    updatedAt: formatDate(),
    comments : [
   
    ]
    
  },
];

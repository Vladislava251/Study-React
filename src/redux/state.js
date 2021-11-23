import { renderEntireTree } from './../render';
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", count: 15 },
      { id: 2, message: "It's my first post.", count: 20 },
    ],
    newPostText: 'it-kamasutra'
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 1, message: "How is your IT-Kamasutra?" },
      { id: 1, message: "Yo" },
      { id: 1, message: "Yo" },
      { id: 1, message: "Yo" },
    ],
  },
};
window.state = state;
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    count: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export default state;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", count: 15 },
        { id: 2, message: "It's my first post.", count: 20 },
      ],
      newPostText: "it-kamasutra",
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
      newMessageBody: '',
    },
  },
  _callSubscriber() {
    console.log("This._state changed");
  },
  getState() {
    return this._state;
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      count: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.newText);
        break;
      case UPDATE_NEW_MESSAGE_BODY:
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push({id: 6, message: body});
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export default store;

window.store = store;
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        profileInfo:[
            {name:'Igor',city:'Moscow',dateOfBirth:'01.10.98',avatar:'https://download-cs.net/steam/avatars/3426.jpg'}
        ],
        myPostsInfo:[
            {text:'My posts on the wall'}
        ],
        myPosts:[
            {id:1,message:'hi',likesCount:23,avatar:'https://download-cs.net/steam/avatars/3426.jpg'},
            {id:2,message:'how are you?',likesCount: 12,avatar:'https://download-cs.net/steam/avatars/3426.jpg'}
        ],
        propsNewText:'s'
    },
    messagesPage: {
        messages:[
            {id: 1, message: "hi"},
            {id: 2, message: 'hello'},
            {id: 3, message: 'there'}
        ],
        dialogs:[
            {id: 1, name: "Igor"},
            {id: 2, name: "Alex"},
            {id: 3, name: 'Robert'},
            {id: 4, name: 'Katya'},
            {id: 5, name: 'Priscilla'}
        ]
    },
    sideBarFriends: {
        friends:[
            {id:1,avatar:'https://steamavatar.io/img/1477351899v6iQb.jpg',name:'Katya'},
            {id:2,avatar:'https://steamavatar.io/img/1477351899v6iQb.jpg',name:'Ekaterina'},

        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:3,
        message:postMessage,
        likesCount:0,
        avatar:'https://download-cs.net/steam/avatars/3426.jpg'
    };

    state.profilePage.myPosts.push(newPost)
    rerenderEntireTree(state,addPost)
}
export let updateNewPostText = (newText) => {
    state.profilePage.propsNewText = newText;
    rerenderEntireTree(state,updateNewPostText)
}

export default state;
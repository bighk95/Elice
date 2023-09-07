import API from './api'; // 서버에서 받아오기 위한 함수 실행하면 리턴값으로 서버에 저장된 데이터를 불러옴

/* 
const API_URL = "https://jsonplaceholder.typicode.com";

const fetchPosts = () =>
  fetch(`${API_URL}/posts`).then((response) => response.json());

const fetchUsers = () =>
  fetch(`${API_URL}/users`).then((response) => response.json());

const fetchComments = (postId) =>
  fetch(`${API_URL}/posts/${postId}/comments`).then((response) =>
    response.json()
  );

export default { fetchPosts, fetchUsers, fetchComments };

*/

const requestPosts = async () => await fetch(`${API_URL}/posts`).json()

// const requestPosts = () => {
//   // 데이터를 적절하게 조합하여 Post 정보를 만들어보세요.
//   return Promise.all([
//       API.fetchPosts(),
//       API.fetchUsers(),
//       ]).then(([posts, users]) => {
//            return fetchCommentsByPosts(posts)     
//             .then(comments => [posts, users, comments])
//       })
//       .then(([posts, users, comments]) => {
//                 const userMap = createUserMap(users)
//             const commentMap = createCommentMap(comments)

//             return transformPosts(posts, userMap, commentMap)
//       })
// };

const a = async () => {

    b() // 1
    c() // 2
    try {
        const res = await fetchUser()  //3
    } catch(error) {
        console.error(error)
    }

    dataSubmit() // 4
}

const transformPosts = () => {
    const post = requestPosts();
    const comment = requestComment();
    const user = requestUser();

    return makePost(post, comment, user);
}


function fetchCommentsByPosts(posts){
    return Promise.all(
        posts.map(post => API.fetchComments(post.id))
    )
    .then(commentsArrays => commentsArrays.flatMap(array => array))
}


function createUserMap(users){
    return users.reduce((map, user) => {
        map[user.id] = user
        return map
    }, {})
}

function createCommentMap(comments){
    return comments.reduce((map, comment) => {
        const array = map[comment.postId] ? map[comment.postId] : []
        array.push(comment)
        map[comment.postId] = array
        return map
    }, {})
}

export default requestPosts;

a   <- 얘를 실행시켜 (60초가 걸려)
b   <- 얘를 실행시켜 (30초가 걸려)
c   <- 얘를 실행

a c b

비동기
/* 
Posts 정보 조합하기
유저 정보, post 정보, 커멘트 정보를 응답하는 API를 활용하여, 하나의 포스트 목록을 만들어보세요.

https://jsonplaceholder.typicode.com 의 API를 이용하여 데이터를 조합해봅니다.

Posts.js의 requestPosts 메서드를 만듭니다. requestPosts는 posts 정보를 아래 지시사항에 따라 조합하여 리턴하는 비동기 함수입니다.


지시사항
api.js 에 제공된 fetchPosts, fetchUsers, fetchComments API를 이용하여 포스트 정보, 유저 정보, 커멘트 정보를 각각 요청하세요.

얻어온 데이터를 활용하여 정보를 조합하세요.

fetchPosts API를 이용하여 posts 목록을 가져옵니다.
하나의 post 객체에는 userId가 들어있습니다. userId 필드를 제거하고 userId에 해당하는 유저 정보를 post정보에 합칩니다. 유저 정보는 fetchUsers 에서 얻은 정보를 활용합니다.
하나의 post 객체에는 id가 들어있습니다. id 필드를 제거하고, 이 post id를 이용하여 comments를 요청하고, 새롭게 comments 필드를 추가하여 응답받은 커멘트 목록을 post 합칩니다. 커멘트 정보는 fetchComments API를 활용합니다.
하나의 post 정보에 user 필드를 추가하고, 그 필드에 post.userId에 매칭되는 유저 정보를 넣습니다.
하나의 post 정보에 comments 필드를 추가하고, 그 필드에 comment.postId에 매칭되는 커멘트들의 목록을 넣습니다.
최종적으로 하나의 post 정보는 모든 post 정보에 추가로 user, comments 필드를 갖게 됩니다.
fetchPosts 가 이렇게 정보가 합쳐진 post 들의 배열을 반환하도록 합니다.
테스트 앱을 활용하여 결과가 제대로 만들어지는지 확인해보세요.

Tips!
fetchPosts는 포스트 목록을 반환합니다.
fetchUsers는 유저 목록을 반환합니다.
fetchComments 는 postId를 파라미터로 받아 해당하는 커멘트 목록을 반환합니다.
반환이 이루어지는 posts 배열의 요소인 post 는 아래의 4개 필드를 가지고 있어야 채점이 정상적으로 이루어집니다.
body, comments, title, user
*/
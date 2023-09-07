/* 
유저 정보 요청하여 변환하기
https://randomuser.me API를 이용해, 여러 유저의 정보를 받아와 가공하는 함수를 만듭니다.

API 정보를 가공하여 활용하는 법을 연습해봅니다. 아래의 지시사항에 따라 User.js의 requestUsers 함수를 만들어 봅시다.


지시사항
유저 정보를 변환합니다.
- user.email -> email
- user.name.first, user.name.last -> name - `${user.name.first} ${user.name.last}`
- user.picture.large -> pictureUrl
- user.login.username -> username
- user.location.country, user.location.state, user.location.city -> location - `${user.location.country}, ${user.location.state}, ${user.location.city}`
- user.dob.age -> age
Copy
예시
// 유저 정보가 다음과 같을 경우
{
  gender: "female",
  name: {
    title: "Miss",
    first: "Sara",
    last: "Petersen",
  },
  location: {
    street: {
      number: 1383,
      name: "Vægterparken",
    },
    city: "Sommersted",
    state: "Nordjylland",
    country: "Denmark",
    postcode: 30790,
    coordinates: {
      latitude: "24.7161",
      longitude: "11.7793",
    },
    timezone: {
      offset: "-11:00",
      description: "Midway Island, Samoa",
    },
  },
  email: "sara.petersen@example.com",
  dob: {
    date: "1994-10-26T10:14:18.009Z",
    age: 27,
  },
  registered: {
    date: "2009-12-05T16:15:56.322Z",
    age: 12,
  },
  id: {
    name: "CPR",
    value: "261094-1270",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/63.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
  },
  // ...
},

// 이렇게 변환됩니다.
{
  email: 'sara.petersen@example.com',
  name: 'Sara Petersen',
  pictureUrl: 'https://randomuser.me/api/portraits/women/63.jpg',
  username: 'happybear329',
  location: 'Denmark, Nordjylland, Sommersted',
  age: 27
}
Copy
age 가 40세 이상인 유저만을 필터링합니다.

필터링 된 유저 목록을 리턴합니다.

Tips
Promise, async/await 방법을 모두 활용해 구현해보세요.
*/

const func = (users) => {
    return users
        .filter(user => user.dob.age >= 40)
        .map(user => ({
            email: user.email,
            name: user.first + ' ' + user.last,
            pictureUrl: user.picture.large,
            username: user.login.username,
            location: `${user.location.country}, ${user.location.state}, ${user.location.city}`,
            age: user.dob.age
        }))
}
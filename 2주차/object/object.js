// 배달 서비스

const user = {
    // 배달을 시키는 고객 정보
    name: '홍길동',
    age: 30,
    email: 'test@gmail.com',
    address: '수원시',
    food: ['김치찌개', '제육볶음'],

    payment: function(){
        console.log("결제가 완료돠었습니다.")
        return this.deliveryStart();
    },

    deliveryStart: function(){
        console.log('배달이 시작되었습니다.')
    }
}

// console.log(user.name)s
// console.log(user.age)
// console.log(user)

user.payment();
user.deliveryStart();

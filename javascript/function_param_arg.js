// 주석에 넘버링된 순서대로 읽어주세요.
// 실제 코드는 넘버링 순서대로 실행되지 않습니다. 순전히 설명을 위한 넘버링입니다.

// 변수 선언
let a = 10; // 1. a라는 이름의 변수 선언과 동시에 10 이라는 값이 할당됨
let b = 20; // 2. b라는 이름의 변수 선언과 동시에 20 이라는 값이 할당됨


// 함수 정의
function add(x, y=30){ // 3. add라는 이름의 함수에요. 근데 이 함수는 전달받아야할 값이 두개에요. 그래서 값 들어올 자리가 두개에요. 첫번째 자리 이름은 x, 두번째 자리 이름은 y에요.
                       // y=30의 의미는, 두번째 자리 y에 아무 값도 안 들어오면 기본적으로 30이라는 값을 사용해서 연산한다는 의미에요.
                       // (아시겠지만 x, y가 매개변수입니다. 이해하기 쉬우시라고 첫번째자리, 두번째 자리라고 비유를 들어보았습니다ㅎㅎ)
                      // 6. add() 명령문에서 아무 값도 전달받지 못했어요. 이 경우 x 자리에는 undefined가, y 자리에는 30이 들어갑니다. → add(undefined, 30)
                      // 12. add(a)에서 a라는 값 하나를 첫번째 자리인 x를 통해 전달받았어요. 근데 두번째 값은 전달 받지 못했어요.
                      // 그러면 x 자리에는 10이, y 자리에는 30이 들어갑니다. → add(10, 30)
	return x + y;   // 7. return 뒤에는 이 함수가 호출되었을 때 내부 연산을 실행한 후 결과로 반환할 값 또는 표현식을 써줍니다. 이 함수의 경우 다른 표현식이 따로 없고
			// return x+y만 있는데 그러면 return 뒤의 표현식만 연산해서(매개변수x,y로 들어온 두 값 더하기) 나온 결과를 반환합니다.
                  // 8. undefined + 30 => 연산할 수 없어요. NaN의 결과가 나와요. add() 명령문을 실행한 결과로 NaN을 리턴해줍니다.
                  // 13. return 10 + 30 => 결과값으로 40을 리턴합니다.
}

// 함수 호출
// 4. 함수 호출할 때 괄호 안에 무언가 값을 써주면 그 값을 함수에 넘겨줍니다. 이 괄호 안에 적어주는 것을 '인자(argument)'라고 합니다. 
// 예시 : 함수명(인자)

// add()라고 호출한 경우
add(); // 5. add라는 함수를 실행해! 함수에게 전달할 값은 아무것도 없어 그냥 실행해! 라는 의미의 명령문 입니다...
        // 9. add()의 값은 결국 함수 실행후 리턴받은 결과값인 NaN이 됩니다.
console.log(add()); // 10. NaN 출력

// add(a)라고 호출한 경우
add(a); // 11. add라는 함수를 실행해! 근데 a라는 값을 함수에게 전달할테니 그 전달한 값으로 함수 내부 연산을 수행해! 라는 의미의 명령문입니다...
        // 맨위에서 변수 a가 10을 할당 받았죠. 10이라는 값을 add 함수에 전달해주는 역할을 합니다.
        // 14. add(a)의 값은 함수 실행 후 리턴받은 결과값인 40이 됩니다.
console.log(add(a)); // 15. 40 출력

## 다리 건너기 게임

# 기능 순서 대로 구현

## constants - 출력 문구 및 특정 값 const 파일로 만들기

1. App - play : OutputView 에서 "다리 건너기 게임을 시작합니다." 출력 하는 함수 호출
2. App에서 InputView.readBridgeSize 호출, callback 으로 다리 길이 값 받아옴

## 다리 길이 값 받은 함수

1. 에러 확인

   - 3 - 20 범위 확인 + 1로 나눠 떨어지는지 확인

2. 다리 길이 bridgeMaker 클래스에 다리 사이즈 보냄

   - bridgeMaker - BridgeMaker.makeBridge에 다리 길이 , BridgeRandomNumberGenerator.generate()보낸 후 BridgeMaker.makeBridge() 에서 리턴한 랜덤 다리 상태 갖기

3. InputView.readMoving() 호출 , callback 으로 사용자 이동 값 받기

## 사용자 이동 값 받은 함수

1.사용자 이동 값 에러 확인 - 대문자 “U”, ”D” 확인

2. InputView.readMoving() 호출 , 사용자 이동 값 보내고 다리 이동 값 받기

3. 6번에서 받은 값 OutputView.printMap()에 보내고, 이동했을 때의 다리 모양 출력

4. 다리 상태 , 사용자 이동 값이 다르면 InputView.readGameCommand() 게임 재시작 여부 입력 받는 함수 호출,
   - 게임 재시작 값 에러 확인
     - 대문자 "R", "Q" 확인
   - BridgeGame.move() 함수 호출
   - 같으면 InputView.readMoving() 사용자 이동할 칸 입력 받는 함수 호출

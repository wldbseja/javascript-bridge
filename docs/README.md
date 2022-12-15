## 다리 건너기 게임

# 기능 순서 대로 구현

1. App에서 OutputView 에서 "다리 건너기 게임을 시작합니다." 출력 하는 함수 호출

2. App에서 InputView.readBridgeSize 호출 하고 다리 길이 값 받아옴
   - 다리 길이 에러 확인
     - 3 - 20 범위 확인 + 1로 나눠 떨어지는지 확인
3. App에서 다리 길이 bridgeMaker 클래스에 객체 넘겨주기

4. bridgeMaker에서 BridgeMaker.makeBridge에 다리 길이 , BridgeRandomNumberGenerator.generate() 넘겨 주기

5. App에서 BridgeMaker.makeBridge() 에서 만든 랜덤 다리 상태를 받아오기

6. App에서 InputView.readMoving() 사용자 이동 값을 받아옴
   - 사용자 이동 값 에러 확인
     - string + 대문자, 소문자 확인
7. App에서 랜덤 다리 상태, 사용자 이동 값 BridgeGame.move() 보내기

8. App에서 BridgeGame.move() 에서 랜덤 다리 상태, 사용자 이동 값 가지고 다리 이동 시킨 값을 받아오기

9. App에서 OutputView.printMap() 이동했을 때의 다리 모양 출력

10. App에서 다리 상태 , 사용자 이동 값이 다르면 InputView.readGameCommand() 게임 재시작 여부 입력 받는 함수 호출,
    - 게임 재시작 값 에러 확인
      - string + 대문자, 소문자 확인
    - BridgeGame.move() 함수 호출
    - 같으면 InputView.readMoving() 사용자 이동할 칸 입력 받는 함수 호출

## constants - 출력 문구 및 특정 값 const 파일로 만들기

int REED_PIN1 = 12;
int REED_PIN2 = 11;
int REED_PIN3 = 10;
int REED_PIN4 = 9;
int REED_PIN5 = 3;
int REED_PIN6 = 2;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(REED_PIN1, INPUT_PULLUP);
  pinMode(REED_PIN2, INPUT_PULLUP);
  pinMode(REED_PIN3, INPUT_PULLUP);
  pinMode(REED_PIN4, INPUT_PULLUP);
  pinMode(REED_PIN5, INPUT_PULLUP);
  pinMode(REED_PIN6, INPUT_PULLUP);

}

void loop() {
  // put your main code here, to run repeatedly:
  int reedPin1State = digitalRead(REED_PIN1);
  int reedPin2State = digitalRead(REED_PIN2);
  int reedPin3State = digitalRead(REED_PIN3);
  int reedPin4State = digitalRead(REED_PIN4);
  int reedPin5State = digitalRead(REED_PIN5);
  int reedPin6State = digitalRead(REED_PIN6);



  

  if (reedPin1State == LOW) {
    Serial.println("Switch 1 closed");
    delay(100);
  } else if (reedPin1State == HIGH) {
    Serial.println("Switch 1 open");
    delay(100);
  }

  if (reedPin2State == LOW) {
    Serial.println("Switch 2 closed");
    delay(100);
  } else if (reedPin2State == HIGH) {
    Serial.println("Switch 2 open");
    delay(100);
  }

  if (reedPin3State == LOW) {
    Serial.println("Switch 3 closed");
    delay(100);
  } else if (reedPin3State == HIGH) {
    Serial.println("Switch 3 open");
    delay(100);
  }

  if (reedPin4State == LOW) {
    Serial.println("Switch 4 closed");
    delay(100);
  } else if (reedPin5State == HIGH) {
    Serial.println("Switch 4 open");
    delay(100);
  }

  if (reedPin5State == LOW) {
    Serial.println("Switch 5 closed");
    delay(100);
  } else if (reedPin5State == HIGH) {
    Serial.println("Switch 5 open");
    delay(100);
  }

  if (reedPin6State == LOW) {
    Serial.println("Switch 6 closed");
    delay(100);
  } else if (reedPin5State == HIGH) {
    Serial.println("Switch 6 open");
    delay(100);
  }
  
}

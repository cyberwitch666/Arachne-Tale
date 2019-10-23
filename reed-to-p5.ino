//Arduino Code that will be sent to p5.js using Serial Control

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
  Serial.print(reedPin1State);
  Serial.print(",");
  
  int reedPin2State = digitalRead(REED_PIN2);
  Serial.print(reedPin2State);
  Serial.print(",");
  
  int reedPin3State = digitalRead(REED_PIN3);
  Serial.print(reedPin3State);
  Serial.print(",");
  
  int reedPin4State = digitalRead(REED_PIN4);
  Serial.print(reedPin4State);
  Serial.print(",");
  
  int reedPin5State = digitalRead(REED_PIN5);
  Serial.print(reedPin5State);
  Serial.print(",");
  
  int reedPin6State = digitalRead(REED_PIN6);
  Serial.println(reedPin6State);
  delay(100);
}

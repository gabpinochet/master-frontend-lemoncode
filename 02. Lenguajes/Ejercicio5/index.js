class SlothMachine {

    constructor(){
        this.monedas = 0;
    }

    play() {
        this.monedas += 1;

        const randomBoolean = () => {
            let randomNumber = Math.random();

            if (randomNumber > 0.5) {
                return true;
            } else {
                return false;
            }
        }

        let slot1 = randomBoolean();
        let slot2 = randomBoolean();
        let slot3 = randomBoolean();



        if (slot1 && slot2 && slot3 == true) {
            console.log(`Congratulations!!!. You won ${this.monedas} coins!!`);
            this.monedas = 0;
        } else {
            console.log("Good luck next time!")
        }

    }
}


const machine1 = new SlothMachine;

machine1.play();
console.log(machine1.monedas);
machine1.play();
console.log(machine1.monedas);
machine1.play();
console.log(machine1.monedas);
machine1.play();
console.log(machine1.monedas);
machine1.play();
console.log(machine1.monedas);
machine1.play();
console.log(machine1.monedas);
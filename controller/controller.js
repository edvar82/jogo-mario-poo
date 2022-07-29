class Controller {
    constructor(mario, pipe, cloud, btn, pontuation) {
        this.mario = document.getElementById(mario);
        this.pipe = document.getElementById(pipe);
        this.cloud = document.getElementById(cloud);
        this.btn = document.getElementById(btn);
        this.time = document.getElementById(pontuation);
        this.end = false;
        this.cont = 0;
        this.audio = new Audio;
        this.soundTrack = new Audio;
        this.game();
    }
    game() {

        document.addEventListener('click', () => {
            this.jump();
        })
        document.addEventListener('keydown', () => {
            this.jump();
        })

        let interval = setInterval(() => {
            let pipePosition = this.pipe.offsetLeft;
            let cloudPosition = this.cloud.offsetLeft;
            let marioPosition = +window.getComputedStyle(this.mario).bottom.replace('px', '');

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                this.end = true;
                this.pipe.style.animation = 'none';
                this.pipe.style.left = `${pipePosition}px`;

                this.mario.style.animation = 'none';
                this.mario.style.bottom = `${marioPosition}px`;

                this.mario.src = './assets/img/game-over.png';
                this.mario.style.width = '75px'
                this.mario.style.marginLeft = '50px';

                this.cloud.style.animation = 'none';
                this.cloud.style.left = `${cloudPosition}px`;

                clearInterval(interval);

                this.btn.style.display = 'block';
                this.btn.addEventListener('click', () => {
                    location.reload();
                });
            }
        }, 10);

        let interval2 = setInterval(() => {
            this.cont++;
            this.time.innerHTML = `Pontuação: ${this.cont}`;
            if (this.end) {
                clearInterval(interval2);
            }
        }, 100)
    }
    jump() {
        this.mario.classList.add('mario-jump');
        if (!this.end) this.jump_music();
        setTimeout(() => {
            this.mario.classList.remove('mario-jump');
        }, 500);
    }
    jump_music() {
        this.audio.src = './assets/music/jump.mp3';
        this.audio.play();
    }
}
class Controller{
    constructor (mario, pipe, cloud, btn){
        this.mario = document.getElementById(mario);
        this.pipe = document.getElementById(pipe);
        this.cloud = document.getElementById(cloud);
        this.btn = document.getElementById(btn);
        this.game();
    }
    game(){
        document.addEventListener('click', ()=>{
            this.jump();
        })
        document.addEventListener('keydown', ()=>{
            this.jump();
        })

        let interval = setInterval(()=>{
            let pipePosition = this.pipe.offsetLeft;
            let cloudPosition = this.cloud.offsetLeft;
            let marioPosition = +window.getComputedStyle(this.mario).bottom.replace('px','');

            if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

                this.pipe.style.animation = 'none';
                this.pipe.style.left = `${pipePosition}px`;

                this.mario.style.animation = 'none';
                this.mario.style.bottom = `${marioPosition}px`;

                this.mario.src = './img/game-over.png';
                this.mario.style.width = '75px'
                this.mario.style.marginLeft = '50px';

                this.cloud.style.animation = 'none';
                this.cloud.style.left = `${cloudPosition}px`;

                clearInterval(interval);

                this.btn.style.display = 'block';
                this.btn.addEventListener('click', ()=>{
                    location.reload();
                });
            }

        },10);
    }
    jump(){
       
        this.mario.classList.add('mario-jump');
        setTimeout(()=>{
            this.mario.classList.remove('mario-jump');
        },500);
        
    }
}
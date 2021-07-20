//SELECIONAR O RELÓGIO DIGITAL COM A CLASS .DIGITAL
    let digitalElement = document.querySelector('.digital');
//SELECIONAR OS PONTEIROS DE SEGUNDOS, MINUTOS E HORA COM AS SUAS CLASSES
    let sElement = document.querySelector('.p_s');
    let mElement = document.querySelector('.p_m');
    let hElement = document.querySelector('.p_h');

//CRIAÇÃO DE UM INTERVALO DE TEMPO "INFINITO" E ATUALIZAÇÃO DO RELÓGIO
    function updateClock(){
        let now = new Date();//manipulação de data completa com dia, mes, ano, hora, segundo e etc
        let hour = now.getHours();//pega as horas
        let minute = now.getMinutes();//pega minutos
        let second = now.getSeconds();//pega segundos
        
        digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;//irá mostrar no HTML


       
        let sDeg = ((360/60) * second) - 90;//criação de uma variável para os graus de cada segundo - 90graus para ficar na posição correta
        let mDeg = ((360/60) * minute) - 90;//criação de uma variável para os graus de cada minuto - 90graus para ficar na posição correta
        let hDeg = ((360/12) * hour) - 90;//divide por 12 pois o relogio só tem 12horas

        sElement.style.transform = `rotate(${sDeg}deg)`;//mudar a posição do ponteiro para 45graus fixo
        mElement.style.transform = `rotate(${mDeg}deg)`;
        hElement.style.transform = `rotate(${hDeg}deg)`;
    }

//CRIAÇÃO DA FUNÇÃO PARA ADICIONAR O ZERO ANTES DO NUMERO CASO ELE SEJA MENOR QUE 10
    function fixZero(time){
        return time < 10 ? `0${time}` : time;
    //se time for menor que zero (return time < 10) ele retornará o zero antes da hora (? `0${time}`), caso contrário só retorna a hora (: time)

        /*versão explicada:
         if(time < 10){
            return '0'+time;}
        else{
            return time;}*/
    }

    setInterval(updateClock,1000);//de 1 em 1s irá executar a função
    updateClock();



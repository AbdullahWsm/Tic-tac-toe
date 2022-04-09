$(document).ready(function (){

    const turn = $('#turn')
    const cell = $('.cell')
    const restart = $('#restart')
    const X = 'X'
    const O = 'O'
    let xo ='X'

    cell.click(cellClicked)
    restart.click(()=> location.reload())
    



function cellClicked(){
    if($(this).text()){
        $(this).css('color', 'red')
        setTimeout(()=>{
        $(this).css('color', 'black')
       },100)
    }else{

        if(xo == X){
            turn.text(O)
            $(this).text(X)
            checkWin(xo)
            xo = O
        }else if(xo == O){
            turn.text(X)
            $(this).text(O)
            checkWin(xo)
            xo = X
            } 
        }
    }

    function checkWin(player){

        if($('#cell_1').text() == $('#cell_2').text() && 
        $('#cell_1').text() == $('#cell_3').text() &&
        $('#cell_1').text() != ''){
            $('#cell_1').css('background', '#00FF00')
            $('#cell_2').css('background', '#00FF00')
            $('#cell_3').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_4').text() == $('#cell_5').text() && 
            $('#cell_4').text() == $('#cell_6').text() &&
            $('#cell_4').text() != ''){
                $('#cell_4').css('background', '#00FF00')
                $('#cell_5').css('background', '#00FF00')
                $('#cell_6').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_7').text() == $('#cell_8').text() && 
            $('#cell_7').text() == $('#cell_9').text() &&
            $('#cell_7').text() != ''
        ){
            $('#cell_7').css('background', '#00FF00')
            $('#cell_8').css('background', '#00FF00')
            $('#cell_9').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_1').text() == $('#cell_4').text() && 
            $('#cell_1').text() == $('#cell_7').text() &&
            $('#cell_1').text() != ''
        ){
            $('#cell_1').css('background', '#00FF00')
            $('#cell_4').css('background', '#00FF00')
            $('#cell_7').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_2').text() == $('#cell_5').text() && 
            $('#cell_2').text() == $('#cell_8').text() &&
            $('#cell_2').text() != ''
        ){
            $('#cell_2').css('background', '#00FF00')
            $('#cell_5').css('background', '#00FF00')
            $('#cell_8').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_3').text() == $('#cell_6').text() && 
            $('#cell_3').text() == $('#cell_9').text() &&
            $('#cell_3').text() != ''
        ){
            $('#cell_3').css('background', '#00FF00')
            $('#cell_6').css('background', '#00FF00')
            $('#cell_9').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_1').text() == $('#cell_5').text() && 
            $('#cell_1').text() == $('#cell_9').text() &&
            $('#cell_1').text() != ''
        ){
            $('#cell_1').css('background', '#00FF00')
            $('#cell_5').css('background', '#00FF00')
            $('#cell_9').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }else if(
            $('#cell_3').text() == $('#cell_5').text() && 
            $('#cell_3').text() == $('#cell_7').text() &&
            $('#cell_3').text() != ''
        ){
            $('#cell_3').css('background', '#00FF00')
            $('#cell_5').css('background', '#00FF00')
            $('#cell_7').css('background', '#00FF00')
            cell.unbind('click', cellClicked)
            $('#win').text(`Winner: ${player}`)
        }
    }


})

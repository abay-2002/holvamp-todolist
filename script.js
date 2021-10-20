$('#submit-tema').on('click',function(){
    // ambil element TEMA
    let inputTema = $('#input-tema-todolist').val();
    if(inputTema == 0){
        alert('oops.. masukan Tema :D');
    }else{
        $('#element-tema-todolist').html(inputTema);
        $('input[type="text"]').val("");    
    }
});

idAwal = 0;
$('#submit-kegiatan').on('click',function(){
    // ambil element TEMA
    let inputKegiatan = $('#input-kegiatan').val();
    if(inputKegiatan == 0){
        alert('oops.. masukan kegiatan :D');
    }else{   
        idAwal += 1;
        elhLiKegiatan = `
          <li id="${idAwal}" class="rounded-3 mt-3 mb-3 mx-auto">
            <span class="text-dark rounded-3 p-1 bg-light">${inputKegiatan}</span>
            <button id="status-${idAwal}" type="button" class="btn btn-primary p-1">Belum</button>
            <button id="delete-${idAwal}" type="button" class="btn btn-danger p-1">Hapus</button>
          </li>
        `;        
        $('#kegiatan-wrapper').append(elhLiKegiatan);
        $('input[type="text"]').val("");  
        
        // button status per id
        let buttonStatus = $(`#status-${idAwal}`);
        buttonStatus.on('click',function(){
            console.log($(this));       
            $(this).toggleClass('btn-success');
            if($(this).html() == 'Belum'){
                $(this).html('Selesai');
            }else if($(this).html() == 'Selesai'){
                $(this).html('Belum');
            }              
        });

        // button delete
        let buttondelete = $(`#delete-${idAwal}`);
        buttondelete.on('click',function(){
            let tanya = confirm('yakin ingin hapus?');
            if(tanya == true){
                $(this).parent().remove();
            }else{
                return 0;
            }
            // // ambil id ol
            // let ol = buttondelete.parent().parent();
            // let olId = ol.attr('id');
            // console.log(olId);

            // // ambil id li
            // let li = buttondelete.parent();
            // let liId = li.attr('id');
            // console.log(liId);

            // $(`${ol} ${li}`).remove();
        });
    }
});

let container = $('.container');
console.log(container);
// let buttonStatus = $(`#status-${idAwal}`).each(function() {
//     console.log($(this));
// })


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

let idAwal = 0;
$('#submit-kegiatan').on('click',function(){
    // ambil element TEMA
    let inputKegiatan = $('#input-kegiatan').val();
    if(inputKegiatan == 0){
        alert('oops.. masukan kegiatan :D');
    }else{   
        idAwal += 1;
        elhLiKegiatan = `
          <li id="${idAwal}" class="rounded-3 mt-3 mb-3 mx-auto save">
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
           
        });
    }
});

// save kegiatan
// window.onload = function () {

//     document.getElementById("download").addEventListener("click", () => {
//         let save = document.getElementsByClassName('save');
//             for(i=0; i<save.length; i++){
//                 kegiatan = this.document.getElementsByClassName("save")[i];
//             }
//             console.log(kegiatan);
//             console.log(window);
//             var opt = {
//                 margin: 1,
//                 filename: 'myfile.pdf',
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//             };
//             html2pdf().from(kegiatan).set(opt).save();
//         })
// }
window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
            const kegiatan = this.document.getElementById("kegiatan");
            console.log(kegiatan);
            console.log(window);
            var opt = {
                // margin: 1,
                filename: 'todolist-byabay.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(kegiatan).set(opt).save();
        })
}
// cr: https://github.com/eKoopmans/html2pdf.js thanks dude cool repo ;)
export function changePage(pageID){
    $.get(`pages/${pageID}.html`, function (data){
        console.log(data)
        $("#app").html(data);
    });
}
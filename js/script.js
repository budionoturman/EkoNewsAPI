var apikey = '6ad49481a6094536afd314b7deea4675';

function getBerita(){
    $('#list-berita').html('');
    $.ajax({
        url : 'https://newsapi.org/v2/top-headlines/',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : apikey,
            'country' : $('#country option:selected').val(),
            'category' : $('#category option:selected').val()
        },
        success : function(result){
            if (result.status == 'ok'){
                let berita = result.articles;
                
                $.each(berita, function(i, data){
                    $('#list-berita').append(`
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3 ">
                            <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
                                <img src="`+ data.urlToImage +`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ data.title+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+ data.source.name +`</h6>
                                    <p class="card-text">`+ data.description+`</p>
                                    <a href="`+ data.url +`" class="btn btn-primary">Detail</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            }
            else{
                alert("masukan category dan country terlebih dahulu")
            }
        }
    });
}

$('#search').click(function(){
    getBerita();
});

    
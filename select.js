var select={
    init:function()
    {
        var data=this;
        this.country();
        document.getElementById('country').addEventListener('change',function()
        {
            data.state(this.value)
        });
    },
    country:function(){
        var xhr=new XMLHttpRequest();
        xhr.open('GET','http://localhost:3000/countries',true);
        xhr.onload=function()
        {   
            var countries=JSON.parse(xhr.responseText);
            countries.forEach(function(value){
                var country=document.createElement('option');
                country.innerText=value.name;
                country.setAttribute('value',value.id);
                document.getElementById('country').appendChild(country)
            })
        }
        xhr.send();
    },
    state:function(id)
    {   
        document.getElementById('state').innerHTML='';
        var xhr=new XMLHttpRequest();
        xhr.open('GET','http://localhost:3000/states?country_id='+id,true);
        xhr.onload=function()
        {   
            var countries=JSON.parse(xhr.responseText);
            countries.forEach(function(value){
                var state=document.createElement('option');
                state.innerText=value.name;
                state.setAttribute('value',value.id);
                document.getElementById('state').appendChild(state)
            });
        }
        xhr.send();
    }
}
select.init();
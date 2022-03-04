// JavaScript Document
$( document ).ready(function() {
	var data = new Date();
	var weekday = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
	var month = ["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
	var dia = weekday[data.getDay()];
	var mes = month[data.getMonth()];
	var dianum = data.getDate();
	var hora = data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
	
	$('.dia').text(dia+" "+dianum+" "+mes+" "+hora);
	
	$('.btn').on('click', function(){
		$('.form-tarefa').toggleClass('active');
	});
	
	listarTarefas();
});

function criaTexto(tarefa){
	let texto = '';
	
	texto += '<li>';
	texto += '<label>';
	texto += '<input type="checkbox" value>';
	texto += '<span class="checkbox">✓</span>';
	texto += '<p>'+tarefa+'</p>';
	texto += '</label>';
	texto += '</li>';
	return texto;
}

var n = 1;
function novaTarefa(){
	let tarefa =$("#novo-todo").val();
	
	$('.todo-list').append(criaTexto(tarefa));
	localStorage.setItem('nova tarefa '+n, tarefa);
	n++;
	$('.form-tarefa').removeClass('active');
}

function listarTarefas(){
	for(var i = 0; i<localStorage.length; i++){
		let tarefa = localStorage.getItem(localStorage.key(i));
		$('.todo-list').append(criaTexto(tarefa));
		n++;
	}
}
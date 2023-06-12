$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evitar o comportamento padrão de recarregar a página
    
        var taskName = $('#task-input').val(); // Obter o valor do input
    
        if (taskName !== '') {
          var listItem = $('<li></li>').text(taskName); // Criar um novo elemento <li>
          $('#task-list').append(listItem); // Adicionar o novo elemento à lista
    
          $('#task-input').val(''); // Limpar o input
        }
      });
      
      $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Alternar a classe 'completed'
      });
})
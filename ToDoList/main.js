$(document).ready(function() {
    $('#newTask').change(function() {
        let newTask = $(this).val();
        $('#pendingTasks').prepend().prepend('<li input type>' + newTask + '<input type="checkbox"></input><button class="delete">Delete</button></li>');
        newTask.value="";
    });
    });

    $(document).ready(function() {
        $("#pendingTasks").on('click','.delete',function() {
            $(this).closest('li').remove()
        });
    });

    $(document).ready(function() {
        $("#pendingTasks").on('click',':checkbox',function() {
            $(this).closest('li').appendTo("#completedTasks")
        });
    });

    $(document).ready(function() {
        $("#pendingTasks").on('click','.delete',function() {
            $(this).closest('li').remove()
        });
    });

    $(document).ready(function() {
        $("#completedTasks").on('click','.delete',function() {
            $(this).closest('li').remove()
        });
    });

    
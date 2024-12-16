document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.submit').addEventListener('click', function(event){
        event.preventDefault();

        document.querySelectorAll('input:not([type="submit"])').forEach(input => {
            input.value = "";
        })

        document.querySelector('textarea').value = "";

        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
})

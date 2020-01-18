var message = document.querySelector('#message');
    $(document).ready(function() {
        var urlGrammarCheck = "https://api.textgears.com/check.php";
        $('#btn-check').click(function(){
            this.disabled = true;
            $.ajax({
                url: urlGrammarCheck,
                data: {
                    text: message.textContent,
                    key: 'wTZGURy3SHOYjHyR'
                },
                type: 'POST',
                success: function(result) {
                    var initialMessage = document.getElementById('message').innerHTML;
                    var finalMessage = 'Your response: ';
                    var prev = 0;
                    var temp = 0;
                    result.errors.forEach(error => {
                        const change = error.offset + error.length;
                        const suggestion = error.better[0];
                        finalMessage += initialMessage.substring(temp, prev + error.offset) + "<span class='highlight' title=" + suggestion
                                + ">" + initialMessage.substring(prev + error.offset, prev + change) + "</span>";
                        temp = prev + change;
                    });
                    finalMessage += initialMessage.substring(temp);
                    document.getElementById('message').innerHTML = finalMessage;
                    document.getElementById('message').style.display = 'block';

                },
                error: function(errors) {
                    console.log(error);
                }
            })
        })
    })
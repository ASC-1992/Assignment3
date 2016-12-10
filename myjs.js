$(document).ready(function(){
    
    var uRegEx = /^[A-Za-z0-9]{8,15}$/; //User name may only have 8-15 chars (abc/#)
    /* var iRegEx = /^(HTTPS://|HTTP:/(jpg|png|gif)$/; */
    var mRegEx = /^[A-Za-z0-9 ]{3,30}$/; //Movie name may have 3-30 chars (abc/#/ )
    var cRegEx = /^.{0,100}$/; //User comments that can have special chars and upto 100 chars
    var iRegEx = /\.(gif|png|jpg)$/; //User image may only be in the gif png or jpg file format
    
    var topDiv = document.getElementById("topPart");
    var botDiv = document.getElementById("bottomPart");
    var inUserName = document.getElementById("inUserName");
    var inImage = document.getElementById("inImage");
    var inMovie = document.getElementById("inMovie");
    var inComment = document.getElementById("inComment");
    var errDiv = document.getElementById("err_msg");
    var submitBut = document.getElementById("Submit-But");
    var botDiv = document.getElementById("bot");
    var UserName = document.getElementById("usrName");
    var Image = document.getElementById("usrImg");
    var movPoster = document.getElementById("moviePoster");
    var Commnt = document.getElementById("comment");
    

    inUserName.onkeyup = function() {
        console.log(uRegEx.test(inUserName.value));
        if (uRegEx.test(inUserName.value)) {
            inUserName.style.color = "blue";
            inUserName.style.borderColor = "blue";
            errDiv.innerHTML = "Your user name is correctly entered :)";
        } else {
            inUserName.style.color = "red";
            inUserName.style.borderColor = "red";
            errDiv.innerHTML = "Your user name may only be 8-15 chars (abc/#) long";
        };

        //checks
        var nameCheck = uRegEx.test(inUserName.value);
        var imageCheck = iRegEx.test(inImage.value);
        var movieCheck = mRegEx.test(inMovie.value);
        var commentCheck = cRegEx.test(inComment.value);

        if (nameCheck && imageCheck && movieCheck && commentCheck) {
            submitBut.style.visibility = "visible";
        };
    };

    inImage.onkeyup = function() {
        console.log(iRegEx.test(inImage.value));
        if (iRegEx.test(inImage.value)) {
            inImage.style.color = "blue";
            inImage.style.borderColor = "blue";
            errDiv.innerHTML = "Your Image Link is correct :)";
        } else {
            inImage.style.color = "red";
            inImage.style.borderColor = "red";
            errDiv.innerHTML = "Your Image Link must be in the file format gif, png or jpg";
        };
        //checks
        var nameCheck = uRegEx.test(inUserName.value);
        var imageCheck = iRegEx.test(inImage.value);
        var movieCheck = mRegEx.test(inMovie.value);
        var commentCheck = cRegEx.test(inComment.value);

        if (nameCheck && imageCheck && movieCheck && commentCheck) {
            submitBut.style.visibility = "visible";
        };
    };

    inMovie.onkeyup = function() {
        console.log(mRegEx.test(inMovie.value));
        if (mRegEx.test(inMovie.value)) {
            inMovie.style.color = "blue";
            inMovie.style.borderColor = "blue";
            errDiv.innerHTML = "Your Movie Title is correctly entered :)";
        } else {
            inMovie.style.color = "red";
            inMovie.style.borderColor = "red";
            errDiv.innerHTML = "Your Movie Title cannot have special characters";            
        };
        //Checks
        var nameCheck = uRegEx.test(inUserName.value);
        var imageCheck = iRegEx.test(inImage.value);
        var movieCheck = mRegEx.test(inMovie.value);
        var commentCheck = cRegEx.test(inComment.value);

        if (nameCheck && imageCheck && movieCheck && commentCheck) {
            submitBut.style.visibility = "visible";
        };
    };

    inComment.onkeyup = function() {
        console.log(cRegEx.test(inComment.value));
        if (cRegEx.test(inComment.value)) {
            inComment.style.color = "blue";
            inComment.style.borderColor = "blue";
            errDiv.innerHTML = "Your Comment is good! :)";
        } else {
            inComment.style.color = "red";
            inComment.style.borderColor = "red";
            errDiv.innerHTML = "Your Comment must be 1-100 characters";            
        };
        //Checks
        var nameCheck = uRegEx.test(inUserName.value);
        var imageCheck = iRegEx.test(inImage.value);
        var movieCheck = mRegEx.test(inMovie.value);
        var commentCheck = cRegEx.test(inComment.value);

        if (nameCheck && imageCheck && movieCheck && commentCheck) {
            submitBut.style.visibility = "visible";
        };
    };

    submitBut.onclick = function() {
        var title = "https://www.omdbapi.com/?t=" + inMovie.value;
        botDiv.style.visibility = "visible";
        Image.src = inImage.value;
        UserName.innerHTML = inUserName.value;
        Commnt.innerHTML = inComment.value;
        $.ajax({
            url:title,
            dataType:"jsonp",
            success:function(resp){
                movPoster.src = resp.Poster;
            }
        });

    };
});
    

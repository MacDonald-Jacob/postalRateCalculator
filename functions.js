module.exports = {
    display: function (req, res){
        weight = req.query.weight;
        mail = req.query.mail;
        total = calculateRate(weight, mail);
        fmail = formatName(mail); 
        res.render('pages/response', {
            weight: weight,
            fmail: fmail,
            total: total            
        });
    }
}

function formatName(mail){
    if (mail == "letters-stamped"){
        mail = "Letters (Stamped)";
    }
    else if (mail == "letters-metered" ){
        mail = "Letters (Metered)";
    }
    else if (mail == "large-envelopes-flats"){
        mail = "Large Envelopes (Flats)"
    }
    else if (mail == "first-class-packge-service-retail"){
        mail = "First-Class Package Service--Retail"
    }
    else{
        mail = mail;
    }
    return mail;
}

function calculateRate(weight, mail){
    var total;

        if (mail == "letters-stamped"){
            if (weight <= 1){
                total = .55;
            }
            else if (weight <= 2){
                total = .75;
            }
            else if (weight <= 3){
                total = .95;
            }
            else if (weight <= 3.5){
                total = 1.15;
            }
            else{
                total = "Package is to heavy. Try Agian!";
            }
        }

        if (mail == "letters-metered"){
            if (weight <= 1){
                total = .51;
            }
            else if (weight <= 2){
                total = .71;
            }
            else if (weight <= 3){
                total = .91;
            }
            else if (weight <= 3.5){
                total = 1.11;
            }
            else{
                total = "Package is to heavy. Try Agian!";
            }
        }

        if (mail == "large-envelopes-flats"){
            if (weight <= 1){
                total = 1;
            }
            else if (weight <= 2){
                total = 1.20;
            }
            else if (weight <= 3){
                total = 1.40;
            }
            else if (weight <= 4){
                total = 1.60;
            }
            else if (weight <= 5){
                total = 1.80;
            }
            else if (weight <= 6){
                total = 2.00;
            }
            else if (weight <= 7){
                total = 2.20;
            }
            else if (weight <= 8){
                total = 2.40;
            }
            else if (weight <= 9){
                total = 2.60;
            }
            else if (weight <= 10){
                total = 2.80;
            }
            else if (weight <= 11){
                total = 3.00;
            }
            else if (weight <= 12){
                total = 3.20;
            }
            else if (weight <= 13){
                total = 3.40;
            }
            else{
                total = "Package is to heavy. Try Again!";
            }
        }

        if (mail == "first-class-packge-service-retail"){
            if (weight <= 4){
                total = 4;
            }
            else if (weight <= 8){
                total = 4.80;
            }
            else if (weight <= 12){
                total = 5.50;
            }
            else if (weight <= 13){
                total = 6.25;
            }
            else{
                total = "Package is to heavy. Try Again!";
            }
        }
    fTotal = "$" + total;
    return fTotal;
}
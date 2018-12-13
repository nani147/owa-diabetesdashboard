var globalUid = "";

$(document).ready(function () {
    var url = new URL(window.location.href);
    var patientId = url.searchParams.get('patientId');
    $('#dataTable').DataTable({
        //'deferRender': false,
        'ajax': {
            "type": "GET",
            "url": "https://in-info-web7.informatics.iupui.edu/openmrs/ws/rest/v1/encounter?v=full&patient=" + patientId,
            "dataSrc": function (json) {
                var return_data = new Array();
                localStorage.setItem(patientId + ".hba1c", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".fpgt", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".tc", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".hdlc", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".ldlc", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".tg", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".egfr", "");
                for (var i = 0; i < json.results.length; i++)
                var return_data = new Array();
                localStorage.setItem(patientId + ".sc", "");
                for (var i = 0; i < json.results.length; i++){
                    var date = "";
                    var hba1c = "";
                    var fpgt = "";
                    var tc = "";
                    var hdlc = "";
                    var ldlc = "";
                    var tg = "";
                    var egfr = "";
                    var sc = "";
                    for (var j = 0; j < json.results[i].obs.length; j++) {
                        if(json.results[i].obs[j].concept.uuid == '3453896b-5ad7-4f4f-a168-9725e11a6a4f' || json.results[i].obs[j].concept.uuid == '325cd3ae-0263-46cf-9414-5cd40d4221b1'|| json.results[i].obs[j].concept.uuid == '23929e60-0091-11e8-aca4-003048f50c90'|| json.results[i].obs[j].concept.uuid == '23929f60-0091-11e8-aca4-003048f50c90'|| json.results[i].obs[j].concept.uuid == '2392a03f-0091-11e8-aca4-003048f50c90'|| json.results[i].obs[j].concept.uuid == '2392a108-0091-11e8-aca4-003048f50c90'|| json.results[i].obs[j].concept.uuid == '558941b4-6b91-486f-b9e1-f9933758be83'|| json.results[i].obs[j].concept.uuid == '2391ddd8-0091-11e8-aca4-003048f50c90'){
                            date = json.results[i].obs[j].obsDatetime.split('T')[0];

                        } if (json.results[i].obs[j].concept.uuid == '3453896b-5ad7-4f4f-a168-9725e11a6a4f') {
                            hba1c = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".hba1c")==""){
                               localStorage.setItem(patientId + ".hba1c", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".hba1c", localStorage.getItem(patientId + ".hba1c")+','+ json.results[i].obs[j].value);
                            }
                        } if (json.results[i].obs[j].concept.uuid == '325cd3ae-0263-46cf-9414-5cd40d4221b1') {
                            fpgt = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".fpgt")==""){
                               localStorage.setItem(patientId + ".fpgt", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".fpgt", localStorage.getItem(patientId + ".fpgt")+','+ json.results[i].obs[j].value);
                            }
                        } if (json.results[i].obs[j].concept.uuid == '23929e60-0091-11e8-aca4-003048f50c90') {
                            tc = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".tc")==""){
                               localStorage.setItem(patientId + ".tc", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".tc", localStorage.getItem(patientId + ".tc")+','+ json.results[i].obs[j].value);
                            }
                        } if (json.results[i].obs[j].concept.uuid == '23929f60-0091-11e8-aca4-003048f50c90') {
                            hdlc = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".hdlc")==""){
                               localStorage.setItem(patientId + ".hdlc", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".hdlc", localStorage.getItem(patientId + ".hdlc")+','+ json.results[i].obs[j].value);
                            }
                        } if (json.results[i].obs[j].concept.uuid == '2392a03f-0091-11e8-aca4-003048f50c90') {
                            ldlc = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".ldlc")==""){
                               localStorage.setItem(patientId + ".ldlc", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".ldlc", localStorage.getItem(patientId + ".ldlc")+','+ json.results[i].obs[j].value);
                            }
                        } if (json.results[i].obs[j].concept.uuid == '2392a108-0091-11e8-aca4-003048f50c90') {
                            tg = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".tg")==""){
                               localStorage.setItem(patientId + ".tg", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".tg", localStorage.getItem(patientId + ".tg")+','+ json.results[i].obs[j].value);
                            }
                        }  if (json.results[i].obs[j].concept.uuid == '558941b4-6b91-486f-b9e1-f9933758be83') {
                            egfr = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".egfr")==""){
                               localStorage.setItem(patientId + ".egfr", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".egfr", localStorage.getItem(patientId + ".egfr")+','+ json.results[i].obs[j].value);
                            }
                        } if (json.results[i].obs[j].concept.uuid == '2391ddd8-0091-11e8-aca4-003048f50c90') {
                            sc = json.results[i].obs[j].value;
                            if(localStorage.getItem(patientId + ".sc")==""){
                               localStorage.setItem(patientId + ".sc", json.results[i].obs[j].value);
                            } else {
                               localStorage.setItem(patientId + ".sc", localStorage.getItem(patientId + ".sc")+','+ json.results[i].obs[j].value);
                            }
                        }
                    }
                    return_data.push({
                        'date':  date,
                        'hba1c': hba1c,
                        'fpgt': fpgt,
	            	          'tc': tc,
                        'hdlc':hdlc,
                        'ldlc':ldlc,
                        'tg': tg,
                        'egfr': egfr,
                        'sc': sc,
                    })
                }
                return return_data;
            }
        },
        "columns":
            [
                {'data': 'date'},
                {'data': 'hba1c'},
                {'data': 'fpgt'},
                {'data': 'tc'},
                {'data': 'hdlc'},
                {'data': 'ldlc'},
                {'data': 'tg'},
                {'data': 'egfr'},
                {'data': 'sc'}
            ]
    });

});

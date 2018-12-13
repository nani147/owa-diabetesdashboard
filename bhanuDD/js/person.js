var globalUid = "";

$(document).ready(function () {
    var url = new URL(window.location.href);
    var patientId = url.searchParams.get('patientId');
    $('#header').load('https://in-info-web7.informatics.iupui.edu/openmrs/coreapps/clinicianfacing/patient.page?patientId=' + patientId + ' header');
    $('#patient-header').load('https://in-info-web7.informatics.iupui.edu/openmrs/coreapps/clinicianfacing/patient.page?patientId=' + patientId + ' .patient-header');
    });

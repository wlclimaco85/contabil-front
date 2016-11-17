$.fn.inputaction = function(data) {
    var inputAction = this;

    //  ################################################
    //  View Mode
    //  ################################################
    var $pViewMode = $("<p class='viewMode' style='padding-left: 13px !important; padding: 8px 13px 8px 13px !important; margin: 0px !important; font-size: 14px !important; min-height: 36px !important;'>"+ data.model[data.propertyName] +"</p>");
    this.append($pViewMode);

    //  Cancel Button
    inputAction.find('p.viewMode').hover(function() {
        setTimeout(function() {
            if ($pViewMode.is(':hover')) {
                enableControlMode();
            }
        }, 200);
    });

    //  ################################################
    //  Control Mode
    //  ################################################
    var sControlMode = "<div class='input-group controlMode' style='min-height: 36px !important;'>" +
        "<input type='text' class='form-control editAction' value='"+ data.model[data.propertyName] +"'>" +
        "<span class='input-group-btn' style='vertical-align: top !important'>" +
            "<button class='editAction btn btn-default' type='button'>" +
                "<i class='glyphicon glyphicon-pencil'></i>" +
            "</button>" +
        "</span>" +
    "</div>";
    var $controlMode = $(sControlMode);
    this.append($controlMode);

    inputAction.find('.controlMode').mouseout(function() {
        setTimeout(function() {
            if (!isEditEnable() && !isControlHovered()) {
                enableViewMode();
            }
        }, 200);
    });

    $controlMode.find('.editAction').click(function() {
        enableEditMode();
    });


    //  ################################################
    //  Edit Mode
    //  ################################################
    var sInputEditMode = "<div class='editMode' style='min-height: 36px !important;'>" +
        "<div class='col-xs-12 col-md-12 col-lg-12' style='padding-left: 0 !important;'>" +
            "<input class='form-control updatedModel' style='width: 100%;' value='"+ data.model[data.propertyName] +"'>" +
        "</div>" +

        "<div class='col-xs-12 col-md-12 col-lg-12'>" +
            "<div class='btn-group btn-xs pull-right' role='group' style='padding: 1px 0px !important; position: absolute !important; right: 15px !important;'>" +
                "<button type='button' class='ok btn btn-default btn-xs'>" +
                    "<i class='glyphicon glyphicon-ok'></i>" +
                "</button>" +
                "<button type='button' class='cancel btn btn-default btn-xs'>" +
                    "<i class='glyphicon glyphicon-remove'></i>" +
                "</button>" +
            "</div>" +
        "</div>" +
    "</div>";
    var $inputEditMode = $(sInputEditMode);
    this.append($inputEditMode);

    //  Confirm Button
    $inputEditMode.find('button.ok').click(function() {
        var updatedModel = {};
        updatedModel[data.propertyName] = $inputEditMode.find('.updatedModel').val();
        updatedModel = $.extend({}, data.model, updatedModel);

        if (updatedModel[data.propertyName] && updatedModel[data.propertyName] != '') {
            data.confirmAction(updatedModel, data.fullData);
        }
    });

    //  Cancel Button
    $inputEditMode.find('button.cancel').click(function() {
        enableViewMode();
    });


    //  ################################################
    //  Include on page
    //  ################################################
    enableViewMode();

    //  ################################################
    //  Util methods
    //  ################################################
    function enableViewMode() {
        inputAction.find('.viewMode').removeClass('hidden');
        inputAction.find('.controlMode').addClass('hidden');
        inputAction.find('.editMode').addClass('hidden');
    }

    function enableControlMode() {
        inputAction.find('.viewMode').addClass('hidden');
        inputAction.find('.controlMode').removeClass('hidden');
        inputAction.find('.editMode').addClass('hidden');
    }

    function enableEditMode() {
        inputAction.find('.viewMode').addClass('hidden');
        inputAction.find('.controlMode').addClass('hidden');
        inputAction.find('.editMode').removeClass('hidden');
    }

    function isEditEnable() {
        return inputAction.find('.editMode').is(':visible');
    }

    function isControlHovered() {
        return inputAction.find('.controlMode').is(':hover');
    }
};
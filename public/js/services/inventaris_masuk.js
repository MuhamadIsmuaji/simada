viewModel.services = Object.assign(viewModel.services, {
    approveMutasi: (tableListSelected, step) => {

        if (step === 'STEP-1' || step === 'STEP-3') {
            return __ajax({
                url: `${$("[base-path]").val()}/api/inventaris_mutasi/approvements`,
                method: 'PATCH',
                data: {
                    items: JSON.stringify(tableListSelected),
                    step: step
                },
                dataType: 'json'
            })
        } else if (step === 'STEP-2') {
            let formData = new FormData($('#form-bpkad-mutasi')[0])

            if (document.getElementById('dokumen').files.length > 0) {
                formData.append('dokumen[]', document.getElementById('dokumen').files[0])
            }
            formData.append('items', JSON.stringify(tableListSelected))
            formData.append('step', step)
            
            return __ajax({
                url: `${$("[base-path]").val()}/api/inventaris_mutasi/approvements`,
                method: 'POST',
                data: formData,
                dataType: 'json',
                processData: false,
                contentType: false,
            })
        }
        
    },
    approveReklas: (tableListSelected, step) => {
        
        return __ajax({
            url: `${$("[base-path]").val()}/api/reklas/approvements`,
            method: 'POST',
            data: {
                items: JSON.stringify(tableListSelected),
                step: step
            },
            dataType: 'json',
        })
    },
    cancelMutasi: (tableListSelected, step) => {
        let formData = new FormData($('#form-bpkad-mutasi')[0])

        if (document.getElementById('dokumen-mutasi-cancel').files.length > 0) {
            formData.append('dokumen[]', document.getElementById('dokumen-mutasi-cancel').files[0])
        }
        formData.append('items', JSON.stringify(tableListSelected))
        formData.append('step', step)
        formData.append('cancel_note', document.getElementById('cancel_note').value)
        
        return __ajax({
            url: `${$("[base-path]").val()}/api/inventaris_mutasi/cancel`,
            method: 'POST',
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
        })
    },
    approvementPenghapusanBPKAD: (tableListSelected, step) => {
        let formData = new FormData($('#form-penghapusan-mutasi')[0])

        switch (step) {
            case 'STEP-1':
                if (document.getElementById('dokumen-penghapusan').files.length > 0) {
                    formData.append('dokumen[]', document.getElementById('dokumen-penghapusan').files[0])
                }            
                formData.append('nomor_surat', document.getElementById('nomor-persetujuan-step1').value)
                formData.append('nosk', document.getElementById('nosk').value)
                formData.append('tglsk', document.getElementById('tglsk').value)
                formData.append('keterangan', document.getElementById('keterangan').value)
                break;

            case 'STEP-2':
                if (document.getElementById('berita-acara').files.length > 0) {
                    formData.append('dokumen[]', document.getElementById('berita-acara').files[0])
                }
                break;

            case 'STEP-3':
                if (document.getElementById('dokumen-validasi-penghapusan').files.length > 0) {
                    formData.append('dokumen[]', document.getElementById('dokumen-validasi-penghapusan').files[0])
                }
                break;
        
            default:
                // no action
                break;
        }
        
        formData.append('items', JSON.stringify(tableListSelected))        
        formData.append('step', step)
        
        return __ajax({
            url: `${$("[base-path]").val()}/api/inventaris_penghapusan/approvements`,
            method: 'POST',
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
        })
    },
    countMutasiWorkflow: () => {
        __ajax({
            url: `${$("[base-path]").val()}/api/inventaris_mutasi/count`,
            dataType: 'json',
        }).then((d) => {
            viewModel.data.count(d)
        })
    },
    countPenghapusan: () => {
        __ajax({
            url: `${$("[base-path]").val()}/api/inventaris_penghapusan/count`,
            dataType: 'json',
        }).then((d) => {
            viewModel.data.countPenghapusan(d)
        })
    },
    countReklas: () => {
        __ajax({
            url: `${$("[base-path]").val()}/api/reklas/count`,
            dataType: 'json',
        }).then((d) => {
            viewModel.data.countReklas(d)
        })
    }
})
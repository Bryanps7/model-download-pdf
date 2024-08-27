const gerar = document.getElementById('gerar')

gerar.addEventListener("click", () => { // evento de clicar no botão

    let content = document.getElementById('content').value // conteúdo do pdf

    const options = { // configurações do pdf
        margin: [10, 10, 10, 10], // margem
        filename: "meu-pdf.pdf", // nome do arquivo
        html2canvas: {scale: 2}, // Escala obs: 2 padrão do html
        jsPDF: {
            unit: 'mm', // unidade obs: mm = milimetro
            format: 'a4', // formato A4
            orientation: 'portrait' // Orientação Retrato
        }
    }

    html2pdf().set(options).from(content).save() // gerar e baixar o PDF
    /* 
        .set() = configurações
        .from() = contéudo
        .save() = baixar o arquivo
    */

})